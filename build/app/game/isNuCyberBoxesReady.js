"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNuCyberBoxesReady = void 0;
function isNuCyberBoxesReady(account) {
    if (!account.isNuCyberActive)
        return false;
    if (account.nuCyberFirstRun)
        return false;
    return account.nuCyberBoxes > 10;
}
exports.isNuCyberBoxesReady = isNuCyberBoxesReady;
