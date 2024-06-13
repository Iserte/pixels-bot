-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "wallet" TEXT NOT NULL,
    "vipExpiration" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "levels" TEXT NOT NULL DEFAULT '{}',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "memberships" TEXT NOT NULL DEFAULT '{}',
    "quests" TEXT NOT NULL DEFAULT '{}',
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
    "cityTreeUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mailUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carnivalUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nuCyberFirstRun" BOOLEAN NOT NULL DEFAULT true,
    "nuCyberUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Account" ("carnivalUpdate", "cityTreeUpdate", "coin", "currentSeed", "energy", "energyUpdate", "id", "isActive", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "levels", "mailUpdate", "name", "nuCyberFirstRun", "nuCyberUpdate", "pixel", "quests", "seeds", "vipExpiration", "vipUpdate", "wallet") SELECT "carnivalUpdate", "cityTreeUpdate", "coin", "currentSeed", "energy", "energyUpdate", "id", "isActive", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "levels", "mailUpdate", "name", "nuCyberFirstRun", "nuCyberUpdate", "pixel", "quests", "seeds", "vipExpiration", "vipUpdate", "wallet" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_id_key" ON "Account"("id");
CREATE UNIQUE INDEX "Account_name_key" ON "Account"("name");
CREATE UNIQUE INDEX "Account_wallet_key" ON "Account"("wallet");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
