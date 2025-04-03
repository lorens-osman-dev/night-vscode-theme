import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function vue(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "template vue",
      scope: "entity.name.tag.template.html.vue ",
      settings: {
        foreground: "#0044ff",
        fontStyle: "bold",
      },
    },
    {
      name: "script vue",
      scope: "entity.name.tag.script.html.vue",
      settings: {
        foreground: "#FF0000",
        fontStyle: "bold",
      },
    },
    {
      name: "style vue",
      scope: "entity.name.tag.style.html.vue",
      settings: {
        foreground: "#fffb00",
        fontStyle: "bold",
      },
    },
  ];
}
