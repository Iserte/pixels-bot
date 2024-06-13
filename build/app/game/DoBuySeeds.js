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
exports.DoBuySeeds = void 0;
const Click_1 = require("../../utils/game/Click");
const Move_1 = require("../../utils/game/Move");
const GotoDrunkenGoose_1 = require("../browser/GotoDrunkenGoose");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const UpdateSeeds_1 = require("../../utils/game/UpdateSeeds");
function DoBuySeeds(gamePage, tempPage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 6200);
        yield (0, Move_1.Move)(gamePage, "W", 6600);
        yield (0, Move_1.Move)(gamePage, "D", 4800);
        yield (0, Move_1.Move)(gamePage, "W", 4000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 850);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, Move_1.Move)(gamePage, "D", 2500);
        yield (0, Move_1.Move)(gamePage, "A", 300);
        yield (0, Move_1.Move)(gamePage, "W", 3000);
        yield (0, Click_1.Click)(gamePage, 1, 900, 300);
        yield gamePage.getByPlaceholder("Search").fill(`${account.currentSeed}`);
        yield gamePage.locator("div[class*=Store_store-item-container_]").click();
        try {
            yield gamePage.locator("div[class*=Store_store-item-container_]").click({ timeout: 2000 });
        }
        catch (error) { }
        yield gamePage.locator("input[class*=Store_quantity-input_]").clear();
        yield gamePage.locator("input[class*=Store_quantity-input_]").fill(`${600 - account.seeds}`);
        yield gamePage.locator("button[class*=Store_buy-btn_]").click();
        yield gamePage.locator("button[class*=commons_closeBtn_]").click();
        return yield (0, UpdateSeeds_1.UpdateSeeds)(gamePage, tempPage, account);
    });
}
exports.DoBuySeeds = DoBuySeeds;
