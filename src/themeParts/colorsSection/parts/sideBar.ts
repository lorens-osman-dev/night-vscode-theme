import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";

export default function sideBar(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "sideBar.background": palette.BackgroundSecond,
    "sideBar.foreground": palette.foreground,
    "sideBarSectionHeader.background": palette.transparent,
    "sideBarSectionHeader.foreground": palette.yellow,
    "sideBarSectionHeader.border": palette.transparent,
    "sideBarTitle.foreground": palette.red,
    "sideBar.border": palette.transparent,

    "list.inactiveSelectionBackground": palette.background,
    "list.inactiveSelectionForeground": "#cccccc",
    "list.hoverBackground": U.alpha(palette.purple, 0.25),
    "list.hoverForeground": "#cccccc",
    "list.activeSelectionBackground": "#ffffff10",
    "list.activeSelectionForeground": palette.white,
    "list.dropBackground": palette.transparent,
    "list.highlightForeground": palette.foreground,
    "list.focusBackground": palette.BackgroundSecond,
    "list.focusForeground": "#cccccc",
    "listFilterWidget.background": "#653723",
    "listFilterWidget.outline": palette.transparent,
    "listFilterWidget.noMatchesOutline": palette.red,

    "tree.inactiveIndentGuidesStroke": palette.transparent,
    "tree.indentGuidesStroke": "#95ff00",

    "sideBar.dropBackground": palette.transparent,
  };
}
