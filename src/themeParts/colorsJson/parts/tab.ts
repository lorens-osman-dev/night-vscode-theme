import type { TColorPalette, THexColor } from "@/types/colors";

export default function tab(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "editorGroupHeader.tabsBackground": palette.BackgroundSecond,
    "editorGroupHeader.tabsBorder": palette.transparent,
    "editorGroup.emptyBackground": palette.background,
    "editorGroupHeader.border": palette.transparent,
    "tab.activeForeground": palette.foreground,
    "tab.border": palette.background,
    "tab.activeBackground": palette.background,
    "tab.activeBorder": palette.transparent,
    "tab.activeBorderTop": palette.green,
    "tab.inactiveBackground": palette.BackgroundSecond,
    "tab.inactiveForeground": "#ffffff80",
    "tab.hoverBackground": palette.background,
    "tab.hoverBorder": palette.transparent,
    "editorGroup.border": "#444444",
  };
}
