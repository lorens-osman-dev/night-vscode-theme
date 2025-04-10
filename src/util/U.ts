import colorEdit from "color";
import type { THexColor, TColors } from "@/types/colors";
import extractAlpha from "./hexaExtractor";
import writeThemeToJson from "./writeThemeToJson";

export function alpha(color: THexColor, alphaChannel: number) {
  return colorEdit(color).alpha(alphaChannel).hexa() as THexColor;
}
const U = {
  alpha,
  extractAlpha,
  writeThemeToJson,
};

export default U;
