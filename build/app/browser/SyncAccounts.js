"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.SyncAccounts = void 0;
const axios_1 = __importDefault(require("axios"));
const prisma_1 = __importDefault(require("../../utils/prisma"));
const Log_1 = __importStar(require("../../utils/Log"));
const GetAccounts_1 = require("./GetAccounts");
const SyncAccounts = (walletPage) => __awaiter(void 0, void 0, void 0, function* () {
    yield walletPage.bringToFront();
    const accountIds = [];
    const profileAccounts = yield (0, GetAccounts_1.GetAccounts)(walletPage);
    yield walletPage.reload();
    yield walletPage.locator("#root > div:nth-child(1) > div > div > div.flex.w-full.flex-col.p-20.pt-0.text-white.relative > div.flex.items-start.justify-between.mb-8.pt-12 > button").click();
    console.log(profileAccounts);
    for (const account of profileAccounts) {
        try {
            const { data: pixelsTipsData } = yield axios_1.default.get(`https://www.pixels.tips/players/${account.walletAddress}/__data.json?x-sveltekit-invalidated=11`, {
                headers: {
                    "User-Agent": "Insomnia/2023.5.6"
                }
            });
            const redirectUrl = pixelsTipsData.location;
            if (!redirectUrl) {
                console.log(`Conta do jogo não encontrada para a carteira: ${account.walletAddress}`);
                continue;
            }
            const { data: pixelsServerData } = yield axios_1.default.get(`https://pixels-server.pixels.xyz/v1/player?mid=${redirectUrl.split("/")[2]}&detail=3&quests=1`);
            if (!pixelsServerData.username)
                throw new Error("Username nao encontrado no pixels-server");
            (0, Log_1.default)(`[${pixelsServerData.username}] Sincronizando informações`, Log_1.Colors.primary);
            yield prisma_1.default.account.upsert({
                where: { id: pixelsServerData._id },
                create: {
                    id: pixelsServerData._id,
                    name: pixelsServerData.username,
                    wallet: account.walletAddress,
                    vipExpiration: pixelsServerData.memberships.vip ? new Date(Number(pixelsServerData.memberships.vip.expiration)) : new Date(),
                    coin: Number(pixelsServerData.coinInventory.find((inventory) => inventory.currencyId === "cur_coins").balance.toFixed(0)),
                    pixel: Number(pixelsServerData.coinInventory.find((inventory) => inventory.currencyId === "cur_pixel").balance.toFixed(0)),
                    levels: JSON.stringify(pixelsServerData.levels),
                    quests: JSON.stringify(pixelsServerData.quests),
                    createdAt: new Date(pixelsServerData.createdAt),
                    memberships: JSON.stringify(pixelsServerData.memberships),
                },
                update: {
                    name: pixelsServerData.username,
                    vipExpiration: pixelsServerData.memberships.vip ? new Date(Number(pixelsServerData.memberships.vip.expiration)) : new Date(),
                    coin: Number(pixelsServerData.coinInventory.find((inventory) => inventory.currencyId === "cur_coins").balance.toFixed(0)),
                    pixel: Number(pixelsServerData.coinInventory.find((inventory) => inventory.currencyId === "cur_pixel").balance.toFixed(0)),
                    levels: JSON.stringify(pixelsServerData.levels),
                    quests: JSON.stringify(pixelsServerData.quests),
                    createdAt: new Date(pixelsServerData.createdAt),
                    memberships: JSON.stringify(pixelsServerData.memberships),
                }
            });
            yield walletPage.locator("#root > div:nth-child(1) > div > div.p-20.pt-24.flex.w-full.justify-between.items-center > button").click();
            yield walletPage.getByText(account.name, { exact: true }).click();
            yield walletPage.locator("#root > div:nth-child(1) > div > div.mt-40.px-20 > div.flex.justify-center.cursor-pointer.items-center").click();
            yield walletPage.locator("#root > div:nth-child(1) > div > div.mt-40.px-20 > div:nth-child(2) > div > div > span > input").clear();
            yield walletPage.locator("#root > div:nth-child(1) > div > div.mt-40.px-20 > div:nth-child(2) > div > div > span > input").fill(`${pixelsServerData.username}`);
            try {
                yield walletPage.getByRole("button", { name: "Save" }).click({ timeout: 2000 });
            }
            catch (error) {
                yield walletPage.getByRole("button", { name: "Cancel" }).click();
            }
            yield walletPage.locator("#root > div:nth-child(1) > div > div.sticky.top-0.bg-white.w-full.flex.items-center.w-full.p-12 > div > button").click();
            yield walletPage.locator("#root > div:nth-child(1) > div > div.sticky.top-0.bg-white.w-full.flex.items-center.w-full.p-12 > div > button").click();
            accountIds.push(pixelsServerData._id);
        }
        catch (error) {
            console.log(error.code);
        }
    }
    return accountIds;
});
exports.SyncAccounts = SyncAccounts;
