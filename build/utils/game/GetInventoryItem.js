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
exports.GetInventoryItem = void 0;
function GetInventoryItem(gamePage, _itemName) {
    return __awaiter(this, void 0, void 0, function* () {
        const inventoryFull = yield gamePage.locator("div[class*=Hud_expanded_]").all();
        if (inventoryFull.length < 1) {
            yield gamePage.locator("#game-container").press("B");
            yield gamePage.waitForTimeout(1000);
        }
        const inventory = gamePage.locator("div[class*=Hud_itemList_]");
        const inventorySlots = yield inventory.locator("div[class*=Hud_item_]").all();
        let item = null;
        for (const slot of inventorySlots) {
            if (item)
                continue;
            if ((yield slot.locator("div[class*=clickable]").all()).length < 1)
                continue;
            yield slot.hover({ force: true });
            yield gamePage.waitForTimeout(500);
            const itemName = yield gamePage.locator("span[class*=ItemStyles_tooltipTitle_]").textContent();
            yield gamePage.waitForTimeout(500);
            if (itemName === _itemName) {
                item = slot;
            }
        }
        return item;
    });
}
exports.GetInventoryItem = GetInventoryItem;
