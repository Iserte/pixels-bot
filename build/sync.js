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
const Browser_1 = __importDefault(require("./app/Browser"));
const SyncAccounts_1 = require("./app/browser/SyncAccounts");
const UnlockWallet_1 = require("./app/browser/UnlockWallet");
const defaults_json_1 = require("../config/defaults.json");
const Log_1 = __importStar(require("./utils/Log"));
const profileName = process.argv[2] || undefined;
if (!profileName)
    throw new Error("Argumento do PROFILE_INDEX nao encontrado");
(0, Browser_1.default)(profileName).then((browser) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, UnlockWallet_1.UnlockWallet)(browser.walletPage, defaults_json_1.walletPassword);
    try {
        (0, Log_1.default)(`[SYNC] Sincronizando contas.`, Log_1.Colors.primary);
        const accounts = yield (0, SyncAccounts_1.SyncAccounts)(browser.walletPage);
        (0, Log_1.default)(`[SYNC] ${accounts.length} contas foram atualizadas no banco de dados.`, Log_1.Colors.primary);
        yield browser.Close(profileName);
    }
    catch (error) {
        throw new Error(`${error}`);
    }
}));
