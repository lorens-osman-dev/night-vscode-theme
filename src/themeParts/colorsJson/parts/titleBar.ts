import type { TColorPalette, THexColor } from "@/types/colors";

export default function titleBar(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "titleBar.activeBackground": palette.background,
    "titleBar.activeForeground": palette.foreground,
    "titleBar.inactiveBackground": palette.background,
    "titleBar.inactiveForeground": "#cccccc99",
    "titleBar.border": palette.transparent,
  };
}
