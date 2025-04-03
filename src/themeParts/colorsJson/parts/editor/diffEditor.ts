import { alpha, colors } from "@/themeParts/colorsObject/colorsObject";

const diffEditor = {
  "diffEditor.insertedTextBackground": alpha(colors.base.green, 0.2),
  "diffEditor.removedTextBackground": alpha(colors.base.red, 0.2),
  "diffEditor.border": "#444444",
};

export default diffEditor;
