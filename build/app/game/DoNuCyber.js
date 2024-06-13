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
exports.DoNuCyber = void 0;
const Click_1 = require("../../utils/game/Click");
const Move_1 = require("../../utils/game/Move");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const GetInventorySlots_1 = require("../../utils/game/GetInventorySlots");
const GotoNuCyber_1 = require("../browser/GotoNuCyber");
const UpdateNuCyber_1 = require("../../utils/game/UpdateNuCyber");
function DoNuCyber(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoNuCyber_1.GotoNuCyber)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 2000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 2400);
        yield (0, Click_1.Click)(gamePage, 1, 450, 210);
        yield gamePage.waitForTimeout(1000);
        yield (0, Click_1.Click)(gamePage, 1, 450, 210);
        yield (0, Move_1.Move)(gamePage, "S", 3000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 5000);
        yield (0, Move_1.Move)(gamePage, "D", 10000);
        const { wateringCan: pendrive } = yield (0, GetInventorySlots_1.GetInventorySlots)(gamePage);
        yield (0, Click_1.Click)(gamePage, 1, 1080, 330);
        yield gamePage.waitForTimeout(1000);
        yield pendrive.click();
        yield (0, Click_1.Click)(gamePage, 1, 1080, 330);
        yield pendrive.click();
        yield gamePage.waitForTimeout(1000);
        yield (0, Click_1.Click)(gamePage, 1, 1080, 330);
        yield gamePage.waitForTimeout(2000);
        yield gamePage.goto("https://play.pixels.xyz/");
        yield gamePage.getByRole("button", { name: "Start Game" }).click();
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        return yield (0, UpdateNuCyber_1.UpdateNuCyber)(account);
    });
}
exports.DoNuCyber = DoNuCyber;
