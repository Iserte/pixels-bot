"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCityTreeReady = void 0;
function isCityTreeReady(account) {
    if (!account.isCityTreeActive)
        return false;
    return new Date() > account.cityTreeUpdate;
}
exports.isCityTreeReady = isCityTreeReady;
