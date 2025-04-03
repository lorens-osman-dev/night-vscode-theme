import type { TColorPalette, THexColor } from "@/types/colors";

export default function notifications(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    "notifications.foreground": palette.foreground,
    "notifications.background": palette.background,
    "notificationToast.border": palette.comments,
    "notificationsErrorIcon.foreground": palette.red,
    "notificationsWarningIcon.foreground": palette.yellow,
    "notificationsInfoIcon.foreground": palette.blue,
    "notificationCenter.border": palette.transparent,
    "notificationCenterHeader.foreground": palette.foreground,
    "notificationCenterHeader.background": palette.BackgroundSecond,
    "notifications.border": palette.comments,
  };
}
