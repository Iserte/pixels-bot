"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGetMyEggsReady = void 0;
const AddSeconds_1 = require("../../utils/AddSeconds");
function isGetMyEggsReady(account) {
    if (!account.eggs)
        return true;
    const eggFirstLand = account.eggs.find(egg => egg.landId === 1385);
    const eggLastLand = account.eggs.find(egg => egg.landId === 1412);
    if (!eggFirstLand || !eggLastLand)
        return true;
    if (eggFirstLand && eggLastLand) {
        return (new Date() > (0, AddSeconds_1.AddSeconds)(eggFirstLand.landUpdate, 5 * 60)
            &&
                new Date() > (0, AddSeconds_1.AddSeconds)(eggLastLand.landUpdate, -(10 * 60)));
    }
    return false;
}
exports.isGetMyEggsReady = isGetMyEggsReady;
