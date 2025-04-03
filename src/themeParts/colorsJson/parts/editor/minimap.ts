import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";

export default function minimap(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "minimapGutter.addedBackground": "#587c0c",
    "minimapGutter.modifiedBackground": "#0c7d9d",
    "minimapGutter.deletedBackground": "#94151b",
    "minimap.findMatchHighlight": "#386496",
    "minimap.selectionHighlight": "#264f78",
    "minimap.errorHighlight": palette.red,
    "minimap.warningHighlight": U.alpha(palette.yellow, 0.314),
    "minimap.background": palette.background,
  };
}
