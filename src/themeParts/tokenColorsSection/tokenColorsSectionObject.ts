import type { TColorPalette, TTextMateRule } from "@/types/colors";

import general from "./parts/general";
import html from "./parts/html";
import css from "./parts/css";
import ts from "./parts/ts";
import md from "./parts/md";
import vue from "./parts/vue";
import json from "./parts/json";
import java from "./parts/java";
import python from "./parts/python";
import php from "./parts/php";
import otherLangs from "./parts/otherLangs";

export default function colorsSectionObject(palette: TColorPalette): TTextMateRule[] {
  return {
    ...general(palette),
    ...otherLangs(palette),
    ...php(palette),
    ...python(palette),
    ...java(palette),
    ...json(palette),
    ...md(palette),
    ...vue(palette),
    ...html(palette),
    ...css(palette),
    ...ts(palette),
  };
}
