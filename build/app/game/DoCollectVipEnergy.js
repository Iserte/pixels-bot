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
exports.DoCollectVipEnergy = void 0;
const Click_1 = require("../../utils/game/Click");
const Move_1 = require("../../utils/game/Move");
const GotoDrunkenGoose_1 = require("../browser/GotoDrunkenGoose");
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const UpdateVipSauna_1 = require("../../utils/game/UpdateVipSauna");
function DoCollectVipEnergy(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
        yield (0, Move_1.Move)(gamePage, "S", 1200);
        yield (0, Move_1.Move)(gamePage, "D", 1600);
        yield (0, Move_1.Move)(gamePage, "S", 2800);
        yield (0, Move_1.Move)(gamePage, "D", 1200);
        yield (0, Move_1.Move)(gamePage, "S", 1500);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "A", 2700);
        yield (0, Move_1.Move)(gamePage, "W", 7000);
        yield (0, Move_1.Move)(gamePage, "D", 1500);
        yield (0, Move_1.Move)(gamePage, "W", 4000);
        yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
        yield (0, Move_1.Move)(gamePage, "W", 8000);
        yield (0, Click_1.Click)(gamePage, 1, 660, 220);
        return yield (0, UpdateVipSauna_1.UpdateVipSauna)(gamePage, account);
    });
}
exports.DoCollectVipEnergy = DoCollectVipEnergy;
