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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Craft = void 0;
const Log_1 = __importStar(require("../utils/Log"));
const defaults_json_1 = require("../../config/defaults.json");
const Login_1 = require("./browser/Login");
const Logout_1 = require("./browser/Logout");
const HomePageLogout_1 = require("./browser/HomePageLogout");
const UnlockWallet_1 = require("./browser/UnlockWallet");
const ChangeAccount_1 = require("./browser/ChangeAccount");
const UpdateData_1 = require("../utils/UpdateData");
const isQuestCompleted_1 = require("./game/quests/isQuestCompleted");
const DoCraft_1 = require("./game/DoCraft");
const Craft = (browser, account) => __awaiter(void 0, void 0, void 0, function* () {
    const timerStart = new Date();
    try {
        yield (0, HomePageLogout_1.HomePageLogout)(browser.gamePage);
    }
    catch (error) { }
    try {
        yield (0, UnlockWallet_1.UnlockWallet)(browser.walletPage, defaults_json_1.walletPassword);
    }
    catch (error) { }
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
        return;
    }
    try {
        (0, Log_1.default)(`[${account.name}] Craftando...`, Log_1.Colors.primary);
        account = yield (0, DoCraft_1.DoCraft)(browser.gamePage, account, "Cooking", "Popberry Pie");
    }
    catch (error) {
        (0, Log_1.default)(`[${account.name}] Falha ao craftar`, Log_1.Colors.danger);
        console.timeEnd(account.name);
        return;
    }
    yield (0, Logout_1.Logout)(browser.gamePage);
    console.timeEnd(account.name);
    const timerEnd = new Date();
    const timerDiff = timerEnd.getTime() - timerStart.getTime();
    const delay = 1 * 60 * 1000;
    yield new Promise((resolve, _reject) => {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            resolve();
        }), Math.max(0, delay - timerDiff));
    });
});
exports.Craft = Craft;
