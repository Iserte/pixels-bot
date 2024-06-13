/*
  Warnings:

  - Added the required column `wallet` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "isVip" BOOLEAN NOT NULL DEFAULT false,
    "energy" INTEGER NOT NULL DEFAULT 1000,
    "coin" INTEGER NOT NULL DEFAULT 0,
    "pixel" INTEGER NOT NULL DEFAULT 0,
    "currentSeed" TEXT NOT NULL DEFAULT 'Popberry Seeds',
    "seeds" INTEGER NOT NULL DEFAULT 0,
    "landOneState" TEXT NOT NULL DEFAULT 'EMPTY',
    "landOneUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "landTwoState" TEXT NOT NULL DEFAULT 'EMPTY',
    "landTwoUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "landThreeState" TEXT NOT NULL DEFAULT 'EMPTY',
    "landThreeUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "energyUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vipUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mailUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carnivalUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nuCyberFirstRun" BOOLEAN NOT NULL DEFAULT true,
    "nuCyberUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Account" ("carnivalUpdate", "coin", "currentSeed", "energy", "energyUpdate", "id", "isVip", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "mailUpdate", "name", "nuCyberFirstRun", "nuCyberUpdate", "pixel", "seeds", "vipUpdate") SELECT "carnivalUpdate", "coin", "currentSeed", "energy", "energyUpdate", "id", "isVip", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "mailUpdate", "name", "nuCyberFirstRun", "nuCyberUpdate", "pixel", "seeds", "vipUpdate" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_name_key" ON "Account"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
