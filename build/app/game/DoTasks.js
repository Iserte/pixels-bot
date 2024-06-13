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
exports.DoTasks = void 0;
const Click_1 = require("../../utils/game/Click");
const Move_1 = require("../../utils/game/Move");
const GotoDrunkenGoose_1 = require("../browser/GotoDrunkenGoose");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const path_1 = __importDefault(require("path"));
const image_in_image_1 = require("image-in-image");
const AddSeconds_1 = require("../../utils/AddSeconds");
const UpdateTasks_1 = require("../../utils/game/UpdateTasks");
function DoTasks(gamePage, account) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        function StartFromBegin() {
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
            });
        }
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield gamePage.waitForTimeout(3000);
        yield gamePage.screenshot({
            path: path_1.default.resolve(__dirname, "..", "..", "..", "images", "gamePage.png"),
            clip: {
                x: 1280 / 2, y: 0, width: 1280, height: 720 / 2
            },
        });
        const result = yield (0, image_in_image_1.findImage)(path_1.default.resolve(__dirname, "..", "..", "..", "images", "gamePage.png"), path_1.default.resolve(__dirname, "..", "..", "..", "images", "shop.png"), "image/png", "image/png");
        if (result.error) {
            yield StartFromBegin();
        }
        yield (0, Click_1.Click)(gamePage, 1, 900, 300);
        yield gamePage.waitForTimeout(3200);
        yield gamePage.getByRole("button", { name: "Orders" }).click({ timeout: 5000 });
        const taskList = gamePage.locator("div[class*=Store_items-content_]");
        yield taskList.locator("div[class*=Store_store-item-container_]").nth(0).waitFor();
        const tasks = yield taskList.locator("div[class*=Store_store-item-container_]").all();
        const allTasks = [];
        for (const task of tasks) {
            const deliverButton = task.locator("button[class*=Store_btn-max_]");
            if ((yield deliverButton.all()).length < 1)
                continue;
            if ((yield deliverButton.textContent()) !== "DELIVER")
                continue;
            const isDisabled = yield deliverButton.isDisabled();
            let itemName;
            itemName = yield task.locator("div[class*=Store_card-title_]").textContent();
            const itemQuantity = Number((_a = (yield task.locator("div[class*=Store_item-quantity_]").locator("span").textContent())) === null || _a === void 0 ? void 0 : _a.replace(".", "").replace(",", "."));
            const rewardType = ((_b = (yield task.locator("img[class*=commons_coin-icon_]").nth(1).getAttribute("src"))) === null || _b === void 0 ? void 0 : _b.includes("pixel_currency")) ? "PIXEL" : "COIN";
            const rewardQuantity = Number((_c = (yield task.locator("span[class*=commons_coinCost_]").nth(1).textContent())) === null || _c === void 0 ? void 0 : _c.replace(".", "").replace(",", ".").replace("K", "00"));
            const rewardExp = Number((_d = (yield task.locator("span[class*=commons_coinCost_]").nth(0).textContent())) === null || _d === void 0 ? void 0 : _d.replace(".", "").replace(",", "."));
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const day = now.getDate();
            const hours = now.getHours();
            let expiresAt = new Date(year, month, day + (hours < 21 ? 0 : 1), 21, 0, 0);
            if (!isDisabled) {
                if (rewardType === "PIXEL") {
                    if (!([
                        "Cow Milk",
                        "Honey",
                        "Softwood",
                        "Egg",
                        "Seltsam Egg",
                        "Eggsplosive",
                        "Shorelime",
                        "Heartbeet Wine",
                        "Heartbeet",
                        "Hardwood",
                        "Sap",
                        "Plank",
                        "Silk Fiber",
                        "Stick",
                    ].includes(itemName))) {
                        yield deliverButton.scrollIntoViewIfNeeded();
                        yield deliverButton.click();
                        yield gamePage.waitForTimeout(2000);
                        itemName = itemName + " (ENTREGUE)";
                        expiresAt = (0, AddSeconds_1.AddSeconds)(new Date(), 300);
                    }
                }
                if (rewardType === "COIN") {
                    if ([
                        "Astracactus",
                        "Bluzberry Cotton Candy",
                        "Butterberry",
                        "Clover",
                        "Grainbow",
                        "Grumpkin",
                        "Popberry",
                        "Razzleberry Cotton Candy",
                    ].includes(itemName)) {
                        yield deliverButton.scrollIntoViewIfNeeded();
                        yield deliverButton.click();
                        yield gamePage.waitForTimeout(2000);
                        itemName = itemName + " (ENTREGUE)";
                        expiresAt = (0, AddSeconds_1.AddSeconds)(new Date(), 300);
                    }
                }
            }
            allTasks.push({
                itemName: itemName,
                itemQuantity: itemQuantity | 0,
                rewardType,
                rewardQuantity: rewardQuantity | 0,
                rewardExp: rewardExp | 0,
                expiresAt,
            });
        }
        yield gamePage.locator("button[class*=commons_closeBtn_]").click();
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        return yield (0, UpdateTasks_1.UpdateTasks)(account, allTasks);
    });
}
exports.DoTasks = DoTasks;
