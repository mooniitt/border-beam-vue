<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  watchEffect,
  useId,
  type CSSProperties,
} from "vue";
import type { BorderBeamProps, BorderBeamTheme } from "./types";
import { sizePresets, sizeThemePresets, generateBeamCSS } from "./styles";

const props = withDefaults(defineProps<BorderBeamProps>(), {
  size: "md",
  colorVariant: "colorful",
  theme: "dark",
  staticColors: false,
  active: true,
  brightness: 1.3,
  hueRange: 30,
  strength: 1,
});

const emit = defineEmits<{
  (e: "activate"): void;
  (e: "deactivate"): void;
  (e: "animationEnd", event: AnimationEvent): void;
}>();

const baseId =
  typeof useId === "function"
    ? useId()
    : `bb-${Math.random().toString(36).substring(2, 9)}`;
const id = `v-bb-${baseId.replace(/:/g, "-")}`;
const internalRef = ref<HTMLDivElement | null>(null);

const isActive = ref(props.active);
const isFading = ref(false);
const detectedRadius = ref<number | null>(null);

function useSystemTheme() {
  const theme = ref<"dark" | "light">(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  onMounted(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      theme.value = e.matches ? "dark" : "light";
    };
    mediaQuery.addEventListener("change", handler);
    onUnmounted(() => mediaQuery.removeEventListener("change", handler));
  });

  return theme;
}

const systemTheme = useSystemTheme();

function resolveTheme(
  theme: BorderBeamTheme,
  systemTheme: "dark" | "light",
): "dark" | "light" {
  return theme === "auto" ? systemTheme : theme;
}

// Auto-detect child border radius
let observer: MutationObserver | null = null;

onMounted(() => {
  if (props.borderRadius != null) return;
  const el = internalRef.value;
  if (!el) return;

  const detect = () => {
    const child = el.firstElementChild as HTMLElement | null;
    if (!child) return;
    const computedStyle = window.getComputedStyle(child);
    const raw = parseFloat(computedStyle.borderTopLeftRadius);
    if (!isNaN(raw) && raw > 0) {
      detectedRadius.value = raw;
    }
  };

  detect();
  observer = new MutationObserver(detect);
  observer.observe(el, { childList: true, subtree: false });
});

onUnmounted(() => {
  observer?.disconnect();
});

watchEffect(() => {
  if (props.active && !isActive.value && !isFading.value) {
    isActive.value = true;
  } else if (!props.active && isActive.value && !isFading.value) {
    isFading.value = true;
  }
});

const handleAnimationEnd = (e: AnimationEvent) => {
  const animationName = e.animationName;

  if (animationName.includes("fade-out")) {
    isActive.value = false;
    isFading.value = false;
    emit("deactivate");
  } else if (animationName.includes("fade-in")) {
    emit("activate");
  }

  emit("animationEnd", e);
};

const resolvedTheme = computed(() =>
  resolveTheme(props.theme, systemTheme.value),
);
const themeConfig = computed(
  () => sizeThemePresets[props.size][resolvedTheme.value],
);
const sizeConfig = computed(() => sizePresets[props.size]);

const finalBorderRadius = computed(
  () =>
    props.borderRadius ?? detectedRadius.value ?? sizeConfig.value.borderRadius,
);
const finalDuration = computed(
  () => props.duration ?? (props.size === "line" ? 2.4 : 1.96),
);
const finalSaturation = computed(
  () => props.saturation ?? themeConfig.value.saturation,
);
const finalHueRange = computed(() =>
  props.size === "line" ? Math.min(props.hueRange, 13) : props.hueRange,
);
const finalStaticColors = computed(() =>
  props.colorVariant === "mono" ? true : props.staticColors,
);

const cssStyles = computed(() =>
  generateBeamCSS({
    id,
    borderRadius: finalBorderRadius.value,
    borderWidth: sizeConfig.value.borderWidth,
    duration: finalDuration.value,
    strokeOpacity: themeConfig.value.strokeOpacity,
    innerOpacity: themeConfig.value.innerOpacity,
    bloomOpacity: themeConfig.value.bloomOpacity,
    innerShadow: themeConfig.value.innerShadow,
    size: props.size,
    colorVariant: props.colorVariant,
    staticColors: finalStaticColors.value,
    brightness: props.brightness,
    saturation: finalSaturation.value,
    hueRange: finalHueRange.value,
    theme: resolvedTheme.value,
  }),
);

const mergedStyle = computed(
  () =>
    ({
      ...(props.style ?? {}),
      borderRadius: `${finalBorderRadius.value}px`,
      "--beam-strength": Math.max(0, Math.min(1, props.strength)),
    }) as CSSProperties,
);
</script>

<template>
  <component :is="'style'" v-if="cssStyles">{{ cssStyles }}</component>
  <div
    ref="internalRef"
    class="border-beam-container"
    :style="mergedStyle"
    :data-beam="id"
    :data-active="isActive && !isFading ? '' : undefined"
    :data-fading="isFading ? '' : undefined"
    @animationend="handleAnimationEnd"
  >
    <slot />
    <div data-beam-bloom />
  </div>
</template>
