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
exports.GetInventorySlots = void 0;
function GetInventorySlots(gamePage) {
    return __awaiter(this, void 0, void 0, function* () {
        const items = yield gamePage.locator('div[class*=Hud_itemList]').first().locator('div[class*=Hud_item]').all();
        return {
            wateringCan: items[0],
            shears: items[1],
            seeds: items[2],
            axe: items[3],
            grumpkinSeeds: items[4],
            cottonSeeds: items[5],
        };
    });
}
exports.GetInventorySlots = GetInventorySlots;
