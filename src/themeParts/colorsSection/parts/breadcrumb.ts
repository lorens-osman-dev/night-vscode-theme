import type { TColorPalette, THexColor } from "@/types/colors";

export default function breadcrumb(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "breadcrumb.background": palette.background,
    "breadcrumb.foreground": palette.foreground,
    "breadcrumb.activeSelectionForeground": "#e0e0e0",
    "breadcrumb.focusForeground": palette.green,
  };
}
