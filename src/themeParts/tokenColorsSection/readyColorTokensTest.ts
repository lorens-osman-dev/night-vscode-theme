import type { THexColor, TTextMateRule } from "@/types/colors";
import { palettes } from "@/palettes";
// Shared token color values. Grouping the hex values as variables keeps a single
// point of change per hue: update a constant here and every token rule using it
// follows. Names match the palette names in src/palettes.ts where a value is the
// same as a palette entry.

// Base hues (make up most of the token rules)
const gray: THexColor = palettes.test.gray!;
const green: THexColor = palettes.test.green;
const red: THexColor = palettes.test.red;
const cyan: THexColor = palettes.test.blue;
const yellow: THexColor = palettes.test.orange; //numbers
const banaf: THexColor = palettes.test.banaf;
const violet: THexColor = palettes.test.banaf;
const comment: THexColor = palettes.test.comments;
const lime: THexColor = "#8cd30c";
const white: THexColor = palettes.test.white;

// Accents and one-off values
const orchid: THexColor = palettes.test.pink;
const pinkAlpha: THexColor = palettes.test.banaf;
const coral: THexColor = "#f87171";
const errorRed: THexColor = "#f44747";
const gold: THexColor = "#e9c965";
const fosfor: THexColor = "#baff58";
const olive: THexColor = palettes.test.gold!;
const skyBlue: THexColor = "#38bdf8";
const emerald: THexColor = "#34d399";
const lemon: THexColor = "#fffb00";
const pureBlue: THexColor = "#0044ff";
const pureRed: THexColor = "#FF0000";
const foregroundd: THexColor = "#cbd5e1";

// this original Night Shift token colors
export const colorTokens: TTextMateRule[] = [
  {
    name: "unison punctuation",
    scope:
      "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
    settings: {
      foreground: green,
    },
  },
  {
    name: "haskell variable generic-type",
    scope: "variable.other.generic-type.haskell",
    settings: {
      foreground: red,
    },
  },
  {
    name: "haskell storage type",
    scope: "storage.type.haskell",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "support.variable.magic.python",
    scope: "support.variable.magic.python",
    settings: {
      foreground: green,
    },
  },
  {
    name: "punctuation.separator.parameters.python",
    scope:
      "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "variable.parameter.function.language.special.self.python",
    scope: "variable.parameter.function.language.special.self.python",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "storage.modifier.lifetime.rust",
    scope: "storage.modifier.lifetime.rust",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "support.function.std.rust",
    scope: "support.function.std.rust",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "entity.name.lifetime.rust",
    scope: "entity.name.lifetime.rust",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "variable.language.rust",
    scope: "variable.language.rust",
    settings: {
      foreground: green,
    },
  },
  {
    name: "support.constant.edge",
    scope: "support.constant.edge",
    settings: {
      foreground: red,
    },
  },
  {
    name: "regexp constant character-class",
    scope: "constant.other.character-class.regexp",
    settings: {
      foreground: green,
    },
  },
  {
    name: "regexp operator.quantifier",
    scope: "keyword.operator.quantifier.regexp",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "punctuation.definition",
    scope: "punctuation.definition.string.begin,punctuation.definition.string.end",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Text",
    scope: "variable.parameter.function",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Comment Markup Link",
    scope: "comment markup.link",
    settings: {
      foreground: comment,
    },
  },
  {
    name: "markup diff",
    scope: "markup.changed.diff",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "diff",
    scope:
      "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "inserted.diff",
    scope: "markup.inserted.diff",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "deleted.diff",
    scope: "markup.deleted.diff",
    settings: {
      foreground: green,
    },
  },
  {
    name: "c++ function",
    scope: "meta.function.c,meta.function.cpp",
    settings: {
      foreground: green,
    },
  },
  {
    name: "c++ block",
    scope:
      "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "js/ts punctuation separator key-value",
    scope: "punctuation.separator.key-value",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "js/ts import keyword",
    scope: "keyword.operator.expression.import",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "math js/ts",
    scope: "support.constant.math",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "math property js/ts",
    scope: "support.constant.property.math",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "js/ts variable.other.constant",
    scope: "variable.other.constant",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "java type",
    scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "java source",
    scope: "source.java",
    settings: {
      foreground: green,
    },
  },
  {
    name: "java modifier.import",
    scope:
      "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "java modifier.import",
    scope: "meta.method.java",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "java modifier.import",
    scope: "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "java instanceof",
    scope: "keyword.operator.instanceof.java",
    settings: {
      foreground: red,
    },
  },
  {
    name: "java variable.name",
    scope: "meta.definition.variable.name.java",
    settings: {
      foreground: green,
    },
  },
  {
    name: "operator logical",
    scope: "keyword.operator.logical",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "operator bitwise",
    scope: "keyword.operator.bitwise",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "operator channel",
    scope: "keyword.operator.channel",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "support.constant.property-value.scss",
    scope: "support.constant.property-value.scss,support.constant.property-value.css",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "CSS/SCSS/LESS Operators",
    scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "css color standard name",
    scope:
      "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "css comma",
    scope: "punctuation.separator.list.comma.css",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "css attribute-name.id",
    scope: "support.constant.color.w3c-standard-color-name.css",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "css property-name",
    scope: "support.type.vendored.property-name.css",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "js/ts module",
    scope: "support.module.node,support.type.object.module,support.module.node",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "entity.name.type.module",
    scope: "entity.name.type.module",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "js variable readwrite",
    scope:
      "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
    settings: {
      foreground: green,
    },
  },
  {
    name: "js/ts json",
    scope: "support.constant.json",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "js/ts Keyword",
    scope: [
      "keyword.operator.expression.instanceof",
      "keyword.operator.new",
      "keyword.operator.ternary",
      "keyword.operator.optional",
      "keyword.operator.expression.keyof",
    ],
    settings: {
      foreground: red,
    },
  },
  {
    name: "js/ts console",
    scope: "support.type.object.console",
    settings: {
      foreground: green,
    },
  },
  {
    name: "js/ts support.variable.property.process",
    scope: "support.variable.property.process",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "js console function",
    scope: "entity.name.function,support.function.console",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "keyword.operator.misc.rust",
    scope: "keyword.operator.misc.rust",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "keyword.operator.sigil.rust",
    scope: "keyword.operator.sigil.rust",
    settings: {
      foreground: red,
    },
  },
  {
    name: "operator",
    scope: "keyword.operator.delete",
    settings: {
      foreground: red,
    },
  },
  {
    name: "js dom",
    scope: "support.type.object.dom",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "js dom variable",
    scope: "support.variable.dom,support.variable.property.dom",
    settings: {
      foreground: green,
    },
  },
  {
    name: "keyword.operator",
    scope:
      "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "C operator assignment",
    scope:
      "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Punctuation",
    scope: "punctuation.separator.delimiter",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Other punctuation .c",
    scope: "punctuation.separator.c,punctuation.separator.cpp",
    settings: {
      foreground: red,
    },
  },
  {
    name: "C type posix-reserved",
    scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "keyword.operator.sizeof.c",
    scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    settings: {
      foreground: red,
    },
  },
  {
    name: "python parameter",
    scope: "variable.parameter.function.language.python",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "python type",
    scope: "support.type.python",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "python logical",
    scope: "keyword.operator.logical.python",
    settings: {
      foreground: red,
    },
  },
  {
    name: "pyCs",
    scope: "variable.parameter.function.python",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "python block",
    scope:
      "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "python function-call.generic",
    scope: "meta.function-call.generic.python",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "python placeholder reset to normal string",
    scope: "constant.character.format.placeholder.other.python",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Operators",
    scope: "keyword.operator",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Compound Assignment Operators",
    scope: "keyword.operator.assignment.compound",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Compound Assignment Operators js/ts",
    scope: "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "Keywords",
    scope: "keyword",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Namespaces",
    scope: "entity.name.namespace",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Variables",
    scope: "variable",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Variables",
    scope: "variable.c",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Language variables",
    scope: "variable.language",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Java Variables",
    scope: "token.variable.parameter.java",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Java Imports",
    scope: "import.storage.java",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Packages",
    scope: "token.package.keyword",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Packages",
    scope: "token.package",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Functions",
    scope: [
      "entity.name.function",
      "meta.require",
      "support.function.any-method",
      "variable.function",
    ],
    settings: {
      foreground: lime,
    },
  },
  {
    name: "Classes",
    scope: "entity.name.type.namespace",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Classes",
    scope: "support.class, entity.name.type.class",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Class name",
    scope: "entity.name.class.identifier.namespace.type",
    settings: {
      foreground: cyan,
      fontStyle: "bold",
    },
  },
  {
    name: "Class name",
    scope: ["entity.name.class", "variable.other.class.js", "variable.other.class.ts"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Class name php",
    scope: "variable.other.class.php",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Type Name",
    scope: "entity.name.type",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Keyword Control",
    scope: "keyword.control",
    settings: {
      foreground: red,
      fontStyle: "bold",
    },
  },
  {
    name: "Control Elements",
    scope: "control.elements, keyword.operator.less",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Methods",
    scope: "keyword.other.special-method",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "Storage",
    scope: "storage",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Storage JS TS",
    scope: "token.storage",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
    scope:
      "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Java Storage",
    scope: "token.storage.type.java",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Support",
    scope: "support.function",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "Support type",
    scope: "support.type.property-name",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Support type",
    scope: "support.constant.property-value",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Support type",
    scope: "support.constant.font-name",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Meta tag",
    scope: "meta.tag",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Strings",
    scope: "string",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Inherited Class",
    scope: "entity.other.inherited-class",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Constant other symbol",
    scope: "constant.other.symbol",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "Integers",
    scope: "constant.numeric",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Constants",
    scope: "constant",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Constants",
    scope: "punctuation.definition.constant",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Tags",
    scope: "entity.name.tag",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Attribute IDs",
    scope: "entity.other.attribute-name.id",
    settings: {
      fontStyle: "none",
      foreground: lime,
    },
  },
  {
    name: "Attribute class",
    scope: "entity.other.attribute-name.class.css",
    settings: {
      fontStyle: "none",
      foreground: yellow,
    },
  },
  {
    name: "Selector",
    scope: "meta.selector",
    settings: {
      foreground: red,
    },
  },
  {
    name: "Headings",
    scope: "markup.heading",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Headings",
    scope: "markup.heading punctuation.definition.heading, entity.name.section",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "Units",
    scope: "keyword.other.unit",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Bold",
    scope: "markup.bold,todo.bold",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "Bold",
    scope: "punctuation.definition.bold",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "markup Italic",
    scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
    settings: {
      foreground: red,
    },
  },
  {
    name: "emphasis md",
    scope: "emphasis md",
    settings: {
      foreground: red,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown headings",
    scope: "entity.name.section.markdown",
    settings: {
      foreground: green,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
    scope: "punctuation.definition.heading.markdown",
    settings: {
      foreground: green,
    },
  },
  {
    name: "punctuation.definition.list.begin.markdown",
    scope: "punctuation.definition.list.begin.markdown",
    settings: {
      foreground: green,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown heading setext",
    scope: "markup.heading.setext",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
    scope: "punctuation.definition.bold.markdown",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw",
    scope: "markup.inline.raw.markdown",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw",
    scope: "markup.inline.raw.string.markdown",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
    scope: "punctuation.definition.list.markdown",
    settings: {
      foreground: green,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
    scope: [
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown",
      "punctuation.definition.metadata.markdown",
    ],
    settings: {
      foreground: green,
    },
  },
  {
    name: "beginning.punctuation.definition.list.markdown",
    scope: ["beginning.punctuation.definition.list.markdown"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
    scope: "punctuation.definition.metadata.markdown",
    settings: {
      foreground: green,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
    scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
    settings: {
      foreground: red,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
    scope: "string.other.link.title.markdown,string.other.link.description.markdown",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "Regular Expressions",
    scope: "string.regexp",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "Escape Characters",
    scope: "constant.character.escape",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "Embedded",
    scope: "punctuation.section.embedded, variable.interpolation",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Embedded",
    scope: "punctuation.section.embedded.begin,punctuation.section.embedded.end",
    settings: {
      foreground: red,
    },
  },
  {
    name: "illegal",
    scope: "invalid.illegal",
    settings: {
      foreground: white,
    },
  },
  {
    name: "illegal",
    scope: "invalid.illegal.bad-ampersand.html",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Broken",
    scope: "invalid.broken",
    settings: {
      foreground: white,
    },
  },
  {
    name: "Deprecated",
    scope: "invalid.deprecated",
    settings: {
      foreground: white,
    },
  },
  {
    name: "Unimplemented",
    scope: "invalid.unimplemented",
    settings: {
      foreground: white,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    settings: {
      foreground: green,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
    scope:
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
    scope:
      "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "[VSCODE-CUSTOM] JSON Property Name",
    scope: "support.type.property-name.json",
    settings: {
      foreground: green,
    },
  },
  {
    name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
    scope: "support.type.property-name.json punctuation",
    settings: {
      foreground: green,
    },
  },
  {
    name: "laravel blade tag",
    scope: "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    settings: {
      foreground: red,
    },
  },
  {
    name: "laravel blade @",
    scope: "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    settings: {
      foreground: red,
    },
  },
  {
    name: "use statement for other classes",
    scope:
      "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "error suppression",
    scope: "keyword.operator.error-control.php",
    settings: {
      foreground: red,
    },
  },
  {
    name: "php instanceof",
    scope: "keyword.operator.type.php",
    settings: {
      foreground: red,
    },
  },
  {
    name: "style double quoted array index normal begin",
    scope: "punctuation.section.array.begin.php",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "style double quoted array index normal end",
    scope: "punctuation.section.array.end.php",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "php illegal.non-null-typehinted",
    scope: "invalid.illegal.non-null-typehinted.php",
    settings: {
      foreground: errorRed,
    },
  },
  {
    name: "php types",
    scope:
      "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "php call-function",
    scope: "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "php function-resets",
    scope:
      "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "support php constants",
    scope: "support.constant.core.rust",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "support php constants",
    scope:
      "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "php goto",
    scope: "entity.name.goto-label.php,support.other.php",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "php logical/bitwise operator",
    scope:
      "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "php regexp operator",
    scope: "keyword.operator.regexp.php",
    settings: {
      foreground: red,
    },
  },
  {
    name: "php comparison",
    scope: "keyword.operator.comparison.php",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "php heredoc/nowdoc",
    scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
    settings: {
      foreground: red,
    },
  },
  {
    name: "python function decorator @",
    scope: "meta.function.decorator.python",
    settings: {
      foreground: lime,
    },
  },
  {
    name: "python function support",
    scope: "support.token.decorator.python,meta.function.decorator.identifier.python",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "parameter function js/ts",
    scope: "function.parameter",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "brace function",
    scope: "function.brace",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "parameter function ruby cs",
    scope: "function.parameter.ruby, function.parameter.cs",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "constant.language.symbol.ruby",
    scope: "constant.language.symbol.ruby",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "rgb-value",
    scope: "rgb-value",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "rgb value",
    scope: "inline-color-decoration rgb-value",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "rgb value less",
    scope: "less rgb-value",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "sass selector",
    scope: "selector.sass",
    settings: {
      foreground: green,
    },
  },
  {
    name: "ts primitive/builtin types",
    scope:
      "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "block scope",
    scope: "block.scope.end,block.scope.begin",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "cs storage type",
    scope: "storage.type.cs",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "cs local variable",
    scope: "entity.name.variable.local.cs",
    settings: {
      foreground: green,
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: lime,
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: yellow,
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: errorRed,
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: red,
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
      foreground: red,
    },
  },
  {
    name: "Reset JavaScript string interpolation expression",
    scope: ["meta.template.expression"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Import module JS",
    scope: ["keyword.operator.module"],
    settings: {
      foreground: red,
      fontStyle: "bold",
    },
  },
  {
    name: "js Flowtype",
    scope: ["support.type.type.flowtype"],
    settings: {
      foreground: lime,
    },
  },
  {
    name: "js Flow",
    scope: ["support.type.primitive"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "js class prop",
    scope: ["meta.property.object"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "js func parameter",
    scope: ["variable.parameter.function.js"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "js template literals begin",
    scope: ["keyword.other.template.begin"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "js template literals end",
    scope: ["keyword.other.template.end"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "js template literals variable braces begin",
    scope: ["keyword.other.substitution.begin"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "js template literals variable braces end",
    scope: ["keyword.other.substitution.end"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "js operator.assignment",
    scope: ["keyword.operator.assignment"],
    settings: {
      foreground: violet,
    },
  },
  {
    name: "go operator",
    scope: ["keyword.operator.assignment.go"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "go operator",
    scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
    settings: {
      foreground: red,
    },
  },
  {
    name: "Go package name",
    scope: ["entity.name.package.go"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "elm prelude",
    scope: ["support.type.prelude.elm"],
    settings: {
      foreground: violet,
    },
  },
  {
    name: "elm constant",
    scope: ["support.constant.elm"],
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "template literal",
    scope: ["punctuation.quasi.element"],
    settings: {
      foreground: red,
    },
  },
  {
    name: "html/pug (jade) escaped characters and entities",
    scope: ["constant.character.entity"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: {
      foreground: white,
    },
  },
  {
    name: "Clojure globals",
    scope: ["entity.global.clojure"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Clojure symbols",
    scope: ["meta.symbol.clojure"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Clojure constants",
    scope: ["constant.keyword.clojure"],
    settings: {
      foreground: violet,
    },
  },
  {
    name: "CoffeeScript Function Argument",
    scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Ini Default Text",
    scope: ["source.ini"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Makefile prerequisities",
    scope: ["meta.scope.prerequisites.makefile"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Makefile text colour",
    scope: ["source.makefile"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Groovy import names",
    scope: ["storage.modifier.import.groovy"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Groovy Methods",
    scope: ["meta.method.groovy"],
    settings: {
      foreground: lime,
    },
  },
  {
    name: "Groovy Variables",
    scope: ["meta.definition.variable.name.groovy"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "Groovy Inheritance",
    scope: ["meta.definition.class.inherited.classes.groovy"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "HLSL Semantic",
    scope: ["support.variable.semantic.hlsl"],
    settings: {
      foreground: cyan,
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
      foreground: red,
    },
  },
  {
    name: "SQL Variables",
    scope: ["text.variable", "text.bracketed"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "types",
    scope: ["support.type.swift", "support.type.vb.asp"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "heading 1, keyword",
    scope: ["entity.name.function.xi"],
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "heading 2, callable",
    scope: ["entity.name.class.xi"],
    settings: {
      foreground: violet,
    },
  },
  {
    name: "heading 3, property",
    scope: ["constant.character.character-class.regexp.xi"],
    settings: {
      foreground: green,
    },
  },
  {
    name: "heading 4, type, class, interface",
    scope: ["constant.regexp.xi"],
    settings: {
      foreground: red,
    },
  },
  {
    name: "heading 5, enums, preprocessor, constant, decorator",
    scope: ["keyword.control.xi"],
    settings: {
      foreground: violet,
    },
  },
  {
    name: "heading 6, number",
    scope: ["invalid.xi"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "string",
    scope: ["beginning.punctuation.definition.quote.markdown.xi"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "comments",
    scope: ["beginning.punctuation.definition.list.markdown.xi"],
    settings: {
      foreground: comment,
    },
  },
  {
    name: "link",
    scope: ["constant.character.xi"],
    settings: {
      foreground: lime,
    },
  },
  {
    name: "accent",
    scope: ["accent.xi"],
    settings: {
      foreground: lime,
    },
  },
  {
    name: "wikiword",
    scope: ["wikiword.xi"],
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "language operators like '+', '-' etc",
    scope: ["constant.other.color.rgb-value.xi"],
    settings: {
      foreground: white,
    },
  },
  {
    name: "elements to dim",
    scope: ["punctuation.definition.tag.xi"],
    settings: {
      foreground: comment,
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
      foreground: cyan,
    },
  },
  {
    name: "Markdown underscore-style headers",
    scope: [
      "entity.name.label.cs",
      "markup.heading.setext.1.markdown",
      "markup.heading.setext.2.markdown",
    ],
    settings: {
      foreground: green,
    },
  },
  {
    name: "meta.brace.square",
    scope: [" meta.brace.square"],
    settings: {
      foreground: gray,
    },
  },
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: {
      fontStyle: "italic",
      foreground: comment,
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Quote",
    scope: "markup.quote.markdown",
    settings: {
      foreground: comment,
    },
  },
  {
    name: "punctuation.definition.block.sequence.item.yaml",
    scope: "punctuation.definition.block.sequence.item.yaml",
    settings: {
      foreground: gray,
    },
  },
  {
    scope: ["constant.language.symbol.elixir"],
    settings: {
      foreground: violet,
    },
  },
  {
    name: "js/ts italic",
    scope:
      "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
    settings: {
      foreground: banaf,
    },
  },

  {
    name: "comment",
    scope: "comment.line.double-slash,comment.block.documentation",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Python Keyword Control",
    scope: "keyword.control.import.python,keyword.control.flow.python",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "markup.italic.markdown",
    scope: "markup.italic.markdown",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "typescript interface",
    scope: "storage.type.interface.ts,meta.interface.ts",
    settings: {
      fontStyle: "italic",
      foreground: pinkAlpha,
    },
  },
  {
    name: "typescript type",
    scope: "storage.type.type.ts",
    settings: {
      fontStyle: "italic",
      foreground: pinkAlpha,
    },
  },
  {
    name: "ts primitive/builtin types ",
    scope:
      "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    settings: {
      fontStyle: "italic",
      foreground: olive,
    },
  },
  {
    scope: "entity.name.tag.template.html.vue ",
    settings: {
      foreground: pureBlue,
      fontStyle: "bold",
    },
  },
  {
    scope: "entity.name.tag.script.html.vue",
    settings: {
      foreground: pureRed,
      fontStyle: "bold",
    },
  },
  {
    scope: "entity.name.tag.style.html.vue",
    settings: {
      foreground: lemon,
      fontStyle: "bold",
    },
  },
  {
    scope:
      "storage.type.ts,meta.var.expr.ts,meta.block.ts,meta.arrow.ts,meta.var.expr.ts,source.ts",
    settings: {
      foreground: red,
    },
  },
  {
    name: "interface implementation",
    scope: "interface,entity.name.type.interface,entity.name.type",
    settings: {
      foreground: olive,
      fontStyle: "italic",
    },
  },
  {
    name: "interface,entity.name.type.interface,entity.name.type",
    scope: "variable.language.this.ts",
    settings: {
      foreground: red,
    },
  },
  {
    name: "async awite ",
    scope: "storage.modifier.async.ts,keyword.control.flow.ts",
    settings: {
      foreground: gray,
      fontStyle: "bold",
    },
  },
  {
    name: "true false",
    scope: "constant.language.boolean.true.ts,constant.language.boolean.false.ts",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "class + extend",
    scope: "storage.type.class.ts,storage.modifier.ts",
    settings: {
      foreground: red,
    },
  },
  {
    name: "method",
    scope: "method",
    settings: {
      foreground: green,
    },
  },
  {
    name: "function ",
    scope: "storage.type.function.ts,meta.function.ts,source.ts,storage.type",
    settings: {
      foreground: red,
    },
  },
  {
    name: "variable ",
    scope:
      "variable.other.readwrite.ts,meta.definition.variable.ts,meta.var-single-variable.expr.ts",
    settings: {
      foreground: cyan,
    },
  },
  {
    name: "Control Elements CCCCCSSSSSSSSSSSSSS",
    scope: "control.elements, keyword.operator.less ,keyword.control.at-rule",
    settings: {
      foreground: orchid,
    },
  },
  {
    name: "rgb value less",
    scope: "less rgb-value",
    settings: {
      foreground: orchid,
    },
  },
  {
    name: "sass selector",
    scope: "selector.sass",
    settings: {
      foreground: gold,
    },
  },

  {
    name: "support.constant.property-value.scss",
    scope: "support.constant.property-value.scss,support.constant.property-value.css",
    settings: {
      foreground: foregroundd,
    },
  },
  {
    name: "CSS/SCSS/LESS Operators",
    scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    settings: {
      foreground: fosfor,
    },
  },

  {
    name: "CSS/SCSS/Less property name",
    scope: "support.type.property-name.css",
    settings: {
      foreground: emerald,
    },
  },
  {
    name: "css color standard name",
    scope:
      "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "css comma",
    scope: "punctuation.separator.list.comma.css",
    settings: {
      foreground: gray,
    },
  },
  {
    name: "css attribute-name.id",
    scope: "support.constant.color.w3c-standard-color-name.css",
    settings: {
      foreground: yellow,
    },
  },
  {
    name: "css property-name",
    scope: "support.type.vendored.property-name.css",
    settings: {
      foreground: violet,
    },
  },
  {
    name: "css html tags names",
    scope: "entity.name.tag.css",
    settings: {
      foreground: white,
      fontStyle: "bold",
    },
  },

  {
    name: "important keyword",
    scope: "keyword.other.important.scss,keyword.other.important.css",
    settings: {
      foreground: coral,
      fontStyle: "bold",
    },
  },
  {
    name: "parent reference & ",
    scope: "entity.name.tag.reference.scss",
    settings: {
      foreground: fosfor,
      fontStyle: "bold",
    },
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: {
      foreground: orchid,
    },
  },
  {
    name: "Attribute IDs",
    scope: "entity.other.attribute-name.id.css",
    settings: {
      fontStyle: "bold",
      foreground: skyBlue,
    },
  },
  {
    name: "Attribute class",
    scope: "entity.other.attribute-name.class.css",
    settings: {
      fontStyle: "bold",
      foreground: gold,
    },
  },

  {
    name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: {
      foreground: coral,
    },
  },
  {
    name: "css functions",
    scope: "support.function.misc.scss",
    settings: {
      foreground: skyBlue,
    },
  },
];
