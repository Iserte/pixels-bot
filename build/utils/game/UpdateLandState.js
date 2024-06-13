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
exports.UpdateLandState = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const UpdateEnergy_1 = require("./UpdateEnergy");
const AddSeconds_1 = require("../AddSeconds");
const Seeds_1 = require("../Seeds");
function UpdateLandState(gamePage, account, landNumber, state) {
    return __awaiter(this, void 0, void 0, function* () {
        const seed = Seeds_1.Seeds.find(seed => seed.name === account.currentSeed);
        yield (0, UpdateEnergy_1.UpdateEnergy)(gamePage, account);
        switch (landNumber) {
            case 2130:
                return yield prisma_1.default.account.update({
                    data: { landOneState: state, landOneUpdate: (0, AddSeconds_1.AddSeconds)(new Date(), seed.growTime) },
                    where: { name: account.name },
                    include: { tasks: true, eggs: true }
                });
            case 2131:
                return yield prisma_1.default.account.update({
                    data: { landTwoState: state, landTwoUpdate: (0, AddSeconds_1.AddSeconds)(new Date(), seed.growTime) },
                    where: { name: account.name },
                    include: { tasks: true, eggs: true }
                });
            case 270:
                return yield prisma_1.default.account.update({
                    data: { landThreeState: state, landThreeUpdate: (0, AddSeconds_1.AddSeconds)(new Date(), seed.growTime) },
                    where: { name: account.name },
                    include: { tasks: true, eggs: true }
                });
        }
    });
}
exports.UpdateLandState = UpdateLandState;
