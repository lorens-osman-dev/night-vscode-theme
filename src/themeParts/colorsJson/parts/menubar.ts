import { alpha, colors } from "@/themeParts/colorsObject/colorsObject";

const menubar = {
  "menubar.selectionForeground": colors.base.foreground,
  "menubar.selectionBackground": colors.base.BackgroundSecond,
  "menubar.selectionBorder": colors.base.transparent,
  "menu.foreground": colors.base.foreground,
  "menu.background": colors.base.BackgroundSecond,
  "menu.selectionForeground": colors.base.white,
  "menu.selectionBackground": alpha(colors.base.purple, 0.25),
  "menu.selectionBorder": colors.base.transparent,
  "menu.separatorBackground": colors.base.comments,
  "menu.border": colors.base.background,
};

export default menubar;
