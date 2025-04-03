import type { TColorPalette, THexColor } from "@/types/colors";

export default function editorMarkerNavigation(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "editorMarkerNavigation.background": palette.background,
    "editorMarkerNavigationError.background": "#f48771",
    "editorMarkerNavigationWarning.background": "#cca700",
    "editorMarkerNavigationInfo.background": "#75beff",
  };
}
