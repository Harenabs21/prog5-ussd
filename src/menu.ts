/* eslint-disable @typescript-eslint/no-this-alias */
import readline from "readline";

export class Menu {
  protected options: Record<string, string>;
  protected parentMenu?: Menu;
  protected rl: readline.Interface;

  constructor(options: Record<string, string>, rl: readline.Interface, parentMenu?: Menu) {
    this.options = options;
    this.rl = rl;
    this.parentMenu = parentMenu;
  }

  display(): void {
    console.clear();
    console.log("Veuillez choisir une option :");
    for (const [key, label] of Object.entries(this.options)) {
      console.log(`${key}: ${label}`);
    }
    console.log("0: Retour");
    console.log("00: Menu principal");
  }

  handleChoice(choice: string, rootMenu: Menu): Menu | undefined {
    if (choice === "0") {
      return this.parentMenu || rootMenu;
    } else if (choice === "00") {
      return rootMenu;
    } else if (this.options[choice]) {
      console.log(`Vous avez choisi : ${this.options[choice]}`);
      return undefined; // Fin du menu si une option valide est sélectionnée
    } else {
      console.log("Option invalide. Veuillez réessayer.");
      return this;
    }
  }
}

export class MainMenu extends Menu {
  private subMenus: Record<string, Menu>;

  constructor(
    mainOptions: Record<string, string>,
    subMenuOptions: Record<string, Record<string, string>>,
    rl: readline.Interface
  ) {
    super(mainOptions, rl);
    this.subMenus = this.createSubMenus(subMenuOptions);
  }

  private createSubMenus(subMenuOptions: Record<string, Record<string, string>>): Record<string, Menu> {
    const subMenus: Record<string, Menu> = {};
    for (const [key, options] of Object.entries(subMenuOptions)) {
      subMenus[key] = new Menu(options, this.rl, this);
    }
    return subMenus;
  }

  start(): void {
    let currentMenu: Menu | undefined = this;
    const rootMenu = this;

    const promptUser = () => {
      if (currentMenu) {
        currentMenu.display();
        this.rl.question("Votre choix : ", (choice) => {
          const nextMenu = currentMenu?.handleChoice(choice, rootMenu);
          currentMenu = this.subMenus[choice] || nextMenu;
          if (!currentMenu) {
            console.log("Merci d'avoir utilisé notre service !");
            this.rl.close();
          } else {
            promptUser();
          }
        });
      }
    };

    promptUser();
  }
}
