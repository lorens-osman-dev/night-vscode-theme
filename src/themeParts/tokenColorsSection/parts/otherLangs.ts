import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function otherLangs(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "go operator",
      scope: ["keyword.operator.assignment.go"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "go operator",
      scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "Go package name",
      scope: ["entity.name.package.go"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "parameter function ruby cs",
      scope: "function.parameter.ruby, function.parameter.cs",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "constant.language.symbol.ruby",
      scope: "constant.language.symbol.ruby",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "C++/C#",
      scope: [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition",
      ],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "c++ function",
      scope: "meta.function.c,meta.function.cpp",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "c++ block",
      scope:
        "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "elm prelude",
      scope: ["support.type.prelude.elm"],
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "elm constant",
      scope: ["support.constant.elm"],
      settings: {
        foreground: palette.purple,
      },
    },

    {
      name: "Clojure globals",
      scope: ["entity.global.clojure"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Clojure symbols",
      scope: ["meta.symbol.clojure"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Clojure constants",
      scope: ["constant.keyword.clojure"],
      settings: {
        foreground: palette.red,
      },
    },

    {
      name: "CoffeeScript Function Argument",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Groovy import names",
      scope: ["storage.modifier.import.groovy"],
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "Groovy Methods",
      scope: ["meta.method.groovy"],
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Groovy Variables",
      scope: ["meta.definition.variable.name.groovy"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Groovy Inheritance",
      scope: ["meta.definition.class.inherited.classes.groovy"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "SQL Variables",
      scope: ["text.variable", "text.bracketed"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "types swift + asp",
      scope: ["support.type.swift", "support.type.vb.asp"],
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "haskell variable generic-type",
      scope: "variable.other.generic-type.haskell",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "haskell storage type",
      scope: "storage.type.haskell",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "support.function.std.rust",
      scope: "support.function.std.rust",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "entity.name.lifetime.rust",
      scope: "entity.name.lifetime.rust",
      settings: {
        foreground: palette.blue,
      },
    },

    {
      name: "variable.language.rust",
      scope: "variable.language.rust",
      settings: {
        foreground: palette.yellow,
      },
    },

    {
      name: "keyword.operator.misc.rust",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "keyword.operator.sigil.rust",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "C operator assignment",
      scope:
        "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "C type posix-reserved",
      scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "keyword.operator.sizeof.c",
      scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "cs storage type",
      scope: "storage.type.cs",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "cs local variable",
      scope: "entity.name.variable.local.cs",
      settings: {
        foreground: palette.yellow,
      },
    },

    {
      name: "Ini Default Text",
      scope: ["source.ini"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Makefile prerequisities",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Makefile text colour",
      scope: ["source.makefile"],
      settings: {
        foreground: palette.blue,
      },
    },
  ];
}
