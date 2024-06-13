"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLandReady = void 0;
const Seeds_1 = require("../../utils/Seeds");
const GetEstimatedEnergy_1 = require("../../utils/game/GetEstimatedEnergy");
const isLandReady = (account, landNumber) => {
    if (account.seeds <= 60)
        return false;
    const now = new Date();
    const keepEnergy = now > account.vipExpiration ? 800 : 400;
    const energy = (0, GetEstimatedEnergy_1.GetEstimatedEnergy)(account);
    const seed = Seeds_1.Seeds.find(seed => seed.name === account.currentSeed);
    if (!seed)
        return false;
    switch (landNumber) {
        case 2130:
            if (account.landOneState === 'EMPTY' && energy > Math.min(800, Math.max(keepEnergy, (seed.energy * 60) + 60))) {
                return true;
            }
            if (account.landOneState === 'FULL' && energy > 70 && now > account.landOneUpdate) {
                return true;
            }
            return false;
        case 2131:
            if (account.landTwoState === 'EMPTY' && energy > Math.min(800, Math.max(keepEnergy, (seed.energy * 60) + 60))) {
                return true;
            }
            if (account.landTwoState === 'FULL' && energy > 70 && now > account.landTwoUpdate) {
                return true;
            }
            return false;
        case 270:
            if (account.landThreeState === 'EMPTY' && energy > Math.min(800, Math.max(keepEnergy, (seed.energy * 60) + 60))) {
                return true;
            }
            if (account.landThreeState === 'FULL' && energy > 70 && now > account.landThreeUpdate) {
                return true;
            }
            return false;
    }
};
exports.isLandReady = isLandReady;
