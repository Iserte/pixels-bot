"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCarnivalReady = void 0;
function isCarnivalReady(account) {
    if (!account.isCarnivalActive)
        return false;
    return new Date() > account.carnivalUpdate;
}
exports.isCarnivalReady = isCarnivalReady;
