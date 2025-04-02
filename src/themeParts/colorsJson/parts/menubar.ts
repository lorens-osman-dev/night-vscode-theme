import { alpha, colors } from "@/themeParts/colorsObject/colorsObject";

const menubar = {
  "menubar.selectionForeground": colors.nightVali.foreground,
  "menubar.selectionBackground": colors.nightVali.BackgroundSecond,
  "menubar.selectionBorder": colors.nightVali.transparent,
  "menu.foreground": colors.nightVali.foreground,
  "menu.background": colors.nightVali.BackgroundSecond,
  "menu.selectionForeground": colors.nightVali.white,
  "menu.selectionBackground": alpha(colors.nightVali.purple, 0.25),
  "menu.selectionBorder": colors.nightVali.transparent,
  "menu.separatorBackground": colors.nightVali.comments,
  "menu.border": colors.nightVali.background,
};

export default menubar;
