"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNuCyberCraftReady = void 0;
function isNuCyberCraftReady(account) {
    if (!account.isNuCyberActive)
        return false;
    if (!account.nuCyberCraftAvailable)
        return false;
    if (account.nuCyberFirstRun)
        return false;
    return new Date() > account.nuCyberCraftUpdate;
}
exports.isNuCyberCraftReady = isNuCyberCraftReady;
