import type { TColorPalette, THexColor } from "@/types/colors";

export default function titleBar(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "titleBar.activeBackground": palette.background,
    "titleBar.activeForeground": palette.foreground,
    "titleBar.inactiveBackground": palette.background,
    "titleBar.inactiveForeground": "#cccccc99",
    "titleBar.border": palette.transparent,

    "activityBar.foreground": palette.green,
    "activityBar.background": palette.background,
    "activityBar.inactiveForeground": "#ffffff66",
    "activityBarBadge.foreground": palette.background,
    "activityBarBadge.background": palette.yellow,
    "activityBar.border": palette.transparent,
    "activityBar.activeBackground":palette.background,
  };
}
