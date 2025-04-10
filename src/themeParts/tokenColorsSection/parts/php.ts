import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function php(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "Class name php",
      scope: "variable.other.class.php",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "laravel blade tag",
      scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "laravel blade @",
      scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "use statement for other classes",
      scope:
        "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "error suppression",
      scope: "keyword.operator.error-control.php",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "php instanceof",
      scope: "keyword.operator.type.php",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "style double quoted array index normal begin",
      scope: "punctuation.section.array.begin.php",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "style double quoted array index normal end",
      scope: "punctuation.section.array.end.php",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "php illegal.non-null-typehinted",
      scope: "invalid.illegal.non-null-typehinted.php",
      settings: {
        foreground: "#f44747",
      },
    },
    {
      name: "php types",
      scope:
        "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "php call-function",
      scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "php function-resets",
      scope:
        "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "support php constants",
      scope: "support.constant.core.rust",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "support php constants",
      scope:
        "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "php goto",
      scope: "entity.name.goto-label.php,support.other.php",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "php logical/bitwise operator",
      scope: "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php regexp operator",
      scope: "keyword.operator.regexp.php",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "php comparison",
      scope: "keyword.operator.comparison.php",
      settings: {
        foreground: palette.red,
      },
    },
    {
      name: "php heredoc/nowdoc",
      scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      settings: {
        foreground: palette.greenSecond,
      },
    },
  ];
}
