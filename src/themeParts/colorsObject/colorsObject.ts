import colorEdit from "color";
import type { THexColor, TColors } from "../../types/colors";
import colorsSectionObject from "../colorsJson/colorsSectionObject";

export function alpha(color: THexColor, alphaChannel: number) {
  return colorEdit(color).alpha(alphaChannel).hexa();
}

export const colors: TColors = {
  base: {
    transparent: "#00000000",

    white: "#ffffff",
    yellow: "#fde68a",
    red: "#f87171",
    blue: "#38bdf8",
    green: "#34d399",
    greenSecond: "#28b1a2",
    purple: "#c084fc",

    background: "#111827",
    BackgroundSecond: "#132132",
    foreground: "#cbd5e1",
    comments: "#64748b",

    strings: () => colors.base.yellow,
    numbers: () => colors.base.purple,
    variables: () => colors.base.foreground,
    properties: () => colors.base.foreground,
    keywords: () => colors.base.greenSecond,
    classes: () => colors.base.blue,
    constants: () => colors.base.blue,
    functions: () => colors.base.green,
    methods: () => colors.base.green,
    operators: () => colors.base.red,
    specialFunctions: () => colors.base.red,
  },
};
