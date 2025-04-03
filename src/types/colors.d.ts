import type { ThemeColor } from "vscode";

type TTextMateRule = {
  name?: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?:
      | "italic"
      | "bold"
      | "underline"
      | "none"
      | "italic bold"
      | "italic underline"
      | "bold underline"
      | "italic bold underline";
  };
};
export type THexColor = `#${string}`;

export type TColorPalette = {
  transparent: THexColor;

  white: THexColor;
  yellow: THexColor;
  yellowBright:THexColor;
  red: THexColor;
  blue: THexColor;
  green: THexColor;
  greenSecond: THexColor;
  purple: THexColor;
  fosfor: THexColor;
  pink: THexColor;
  brown: THexColor;
  orange: THexColor;
  banaf:THexColor;


  background: THexColor;
  BackgroundSecond: THexColor;
  foreground: THexColor;
  comments: THexColor;

  strings?: THexColor;
  numbers?: THexColor;
  variables?: THexColor;
  properties?: THexColor;
  keywords?: THexColor;
  classes?: THexColor;
  constants?: THexColor;
  functions?: THexColor;
  methods?: THexColor;
  operators?: THexColor;
  specialFunctions?: THexColor;
};

type TColors = {
  base: TPalette;
  nightShift?: TPalette;
  nightVali?: TPalette;
};
