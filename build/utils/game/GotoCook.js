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
exports.GotoCook = void 0;
const WaitForLoad_1 = require("../WaitForLoad");
const GotoDrunkenGoose_1 = require("../../app/browser/GotoDrunkenGoose");
const Move_1 = require("./Move");
const Click_1 = require("./Click");
const GotoCook = (gamePage) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, GotoDrunkenGoose_1.GotoDrunkenGoose)(gamePage);
    yield (0, Move_1.Move)(gamePage, "S", 1200);
    yield (0, Move_1.Move)(gamePage, "D", 1600);
    yield (0, Move_1.Move)(gamePage, "S", 2800);
    yield (0, Move_1.Move)(gamePage, "D", 1200);
    yield (0, Move_1.Move)(gamePage, "S", 1500);
    yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
    yield (0, Move_1.Move)(gamePage, "D", 6200);
    yield (0, Move_1.Move)(gamePage, "W", 6600);
    yield (0, Move_1.Move)(gamePage, "D", 2300);
    yield (0, Move_1.Move)(gamePage, "W", 12000);
    yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
    yield (0, Click_1.Click)(gamePage, 1, 800, 400);
});
exports.GotoCook = GotoCook;
