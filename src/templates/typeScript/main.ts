import { Plugin, TFile } from "obsidian";
import  P from "src/util/P";
import { settingTab, DEFAULT_SETTINGS, clusterPluginSettings } from "./src/settings/settings";

// 1. instanceof operator (keyword.operator.expression.instanceof)
const isString = "hello" instanceof String; // Checks type at runtime

// 2. new operator (keyword.operator.new)
var date = new Date(); // Creates an instance

// 3. Ternary operator (keyword.operator.ternary)
const age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // Conditional expression
canVote
// 4. Optional chaining (keyword.operator.optional)
interface User {
  address?: {
    street?: string;
	age:number
  };
}
const user: User = {};
const street = user.address?.street; // Safe property access

// 11. typeof (keyword.operator.expression.typeof)
const type = typeof "ff";

// 5. keyof operator (keyword.operator.expression.keyof)
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"

// 6. delete (keyword.operator.expression.delete)
const obj = { x: 10, y: 20 };
delete obj.x; // Removes property 'x'

// 7. in (keyword.operator.expression.in)
const hasY = 'y' in obj; // Checks if property exists (true)

// 8. of (keyword.operator.expression.of) 
for (const num of [1, 2, 3]) {} // Iterates iterables (arrays, strings, etc.)


// 12. void (keyword.operator.expression.void)
void alert("Side effect!"); // Evaluates expression, returns undefined


export default class clusterPlugin extends Plugin {
	settings: clusterPluginSettings;

	async onload() {
		console.log("loading Cluster plugin");
		const file = this.app.workspace.getActiveFile() as TFile;

		await this.loadSettings();
		this.addSettingTab(new settingTab(this.app, this));


		file ? await P.buttonsLine(this, file, this.settings) : null;
		P.addEvents(this)
		P.addRibbonIcon(this);
		setTimeout(() => P.newNavTreeStart(this), 500)
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}


}
console.log("safdasf",age)
const renamer = async (plugin: Plugin, getActiveFile: TFile) => {
	const partsOfPath = getActiveFile.path.split("/")
	const renamedFile: RenamedItem<TAbstractFile> = {
	  file: getActiveFile,
	  oldPath: getActiveFile.path,
	  oldParent: partsOfPath[partsOfPath.length - 2],
	  newPath: getActiveFile.path,
	  newParent: getActiveFile.parent?.name as string
	}
	await renamer(plugin, renamedFile)
	return
  }
