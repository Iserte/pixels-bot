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
exports.Bot = void 0;
const Log_1 = __importStar(require("../utils/Log"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const defaults_json_1 = require("../../config/defaults.json");
const Login_1 = require("./browser/Login");
const Logout_1 = require("./browser/Logout");
const HomePageLogout_1 = require("./browser/HomePageLogout");
const UnlockWallet_1 = require("./browser/UnlockWallet");
const ChangeAccount_1 = require("./browser/ChangeAccount");
const UpdateData_1 = require("../utils/UpdateData");
const isVipReady_1 = require("./game/isVipReady");
const isQuestCompleted_1 = require("./game/quests/isQuestCompleted");
const DoBarneyTutorialQuest_1 = require("./game/quests/DoBarneyTutorialQuest");
const DoRangerDaleQuest_1 = require("./game/quests/DoRangerDaleQuest");
const DoHazelsShopQuest_1 = require("./game/quests/DoHazelsShopQuest");
const DoAxeTutorialQuest_1 = require("./game/quests/DoAxeTutorialQuest");
const isLandReady_1 = require("./game/isLandReady");
const isShopReady_1 = require("./game/isShopReady");
const isTasksReady_1 = require("./game/isTasksReady");
const DoCollectVipEnergy_1 = require("./game/DoCollectVipEnergy");
const DoLandFull_1 = require("./game/DoLandFull");
const DoTasks_1 = require("./game/DoTasks");
const isCityTreeReady_1 = require("./game/isCityTreeReady");
const DoCollectCityTree_1 = require("./game/DoCollectCityTree");
const isNuCyberReady_1 = require("./game/isNuCyberReady");
const DoNuCyber_1 = require("./game/DoNuCyber");
const isCarnivalReady_1 = require("./game/isCarnivalReady");
const DoCollectCarnival_1 = require("./game/DoCollectCarnival");
const DoYGGQuest_1 = require("./game/quests/DoYGGQuest");
const isNuCyberBoxesReady_1 = require("./game/isNuCyberBoxesReady");
const DoNuCyberBoxes_1 = require("./game/DoNuCyberBoxes");
const isNuCyberCraftReady_1 = require("./game/isNuCyberCraftReady");
const DoNuCyberCraft_1 = require("./game/DoNuCyberCraft");
const isCarnivalLandReady_1 = require("./game/isCarnivalLandReady");
const DoPlantCarnival_1 = require("./game/DoPlantCarnival");
const UpdateCarnivalSeeds_1 = require("../utils/game/UpdateCarnivalSeeds");
const Bot = (browser, _accounts) => __awaiter(void 0, void 0, void 0, function* () {
    const timerStart = new Date();
    try {
        yield (0, HomePageLogout_1.HomePageLogout)(browser.gamePage);
    }
    catch (error) { }
    try {
        yield (0, UnlockWallet_1.UnlockWallet)(browser.walletPage, defaults_json_1.walletPassword);
    }
    catch (error) { }
    const accounts = yield prisma_1.default.account.findMany({
        where: {
            wallet: { in: _accounts.map(acc => acc.wallet) },
            isActive: true
        },
        include: { tasks: true, eggs: true },
        orderBy: { vipExpiration: "desc" }
    });
    for (let account of accounts) {
        if (!(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_barneyTutorial") ||
            !(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_RangerDale") ||
            !(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_HazelsShop") ||
            !(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_axeTutorial") ||
            !(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_ygg_03") ||
            (0, isTasksReady_1.isTasksReady)(account) ||
            (0, isVipReady_1.isVipReady)(account) ||
            (0, isLandReady_1.isLandReady)(account, 2130) ||
            (0, isLandReady_1.isLandReady)(account, 2131) ||
            (0, isLandReady_1.isLandReady)(account, 270) ||
            (0, isShopReady_1.isShopReady)(account) ||
            (0, isNuCyberReady_1.isNuCyberReady)(account) ||
            (0, isNuCyberBoxesReady_1.isNuCyberBoxesReady)(account) ||
            (0, isNuCyberCraftReady_1.isNuCyberCraftReady)(account) ||
            (0, isCityTreeReady_1.isCityTreeReady)(account) ||
            (0, isCarnivalReady_1.isCarnivalReady)(account) ||
            (0, isCarnivalLandReady_1.isCarnivalLandReady)(account)) {
            console.time(account.name);
            try {
                (0, Log_1.default)(`Trocando para a conta [${account.name}]`, Log_1.Colors.primary);
                yield (0, ChangeAccount_1.ChangeAccount)(browser.walletPage, account.name);
                yield (0, Login_1.Login)(browser.gamePage, browser.walletPage);
                if ((0, isQuestCompleted_1.isQuestCompleted)(account, "qst_barneyTutorial")) {
                    account = yield (0, UpdateData_1.UpdateData)(browser, account);
                }
            }
            catch (error) {
                (0, Log_1.default)(`Falha ao trocar para a conta [${account.name}]`, Log_1.Colors.danger);
                console.timeEnd(account.name);
                continue;
            }
            if (!(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_barneyTutorial")) {
                try {
                    (0, Log_1.default)(`[${account.name}] Fazendo a quest Barney's Tutorial`, Log_1.Colors.primary);
                    account = yield (0, DoBarneyTutorialQuest_1.DoBarneyTutorialQuest)(browser.gamePage, account);
                    yield (0, Login_1.OnlyLogin)(browser.gamePage);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível fazer a quest Barney's Tutorial`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if (!(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_RangerDale")) {
                try {
                    (0, Log_1.default)(`[${account.name}] Fazendo a quest Ranger Dale`, Log_1.Colors.primary);
                    account = yield (0, DoRangerDaleQuest_1.DoRangerDaleQuest)(browser.gamePage, account);
                    yield (0, Login_1.OnlyLogin)(browser.gamePage);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível fazer a quest Ranger Dale`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if (!(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_HazelsShop")) {
                try {
                    (0, Log_1.default)(`[${account.name}] Fazendo a quest Hazels Shop`, Log_1.Colors.primary);
                    account = yield (0, DoHazelsShopQuest_1.DoHazelsShopQuest)(browser.gamePage, account);
                    yield (0, Login_1.OnlyLogin)(browser.gamePage);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível fazer a quest Hazels Shop`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if (!(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_axeTutorial")) {
                try {
                    (0, Log_1.default)(`[${account.name}] Fazendo a quest Axe Tutorial`, Log_1.Colors.primary);
                    account = yield (0, DoAxeTutorialQuest_1.DoAxeTutorialQuest)(browser.gamePage, account);
                    yield (0, Login_1.OnlyLogin)(browser.gamePage);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível fazer a quest Axe Tutorial`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if (!(0, isQuestCompleted_1.isQuestCompleted)(account, "qst_ygg_03")) {
                try {
                    (0, Log_1.default)(`[${account.name}] Fazendo a quest YGG`, Log_1.Colors.primary);
                    account = yield (0, DoYGGQuest_1.DoYGGQuest)(browser.gamePage, account);
                    yield (0, Login_1.OnlyLogin)(browser.gamePage);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível fazer a quest YGG`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if ((0, isCarnivalLandReady_1.isCarnivalLandReady)(account) && account.carnivalLandState === 'FULL') {
                try {
                    (0, Log_1.default)(`[${account.name}] Coletando land #Carnival`, Log_1.Colors.primary);
                    account = yield (0, DoPlantCarnival_1.DoPlantCarnival)(browser.gamePage, account, "harvest");
                    account = yield (0, UpdateCarnivalSeeds_1.UpdateCarnivalSeeds)(browser.gamePage, browser.tempPage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível coletar a land #Carnival`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    return account;
                }
            }
            if ((0, isCarnivalLandReady_1.isCarnivalLandReady)(account) && account.carnivalLandState === 'WATER') {
                try {
                    (0, Log_1.default)(`[${account.name}] Coletando land #Carnival`, Log_1.Colors.primary);
                    account = yield (0, DoPlantCarnival_1.DoPlantCarnival)(browser.gamePage, account, "water");
                    account = yield (0, UpdateCarnivalSeeds_1.UpdateCarnivalSeeds)(browser.gamePage, browser.tempPage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível coletar a land #Carnival`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    return account;
                }
            }
            if ((0, isCarnivalLandReady_1.isCarnivalLandReady)(account) && account.carnivalLandState === 'EMPTY') {
                try {
                    (0, Log_1.default)(`[${account.name}] Plantando na land #Carnival`, Log_1.Colors.primary);
                    account = yield (0, DoPlantCarnival_1.DoPlantCarnival)(browser.gamePage, account, "plant");
                    account = yield (0, UpdateCarnivalSeeds_1.UpdateCarnivalSeeds)(browser.gamePage, browser.tempPage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível plantar na land #Carnival`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    return account;
                }
            }
            if ((0, isTasksReady_1.isTasksReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Atualizando tasks`, Log_1.Colors.primary);
                    account = yield (0, DoTasks_1.DoTasks)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível atualizar as tasks`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if ((0, isVipReady_1.isVipReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Coletando a energia da sauna VIP`, Log_1.Colors.primary);
                    account = yield (0, DoCollectVipEnergy_1.DoCollectVipEnergy)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível coletar a energia da sauna VIP`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            account = yield (0, DoLandFull_1.DoLandFull)(browser, account, 2130);
            if ((0, isVipReady_1.isVipReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Coletando a energia da sauna VIP`, Log_1.Colors.primary);
                    account = yield (0, DoCollectVipEnergy_1.DoCollectVipEnergy)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível coletar a energia da sauna VIP`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            account = yield (0, DoLandFull_1.DoLandFull)(browser, account, 2131);
            if ((0, isVipReady_1.isVipReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Coletando a energia da sauna VIP`, Log_1.Colors.primary);
                    account = yield (0, DoCollectVipEnergy_1.DoCollectVipEnergy)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível coletar a energia da sauna VIP`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            account = yield (0, DoLandFull_1.DoLandFull)(browser, account, 270);
            if ((0, isCityTreeReady_1.isCityTreeReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Cortando arvores da cidade`, Log_1.Colors.primary);
                    account = yield (0, DoCollectCityTree_1.DoCollectCityTree)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível cortar as arvores da cidade`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if ((0, isCarnivalReady_1.isCarnivalReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Coletando as sementes do carnaval`, Log_1.Colors.primary);
                    account = yield (0, DoCollectCarnival_1.DoCollectCarnival)(browser.gamePage, browser.tempPage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível coletar as sementes de carnaval`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if ((0, isNuCyberReady_1.isNuCyberReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Executando NuCyber`, Log_1.Colors.primary);
                    account = yield (0, DoNuCyber_1.DoNuCyber)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível executar NuCyber`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if ((0, isNuCyberBoxesReady_1.isNuCyberBoxesReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Abrindo caixas do NuCyber`, Log_1.Colors.primary);
                    account = yield (0, DoNuCyberBoxes_1.DoNuCyberBoxes)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível abrir caixas do NuCyber`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            if ((0, isNuCyberCraftReady_1.isNuCyberCraftReady)(account)) {
                try {
                    (0, Log_1.default)(`[${account.name}] Craftando item no NuCyber`, Log_1.Colors.primary);
                    account = yield (0, DoNuCyberCraft_1.DoNuCyberCraft)(browser.gamePage, account);
                }
                catch (error) {
                    (0, Log_1.default)(`[${account.name}] Não foi possível craftar item no NuCyber`, Log_1.Colors.danger);
                    console.timeEnd(account.name);
                    continue;
                }
            }
            yield (0, Logout_1.Logout)(browser.gamePage);
            console.timeEnd(account.name);
        }
    }
    const timerEnd = new Date();
    const timerDiff = timerEnd.getTime() - timerStart.getTime();
    const delay = 1 * 60 * 1000;
    yield new Promise((resolve, _reject) => {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            resolve();
        }), Math.max(0, delay - timerDiff));
    });
});
exports.Bot = Bot;
