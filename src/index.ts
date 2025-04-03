import ThemeClass from "./themeClass";
import { palettes } from "@/palettes";
import U from "./util/U";

const nightVali = new ThemeClass(palettes.base);
const nightValiResult = nightVali.themeResult("nightVali");

const nightShift = new ThemeClass(palettes.base);
const nightShiftResult = nightShift.themeResult("Night Shift");

// Call the function to write the themeResult to a JSON file
U.writeThemeToJson(nightValiResult, "night-vali-theme");
U.writeThemeToJson(nightShiftResult, "night-shift-theme");
