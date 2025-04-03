import * as fs from "node:fs";
import * as path from "node:path";
// Function to write the themeResult to a JSON file
function writeThemeToJson(data: any, filename: string): void {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    const projectRoot = path.join(__dirname, "../../themes"); // Go up one level to the project root
    const filePath = path.join(projectRoot, `${filename}.json`);

    fs.writeFileSync(filePath, jsonString);
    console.log(`Successfully wrote theme to ${filename}.json`);
  } catch (err) {
    console.error("Error writing theme to JSON:", err);
  }
}
export default writeThemeToJson;
