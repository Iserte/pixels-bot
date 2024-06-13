"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCarnivalLandReady = void 0;
const Seeds_1 = require("../../utils/Seeds");
const GetEstimatedEnergy_1 = require("../../utils/game/GetEstimatedEnergy");
const isCarnivalLandReady = (account) => {
    if (account.carnivalLandState === "EMPTY") {
        if (!account.isCarnivalActive)
            return false;
    }
    if (account.carnivalSeedsQuantity <= 100 && account.carnivalLandState === "EMPTY")
        return false;
    const now = new Date();
    const keepEnergy = 200;
    const energy = (0, GetEstimatedEnergy_1.GetEstimatedEnergy)(account);
    const seed = Seeds_1.Seeds.find(seed => seed.name === account.carnivalSeed);
    if (!seed)
        return false;
    if (account.carnivalLandState === 'EMPTY' && energy > keepEnergy) {
        return true;
    }
    if (account.carnivalLandState === 'WATER' && energy > 100 && now > account.carnivalLandUpdate) {
        return true;
    }
    if (account.carnivalLandState === 'FULL' && energy > 100 && now > account.carnivalLandUpdate) {
        return true;
    }
    return false;
};
exports.isCarnivalLandReady = isCarnivalLandReady;
