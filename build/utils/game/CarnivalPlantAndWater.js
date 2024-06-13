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
exports.CarnivalPlantAndWater = void 0;
const GetInventorySlots_1 = require("./GetInventorySlots");
const ClickOnSoil_1 = require("../ClickOnSoil");
function CarnivalPlantAndWater(gamePage, seedName, soilCoords, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const { grumpkinSeeds, cottonSeeds, wateringCan } = yield (0, GetInventorySlots_1.GetInventorySlots)(gamePage);
        if (action === "plant") {
            if (seedName === "Orange Grumpkin Seeds") {
                yield grumpkinSeeds.click();
                yield (0, ClickOnSoil_1.ClickOnSoil)(gamePage, soilCoords);
                yield grumpkinSeeds.click();
            }
            if (seedName === "Cotton Candy Seeds") {
                yield cottonSeeds.click();
                yield (0, ClickOnSoil_1.ClickOnSoil)(gamePage, soilCoords);
                yield cottonSeeds.click();
            }
        }
        yield wateringCan.click();
        yield (0, ClickOnSoil_1.ClickOnSoil)(gamePage, soilCoords);
        yield wateringCan.click();
    });
}
exports.CarnivalPlantAndWater = CarnivalPlantAndWater;
