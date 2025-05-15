export function displayMenu(options: Record<string, string>): void {
    console.log("\n=== Menu Principal ===");
    for (const [key, label] of Object.entries(options)) {
        console.log(`${key}: ${label}`);
    }
    console.log("=======================\n");
}


export function handleChoice(choice: string, options: Record<string, string>): void {
    if (choice in options) {
        console.log(`\nMenu de ${options[choice].toLowerCase()}\n`);
    } else {
        console.log("\nOption invalide. Veuillez réessayer.\n");
    }
}
