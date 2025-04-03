import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";

export default function button(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "button.background": palette.background,
    "button.foreground": palette.white,
    "button.hoverBackground": U.alpha(palette.green, 0.58),
    "button.secondaryForeground": palette.white,
    "button.secondaryBackground": "#3a3d4176",
    "button.secondaryHoverBackground": "#45494ecf",
  };
}
