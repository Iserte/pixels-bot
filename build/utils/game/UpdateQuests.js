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
exports.UpdateQuests = void 0;
const AddHours_1 = require("../AddHours");
const prisma_1 = __importDefault(require("../prisma"));
const axios_1 = __importDefault(require("axios"));
function UpdateQuests(account, updateTree = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data: pixelsServerData } = yield axios_1.default.get(`https://pixels-server.pixels.xyz/v1/player?mid=${account.id}&detail=3&quests=1`);
        if (!pixelsServerData.username)
            throw new Error("Username nao encontrado no pixels-server");
        if (updateTree) {
            return yield prisma_1.default.account.update({
                data: {
                    quests: JSON.stringify(pixelsServerData.quests),
                    cityTreeUpdate: (0, AddHours_1.AddHours)(new Date(), 5),
                },
                where: { id: account.id },
                include: { tasks: true, eggs: true }
            });
        }
        else {
            return yield prisma_1.default.account.update({
                data: {
                    name: pixelsServerData.username,
                    vipExpiration: pixelsServerData.memberships.vip ? new Date(Number(pixelsServerData.memberships.vip.expiration)) : new Date(),
                    coin: Number(pixelsServerData.coinInventory.find((inventory) => inventory.currencyId === "cur_coins").balance.toFixed(0)),
                    pixel: Number(pixelsServerData.coinInventory.find((inventory) => inventory.currencyId === "cur_pixel").balance.toFixed(0)),
                    levels: JSON.stringify(pixelsServerData.levels),
                    quests: JSON.stringify(pixelsServerData.quests),
                    createdAt: new Date(pixelsServerData.createdAt),
                    memberships: JSON.stringify(pixelsServerData.memberships),
                },
                where: { id: account.id },
                include: { tasks: true, eggs: true }
            });
        }
    });
}
exports.UpdateQuests = UpdateQuests;
