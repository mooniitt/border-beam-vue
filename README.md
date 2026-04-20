# border-beam-vue

Animated border beam effect for Vue 3. A lightweight component that adds a traveling glow animation around any element — cards, buttons, inputs, or search bars.

## Install

```bash
npm install border-beam-vue
```

## Quick start

```vue
<script setup>
import { BorderBeam } from 'border-beam-vue';
</script>

<template>
  <BorderBeam>
    <div style="padding: 32px; border-radius: 16px; background: #1d1d1d">
      Your content here
    </div>
  </BorderBeam>
</template>
```

The component wraps your content and overlays the animated beam effect. It auto-detects the `border-radius` of the first child element.

## Sizes

Three built-in size presets control the glow intensity and animation style:

```vue
<BorderBeam size="md">  <!-- Full border glow (default) -->
  <Card />
</BorderBeam>

<BorderBeam size="sm">  <!-- Compact glow for small elements -->
  <IconButton />
</BorderBeam>

<BorderBeam size="line">  <!-- Bottom-only traveling glow -->
  <SearchBar />
</BorderBeam>
```

## Color variants

Four color palettes are available:

```vue
<BorderBeam colorVariant="colorful" />  <!-- Rainbow spectrum (default) -->
<BorderBeam colorVariant="mono" />      <!-- Grayscale -->
<BorderBeam colorVariant="ocean" />     <!-- Blue-purple tones -->
<BorderBeam colorVariant="sunset" />    <!-- Orange-yellow-red tones -->
```

All variants except `mono` animate through a hue-shift cycle.

## Theme

Adapts beam colors for dark or light backgrounds:

```vue
<BorderBeam theme="dark" />   <!-- Dark background (default) -->
<BorderBeam theme="light" />  <!-- Light background -->
<BorderBeam theme="auto" />   <!-- Detects system preference -->
```

## Strength

Control the overall intensity of the effect without affecting the wrapped content:

```vue
<BorderBeam :strength="0.7">  <!-- 70% intensity -->
  <Card />
</BorderBeam>
```

`strength` accepts a value from `0` (invisible) to `1` (full intensity, default).

## Play / pause

Toggle the animation on and off with smooth fade transitions:

```vue
<script setup>
const active = ref(true);
</script>

<template>
  <BorderBeam :active="active" @deactivate="console.log('faded out')">
    <Card />
  </BorderBeam>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'line'` | `'md'` | Size/type preset |
| `colorVariant` | `'colorful' \| 'mono' \| 'ocean' \| 'sunset'` | `'colorful'` | Color palette |
| `theme` | `'dark' \| 'light' \| 'auto'` | `'dark'` | Background adaptation |
| `strength` | `number` | `1` | Effect opacity (0–1), only affects the beam layers |
| `duration` | `number` | `1.96` / `2.4` | Animation cycle duration in seconds |
| `active` | `boolean` | `true` | Whether the animation is playing |
| `borderRadius` | `number` | auto-detected | Custom border radius in px |
| `brightness` | `number` | `1.3` | Glow brightness multiplier |
| `saturation` | `number` | `1.2` | Glow saturation multiplier |
| `hueRange` | `number` | `30` | Hue rotation range in degrees |
| `staticColors` | `boolean` | `false` | Disable hue-shift animation |
| `class` | `string` | — | Additional class on the wrapper |
| `style` | `CSSProperties` | — | Additional inline styles on the wrapper |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@activate` | — | Called when fade-in completes |
| `@deactivate` | — | Called when fade-out completes |
| `@animationEnd` | `AnimationEvent` | Native animation end event |

## How it works

`BorderBeam` renders a wrapper `<div>` with:

- **`::after`** — the beam stroke (conic gradient masked to the border)
- **`::before`** — inner glow layer
- **`[data-beam-bloom]`** — outer bloom/glow child div

All effect layers are absolutely positioned and use `pointer-events: none`, so they never interfere with your content. Animations use CSS `@property` for smooth GPU-accelerated transitions.

## Project structure

```
border-beam-vue/
├── src/
│   ├── index.ts          # Public exports
│   ├── BorderBeam.vue     # Vue component
│   ├── types.ts           # TypeScript type definitions
│   └── styles.ts          # CSS generation engine
├── demo/                  # Vite + Vue demo site
├── dist/                  # Built output (ESM + types)
├── package.json
├── LICENSE
└── README.md
```

## Requirements

- Vue 3.5+
- Modern browser with CSS `@property` support (Chrome 85+, Safari 15.4+, Firefox 128+)

## Accessibility

The effect layers are purely decorative and use `pointer-events: none`. They do not affect keyboard navigation or screen readers. The component respects `prefers-reduced-motion` when implemented by the consumer.

## License

[MIT](./LICENSE)
