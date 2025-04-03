import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function ts(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "variable names",
      scope:
        "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Functions+methods names",
      scope: ["entity.name.function", "meta.require", "support.function.any-method", "variable.function"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "spiceal functions",
      scope: "support.function",
      settings: {
        foreground: palette.pink,
      },
    },
    {
      name: " Delete,In,Of and Void keywords",
      scope:
        ["keyword.operator.expression",
          "delete,keyword.operator.expression.in",
          "keyword.operator.expression.of",
          "keyword.operator.expression.void"],
      settings: {
        foreground: palette.red,
      },
    },

    {
      name: "js Flowtype",
      scope: ["support.type.type.flowtype"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "js Flow",
      scope: ["support.type.primitive"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js class prop",
      scope: ["meta.property.object",""],
      settings: {
        foreground: palette.yellowBright,
       
      },
    },
    {
      name: "js func parameter",
      scope: ["variable.parameter.function.js"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "js template literals begin",
      scope: ["keyword.other.template.begin"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "js template literals end",
      scope: ["keyword.other.template.end"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Reset JavaScript string interpolation expression",
      scope: ["meta.template.expression"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "js template literals variable braces begin",
      scope: ["keyword.other.substitution.begin"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "js template literals variable braces end",
      scope: ["keyword.other.substitution.end"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "js operator.assignment",
      scope: ["keyword.operator.assignment"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "js dom variable",
      scope: "support.variable.dom,support.variable.property.dom",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Comment Markup Link",
      scope: "comment markup.link",
      settings: {
        foreground: palette.comments,
      },
    },
    {
      name: "js/ts punctuation separator key-value",
      scope: "punctuation.separator.key-value",
      settings: {
        foreground: palette.foreground,
      },
    },

    {
      name: "math js/ts",
      scope: "support.constant.math",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "math property js/ts",
      scope: "support.constant.property.math",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "js/ts variable.other.constant",
      scope: "variable.other.constant",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js/ts json",
      scope: "support.constant.json",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "js/ts Keyword",
      scope: [
        "keyword.operator.expression.instanceof",
        "keyword.operator.expression.typeof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof",
      ],
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "js/ts console",
      scope: "support.type.object.console",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "js/ts support.variable.property.process",
      scope: "support.variable.property.process",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Compound Assignment Operators js/ts",
      scope: "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Class name",
      scope: ["entity.name.class", "variable.other.class.js", ".class.ts"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "parameter function js/ts",
      scope: "function.parameter",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "ts primitive/builtin types",
      scope:
        "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "js/ts italic",
      scope:
        "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter",
      settings: {
        foreground: palette.banaf,

      },
    },
    {
      name: "Keyword Control like import,default, export.. keywords",
      scope: ["keyword.control"],
      settings: {
        foreground: palette.red,
        fontStyle: "bold",
      },
    },

    {
      name: "typeScript interface keyword + type keyword",
      scope: "storage.type.interface.ts,storage.type.type.ts",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "typeScript (extends ,implements ..) keywords",
      scope: "storage.modifier",
      settings: {
        foreground: palette.banaf,
      },
    },
    {
      name: "this keyword",
      scope: "variable.language.this",
      settings: {
        foreground: palette.orange,
      },
    },
    {
      name: "class keyword",
      scope: "storage.type.class.ts",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "storage.type like let,const,var",
      scope: "storage.type",
      settings: {
        foreground:palette.green
      },
    },
    {
      name: "async awite + return",
      scope: "storage.modifier.async,keyword.control.flow",
      settings: {
        foreground: "#ccc",
      },
    },

    {
      name: "true false",
      scope: "constant.language.boolean.true,constant.language.boolean.false",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "super keyword",
      scope: "variable.language.super.ts",
      settings: {
        foreground: palette.red,
      },
    },

    {
      name: "interface name + class name",
      scope: [
        "interface",
        "entity.name.type.interface",
        "entity.name.type",
        "entity.name.type.class.ts",
        "entity.other.inherited-class.ts",
        "entity.name.type.ts",
        "support.type.primitive.ts"
      ],
      settings: {
        foreground: palette.pink,
        fontStyle: "italic",
      },
    },
  ];
}
