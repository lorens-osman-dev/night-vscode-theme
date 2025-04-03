import type { TColorPalette, THexColor } from "@/types/colors";

export default function general(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    foreground: palette.foreground,
    focusBorder: palette.background,
    "progressBar.background": "#1d426f",
    "selection.background": "#256aa7",
    "scrollbar.shadow": palette.transparent,
    "textLink.foreground": palette.blue,

    "icon.foreground": palette.foreground,

    "checkbox.background": palette.background,
    "checkbox.foreground": palette.foreground,
    "checkbox.border": palette.transparent,

    "dropdown.background": palette.background,
    "dropdown.foreground": palette.foreground,
    "dropdown.border": palette.transparent,

    "settings.headerForeground": palette.foreground,
    "settings.focusedRowBackground": "#ffffff07",

    "walkThrough.embeddedEditorBackground": "#00000050",

    "quickInput.background": palette.BackgroundSecond,
  };
}
