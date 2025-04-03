import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function python(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "support.variable.magic.python",
      scope: "support.variable.magic.python",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "punctuation.separator.parameters.python",
      scope:
        "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "variable.parameter.function.language.special.self.python",
      scope: "variable.parameter.function.language.special.self.python",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "python parameter",
      scope: "variable.parameter.function.language.python",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "python type",
      scope: "support.type.python",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "python logical",
      scope: "keyword.operator.logical.python",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "pyCs",
      scope: "variable.parameter.function.python",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "python block",
      scope:
        "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "python function-call.generic",
      scope: "meta.function-call.generic.python",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "python placeholder reset to normal string",
      scope: "constant.character.format.placeholder.other.python",
      settings: {
        foreground: palette.purple,
      },
    },

    {
      name: "python function decorator @",
      scope: "meta.function.decorator.python",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "python function support",
      scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "Python Keyword Control",
      scope: "keyword.control.import.python,keyword.control.flow.python",
      settings: {
        fontStyle: "italic",
      },
    },
  ];
}
