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
exports.UpdateData = void 0;
const Log_1 = __importStar(require("./Log"));
const UpdateCoins_1 = require("./game/UpdateCoins");
const UpdateEnergy_1 = require("./game/UpdateEnergy");
const UpdatePixels_1 = require("./game/UpdatePixels");
const UpdateSeeds_1 = require("./game/UpdateSeeds");
const UpdateQuests_1 = require("./game/UpdateQuests");
function UpdateData(browser, account) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            account = yield (0, UpdateEnergy_1.UpdateEnergy)(browser.gamePage, account);
        }
        catch (error) {
            (0, Log_1.default)(`[${account.name}] Não foi possível atualizar a energia`, Log_1.Colors.warn);
        }
        try {
            account = yield (0, UpdatePixels_1.UpdatePixels)(browser.gamePage, account);
        }
        catch (error) {
            (0, Log_1.default)(`[${account.name}] Não foi possível atualizar os $PIXELs`, Log_1.Colors.warn);
        }
        try {
            account = yield (0, UpdateCoins_1.UpdateCoins)(browser.gamePage, account);
        }
        catch (error) {
            (0, Log_1.default)(`[${account.name}] Não foi possível atualizar os coins`, Log_1.Colors.warn);
        }
        try {
            account = yield (0, UpdateSeeds_1.UpdateSeeds)(browser.gamePage, browser.tempPage, account);
        }
        catch (error) {
            (0, Log_1.default)(`[${account.name}] Não foi possível atualizar as sementes`, Log_1.Colors.warn);
        }
        try {
            account = yield (0, UpdateQuests_1.UpdateQuests)(account);
        }
        catch (error) {
            (0, Log_1.default)(`[${account.name}] Não foi possível atualizar as quests`, Log_1.Colors.warn);
        }
        return account;
    });
}
exports.UpdateData = UpdateData;
