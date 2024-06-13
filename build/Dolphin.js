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
exports.StopProfile = exports.StartProfile = exports.GetProfileID = exports.isDolphinRunning = void 0;
const axios_1 = __importDefault(require("axios"));
const defaults_json_1 = require("../config/defaults.json");
const dolphinAxios = axios_1.default.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${defaults_json_1.dolphinToken}`,
    },
});
function isDolphinRunning(profileName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield dolphinAxios.post("http://localhost:3001/v1.0/auth/login-with-token", { dolphinToken: defaults_json_1.dolphinToken });
            return data;
        }
        catch (error) {
            return null;
        }
    });
}
exports.isDolphinRunning = isDolphinRunning;
function GetProfileID(profileName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield dolphinAxios.get(`https://dolphin-anty-api.com/browser_profiles?limit=1&query=${profileName}`);
            return data.data[0].id;
        }
        catch (error) {
            return null;
        }
    });
}
exports.GetProfileID = GetProfileID;
function StartProfile(profileID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield dolphinAxios.get(`http://localhost:3001/v1.0/browser_profiles/${profileID}/start?automation=1`);
            const port = data.automation.port;
            const wsEndpoint = data.automation.wsEndpoint;
            const fullWsEndpoint = `ws://localhost:${port}${wsEndpoint}`;
            return fullWsEndpoint;
        }
        catch (error) {
            return null;
        }
    });
}
exports.StartProfile = StartProfile;
function StopProfile(profileID) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield dolphinAxios.get(`http://localhost:3001/v1.0/browser_profiles/${profileID}/stop`);
            return true;
        }
        catch (error) {
            return null;
        }
    });
}
exports.StopProfile = StopProfile;
