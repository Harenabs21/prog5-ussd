import { displayMenu } from './menu'
import { handleChoice } from'./menu'
import  readline  from 'readline';
import { mainMenuOptions } from './constants'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mainMenu(options: Record<string, string>): void {
    displayMenu(options);
    rl.question("Choisissez une option : ", (choice: string) => {
        handleChoice(choice, options);
        if (choice === "9") {
            console.log("Merci d'avoir utilisé notre application !");
            rl.close();
            return;
        }
        mainMenu(options);
    });
}

mainMenu(mainMenuOptions)
