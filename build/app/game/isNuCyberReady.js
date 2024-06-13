"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNuCyberReady = void 0;
function isNuCyberReady(account) {
    if (!account.isNuCyberActive)
        return false;
    if (account.nuCyberFirstRun)
        return false;
    return new Date() > account.nuCyberUpdate;
}
exports.isNuCyberReady = isNuCyberReady;
