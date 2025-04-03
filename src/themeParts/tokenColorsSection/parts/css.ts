import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function css(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "Control Elements",
      scope: "control.elements, keyword.operator.less ,keyword.control.at-rule",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "rgb value less",
      scope: "less rgb-value",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "sass selector",
      scope: "selector.sass",
      settings: {
        foreground: palette.yellow,
      },
    },

    {
      name: "support.constant.property-value.scss",
      scope: "support.constant.property-value.scss,support.constant.property-value.css",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "CSS/SCSS/LESS Operators",
      scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      settings: {
        foreground: palette.fosfor,
      },
    },

    {
      name: "CSS/SCSS/Less property name",
      scope: "support.type.property-name.css",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "css color standard name",
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      settings: {
        foreground: "#b68d2b",
      },
    },
    {
      name: "css comma",
      scope: "punctuation.separator.list.comma.css",
      settings: {
        foreground: "#a7b2b8",
      },
    },
    {
      name: "css attribute-name.id",
      scope: "support.constant.color.w3c-standard-color-name.css",
      settings: {
        foreground: "#b68d2b",
      },
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: "#7d00b6",
      },
    },
    {
      name: "css html tags names",
      scope: "entity.name.tag.css",
      settings: {
        foreground: palette.white,
        fontStyle: "bold",
      },
    },

    {
      name: "important keyword",
      scope: "keyword.other.important.scss,keyword.other.important.css",
      settings: {
        foreground: palette.red,
        fontStyle: "bold",
      },
    },
    {
      name: "parent reference & ",
      scope: "entity.name.tag.reference.scss",
      settings: {
        foreground: palette.fosfor,
        fontStyle: "bold",
      },
    },
    {
      name: "Attributes",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Attribute IDs",
      scope: "entity.other.attribute-name.id.css",
      settings: {
        fontStyle: "bold",
        foreground: palette.blue,
      },
    },
    {
      name: "Attribute class",
      scope: "entity.other.attribute-name.class.css",
      settings: {
        fontStyle: "bold",
        foreground: palette.yellow,
      },
    },

    {
      name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      scope: ["entity.other.attribute-name.pseudo-element", "entity.other.attribute-name.pseudo-class"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "css functions",
      scope: "support.function.misc.scss",
      settings: {
        foreground: palette.blue,
      },
    },
  ];
}
