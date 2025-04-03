export type THexColor = `#${string}`;

export type TPalette = {
  transparent: THexColor;

  white: THexColor;
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
export type TColorPalette = {
  transparent: THexColor;

  white: THexColor;
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
