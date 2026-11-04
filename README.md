# Night VS Code Theme

This project generates a VS Code theme from palette definitions in `src/palettes.ts`.

## Change colors in `src/palettes.ts`

Open `src/palettes.ts` and edit any color value. For example:

```ts
export const palettes: { [key: string]: TColorPalette } = {
  base: {
    background: "#111827",
    foreground: "#cbd5e1",
    blue: "#38bdf8",
    red: "#f87171",
    green: "#34d399",
  },
};
```

To change the theme accent color, update a palette entry like this:

```ts
blue: "#4ea1ff",
background: "#0f172a",
```

When you save the file, the watcher regenerates the theme JSON files automatically.

## Run the theme watcher

From the project root:

```bash
bun run watch
```

This runs the watcher script and rebuilds the theme output whenever files change.

## Debug / preview the extension

In VS Code:

1. Open the Run and Debug panel.
2. Select the launch config for the extension.
3. Press `F5`.

The launch configuration uses the `bun: watch` task, so the theme rebuilds in the background while you test the extension.
If you close the VS Code debug instance, be sure to close its debug terminal as well. because i you opened a new VS Code debug instance on previous terminal it will disappears.

The watcher also synchronizes the `contributes.themes` entries in `package.json` from the theme definitions in `src/index.ts`. Add or remove a theme in that list and the manifest updates automatically.

## Output files

The generated theme files are written to:

- `themes/night-vali-theme.json`
- `themes/night-shift-theme.json`
- `themes/night-glass-theme.json`
- `themes/night-glass2-theme.json`

If you want a different color palette, edit the values in `src/palettes.ts` and then run or keep the watcher active while debugging.
