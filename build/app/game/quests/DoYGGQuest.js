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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoYGGQuest = void 0;
const Click_1 = require("../../../utils/game/Click");
const UpdateQuests_1 = require("../../../utils/game/UpdateQuests");
const SkipDialog_1 = require("../../../utils/game/SkipDialog");
const Move_1 = require("../../../utils/game/Move");
const GotoDrunkenGoose_1 = require("../../browser/GotoDrunkenGoose");
const WaitForLoad_1 = require("../../../utils/WaitForLoad");
const path_1 = __importDefault(require("path"));
const image_in_image_1 = require("image-in-image");
const GetInventoryItem_1 = require("../../../utils/game/GetInventoryItem");
function DoYGGQuest(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 16800);
        yield (0, Move_1.Move)(gamePage, "W", 8000);
        yield (0, Move_1.Move)(gamePage, "D", 5000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 10000);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield gamePage.screenshot({
            path: path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "gamePage.png"),
            clip: {
                x: 0, y: 0, width: 1280, height: 720
            },
        });
        const result1 = yield (0, image_in_image_1.findImage)(path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "gamePage.png"), path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "closed-gate.png"), "image/png", "image/png");
        if (!result1.error) {
            yield (0, Click_1.Click)(gamePage, 1, 625, 245);
            yield gamePage.waitForTimeout(2000);
        }
        yield (0, Move_1.Move)(gamePage, "W", 6000);
        yield (0, Move_1.Move)(gamePage, "D", 2000);
        yield (0, Move_1.Move)(gamePage, "W", 3000);
        yield (0, Move_1.Move)(gamePage, "A", 2500);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 1500);
        yield (0, Click_1.Click)(gamePage, 1, 590, 260);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 5000);
        yield (0, Click_1.Click)(gamePage, 1, 565, 260);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield (0, Move_1.Move)(gamePage, "A", 10000);
        yield (0, Click_1.Click)(gamePage, 1, 780, 280);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 5000);
        yield (0, Move_1.Move)(gamePage, "S", 2000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 2000);
        yield (0, Move_1.Move)(gamePage, "S", 2000);
        yield (0, Move_1.Move)(gamePage, "A", 2000);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, Move_1.Move)(gamePage, "A", 8000);
        yield (0, Move_1.Move)(gamePage, "W", 1500);
        yield (0, Click_1.Click)(gamePage, 1, 325, 340);
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 10000);
        yield (0, Move_1.Move)(gamePage, "W", 1500);
        let magnifyingGlass1 = yield (0, GetInventoryItem_1.GetInventoryItem)(gamePage, "Copper Magnifying Glass");
        yield (magnifyingGlass1 === null || magnifyingGlass1 === void 0 ? void 0 : magnifyingGlass1.click());
        yield (0, Click_1.Click)(gamePage, 1, 730, 170);
        yield (magnifyingGlass1 === null || magnifyingGlass1 === void 0 ? void 0 : magnifyingGlass1.click());
        yield gamePage.locator("#game-container").press("B");
        yield gamePage.waitForTimeout(1000);
        yield (0, Move_1.Move)(gamePage, "S", 500);
        yield (0, Move_1.Move)(gamePage, "D", 6800);
        yield (0, Move_1.Move)(gamePage, "W", 8000);
        yield (0, Move_1.Move)(gamePage, "D", 5000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 10000);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield gamePage.screenshot({
            path: path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "gamePage.png"),
            clip: {
                x: 0, y: 0, width: 1280, height: 720
            },
        });
        const result2 = yield (0, image_in_image_1.findImage)(path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "gamePage.png"), path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "closed-gate.png"), "image/png", "image/png");
        if (!result2.error) {
            yield (0, Click_1.Click)(gamePage, 1, 625, 245);
            yield gamePage.waitForTimeout(2000);
        }
        yield (0, Move_1.Move)(gamePage, "W", 6000);
        yield (0, Move_1.Move)(gamePage, "D", 2000);
        yield (0, Move_1.Move)(gamePage, "W", 3000);
        yield (0, Move_1.Move)(gamePage, "A", 2500);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 1500);
        yield (0, Click_1.Click)(gamePage, 1, 590, 260);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 5000);
        yield (0, Click_1.Click)(gamePage, 1, 565, 260);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "A", 2700);
        yield (0, Move_1.Move)(gamePage, "W", 7000);
        yield (0, Move_1.Move)(gamePage, "D", 5500);
        yield (0, Move_1.Move)(gamePage, "W", 4000);
        yield (0, Move_1.Move)(gamePage, "D", 3300);
        yield (0, Move_1.Move)(gamePage, "W", 2000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 3000);
        let pixelsHQKey = yield (0, GetInventoryItem_1.GetInventoryItem)(gamePage, "Pixels HQ Key");
        if (pixelsHQKey) {
            yield pixelsHQKey.click();
            yield (0, Click_1.Click)(gamePage, 1, 670, 280);
            yield pixelsHQKey.click();
            yield gamePage.waitForTimeout(1000);
        }
        yield (0, Click_1.Click)(gamePage, 1, 670, 280);
        yield gamePage.waitForTimeout(1000);
        yield (0, Click_1.Click)(gamePage, 1, 670, 280);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 4000);
        yield (0, Move_1.Move)(gamePage, "A", 1800);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        let magnifyingGlass2 = yield (0, GetInventoryItem_1.GetInventoryItem)(gamePage, "Copper Magnifying Glass");
        yield (magnifyingGlass2 === null || magnifyingGlass2 === void 0 ? void 0 : magnifyingGlass2.click());
        yield (0, Click_1.Click)(gamePage, 1, 550, 170);
        yield (magnifyingGlass2 === null || magnifyingGlass2 === void 0 ? void 0 : magnifyingGlass2.click());
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 16800);
        yield (0, Move_1.Move)(gamePage, "W", 8000);
        yield (0, Move_1.Move)(gamePage, "D", 5000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "D", 10000);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield gamePage.screenshot({
            path: path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "gamePage.png"),
            clip: {
                x: 0, y: 0, width: 1280, height: 720
            },
        });
        const result3 = yield (0, image_in_image_1.findImage)(path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "gamePage.png"), path_1.default.resolve(__dirname, "..", "..", "..", "..", "images", "closed-gate.png"), "image/png", "image/png");
        if (!result3.error) {
            yield (0, Click_1.Click)(gamePage, 1, 625, 245);
            yield gamePage.waitForTimeout(2000);
        }
        yield (0, Move_1.Move)(gamePage, "W", 6000);
        yield (0, Move_1.Move)(gamePage, "D", 2000);
        yield (0, Move_1.Move)(gamePage, "W", 3000);
        yield (0, Move_1.Move)(gamePage, "A", 2500);
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 1500);
        yield (0, Move_1.Move)(gamePage, "A", 5000);
        yield (0, Click_1.Click)(gamePage, 1, 780, 280);
        yield (0, SkipDialog_1.SkipDialog)(gamePage);
        yield gamePage.reload();
        return yield (0, UpdateQuests_1.UpdateQuests)(account);
    });
}
exports.DoYGGQuest = DoYGGQuest;
