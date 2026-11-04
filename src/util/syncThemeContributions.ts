import * as fs from "node:fs";
import * as path from "node:path";

type ThemeContribution = {
  label: string;
  uiTheme: "vs-dark";
  path: string;
};

type PackageManifest = {
  contributes?: {
    themes?: ThemeContribution[];
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

function syncThemeContributions(themes: ThemeContribution[]): void {
  const packagePath = path.join(__dirname, "../../package.json");
  const manifest = JSON.parse(fs.readFileSync(packagePath, "utf8")) as PackageManifest;

  if (JSON.stringify(manifest.contributes?.themes) === JSON.stringify(themes)) {
    return;
  }

  manifest.contributes = {
    ...manifest.contributes,
    themes,
  };
  fs.writeFileSync(packagePath, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log("Synchronized theme contributions in package.json");
}

export default syncThemeContributions;
