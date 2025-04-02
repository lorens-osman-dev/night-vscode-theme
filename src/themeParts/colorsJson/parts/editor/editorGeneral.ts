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
  "editor.background": colors.nightVali.background,
  "editor.foreground": colors.nightVali.foreground,
  "editorLineNumber.foreground": colors.nightVali.comments,
  "editorCursor.foreground": "#ff5400",
  "editorCursor.background": colors.nightVali.transparent,
  "editor.selectionBackground": "#264f78",
  "editor.inactiveSelectionBackground": "#3a3d41",
  "editorWhitespace.foreground": "#e3e4e229",
  "editor.selectionHighlightBackground": "#add6ff26",
  "editor.selectionHighlightBorder": "#495F77",
  "editor.findMatchBackground": "#386496",
  "editor.findMatchBorder": "#74879f",
  "editor.findMatchHighlightBackground": "#00ea1a55",
  "editor.findMatchHighlightBorder": colors.nightVali.transparent,
  "editor.findRangeHighlightBackground": "#3a3d4166",
  "editor.findRangeHighlightBorder": colors.nightVali.transparent,
  "editor.rangeHighlightBackground": "#ffffff0b",
  "editor.rangeHighlightBorder": colors.nightVali.transparent,
  "editor.hoverHighlightBackground": "#264f7840",
  "editor.wordHighlightStrongBackground": "#004972b8",
  "editor.wordHighlightBackground": "#575757b8",
  "editor.lineHighlightBackground": "#ffffff0A",
  "editor.lineHighlightBorder": colors.nightVali.transparent,
  "editorLineNumber.activeForeground": colors.nightVali.foreground,
  "editorLink.activeForeground": "#4e94ce",
  "editorIndentGuide.background": "#64748b62",
  "editorIndentGuide.activeBackground": colors.nightVali.comments,
  "editorRuler.foreground": colors.nightVali.comments,
  "editorBracketMatch.background": "#0064001a",
  "editorBracketMatch.border": colors.nightVali.comments,
  "editor.foldBackground": "#264f784d",
  "editorOverviewRuler.background": colors.nightVali.transparent,
  "editorOverviewRuler.border": colors.nightVali.transparent,
  "editorError.foreground": colors.nightVali.red,
  "editorError.background": colors.nightVali.transparent,
  "editorError.border": colors.nightVali.transparent,
  "editorWarning.foreground": alpha(colors.nightVali.yellow, 0.314),
  "editorWarning.background": colors.nightVali.transparent,
  "editorWarning.border": colors.nightVali.transparent,
  "editorInfo.foreground": colors.nightVali.greenSecond,
  "editorInfo.background": colors.nightVali.transparent,
  "editorInfo.border": colors.nightVali.transparent,
  "editorGutter.background": colors.nightVali.background,
  "editorGutter.modifiedBackground": "#0c7d9d",
  "editorGutter.addedBackground": "#587c0c",
  "editorGutter.deletedBackground": "#94151b",
  "editorGutter.foldingControlForeground": "#c5c5c5",
  "editorCodeLens.foreground": "#999999",

  "editorGutter.commentRangeForeground": "#c5c5c5",
};

export default editorGeneral;
