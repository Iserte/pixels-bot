-- CreateTable
CREATE TABLE "Eggs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "landId" INTEGER NOT NULL,
    "landUpdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountId" INTEGER NOT NULL,
    CONSTRAINT "Eggs_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Eggs_landId_accountId_key" ON "Eggs"("landId", "accountId");
