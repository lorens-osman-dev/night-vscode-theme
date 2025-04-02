import colorEdit from "color";
export function alpha(color: THexColor, alphaChannel: number) {
  return colorEdit(color).alpha(alphaChannel).hexa();
}

export type THexColor = `#${string}`;

export type TPalette = {
  yellow: THexColor;
  red: THexColor;
  blue: THexColor;
  green: THexColor;
  greenSecond: THexColor;
  purple: THexColor;

  background: THexColor;
  BackgroundSecond: THexColor;
  foreground: THexColor;
  comments: THexColor;

  strings: () => THexColor;
  numbers: () => THexColor;
  variables: () => THexColor;
  properties: () => THexColor;
  keywords: () => THexColor;
  classes: () => THexColor;
  constants: () => THexColor;
  functions: () => THexColor;
  methods: () => THexColor;
  operators: () => THexColor;
  specialFunctions: () => THexColor;
};

type TColors = {
  [key: string]: TPalette;
};

const colors: TColors = {
  nightVali: {
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

    strings: () => colors.nightVali.yellow,
    numbers: () => colors.nightVali.purple,
    variables: () => colors.nightVali.foreground,
    properties: () => colors.nightVali.foreground,
    keywords: () => colors.nightVali.greenSecond,
    classes: () => colors.nightVali.blue,
    constants: () => colors.nightVali.blue,
    functions: () => colors.nightVali.green,
    methods: () => colors.nightVali.green,
    operators: () => colors.nightVali.red,
    specialFunctions: () => colors.nightVali.red,
  },
};
export default colors;
