"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestCompleted = void 0;
function isQuestCompleted(account, questId) {
    var _a;
    const quests = JSON.parse(account.quests);
    return (_a = quests.find(quest => quest.id === questId)) === null || _a === void 0 ? void 0 : _a.isCompleted;
}
exports.isQuestCompleted = isQuestCompleted;
