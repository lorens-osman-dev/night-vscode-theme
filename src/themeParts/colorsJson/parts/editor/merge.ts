import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";

export default function merge(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "merge.currentHeaderBackground": U.alpha(palette.green, 0.58),
    "merge.currentContentBackground": U.alpha(palette.green, 0.157),
    "merge.incomingHeaderBackground": "#395F8F",
    "merge.incomingContentBackground": "#395f8f2b",
    "merge.commonHeaderBackground": "#383838",
    "merge.commonContentBackground": "#282828",
  };
}
