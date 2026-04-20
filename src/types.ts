import type { CSSProperties } from 'vue';

/**
 * Size/type preset for the border beam effect
 * - 'sm': Small button-sized with compact glow
 * - 'md': Medium card-sized with full border glow
 * - 'line': Bottom-only traveling glow with breathe and spike animations
 */
export type BorderBeamSize = 'sm' | 'md' | 'line';

/**
 * Theme mode for adapting beam colors to background
 */
export type BorderBeamTheme = 'dark' | 'light' | 'auto';

/**
 * Color variant for the beam effect
 * - 'colorful': Full rainbow spectrum (default)
 * - 'mono': Monochromatic grayscale
 * - 'ocean': Blue and purple tones
 * - 'sunset': Warm orange, yellow, and red tones
 */
export type BorderBeamColorVariant = 'colorful' | 'mono' | 'ocean' | 'sunset';

/**
 * Configuration for a size preset
 */
export interface SizeConfig {
  borderRadius: number;
  borderWidth: number;
  width?: number;
  height?: number;
}

/**
 * Theme color configuration
 */
export interface ThemeColors {
  strokeOpacity: number;
  innerOpacity: number;
  bloomOpacity: number;
  innerShadow: string;
  saturation: number;
}

/**
 * Props for the BorderBeam component
 */
export interface BorderBeamProps {
  /**
   * Size/type preset
   * - 'sm': Small button-sized with compact glow
   * - 'md': Medium card-sized with full border glow (default)
   * - 'line': Bottom-only traveling glow with breathe and spike animations
   * @default 'md'
   */
  size?: BorderBeamSize;

  /**
   * Color variant for the beam effect
   * - 'colorful': Full rainbow spectrum (default)
   * - 'mono': Monochromatic grayscale
   * - 'ocean': Blue and purple tones
   * - 'sunset': Warm orange, yellow, and red tones
   * @default 'colorful'
   */
  colorVariant?: BorderBeamColorVariant;

  /**
   * Theme mode - adapts beam/glow colors for dark or light backgrounds
   * 'auto' detects system preference via prefers-color-scheme
   * @default 'dark'
   */
  theme?: BorderBeamTheme;

  /**
   * Disable the hue-shift animation for static colors (e.g., monochrome)
   * @default false
   */
  staticColors?: boolean;

  /**
   * Rotation/travel duration in seconds
   * @default 1.96 for border, 2.4 for line
   */
  duration?: number;

  /**
   * Whether the animation is active
   * @default true
   */
  active?: boolean;

  /**
   * Custom border radius in pixels. When omitted, the component
   * auto-detects the border-radius of the first child element.
   * Falls back to the size preset default if detection fails.
   */
  borderRadius?: number;

  /**
   * Brightness multiplier for the glow effect
   * @default 1.3
   */
  brightness?: number;

  /**
   * Saturation multiplier for the glow effect
   * @default 1.2 for dark, varies for light
   */
  saturation?: number;

  /**
   * Hue rotation range in degrees for the hue-shift animation
   * @default 30
   */
  hueRange?: number;

  /**
   * Overall strength/opacity of the effect (0-1).
   * Only affects the beam, glow, and bloom layers -- not the children.
   * @default 1
   */
  strength?: number;

  /**
   * Additional inline styles for the container
   */
  style?: CSSProperties;
}
