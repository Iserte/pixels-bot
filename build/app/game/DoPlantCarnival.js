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
exports.DoPlantCarnival = void 0;
const Move_1 = require("../../utils/game/Move");
const GotoDrunkenGoose_1 = require("../browser/GotoDrunkenGoose");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const CreateSoilCoords_1 = require("../../utils/CreateSoilCoords");
const Harvest_1 = require("../../utils/game/Harvest");
const CarnivalPlantAndWater_1 = require("../../utils/game/CarnivalPlantAndWater");
const UpdateCarnivalState_1 = require("../../utils/game/UpdateCarnivalState");
function DoPlantCarnival(gamePage, account, action) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "A", 2700);
        yield (0, Move_1.Move)(gamePage, "W", 15000);
        yield (0, Move_1.Move)(gamePage, "D", 9000);
        yield (0, Move_1.Move)(gamePage, "W", 7000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 6500);
        yield (0, Move_1.Move)(gamePage, "S", 350);
        yield (0, Move_1.Move)(gamePage, "D", 6800);
        yield (0, Move_1.Move)(gamePage, "S", 1000);
        let soilCoords;
        soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 570, y: 215 }, 6, 6);
        switch (action) {
            case 'harvest':
                yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                break;
            case 'plant':
                yield (0, CarnivalPlantAndWater_1.CarnivalPlantAndWater)(gamePage, account.carnivalSeed, soilCoords, action);
                break;
            case 'water':
                yield (0, CarnivalPlantAndWater_1.CarnivalPlantAndWater)(gamePage, account.carnivalSeed, soilCoords, action);
                break;
        }
        yield (0, Move_1.Move)(gamePage, "S", 1400);
        soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 550, y: 250 }, 6, 5);
        switch (action) {
            case 'harvest':
                yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                break;
            case 'plant':
                yield (0, CarnivalPlantAndWater_1.CarnivalPlantAndWater)(gamePage, account.carnivalSeed, soilCoords, action);
                break;
            case 'water':
                yield (0, CarnivalPlantAndWater_1.CarnivalPlantAndWater)(gamePage, account.carnivalSeed, soilCoords, action);
                break;
        }
        yield (0, Move_1.Move)(gamePage, "W", 1000);
        yield (0, Move_1.Move)(gamePage, "D", 1000);
        soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 730, y: 220 }, 2, 5);
        switch (action) {
            case 'harvest':
                yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                break;
            case 'plant':
                yield (0, CarnivalPlantAndWater_1.CarnivalPlantAndWater)(gamePage, account.carnivalSeed, soilCoords, action);
                break;
            case 'water':
                yield (0, CarnivalPlantAndWater_1.CarnivalPlantAndWater)(gamePage, account.carnivalSeed, soilCoords, action);
                break;
        }
        return yield (0, UpdateCarnivalState_1.UpdateCarnivalState)(gamePage, account, action === "harvest" ? "EMPTY" : (action === "plant" && account.carnivalSeed === "Orange Grumpkin Seeds") ? "WATER" : "FULL");
    });
}
exports.DoPlantCarnival = DoPlantCarnival;
