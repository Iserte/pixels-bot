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
exports.GetDatabaseAccounts = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
const GetAccounts_1 = require("./GetAccounts");
const GetDatabaseAccounts = (walletPage) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield (0, GetAccounts_1.GetAccounts)(walletPage);
    return yield prisma_1.default.account.findMany({
        where: {
            wallet: { in: accounts.map(acc => acc.walletAddress) },
            isActive: true
        },
        include: { tasks: true, eggs: true },
        orderBy: { vipExpiration: "desc" }
    });
});
exports.GetDatabaseAccounts = GetDatabaseAccounts;
