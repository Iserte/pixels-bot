"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVipReady = void 0;
const GetEstimatedEnergy_1 = require("../../utils/game/GetEstimatedEnergy");
function isVipReady(account) {
    const now = new Date();
    if (now > account.vipExpiration)
        return false;
    const energy = (0, GetEstimatedEnergy_1.GetEstimatedEnergy)(account);
    if (energy < 600 && now > account.vipUpdate) {
        return true;
    }
    return false;
}
exports.isVipReady = isVipReady;
