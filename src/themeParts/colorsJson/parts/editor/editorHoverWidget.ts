import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";

export default function editorHoverWidget(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "editorHoverWidget.foreground": palette.foreground,
    "editorHoverWidget.background": U.alpha(palette.BackgroundSecond, 0.827),
    "editorHoverWidget.border": palette.background,
  };
}
