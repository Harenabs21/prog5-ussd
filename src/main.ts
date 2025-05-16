import readline from "readline";
import { MainMenu } from "./menu";
import { MAIN_MENU_OPTIONS, SUB_MENU_OPTIONS } from "./constants";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainMenu = new MainMenu(MAIN_MENU_OPTIONS, SUB_MENU_OPTIONS, rl);

mainMenu.start();
