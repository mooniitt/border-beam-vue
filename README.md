# border-beam-vue3

[简体中文](#简体中文) | [English](#english)

**[在线演示 (Live Demo)](https://mooniitt.github.io/border-beam-vue3/)**

---

## 简体中文

Vue 3 动效边框组件。一个轻量级的组件，可为任何元素（卡片、按钮、输入框或搜索栏）添加流光环绕动画效果。

### 安装

```bash
npm install border-beam-vue3
```

### 快速上手

```vue
<script setup>
import { BorderBeam } from 'border-beam-vue3';
</script>

<template>
  <BorderBeam>
    <!-- 你的内容 -->
    <div style="padding: 32px; border-radius: 16px; background: #1d1d1d">
      Your content here
    </div>
  </BorderBeam>
</template>
```

该组件会包裹你的内容并叠加动画光束效果。它会自动检测第一个子元素的 `border-radius`（圆角大小）。

### 尺寸预设

内置三种尺寸预设，控制光效强度和动画风格：

```vue
<BorderBeam size="md">  <!-- 全边框流光 (默认) -->
  <Card />
</BorderBeam>

<BorderBeam size="sm">  <!-- 适用于小元素的紧凑光效 -->
  <IconButton />
</BorderBeam>

<BorderBeam size="line">  <!-- 仅底部流光效果 -->
  <SearchBar />
</BorderBeam>
```

### 颜色变体

提供四种调色板：

```vue
<BorderBeam colorVariant="colorful" />  <!-- 七彩光谱 (默认) -->
<BorderBeam colorVariant="mono" />      <!-- 黑白单色 -->
<BorderBeam colorVariant="ocean" />     <!-- 深蓝与紫色调 -->
<BorderBeam colorVariant="sunset" />    <!-- 橙黄与红色调 (夕阳) -->
```

除 `mono` 外，所有变体都会通过色相偏移进行循环动画。

### 主题

根据深色或浅色背景自动调整光束颜色：

```vue
<BorderBeam theme="dark" />   <!-- 深色背景 (默认) -->
<BorderBeam theme="light" />  <!-- 浅色背景 -->
<BorderBeam theme="auto" />   <!-- 自动检测系统颜色偏好 -->
```

### 强度控制

控制效果的整体强度，而不影响被包裹的内容：

```vue
<BorderBeam :strength="0.7">  <!-- 70% 强度 -->
  <Card />
</BorderBeam>
```

`strength` 接受 `0`（不可见）到 `1`（全强度，默认）之间的值。

### 播放与暂停

通过平滑的淡入淡出切换动画的播放与暂停：

```vue
<script setup>
import { ref } from 'vue';
const active = ref(true);
</script>

<template>
  <BorderBeam :active="active" @deactivate="console.log('已暂停')">
    <Card />
  </BorderBeam>
</template>
```

### 属性参数

| 属性 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `size` | `'sm' \| 'md' \| 'line'` | `'md'` | 尺寸/类型预设 |
| `colorVariant` | `'colorful' \| 'mono' \| 'ocean' \| 'sunset'` | `'colorful'` | 颜色调色板 |
| `theme` | `'dark' \| 'light' \| 'auto'` | `'dark'` | 背景适配模式 |
| `strength` | `number` | `1` | 整体透明度/强度 (0–1) |
| `duration` | `number` | `1.96` / `2.4` | 动画周期时长 (秒) |
| `active` | `boolean` | `true` | 动画是否激活 |
| `borderRadius` | `number` | 自动检测 | 自定义圆角大小 (px) |
| `brightness` | `number` | `1.3` | 光效亮度倍率 |
| `saturation` | `number` | `1.2` | 光效饱和度倍率 |
| `hueRange` | `number` | `30` | 色相旋转范围 (度) |
| `staticColors` | `boolean` | `false` | 禁用色相偏移动画 |
| `class` | `string` | — | 额外的 CSS 类名 |
| `style` | `CSSProperties` | — | 额外的行内样式 |

### 事件

| 事件名 | 负载 | 描述 |
|-------|---------|------|
| `@activate` | — | 淡入动画完成时触发 |
| `@deactivate` | — | 淡出动画完成时触发 |
| `@animationEnd` | `AnimationEvent` | 原生动画结束事件 |

### 环境要求

- Vue 3.5+
- 支持 CSS `@property` 的现代浏览器 (Chrome 85+, Safari 15.4+, Firefox 128+)

---

## English

Animated border beam effect for Vue 3. A lightweight component that adds a traveling glow animation around any element — cards, buttons, inputs, or search bars.

### Install

```bash
npm install border-beam-vue3
```

### Quick start

```vue
<script setup>
import { BorderBeam } from 'border-beam-vue3';
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

### Sizes

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

### Color variants

Four color palettes are available:

```vue
<BorderBeam colorVariant="colorful" />  <!-- Rainbow spectrum (default) -->
<BorderBeam colorVariant="mono" />      <!-- Grayscale -->
<BorderBeam colorVariant="ocean" />     <!-- Blue-purple tones -->
<BorderBeam colorVariant="sunset" />    <!-- Orange-yellow-red tones -->
```

All variants except `mono` animate through a hue-shift cycle.

### Theme

Adapts beam colors for dark or light backgrounds:

```vue
<BorderBeam theme="dark" />   <!-- Dark background (default) -->
<BorderBeam theme="light" />  <!-- Light background -->
<BorderBeam theme="auto" />   <!-- Detects system preference -->
```

### Strength

Control the overall intensity of the effect without affecting the wrapped content:

```vue
<BorderBeam :strength="0.7">  <!-- 70% intensity -->
  <Card />
</BorderBeam>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'line'` | `'md'` | Size/type preset |
| `colorVariant` | `'colorful' \| 'mono' \| 'ocean' \| 'sunset'` | `'colorful'` | Color palette |
| `theme` | `'dark' \| 'light' \| 'auto'` | `'dark'` | Background adaptation |
| `strength` | `number` | `1` | Effect opacity (0–1) |
| `duration` | `number` | `1.96` / `2.4` | Animation cycle duration (s) |
| `active` | `boolean` | `true` | Whether animation is playing |
| `borderRadius` | `number` | auto-detect | Custom border radius (px) |
| `brightness` | `number` | `1.3` | Glow brightness multiplier |
| `saturation` | `number` | `1.2` | Glow saturation multiplier |
| `hueRange` | `number` | `30` | Hue rotation range (deg) |
| `staticColors` | `boolean` | `false` | Disable hue-shift |
| `class` | `string` | — | Additional class |
| `style` | `CSSProperties` | — | Additional styles |

### How it works

`BorderBeam` renders a wrapper `<div>` with:

- **`::after`** — the beam stroke (conic gradient masked to the border)
- **`::before`** — inner glow layer
- **`[data-beam-bloom]`** — outer bloom/glow child div

Animations use CSS `@property` for smooth GPU-accelerated transitions.

### Requirements

- Vue 3.5+
- Modern browser with CSS `@property` support (Chrome 85+, Safari 15.4+, Firefox 128+)

## License

[MIT](./LICENSE)
