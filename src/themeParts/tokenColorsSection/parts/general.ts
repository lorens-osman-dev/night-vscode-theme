import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function general(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "unison punctuation",
      scope:
        "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      settings: {
        foreground: palette.yellow,
      },
    },

    {
      name: "storage.modifier.lifetime.rust",
      scope: "storage.modifier.lifetime.rust",
      settings: {
        foreground: palette.foreground,
      },
    },

    {
      name: "support.constant.edge",
      scope: "support.constant.edge",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "regexp constant character-class",
      scope: "constant.other.character-class.regexp",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "regexp operator.quantifier",
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "punctuation.definition",
      scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Text",
      scope: "variable.parameter.function",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "markup diff",
      scope: "markup.changed.diff",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "diff",
      scope:
        "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "inserted.diff",
      scope: "markup.inserted.diff",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "deleted.diff",
      scope: "markup.deleted.diff",
      settings: {
        foreground: palette.yellow,
      },
    },

    {
      name: "operator logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "operator bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "operator channel",
      scope: "keyword.operator.channel",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "entity.name.type.module",
      scope: "entity.name.type.module",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "operator",
      scope: "keyword.operator.delete",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "keyword.operator",
      scope:
        "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Punctuation",
      scope: "punctuation.separator.delimiter",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Other punctuation .c",
      scope: "punctuation.separator.c,punctuation.separator.cpp",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Compound Assignment Operators",
      scope: "keyword.operator.assignment.compound",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "Namespaces",
      scope: "entity.name.namespace",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Variables",
      scope: "variable",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Variables",
      scope: "variable.c",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Language variables",
      scope: "variable.language",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Packages",
      scope: "token.package.keyword",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "Packages",
      scope: "token.package",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Functions",
      scope: ["entity.name.function", "meta.require", "support.function.any-method", "variable.function"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "Methods",
      scope: "keyword.other.special-method",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "Support",
      scope: "support.function",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Support type",
      scope: "support.type.property-name",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.property-value",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Support type",
      scope: "support.constant.font-name",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Meta tag",
      scope: "meta.tag",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Strings",
      scope: "string",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Inherited Class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Constant other symbol",
      scope: "constant.other.symbol",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Integers",
      scope: "constant.numeric",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Constants",
      scope: "constant",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Constants",
      scope: "punctuation.definition.constant",
      settings: {
        foreground: palette.purple,
      },
    },

    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "Regular Expressions",
      scope: "string.regexp",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Escape Characters",
      scope: "constant.character.escape",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded, variable.interpolation",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Embedded",
      scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: palette.white,
      },
    },

    {
      name: "Broken",
      scope: "invalid.broken",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "Unimplemented",
      scope: "invalid.unimplemented",
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "brace function",
      scope: "function.brace",
      settings: {
        foreground: palette.foreground,
      },
    },

    {
      name: "rgb-value",
      scope: "rgb-value",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "rgb value",
      scope: "inline-color-decoration rgb-value",
      settings: {
        foreground: palette.purple,
      },
    },

    {
      name: "block scope",
      scope: "block.scope.end,block.scope.begin",
      settings: {
        foreground: palette.foreground,
      },
    },

    {
      scope: "token.info-token",
      settings: {
        foreground: palette.green,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "String interpolation",
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "template literal",
      scope: ["punctuation.quasi.element"],
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "HLSL Semantic",
      scope: ["support.variable.semantic.hlsl"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "HLSL Types",
      scope: [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl",
      ],
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "heading 1, keyword",
      scope: ["entity.name.function.xi"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "heading 2, callable",
      scope: ["entity.name.class.xi"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "heading 3, property",
      scope: ["constant.character.character-class.regexp.xi"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "heading 4, type, class, interface",
      scope: ["constant.regexp.xi"],
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "heading 5, enums, preprocessor, constant, decorator",
      scope: ["keyword.control.xi"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "heading 6, number",
      scope: ["invalid.xi"],
      settings: {
        foreground: palette.foreground,
      },
    },

    {
      name: "link",
      scope: ["constant.character.xi"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "accent",
      scope: ["accent.xi"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "wikiword",
      scope: ["wikiword.xi"],
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "language operators like '+', '-' etc",
      scope: ["constant.other.color.rgb-value.xi"],
      settings: {
        foreground: palette.white,
      },
    },
    {
      name: "elements to dim",
      scope: ["punctuation.definition.tag.xi"],
      settings: {
        foreground: palette.comments,
      },
    },

    {
      name: "meta.brace.square",
      scope: [" meta.brace.square"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Comments",
      scope: "comment, punctuation.definition.comment",
      settings: {
        fontStyle: "italic",
        foreground: palette.comments,
      },
    },

    {
      name: "punctuation.definition.block.sequence.item.yaml",
      scope: "punctuation.definition.block.sequence.item.yaml",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      scope: ["constant.language.symbol.elixir"],
      settings: {
        foreground: palette.red,
      },
    },

    {
      name: "comment",
      scope: "comment.line.double-slash,comment.block.documentation",
      settings: {
        fontStyle: "italic",
      },
    },
  ];
}
