-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Account" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "energy" INTEGER NOT NULL DEFAULT 1000,
    "coin" INTEGER NOT NULL DEFAULT 0,
    "pixel" INTEGER NOT NULL DEFAULT 0,
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
    "carnivalUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Account" ("carnivalUpdate", "energy", "energyUpdate", "id", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "mailUpdate", "name", "pixel", "seeds", "vipUpdate") SELECT "carnivalUpdate", "energy", "energyUpdate", "id", "landOneState", "landOneUpdate", "landThreeState", "landThreeUpdate", "landTwoState", "landTwoUpdate", "mailUpdate", "name", "pixel", "seeds", "vipUpdate" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_name_key" ON "Account"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
