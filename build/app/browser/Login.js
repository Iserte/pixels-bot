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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyLogin = exports.Login = void 0;
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const Login = (gamePage, walletPage) => __awaiter(void 0, void 0, void 0, function* () {
    yield gamePage.goto("https://play.pixels.xyz/");
    yield gamePage.reload();
    try {
        yield gamePage.getByRole("button", { name: "Log Out" }).click({ timeout: 5000 });
    }
    catch (error) { }
    yield gamePage.getByText("Connect with Ronin").click();
    yield gamePage.getByText("Ronin wallet extension").click();
    yield walletPage.getByRole("button", { name: "Sign" }).click();
    yield gamePage.locator("div[class*=Intro_smalllink_]").click();
    const worlds = yield gamePage.locator("button[class*=pixel-button]").all();
    yield worlds[Math.max(3, worlds.length - 10)].scrollIntoViewIfNeeded();
    yield worlds[Math.max(3, worlds.length - 10)].click();
    yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
});
exports.Login = Login;
const OnlyLogin = (gamePage) => __awaiter(void 0, void 0, void 0, function* () {
    yield gamePage.locator("div[class*=Intro_smalllink_]").click();
    const worlds = yield gamePage.locator("button[class*=pixel-button]").all();
    yield worlds[Math.max(3, worlds.length - 10)].scrollIntoViewIfNeeded();
    yield worlds[Math.max(3, worlds.length - 10)].click();
    yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
});
exports.OnlyLogin = OnlyLogin;
