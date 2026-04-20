<script setup lang="ts">
import { ref, computed, useId, h } from 'vue';
import { BorderBeam, type BorderBeamSize, type BorderBeamColorVariant } from 'border-beam';

// Icons as functional components using h()
const CopyIcon = () => h('svg', { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
  h('rect', { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
  h('path', { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
]);

const CheckIcon = () => h('svg', { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
  h('polyline', { points: "20 6 9 17 4 12" })
]);

const GitHubIcon = () => h('svg', { width: "16", height: "16", viewBox: "0 0 16 16" }, [
  h('path', { d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" })
]);

const XIcon = () => h('svg', { width: "15", height: "16", viewBox: "0 0 1200 1227" }, [
  h('path', { d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" })
]);

const AtSignIcon = () => h('svg', { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", style: "opacity: 0.5" }, [
  h('circle', { cx: "12", cy: "12", r: "4" }),
  h('path', { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" })
]);

const ChevronDownIcon = () => h('svg', { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", style: "opacity: 0.5; transform: rotate(90deg)" }, [
  h('polyline', { points: "9 18 15 12 9 6" })
]);

const ArrowUpIcon = () => h('svg', { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", style: "opacity: 0.5" }, [
  h('line', { x1: "12", y1: "19", x2: "12", y2: "5" }),
  h('polyline', { points: "5 12 12 5 19 12" })
]);

const SearchIcon = () => h('svg', { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
  h('circle', { cx: "11", cy: "11", r: "8" }),
  h('line', { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
]);

const playgroundActive = ref(true);
const playgroundSize = ref<BorderBeamSize>('md');
const playgroundColorVariant = ref<BorderBeamColorVariant>('colorful');
const playgroundDuration = ref(1.96);
const playgroundStrength = ref(70);

const durationId = useId();
const strengthId = useId();

const installCmd = 'npm install border-beam-vue3';
const usageCode = computed(() => `import { BorderBeam } from 'border-beam-vue3';\n\n<BorderBeam>\n  <YourCard>Content</YourCard>\n</BorderBeam>`);
const playgroundCode = computed(() => `<BorderBeam size="${playgroundSize.value}" colorVariant="${playgroundColorVariant.value}" :duration="${playgroundDuration.value}"${playgroundStrength.value < 100 ? ` :strength="${playgroundStrength.value / 100}"` : ''}>\n  <Card>Content</Card>\n</BorderBeam>`);

const copiedText = ref<string | null>(null);
const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    copiedText.value = text;
    setTimeout(() => {
      if (copiedText.value === text) copiedText.value = null;
    }, 2000);
  });
};

const SIZE_OPTIONS: { value: BorderBeamSize; label: string }[] = [
  { value: 'md', label: 'Large' },
  { value: 'sm', label: 'Small' },
  { value: 'line', label: 'Line' },
];

const COLOR_OPTIONS: { value: BorderBeamColorVariant; label: string }[] = [
  { value: 'colorful', label: 'Colorful' },
  { value: 'mono', label: 'Mono' },
  { value: 'ocean', label: 'Ocean' },
  { value: 'sunset', label: 'Sunset' },
];

const setPlaygroundSize = (value: BorderBeamSize) => {
  playgroundSize.value = value;
  playgroundDuration.value = value === 'line' ? 2.4 : 1.96;
};
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>

  <main id="main-content" class="app">
    <header class="header">
      <nav aria-label="External links" class="top-bar-links">
        <a class="icon-btn" href="https://github.com/mooniitt/border-beam-vue3" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
          <GitHubIcon />
        </a>
      </nav>
      
      <div class="header-icon" aria-hidden="true">
        <img class="header-icon-img" src="/icon-web.png" alt="" width="207" height="138" />
      </div>

      <h1 class="title">Border beam</h1>
      <p class="subtitle-sm">Animated border beam component for Vue 3</p>
    </header>

    <section class="examples-section" aria-label="Effect demonstrations">
      <div class="example-row-full">
        <BorderBeam size="md" colorVariant="colorful" theme="dark" active>
          <div class="mock-chat" role="img" aria-label="Chat input UI example">
            <div class="mock-chat-inner">
              <div class="pill"><AtSignIcon /></div>
              <div class="placeholder">Build anything...</div>
              <div class="bottom-row">
                <div class="tag">Agent <ChevronDownIcon /></div>
                <div class="tag">Auto <ChevronDownIcon /></div>
                <div class="send-btn"><ArrowUpIcon /></div>
              </div>
            </div>
          </div>
        </BorderBeam>
      </div>

      <div class="example-row-split">
        <div class="example-cell">
          <BorderBeam size="sm" colorVariant="colorful" theme="dark" active>
            <div class="mock-icon-btn"><div class="mock-icon-btn-square" /></div>
          </BorderBeam>
        </div>
        <div class="example-cell">
          <BorderBeam size="line" colorVariant="colorful" theme="dark" active :duration="2.4" :borderRadius="20">
            <div class="mock-search">
              <div class="mock-search-inner">
                <SearchIcon />
                <span>Search</span>
              </div>
            </div>
          </BorderBeam>
        </div>
      </div>
    </section>

    <section class="section" aria-label="Installation">
      <h2 class="section-title">Installation</h2>
      <div class="code-block">
        <code>{{ installCmd }}</code>
        <button class="copy-btn" @click="handleCopy(installCmd)">
          <CheckIcon v-if="copiedText === installCmd" />
          <CopyIcon v-else />
        </button>
      </div>
    </section>

    <section class="section" aria-label="Usage">
      <h2 class="section-title section-title--muted">Usage</h2>
      <div class="code-block code-block--multi">
        <code>{{ usageCode }}</code>
        <button class="copy-btn" @click="handleCopy(usageCode)">
          <CheckIcon v-if="copiedText === usageCode" />
          <CopyIcon v-else />
        </button>
      </div>
    </section>

    <section class="playground-section" aria-label="Interactive playground">
      <h2 class="section-title">Playground</h2>

      <div class="playground-controls">
        <div class="control-group">
          <span class="control-label">Type</span>
          <div class="control-options">
            <button
              v-for="opt in SIZE_OPTIONS"
              :key="opt.value"
              class="tab-btn"
              :data-active="playgroundSize === opt.value"
              @click="setPlaygroundSize(opt.value)"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <div class="control-group">
          <span class="control-label">Color</span>
          <div class="control-options">
            <button
              v-for="opt in COLOR_OPTIONS"
              :key="opt.value"
              class="tab-btn"
              :data-active="playgroundColorVariant === opt.value"
              @click="playgroundColorVariant = opt.value"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" :for="durationId">Duration</label>
          <div class="control-options">
            <input
              :id="durationId"
              type="number"
              class="duration-input"
              v-model.number="playgroundDuration"
              :min="0.5"
              :max="10"
              step="0.1"
            />
          </div>
        </div>

        <div class="control-group control-group--strength">
          <span class="control-label">Strength</span>
          <div class="strength-track">
            <div v-if="playgroundStrength > 0" class="strength-fill" :style="{ width: playgroundStrength + '%' }" />
            <span class="strength-value">{{ playgroundStrength }}%</span>
            <input :id="strengthId" type="range" class="strength-input" v-model.number="playgroundStrength" min="0" max="100" />
          </div>
        </div>
      </div>

      <div class="playground-preview" @click="playgroundActive = !playgroundActive">
        <BorderBeam
          :size="playgroundSize"
          :colorVariant="playgroundColorVariant"
          theme="dark"
          :active="playgroundActive"
          :duration="playgroundDuration"
          :strength="playgroundStrength / 100"
        >
          <div :class="['card', playgroundSize === 'sm' ? 'card-sm' : 'card-md']">
            <p class="card-text">{{ playgroundSize === 'sm' ? '' : 'Build anything...' }}</p>
          </div>
        </BorderBeam>
      </div>

      <div class="code-block code-block--multi">
        <code>{{ playgroundCode }}</code>
        <button class="copy-btn" @click="handleCopy(playgroundCode)">
          <CheckIcon v-if="copiedText === playgroundCode" />
          <CopyIcon v-else />
        </button>
      </div>
    </section>

    <footer class="footer">
      <span class="footer-muted">Border Beam - Vue 3</span>
    </footer>
  </main>
</template>
