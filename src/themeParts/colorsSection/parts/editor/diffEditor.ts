import type { TColorPalette, TThemeColorMap } from "@/types/colors";
import U from "@/util/U";

export default function diffEditor(palette: TColorPalette): TThemeColorMap {
  return {
    "diffEditor.insertedTextBackground": U.alpha(palette.green, 0.2),
    "diffEditor.removedTextBackground": U.alpha(palette.red, 0.2),
    "diffEditor.border": "#444444",
  };
}
