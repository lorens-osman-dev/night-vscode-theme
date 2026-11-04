import type { TColorPalette, TThemeColorMap } from "@/types/colors";

export default function editorMarkerNavigation(palette: TColorPalette): TThemeColorMap {
  return {
    "editorMarkerNavigation.background": palette.background,
    "editorMarkerNavigationError.background": "#f48771",
    "editorMarkerNavigationWarning.background": "#cca700",
    "editorMarkerNavigationInfo.background": "#75beff",
  };
}
