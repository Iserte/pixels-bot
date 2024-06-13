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
exports.ClickOnSoil = void 0;
const Click_1 = require("./game/Click");
const ClickOnSoil = (gamePage, soilCoords) => __awaiter(void 0, void 0, void 0, function* () {
    for (const coord of soilCoords) {
        yield (0, Click_1.Click)(gamePage, 50, coord.x, coord.y);
        yield gamePage.waitForTimeout(50);
    }
});
exports.ClickOnSoil = ClickOnSoil;
