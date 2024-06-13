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
exports.UpdateCarnivalState = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const UpdateEnergy_1 = require("./UpdateEnergy");
const AddSeconds_1 = require("../AddSeconds");
const Seeds_1 = require("../Seeds");
function UpdateCarnivalState(gamePage, account, state) {
    return __awaiter(this, void 0, void 0, function* () {
        const seed = Seeds_1.Seeds.find(seed => seed.name === account.carnivalSeed);
        yield (0, UpdateEnergy_1.UpdateEnergy)(gamePage, account);
        if (account.carnivalSeed === "Orange Grumpkin Seeds") {
            if (state === "WATER") {
                return yield prisma_1.default.account.update({
                    data: { carnivalLandState: state, carnivalLandUpdate: (0, AddSeconds_1.AddSeconds)(account.carnivalLandUpdate, seed.growTime / 2) },
                    where: { name: account.name },
                    include: { tasks: true, eggs: true }
                });
            }
            else {
                return yield prisma_1.default.account.update({
                    data: { carnivalLandState: state, carnivalLandUpdate: (0, AddSeconds_1.AddSeconds)(new Date(), seed.growTime / 2) },
                    where: { name: account.name },
                    include: { tasks: true, eggs: true }
                });
            }
        }
        else {
            return yield prisma_1.default.account.update({
                data: { carnivalLandState: state, carnivalLandUpdate: (0, AddSeconds_1.AddSeconds)(new Date(), seed.growTime) },
                where: { name: account.name },
                include: { tasks: true, eggs: true }
            });
        }
    });
}
exports.UpdateCarnivalState = UpdateCarnivalState;
