import type { THexColor, TColorPalette, TTextMateRule } from "./types/colors";
import colorsSectionObject from "./themeParts/colorsSection/colorsSectionObject";
import tokenColorsSectionObject from "./themeParts/tokenColorsSection/tokenColorsSectionObject";

export default class ThemeClass {
  colorPallette: TColorPalette;
  colorsSectionObject: { [key: string]: THexColor };
  colorsSectionJson: string;
  tokenColorsSectionObject: TTextMateRule[];
  tokenColorsSectionJson: string;
  constructor(palette: TColorPalette) {
    this.colorPallette = palette;

    this.colorPallette.strings = this.colorPallette.yellow;
    this.colorPallette.numbers = this.colorPallette.purple;
    this.colorPallette.variables = this.colorPallette.foreground;
    this.colorPallette.properties = this.colorPallette.foreground;
    this.colorPallette.keywords = this.colorPallette.greenSecond;
    this.colorPallette.classes = this.colorPallette.blue;
    this.colorPallette.constants = this.colorPallette.blue;
    this.colorPallette.functions = this.colorPallette.green;
    this.colorPallette.methods = this.colorPallette.green;
    this.colorPallette.operators = this.colorPallette.red;
    this.colorPallette.specialFunctions = this.colorPallette.red;

    this.colorsSectionObject = colorsSectionObject(this.colorPallette);
    this.colorsSectionJson = JSON.stringify(this.colorsSectionObject);

    this.tokenColorsSectionObject = tokenColorsSectionObject(this.colorPallette);
    this.tokenColorsSectionJson = JSON.stringify(this.tokenColorsSectionObject);
  }
  themeResult(templateName: string) {
    return {
      name: templateName,
      type: "dark",
      semanticHighlighting: true,
      colors: this.colorsSectionObject,
      tokenColors: this.tokenColorsSectionObject,
    };
  }
}
