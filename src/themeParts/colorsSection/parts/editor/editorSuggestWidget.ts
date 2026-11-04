import type { TColorPalette, TThemeColorMap } from "@/types/colors";
import U from "@/util/U";

export default function editorSuggestWidget(palette: TColorPalette): TThemeColorMap {
  return {
    "editorSuggestWidget.background": U.alpha(palette.BackgroundSecond, 0.827),
    "editorSuggestWidget.border": palette.background,
    "editorSuggestWidget.foreground": palette.foreground,
    "editorSuggestWidget.highlightForeground": palette.green,
    "editorSuggestWidget.selectedBackground": U.alpha(palette.green, 0.25),
    "editorSuggestWidget.focusHighlightForeground": palette.green,
    "editorSuggestWidgetStatus.foreground": palette.red,
    /*
    "editorSuggestWidget.selectedIconForeground":palette.green,
    "editorSuggestWidget.selectedForeground":palette.red,
    */
  };
}
