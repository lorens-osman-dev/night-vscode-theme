import type { TColorPalette, THexColor } from "@/types/colors";

export default function input(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "input.background": palette.background,
    "input.border": palette.transparent,
    "input.foreground": palette.foreground,
    "inputOption.activeBackground": palette.BackgroundSecond,
    "inputOption.activeBorder": palette.transparent,
    "inputOption.activeForeground": palette.white,
    "input.placeholderForeground": "#a6a6a6",
  };
}
