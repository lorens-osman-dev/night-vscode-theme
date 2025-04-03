import type { TColorPalette, THexColor } from "@/types/colors";

export default function scrollbarSlider(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "scrollbarSlider.background": "#79797966",
    "scrollbarSlider.hoverBackground": "#646464b3",
    "scrollbarSlider.activeBackground": "#bfbfbf66",
  };
}
