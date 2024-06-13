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
exports.UpdateCoins = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const GetCoins_1 = require("./GetCoins");
function UpdateCoins(gamePage, account) {
    return __awaiter(this, void 0, void 0, function* () {
        const coins = yield (0, GetCoins_1.GetCoins)(gamePage);
        return yield prisma_1.default.account.update({
            data: {
                coin: coins,
            },
            where: { name: account.name },
            include: { tasks: true, eggs: true }
        });
    });
}
exports.UpdateCoins = UpdateCoins;
