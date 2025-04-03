import type { TPalette } from "@/types/colors";
import { palettes } from "../palettes";
import U from "./U";

// Function to extract alpha from 8-digit hex
export default function extractAlpha(hexColor, colorName: keyof TPalette) {
  // Remove # if present
  const hex = hexColor.replace("#", "");

  // Get alpha part (last 2 digits)
  const alphaHex = hex.slice(6, 8);

  // Convert to decimal
  const alphaDec = Number.parseInt(alphaHex, 16);

  // Convert to percentage
  const alphaPercent = ((alphaDec / 255) * 100).toFixed(2);
  const inNumber = Number.parseFloat((alphaDec / 255).toFixed(3));
  //@ts-ignore
  const wantedColor = U.alpha(palettes.base[colorName], inNumber);

  if (wantedColor === hexColor.toUpperCase()) {
    console.log("✓✓");
    const resultText = `alpha(colors.nightVali.${colorName}, ${inNumber})`;
    console.log(resultText);
  } else {
    console.log("✗✗");
    console.log("Expected Color:", hexColor.toUpperCase());
    console.log("Result Color:", wantedColor);
  }
}

// Example usage
// extractAlpha("#132132d3", "BackgroundSecond");
