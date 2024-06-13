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
console.clear();
console.log("Abrindo o perfil do Dolphin Anty e inicializando o bot... (esse processo pode demorar alguns minutos)");
const node_cron_1 = __importDefault(require("node-cron"));
const Browser_1 = __importDefault(require("./app/Browser"));
const Bot_1 = require("./app/Bot");
const UnlockWallet_1 = require("./app/browser/UnlockWallet");
const defaults_json_1 = require("../config/defaults.json");
const GetDatabaseAccounts_1 = require("./app/browser/GetDatabaseAccounts");
const Craft_1 = require("./app/Craft");
const scriptName = process.env.npm_lifecycle_event;
const profileName = process.argv[2] || undefined;
if (!profileName)
    throw new Error("Argumento do PROFILE_INDEX nao encontrado");
const mode = process.argv[3] || undefined;
(0, Browser_1.default)(profileName).then((browser) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(scriptName === null || scriptName === void 0 ? void 0 : scriptName.includes("dev"))) {
        try {
            yield (0, UnlockWallet_1.UnlockWallet)(browser.walletPage, defaults_json_1.walletPassword);
        }
        catch (error) { }
        let accounts;
        try {
            accounts = (yield (0, GetDatabaseAccounts_1.GetDatabaseAccounts)(browser.walletPage));
        }
        catch (error) {
            throw new Error(`${error}`);
        }
        let isRunning = false;
        node_cron_1.default.schedule('* * * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (isRunning)
                    return;
                isRunning = true;
                switch (mode) {
                    case "craft":
                        yield (0, Craft_1.Craft)(browser, accounts[0]);
                        break;
                    default:
                        yield (0, Bot_1.Bot)(browser, accounts);
                        break;
                }
                isRunning = false;
            }
            catch (error) {
                isRunning = false;
            }
        }), { name: `[BOT] ${profileName}`, runOnInit: true, scheduled: true, });
    }
}));
