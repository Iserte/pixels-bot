"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isShopReady = void 0;
const Seeds_1 = require("../../utils/Seeds");
function isShopReady(account) {
    const seed = Seeds_1.Seeds.find(seed => seed.name === account.currentSeed);
    if (!seed)
        return false;
    if (account.seeds > 60)
        return false;
    if (account.coin < seed.price * 180)
        return false;
    return true;
}
exports.isShopReady = isShopReady;
