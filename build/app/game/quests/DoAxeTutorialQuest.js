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
exports.DoAxeTutorialQuest = void 0;
const GetInventorySlots_1 = require("../../../utils/game/GetInventorySlots");
const Click_1 = require("../../../utils/game/Click");
const UpdateQuests_1 = require("../../../utils/game/UpdateQuests");
const SkipDialog_1 = require("../../../utils/game/SkipDialog");
const Move_1 = require("../../../utils/game/Move");
const GotoDrunkenGoose_1 = require("../../browser/GotoDrunkenGoose");
const WaitForLoad_1 = require("../../../utils/WaitForLoad");
function DoAxeTutorialQuest(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        const { axe } = yield (0, GetInventorySlots_1.GetInventorySlots)(gamePage);
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 3000);
        yield (0, Move_1.Move)(gamePage, "S", 3000);
        yield (0, Click_1.Click)(gamePage, 1, 720, 590);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield gamePage.waitForTimeout(2000);
        yield axe.click();
        yield (0, Click_1.Click)(gamePage, 1, 705, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 865, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 705, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 865, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 705, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 865, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 705, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 865, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 705, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 865, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 705, 380);
        yield gamePage.waitForTimeout(300);
        yield (0, Click_1.Click)(gamePage, 1, 865, 380);
        yield gamePage.waitForTimeout(300);
        yield axe.click();
        yield gamePage.waitForTimeout(1000);
        yield (0, Move_1.Move)(gamePage, "W", 250);
        yield (0, Move_1.Move)(gamePage, "A", 1000);
        yield (0, Move_1.Move)(gamePage, "D", 3000);
        yield gamePage.waitForTimeout(2000);
        yield (0, Move_1.Move)(gamePage, "S", 250);
        yield (0, Move_1.Move)(gamePage, "A", 2000);
        yield gamePage.waitForTimeout(2000);
        yield (0, Click_1.Click)(gamePage, 1, 720, 590);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield gamePage.waitForTimeout(1000);
        yield gamePage.reload();
        return yield (0, UpdateQuests_1.UpdateQuests)(account, true);
    });
}
exports.DoAxeTutorialQuest = DoAxeTutorialQuest;
