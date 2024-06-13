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
exports.DoPlantOrCollectLand = void 0;
const Move_1 = require("../../utils/game/Move");
const GotoLand_1 = require("../browser/GotoLand");
const GotoTerravilla_1 = require("../../utils/game/GotoTerravilla");
const CreateSoilCoords_1 = require("../../utils/CreateSoilCoords");
const Harvest_1 = require("../../utils/game/Harvest");
const PlantAndWater_1 = require("../../utils/game/PlantAndWater");
const UpdateLandState_1 = require("../../utils/game/UpdateLandState");
function DoPlantOrCollectLand(gamePage, account, landNumber, action) {
    return __awaiter(this, void 0, void 0, function* () {
        let soilCoords;
        yield (0, GotoTerravilla_1.GotoTerravilla)(gamePage);
        switch (landNumber) {
            case 2130:
                yield (0, GotoLand_1.GotoLand)(gamePage, 2130);
                yield (0, Move_1.Move)(gamePage, "W", 2400);
                yield (0, Move_1.Move)(gamePage, "D", 1170);
                soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 555, y: 180 }, 5, 6);
                switch (action) {
                    case 'harvest':
                        yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                        break;
                    case 'plant':
                        yield (0, PlantAndWater_1.PlantAndWater)(gamePage, soilCoords);
                        break;
                }
                yield (0, Move_1.Move)(gamePage, "D", 1530);
                soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 570, y: 180 }, 5, 6);
                switch (action) {
                    case 'harvest':
                        yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                        break;
                    case 'plant':
                        yield (0, PlantAndWater_1.PlantAndWater)(gamePage, soilCoords);
                        break;
                }
                return yield (0, UpdateLandState_1.UpdateLandState)(gamePage, account, 2130, action === "harvest" ? "EMPTY" : "FULL");
            case 2131:
                yield (0, GotoLand_1.GotoLand)(gamePage, 2131);
                yield (0, Move_1.Move)(gamePage, "W", 2400);
                yield (0, Move_1.Move)(gamePage, "D", 1200);
                soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 535, y: 225 }, 6, 5);
                switch (action) {
                    case 'harvest':
                        yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                        break;
                    case 'plant':
                        yield (0, PlantAndWater_1.PlantAndWater)(gamePage, soilCoords);
                        break;
                }
                yield (0, Move_1.Move)(gamePage, "D", 1900);
                soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 540, y: 205 }, 6, 5);
                switch (action) {
                    case 'harvest':
                        yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                        break;
                    case 'plant':
                        yield (0, PlantAndWater_1.PlantAndWater)(gamePage, soilCoords);
                        break;
                }
                return yield (0, UpdateLandState_1.UpdateLandState)(gamePage, account, 2131, action === "harvest" ? "EMPTY" : "FULL");
            case 270:
                yield (0, GotoLand_1.GotoLand)(gamePage, 270);
                yield (0, Move_1.Move)(gamePage, "W", 2400);
                yield (0, Move_1.Move)(gamePage, "A", 200);
                soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 500, y: 200 }, 6, 5);
                switch (action) {
                    case 'harvest':
                        yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                        break;
                    case 'plant':
                        yield (0, PlantAndWater_1.PlantAndWater)(gamePage, soilCoords);
                        break;
                }
                yield (0, Move_1.Move)(gamePage, "W", 1500);
                soilCoords = (0, CreateSoilCoords_1.CreateSoilCoords)({ x: 500, y: 190 }, 6, 5);
                switch (action) {
                    case 'harvest':
                        yield (0, Harvest_1.Harvest)(gamePage, soilCoords);
                        break;
                    case 'plant':
                        yield (0, PlantAndWater_1.PlantAndWater)(gamePage, soilCoords);
                        break;
                }
                return yield (0, UpdateLandState_1.UpdateLandState)(gamePage, account, 270, action === "harvest" ? "EMPTY" : "FULL");
        }
    });
}
exports.DoPlantOrCollectLand = DoPlantOrCollectLand;
