import type { TColorPalette, TThemeColorMap } from "@/types/colors";
import U from "@/util/U";

export default function editorHoverWidget(palette: TColorPalette): TThemeColorMap {
  return {
    "editorHoverWidget.foreground": palette.foreground,
    "editorHoverWidget.background": U.alpha(palette.BackgroundSecond, 0.827),
    "editorHoverWidget.border": palette.background,
  };
}
