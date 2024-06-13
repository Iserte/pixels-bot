/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "vipExpiration" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
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
INSERT INTO "new_Account" ("carnivalUpdate", "coin", "currentSeed", "energy", "energyUpdate", "id", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "mailUpdate", "name", "nuCyberFirstRun", "nuCyberUpdate", "pixel", "seeds", "vipExpiration", "vipUpdate", "wallet") SELECT "carnivalUpdate", "coin", "currentSeed", "energy", "energyUpdate", "id", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "mailUpdate", "name", "nuCyberFirstRun", "nuCyberUpdate", "pixel", "seeds", "vipExpiration", "vipUpdate", "wallet" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_id_key" ON "Account"("id");
CREATE UNIQUE INDEX "Account_name_key" ON "Account"("name");
CREATE UNIQUE INDEX "Account_wallet_key" ON "Account"("wallet");
CREATE TABLE "new_Eggs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "landId" INTEGER NOT NULL,
    "landUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "Eggs_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Eggs" ("accountId", "id", "landId", "landUpdate") SELECT "accountId", "id", "landId", "landUpdate" FROM "Eggs";
DROP TABLE "Eggs";
ALTER TABLE "new_Eggs" RENAME TO "Eggs";
CREATE UNIQUE INDEX "Eggs_landId_accountId_key" ON "Eggs"("landId", "accountId");
CREATE TABLE "new_Tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "itemName" TEXT NOT NULL,
    "itemQuantity" INTEGER NOT NULL,
    "rewardType" TEXT NOT NULL,
    "rewardQuantity" INTEGER NOT NULL,
    "expiresAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" TEXT NOT NULL,
    CONSTRAINT "Tasks_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tasks" ("accountId", "expiresAt", "id", "itemName", "itemQuantity", "rewardQuantity", "rewardType") SELECT "accountId", "expiresAt", "id", "itemName", "itemQuantity", "rewardQuantity", "rewardType" FROM "Tasks";
DROP TABLE "Tasks";
ALTER TABLE "new_Tasks" RENAME TO "Tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
