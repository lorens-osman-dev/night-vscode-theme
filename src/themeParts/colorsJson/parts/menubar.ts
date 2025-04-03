import type { TColorPalette, THexColor } from "@/types/colors";
import U from "@/util/U";

export default function menubar(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "menubar.selectionForeground": palette.foreground,
    "menubar.selectionBackground": palette.BackgroundSecond,
    "menubar.selectionBorder": palette.transparent,
    "menu.foreground": palette.foreground,
    "menu.background": palette.BackgroundSecond,
    "menu.selectionForeground": palette.white,
    "menu.selectionBackground": U.alpha(palette.purple, 0.25),
    "menu.selectionBorder": palette.transparent,
    "menu.separatorBackground": palette.comments,
    "menu.border": palette.background,
  };
}
