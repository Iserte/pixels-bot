"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoRangerDaleQuest = void 0;
const Click_1 = require("../../../utils/game/Click");
const UpdateQuests_1 = require("../../../utils/game/UpdateQuests");
const SkipDialog_1 = require("../../../utils/game/SkipDialog");
const Move_1 = require("../../../utils/game/Move");
function DoRangerDaleQuest(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 4000);
        yield (0, Click_1.Click)(gamePage, 1, 1020, 330);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield gamePage.reload();
        return yield (0, UpdateQuests_1.UpdateQuests)(account);
    });
}
exports.DoRangerDaleQuest = DoRangerDaleQuest;
