"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTasksReady = void 0;
function isTasksReady(account) {
    if (!account.tasks || account.tasks.length < 1)
        return true;
    for (const task of account.tasks) {
        if (new Date() > task.expiresAt) {
            return true;
        }
    }
    return false;
}
exports.isTasksReady = isTasksReady;
