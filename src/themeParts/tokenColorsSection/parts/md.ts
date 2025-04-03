import type { TColorPalette, TTextMateRule } from "@/types/colors";

export default function md(palette: TColorPalette): TTextMateRule[] {
  return [
    {
      name: "markup.italic.markdown",
      scope: "markup.italic.markdown",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Quote",
      scope: "markup.quote.markdown",
      settings: {
        foreground: palette.comments,
      },
    },
    {
      name: "Markdown underscore-style headers",
      scope: ["entity.name.label.cs", "markup.heading.setext.1.markdown", "markup.heading.setext.2.markdown"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "string",
      scope: ["beginning.punctuation.definition.quote.markdown.xi"],
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "comments",
      scope: ["beginning.punctuation.definition.list.markdown.xi"],
      settings: {
        foreground: palette.comments,
      },
    },
    {
      name: "emphasis md",
      scope: "emphasis md",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "Headings",
      scope: "markup.heading",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "Headings",
      scope: "markup.heading punctuation.definition.heading, entity.name.section",
      settings: {
        foreground: palette.green,
      },
    },
    {
      name: "Units",
      scope: "keyword.other.unit",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "Bold",
      scope: "markup.bold,todo.bold",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "Bold",
      scope: "punctuation.definition.bold",
      settings: {
        foreground: palette.blue,
      },
    },
    {
      name: "markup Italic",
      scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
      settings: {
        foreground: palette.greenSecond,
      },
    },

    {
      name: "[VSCODE-CUSTOM] Markdown headings",
      scope: "entity.name.section.markdown",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      scope: "punctuation.definition.heading.markdown",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "punctuation.definition.list.begin.markdown",
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown heading setext",
      scope: "markup.heading.setext",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      scope: "punctuation.definition.bold.markdown",
      settings: {
        foreground: palette.purple,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.markdown",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Inline Raw",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: palette.foreground,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      scope: "punctuation.definition.list.markdown",
      settings: {
        foreground: palette.yellow,
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
        foreground: palette.yellow,
      },
    },
    {
      name: "beginning.punctuation.definition.list.markdown",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      scope: "punctuation.definition.metadata.markdown",
      settings: {
        foreground: palette.yellow,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      scope: "markup.underline.link.markdown,markup.underline.link.image.markdown",
      settings: {
        foreground: palette.greenSecond,
      },
    },
    {
      name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
      scope: "string.other.link.title.markdown,string.other.link.description.markdown",
      settings: {
        foreground: palette.green,
      },
    },
  ];
}
