import type { TColorPalette, THexColor } from "@/types/colors";

export default function statusBar(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "statusBar.foreground": palette.white,
    "statusBar.background": palette.background,
    "statusBarItem.hoverBackground": "#ffffff1f",
    "statusBar.border": palette.transparent,
    "statusBar.debuggingBackground": "#cc6633",
    "statusBar.debuggingForeground": palette.white,
    "statusBar.noFolderBackground": "#68217a",
    "statusBar.noFolderForeground": palette.white,
    "statusBarItem.remoteBackground": "#16825d",
    "statusBarItem.remoteForeground": palette.white,
    "statusBarItem.activeBackground": "#FFFFFF25",
  };
}
