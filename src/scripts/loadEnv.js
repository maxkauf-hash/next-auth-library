// scripts/loadEnv.js

require("dotenv").config();
console.log("Les variables d'environnement ont été chargées avec succès.");
console.log(
  "URL de la base de données:",
  process.env.DATABASE_URL || "Non définie"
);
