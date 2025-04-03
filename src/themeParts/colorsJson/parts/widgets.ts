import type { TColorPalette, THexColor } from "@/types/colors";

export default function widgets(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "widget.shadow": palette.background,
    "editorWidget.foreground": palette.foreground,
    "editorWidget.background": palette.BackgroundSecond,
    "editorWidget.resizeBorder": palette.greenSecond,
    "pickerGroup.border": palette.comments,
    "pickerGroup.foreground": palette.comments,
    "debugToolBar.background": palette.background,
    "debugToolBar.border": palette.comments,
    "debugExceptionWidget.background": palette.background,
    "debugExceptionWidget.border": palette.comments,
  };
}
