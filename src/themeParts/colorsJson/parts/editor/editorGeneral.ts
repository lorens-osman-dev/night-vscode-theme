import { alpha, colors } from "@/themeParts/colorsObject/colorsObject";
import diffEditor from "./diffEditor";
import editorHoverWidget from "./editorHoverWidget";
import editorMarkerNavigation from "./editorMarkerNavigation";
import editorSuggestWidget from "./editorSuggestWidget";
import merge from "./merge";
import minimap from "./minimap";
import peekView from "./peekView";

const editor = {};

const editorGeneral = {
  ...diffEditor,
  ...editorHoverWidget,
  ...editorMarkerNavigation,
  ...editorSuggestWidget,
  ...merge,
  ...minimap,
  ...peekView,
  "editor.background": colors.base.background,
  "editor.foreground": colors.base.foreground,
  "editorLineNumber.foreground": colors.base.comments,
  "editorCursor.foreground": "#ff5400",
  "editorCursor.background": colors.base.transparent,
  "editor.selectionBackground": "#264f78",
  "editor.inactiveSelectionBackground": "#3a3d41",
  "editorWhitespace.foreground": "#e3e4e229",
  "editor.selectionHighlightBackground": "#add6ff26",
  "editor.selectionHighlightBorder": "#495F77",
  "editor.findMatchBackground": "#386496",
  "editor.findMatchBorder": "#74879f",
  "editor.findMatchHighlightBackground": "#00ea1a55",
  "editor.findMatchHighlightBorder": colors.base.transparent,
  "editor.findRangeHighlightBackground": "#3a3d4166",
  "editor.findRangeHighlightBorder": colors.base.transparent,
  "editor.rangeHighlightBackground": "#ffffff0b",
  "editor.rangeHighlightBorder": colors.base.transparent,
  "editor.hoverHighlightBackground": "#264f7840",
  "editor.wordHighlightStrongBackground": "#004972b8",
  "editor.wordHighlightBackground": "#575757b8",
  "editor.lineHighlightBackground": "#ffffff0A",
  "editor.lineHighlightBorder": colors.base.transparent,
  "editorLineNumber.activeForeground": colors.base.foreground,
  "editorLink.activeForeground": "#4e94ce",
  "editorIndentGuide.background": "#64748b62",
  "editorIndentGuide.activeBackground": colors.base.comments,
  "editorRuler.foreground": colors.base.comments,
  "editorBracketMatch.background": "#0064001a",
  "editorBracketMatch.border": colors.base.comments,
  "editor.foldBackground": "#264f784d",
  "editorOverviewRuler.background": colors.base.transparent,
  "editorOverviewRuler.border": colors.base.transparent,
  "editorError.foreground": colors.base.red,
  "editorError.background": colors.base.transparent,
  "editorError.border": colors.base.transparent,
  "editorWarning.foreground": alpha(colors.base.yellow, 0.314),
  "editorWarning.background": colors.base.transparent,
  "editorWarning.border": colors.base.transparent,
  "editorInfo.foreground": colors.base.greenSecond,
  "editorInfo.background": colors.base.transparent,
  "editorInfo.border": colors.base.transparent,
  "editorGutter.background": colors.base.background,
  "editorGutter.modifiedBackground": "#0c7d9d",
  "editorGutter.addedBackground": "#587c0c",
  "editorGutter.deletedBackground": "#94151b",
  "editorGutter.foldingControlForeground": "#c5c5c5",
  "editorCodeLens.foreground": "#999999",

  "editorGutter.commentRangeForeground": "#c5c5c5",
};

export default editorGeneral;
