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
exports.DoBarneyTutorialQuest = void 0;
const GetInventorySlots_1 = require("../../../utils/game/GetInventorySlots");
const Click_1 = require("../../../utils/game/Click");
const UpdateQuests_1 = require("../../../utils/game/UpdateQuests");
const SkipDialog_1 = require("../../../utils/game/SkipDialog");
function DoBarneyTutorialQuest(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        const { wateringCan, shears, seeds } = yield (0, GetInventorySlots_1.GetInventorySlots)(gamePage);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield wateringCan.click();
        yield (0, Click_1.Click)(gamePage, 1, 700, 330);
        yield gamePage.waitForTimeout(500);
        yield (0, Click_1.Click)(gamePage, 1, 860, 330);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield wateringCan.click();
        yield (0, Click_1.Click)(gamePage, 1, 700, 330);
        yield wateringCan.click();
        yield gamePage.waitForTimeout(500);
        yield (0, Click_1.Click)(gamePage, 1, 860, 330);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield shears.click();
        yield (0, Click_1.Click)(gamePage, 1, 700, 330);
        yield shears.click();
        yield gamePage.waitForTimeout(500);
        yield (0, Click_1.Click)(gamePage, 1, 860, 330);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield shears.click();
        yield (0, Click_1.Click)(gamePage, 1, 700, 330);
        yield shears.click();
        yield gamePage.waitForTimeout(500);
        yield seeds.click();
        yield (0, Click_1.Click)(gamePage, 1, 710, 370);
        yield seeds.click();
        yield gamePage.waitForTimeout(500);
        yield (0, Click_1.Click)(gamePage, 1, 860, 330);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield gamePage.reload();
        return yield (0, UpdateQuests_1.UpdateQuests)(account);
    });
}
exports.DoBarneyTutorialQuest = DoBarneyTutorialQuest;
