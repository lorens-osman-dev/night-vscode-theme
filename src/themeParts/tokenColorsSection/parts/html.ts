import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function html(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "html/pug (jade) escaped characters and entities",
      scope: ["constant.character.entity"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal.bad-ampersand.html",
      settings: {
        foreground: palette.foreground,
      },
    },
  ];
}
