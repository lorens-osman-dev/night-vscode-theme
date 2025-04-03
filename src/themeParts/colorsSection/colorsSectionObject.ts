import type { TColorPalette, THexColor } from "@/types/colors";
import activityBar from "./parts/activityBar";
import breadcrumb from "./parts/breadcrumb";
import button from "./parts/button";
import editorGeneral from "./parts/editor/editorGeneral";
import general from "./parts/general";
import gitDecoration from "./parts/gitDecoration";
import input from "./parts/input";
import menubar from "./parts/menubar";
import notifications from "./parts/notifications";
import scrollbarSlider from "./parts/scrollbarSlider";
import sideBar from "./parts/sideBar";
import statusBar from "./parts/statusBar";
import tab from "./parts/tab";
import terminal from "./parts/terminal";
import titleBar from "./parts/titleBar";
import widgets from "./parts/widgets";

export default function colorsSectionObject(palette: TColorPalette): { [key: string]: THexColor } {
  return {
    ...general(palette),
    ...activityBar(palette),
    ...sideBar(palette),
    ...editorGeneral(palette),
    ...breadcrumb(palette),
    ...button(palette),
    ...gitDecoration(palette),
    ...input(palette),
    ...menubar(palette),
    ...notifications(palette),
    ...scrollbarSlider(palette),
    ...statusBar(palette),
    ...tab(palette),
    ...terminal(palette),
    ...titleBar(palette),
    ...widgets(palette),
  };
}
