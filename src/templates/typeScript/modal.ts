import { App, normalizePath, Platform, TFolder, Notice, Modal, setIcon, Plugin } from "obsidian";
import { path } from '../util/utils';
import svgElements from "./svg";
import { templates, clusterTemplate, orphanTemplate } from "./templates";
import { NewFileLocation } from '../util/U';
import renamer2 from "./renamer2";



const clusters = "CLUSTERS"
const orphans = "ORPHANS"
export default class familyModal extends Modal {
  app: App;
  plugin: Plugin
  mode: NewFileLocation;
  folder: TFolder;
  newDirectoryPath: string;
  inputEl: HTMLInputElement;
  shouldMakeDir: string | undefined;
  inputListener: any;
  createType: string;
  graphActiveFile: any
  constructor(plugin: Plugin, mode: NewFileLocation, createType: string, graphActiveFile: any) {

    super(plugin.app);
    this.app = plugin.app;
    this.graphActiveFile = graphActiveFile
    this.createType = createType;
    this.mode = mode;
    this.plugin = plugin

    //#region Create input
    this.inputEl = document.createElement('input');
    this.inputEl.type = 'text';
    this.inputEl.className = 'prompt-input';
    //#endregion

    //#region Make modal
    this.modalEl.className = 'prompt';

    // get current active file
    let getActiveFile;
    if (this.graphActiveFile == undefined) {
      // get the active file from current workspace
      getActiveFile = this.app.workspace.getActiveFile();
    } else {
      // pass active file from graph or file tree
      getActiveFile = this.graphActiveFile;
    }


    //svg and placeholders
    if (getActiveFile === null) {
      if (this.createType == true) {
        this.inputEl.placeholder = `Type the new Cluster name`;
        this.modalEl.appendChild(svgElements().cluster());
      } else if (this.createType == "newOrphan") {
        this.inputEl.placeholder = `Type the new Orphan name`;
        this.modalEl.appendChild(svgElements().orphan());
      } else {
        this.inputEl.addClasses(["prompt-input", "inputDelete"])
        this.modalEl.appendChild(svgElements().noThing());
        const text = document.createElement('div');
        text.innerText = `Child ?! Sibling ?! of what??\nNo active file in the work space, Press ESC`
        text.addClass("nothingMsg")

        this.modalEl.appendChild(text);
      }
    }

}