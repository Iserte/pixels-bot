"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
const GetCurrentTime_1 = __importDefault(require("./GetCurrentTime"));
var Colors;
(function (Colors) {
    Colors["default"] = "\u001B[0m";
    Colors["primary"] = "\u001B[34m";
    Colors["warn"] = "\u001B[33m";
    Colors["danger"] = "\u001B[31m";
})(Colors || (exports.Colors = Colors = {}));
function Log(message, style = Colors.default) {
    console.log(`${style}[${(0, GetCurrentTime_1.default)()}] ${message}${Colors.default}`);
}
exports.default = Log;
