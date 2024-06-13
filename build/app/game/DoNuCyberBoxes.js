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
exports.DoNuCyberBoxes = void 0;
const Click_1 = require("../../utils/game/Click");
const Move_1 = require("../../utils/game/Move");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const GetInventorySlots_1 = require("../../utils/game/GetInventorySlots");
const GotoNuCyber_1 = require("../browser/GotoNuCyber");
const UpdateNuCyberBoxes_1 = require("../../utils/game/UpdateNuCyberBoxes");
function DoNuCyberBoxes(gamePage, account) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoNuCyber_1.GotoNuCyber)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 8000);
        yield (0, Move_1.Move)(gamePage, "W", 3000);
        const { shears: boxes } = yield (0, GetInventorySlots_1.GetInventorySlots)(gamePage);
        let boxesQuantity;
        try {
            boxesQuantity = Number((_a = (yield boxes.locator("div[class*=Hud_quantity_]").textContent({ timeout: 5000 }))) === null || _a === void 0 ? void 0 : _a.replace("x", ""));
        }
        catch (error) {
            boxesQuantity = 0;
        }
        yield (0, Click_1.Click)(gamePage, 1, 765, 255);
        yield gamePage.waitForTimeout(200);
        let _error = false;
        while (boxesQuantity > 3 && !_error) {
            try {
                yield boxes.click();
                yield (0, Click_1.Click)(gamePage, 1, 765, 255);
                yield boxes.click();
                yield gamePage.waitForTimeout(6000);
                yield (0, Click_1.Click)(gamePage, 1, 765, 255);
                try {
                    boxesQuantity = Number((_b = (yield boxes.locator("div[class*=Hud_quantity_]").textContent())) === null || _b === void 0 ? void 0 : _b.replace("x", ""));
                }
                catch (error) {
                    boxesQuantity = 0;
                }
            }
            catch (error) {
                _error = true;
            }
        }
        yield gamePage.waitForTimeout(2000);
        yield gamePage.goto("https://play.pixels.xyz/");
        yield gamePage.getByRole("button", { name: "Start Game" }).click();
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        return yield (0, UpdateNuCyberBoxes_1.UpdateNuCyberBoxes)(account, boxesQuantity);
    });
}
exports.DoNuCyberBoxes = DoNuCyberBoxes;
