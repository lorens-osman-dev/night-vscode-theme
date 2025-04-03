import { alpha, colors } from "@/themeParts/colorsObject/colorsObject";

const sideBar = {
  "sideBar.background": colors.base.BackgroundSecond,
  "sideBar.foreground": colors.base.foreground,
  "sideBarSectionHeader.background": colors.base.transparent,
  "sideBarSectionHeader.foreground": colors.base.yellow,
  "sideBarSectionHeader.border": colors.base.transparent,
  "sideBarTitle.foreground": colors.base.red,
  "sideBar.border": colors.base.transparent,

  "list.inactiveSelectionBackground": colors.base.background,
  "list.inactiveSelectionForeground": "#cccccc",
  "list.hoverBackground": alpha(colors.base.purple, 0.25),
  "list.hoverForeground": "#cccccc",
  "list.activeSelectionBackground": "#ffffff10",
  "list.activeSelectionForeground": colors.base.white,
  "list.dropBackground": colors.base.transparent,
  "list.highlightForeground": colors.base.foreground,
  "list.focusBackground": colors.base.BackgroundSecond,
  "list.focusForeground": "#cccccc",
  "listFilterWidget.background": "#653723",
  "listFilterWidget.outline": colors.base.transparent,
  "listFilterWidget.noMatchesOutline": colors.base.red,

  "tree.inactiveIndentGuidesStroke": colors.base.transparent,
  "tree.indentGuidesStroke": "#95ff00",

  "sideBar.dropBackground": colors.base.transparent,
};

export default sideBar;
