import ThemeClass from "./themeClass";
import { palettes } from "@/palettes";
import U from "./util/U";

const nightVali = new ThemeClass(palettes.base);
const nightValiResult = nightVali.themeResult("nightVali");
U.writeThemeToJson(nightValiResult, "night-vali-theme");

const nightShift = new ThemeClass(palettes.base);
const nightShiftResult = nightShift.themeResult("Night Shift");
U.writeThemeToJson(nightShiftResult, "night-shift-theme");

const glass = new ThemeClass(palettes.glass);
const glassResult = glass.themeResult("Glass");
U.writeThemeToJson(glassResult, "glass-theme");
