// scripts/setupEnv.js

const fs = require("fs");
const readline = require("readline");
const path = require("path");

// Fonction pour demander à l'utilisateur le type de base de données
const askDatabaseType = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(
      "Veuillez entrer le type de base de données (postgresql, mysql, sqlite): ",
      (dbType) => {
        rl.close();
        resolve(dbType);
      }
    );
  });
};

// Fonction pour générer le fichier .env
const generateEnvFile = async () => {
  const dbType = await askDatabaseType();
  let defaultUrl;

  switch (dbType) {
    case "postgresql":
      defaultUrl = "postgresql://user:password@localhost:5432/mydb";
      break;
    case "mysql":
      defaultUrl = "mysql://user:password@localhost:3306/mydb";
      break;
    case "sqlite":
      defaultUrl = "file:./dev.db";
      break;
    default:
      console.error("Type de base de données non reconnu.");
      process.exit(1);
  }

  const envContent = `DATABASE_URL=${defaultUrl}\n`;

  const envPath = path.resolve(process.cwd(), ".env");

  fs.writeFileSync(envPath, envContent);
  console.log(
    `Le fichier .env a été créé avec une configuration de base pour ${dbType}.\n` +
      "Veuillez mettre à jour DATABASE_URL dans le fichier .env avec votre URL de base de données réelle."
  );
};

generateEnvFile();
