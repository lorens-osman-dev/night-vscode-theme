import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";
import diffEditor from "./diffEditor";
import editorHoverWidget from "./editorHoverWidget";
import editorMarkerNavigation from "./editorMarkerNavigation";
import editorSuggestWidget from "./editorSuggestWidget";
import merge from "./merge";
import minimap from "./minimap";
import peekView from "./peekView";

export default function editorGeneral(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    ...diffEditor(palette),
    ...editorHoverWidget(palette),
    ...editorMarkerNavigation(palette),
    ...editorSuggestWidget(palette),
    ...merge(palette),
    ...minimap(palette),
    ...peekView(palette),
    "editor.background": palette.background,
    "editor.foreground": palette.foreground,
    "editorLineNumber.foreground": palette.comments,
    "editorCursor.foreground": "#ff5400",
    "editorCursor.background": palette.transparent,
    "editor.selectionBackground": "#264f78",
    "editor.inactiveSelectionBackground": "#3a3d41",
    "editorWhitespace.foreground": "#e3e4e229",
    "editor.selectionHighlightBackground": "#add6ff26",
    "editor.selectionHighlightBorder": "#495F77",
    "editor.findMatchBackground": "#386496",
    "editor.findMatchBorder": "#74879f",
    "editor.findMatchHighlightBackground": "#00ea1a55",
    "editor.findMatchHighlightBorder": palette.transparent,
    "editor.findRangeHighlightBackground": "#3a3d4166",
    "editor.findRangeHighlightBorder": palette.transparent,
    "editor.rangeHighlightBackground": "#ffffff0b",
    "editor.rangeHighlightBorder": palette.transparent,
    "editor.hoverHighlightBackground": "#264f7840",
    "editor.wordHighlightStrongBackground": "#004972b8",
    "editor.wordHighlightBackground": "#575757b8",
    "editor.lineHighlightBackground": "#ffffff0A",
    "editor.lineHighlightBorder": palette.transparent,
    "editorLineNumber.activeForeground": palette.foreground,
    "editorLink.activeForeground": "#4e94ce",
    "editorIndentGuide.background": "#64748b62",
    "editorIndentGuide.activeBackground": palette.comments,
    "editorRuler.foreground": palette.comments,
    "editorBracketMatch.background": "#0064001a",
    "editorBracketMatch.border": palette.comments,
    "editor.foldBackground": "#264f784d",
    "editorOverviewRuler.background": palette.transparent,
    "editorOverviewRuler.border": palette.transparent,
    "editorError.foreground": palette.red,
    "editorError.background": palette.transparent,
    "editorError.border": palette.transparent,
    "editorWarning.foreground": U.alpha(palette.yellow, 0.314),
    "editorWarning.background": palette.transparent,
    "editorWarning.border": palette.transparent,
    "editorInfo.foreground": palette.greenSecond,
    "editorInfo.background": palette.transparent,
    "editorInfo.border": palette.transparent,
    "editorGutter.background": palette.background,
    "editorGutter.modifiedBackground": "#0c7d9d",
    "editorGutter.addedBackground": "#587c0c",
    "editorGutter.deletedBackground": "#94151b",
    "editorGutter.foldingControlForeground": "#c5c5c5",
    "editorCodeLens.foreground": "#999999",
    "editorGutter.commentRangeForeground": "#c5c5c5",
  };
}
