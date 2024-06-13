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
exports.DoNuCyberCraft = void 0;
const Click_1 = require("../../utils/game/Click");
const Move_1 = require("../../utils/game/Move");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const AddSeconds_1 = require("../../utils/AddSeconds");
const GotoNuCyber_1 = require("../browser/GotoNuCyber");
const AddHours_1 = require("../../utils/AddHours");
const AddMinutes_1 = require("../../utils/AddMinutes");
const UpdateNuCyberCraft_1 = require("../../utils/game/UpdateNuCyberCraft");
function DoNuCyberCraft(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoNuCyber_1.GotoNuCyber)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 2000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield (0, Move_1.Move)(gamePage, "D", 3000);
        yield (0, Move_1.Move)(gamePage, "S", 400);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 5000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 2000);
        yield (0, Click_1.Click)(gamePage, 1, 600, 500);
        yield gamePage.waitForTimeout(500);
        try {
            yield (0, Click_1.Click)(gamePage, 1, 600, 500, 2000);
        }
        catch (error) { }
        let craftObject = {
            name: "",
            finishTime: new Date(),
        };
        try {
            yield gamePage.getByText("Recipes", { exact: true }).waitFor({ timeout: 5000 });
        }
        catch (error) {
            craftObject = {
                name: "No Fuel",
                finishTime: new Date(),
            };
        }
        const craftList = yield gamePage.locator("ul").locator("li").all();
        for (const craftItem of craftList) {
            if (craftObject.name.length > 0)
                continue;
            const style = yield craftItem.getAttribute("style");
            if (style === null || style === void 0 ? void 0 : style.includes("grayscale"))
                continue;
            yield craftItem.click();
            const craftName = yield craftItem.textContent();
            if (!craftName)
                continue;
            const craftButton = gamePage.locator("button[class*=Crafting_craftingButton_]");
            if (yield craftButton.isDisabled())
                continue;
            const craftTime = yield gamePage.getByText(/\d+:\d+:\d+/).textContent();
            if (!craftTime)
                continue;
            const [hours, minutes, seconds] = craftTime.split(":");
            let finishTime = new Date();
            finishTime = (0, AddHours_1.AddHours)(finishTime, Number(hours));
            finishTime = (0, AddMinutes_1.AddMinutes)(finishTime, Number(minutes));
            finishTime = (0, AddSeconds_1.AddSeconds)(finishTime, Number(seconds));
            yield craftButton.click();
            craftObject = {
                name: craftName,
                finishTime: finishTime,
            };
        }
        try {
            yield gamePage.waitForTimeout(2000);
            yield gamePage.goto("https://play.pixels.xyz/");
            yield gamePage.getByRole("button", { name: "Start Game" }).click();
            yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        }
        catch (error) { }
        return yield (0, UpdateNuCyberCraft_1.UpdateNuCyberCraft)(account, craftObject);
    });
}
exports.DoNuCyberCraft = DoNuCyberCraft;
