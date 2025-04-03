import type { TColorPalette, THexColor } from "@/types/colors";

export default function peekView(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "peekView.border": "#007acc",
    "peekViewEditor.background": "#001f33",
    "peekViewEditorGutter.background": "#001f33",
    "peekViewEditor.matchHighlightBackground": "#ff8f0099",
    "peekViewEditor.matchHighlightBorder": "#ee931e",
    "peekViewResult.background": palette.BackgroundSecond,
    "peekViewResult.fileForeground": palette.white,
    "peekViewResult.lineForeground": "#bbbbbb",
    "peekViewResult.matchHighlightBackground": "#ea5c004d",
    "peekViewResult.selectionBackground": "#3399ff33",
    "peekViewResult.selectionForeground": palette.white,
    "peekViewTitle.background": palette.BackgroundSecond,
    "peekViewTitleDescription.foreground": "#ccccccb3",
    "peekViewTitleLabel.foreground": palette.white,
  };
}
