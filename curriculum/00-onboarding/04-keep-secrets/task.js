// Hesla nikdy na GitHub                                            Guided (s návodem)
//
// Cíl: tajný soubor nikdy neodejde na GitHub. Víš, co .gitignore chrání a co ne.
//
// .gitignore v root (kořeni) repa říká gitu: tyhle soubory nesleduj.
// Příkazy spouštěj v root repa.
// <soubor> = curriculum/00-onboarding/04-keep-secrets/task.js
// Start a Konec: README.md → Onboarding.
//
// Kroky:
//   1. Start jako vždy. Branch (větev): training/keep-secrets
//   2. Přečti .gitignore. Odpověz na otázku 1.
//   3. V root vytvoř .env s řádkem API_KEY=test-123 (vymyšlený klíč). git status. Vidíš .env?.env je v .gitignore, takže ho git status nezobrazuje, soubor ale může být ve složce dál — ignorování ho nemaže.
//   4. V root vytvoř password.txt s řádkem banana123. git status. Pod jakým nadpisem je? Commits.md
//   5. Do commitu (uložení změn) jde jen <soubor>: git add <soubor>. training/keep-secrets
//      git diff --staged. Je tam password.txt? ne je to Untracked files
//   6. Smaž password.txt v editoru. .env nech, git ho nevidí. git status.
//   7. Odpověz na zbylé otázky. Konec jako vždy.
//
// Proč na tom záleží: co je jednou na GitHubu, může vidět každý. Uniklé heslo se musí změnit.

console.log("Never push secrets.");

// --- Otázky: odpověz pod každou ---

// 1. Které řádky jsou v .gitignore? Proč tam asi je každý?
// Odpověď: .tasks/ — pracovní soubory s plány, úkoly a poznámkami, CLAUDE.local.md a .claude/settings.local.json — osobní nastavení Claude Code., .claude/settings.local.json, .env — místní nastavení, které může obsahovat tajné údaje, například API klíč., node_modules/ — stažené knihovny projektu., .DS_Store — pomocný soubor, který vytváří Finder v macOS.
// 2. Proč git status ukázal password.txt, ale .env ne?
// Odpověď: .env je v .gitignore, takže ho git status nezobrazuje, soubor ale může být ve složce dál — ignorování ho nemaže.

// 3. password.txt už je v commitu na GitHubu. Pak ho dáš do .gitignore. Je heslo v bezpečí? Proč?
// Odpověď: .env je v .gitignore, takže ho git status nezobrazí, Soubor ale může být ve složce dál — ignorování ho nemaže, samotné přidání  hesla do .gitignore ho nezabezpečí

// 4. Omylem pošleš na GitHub skutečné heslo. Co uděláš jako první?
// Odpověď: heslo změním a Api klíč zruším a vytvořím nový

// Hotovo, když: PR (žádost o sloučení) je merged (sloučený) a git status na main neukáže .env.
