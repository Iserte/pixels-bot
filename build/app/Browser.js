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
exports.Browser = void 0;
const test_1 = require("@playwright/test");
const Dolphin_1 = require("../Dolphin");
const defaultTimeout = 180 * 1000;
const dimensions = {
    width: 1280,
    height: 720
};
const scriptName = process.env.npm_lifecycle_event;
const profileName = process.argv[2] || undefined;
if (!profileName)
    throw new Error("Argumento do PROFILE_INDEX nao encontrado");
class Browser {
    Close(profileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileID = yield (0, Dolphin_1.GetProfileID)(profileName);
            if (!profileID)
                return;
            yield (0, Dolphin_1.StopProfile)(profileID);
        });
    }
    fetchBrowser(profileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileID = yield (0, Dolphin_1.GetProfileID)(profileName);
            if (!profileID)
                return;
            process.on('exit', () => {
                process.nextTick(() => __awaiter(this, void 0, void 0, function* () {
                    yield (0, Dolphin_1.StopProfile)(profileID);
                }));
            });
            let wsEndpoint = (scriptName === null || scriptName === void 0 ? void 0 : scriptName.includes("dev")) ? "ws://localhost:51180/devtools/browser/a1606a67-2a2c-4065-af90-360be24d55cb" : null;
            if (!wsEndpoint) {
                try {
                    yield (0, Dolphin_1.StopProfile)(profileID);
                    yield new Promise(resolve => setTimeout(() => {
                        resolve();
                    }, 3000));
                    wsEndpoint = yield (0, Dolphin_1.StartProfile)(profileID);
                    let tryCount = 0;
                    while (!wsEndpoint && tryCount < 10) {
                        tryCount = tryCount + 1;
                        yield new Promise(resolve => setTimeout(() => {
                            resolve();
                        }, 3000));
                        wsEndpoint = yield (0, Dolphin_1.StartProfile)(profileID);
                    }
                    if (!wsEndpoint)
                        throw new Error(`Não foi possível iniciar o perfil ${profileName} do Dolphin Anty`);
                }
                catch (error) {
                    return console.error(error);
                }
            }
            this.browser = (yield test_1.chromium.connectOverCDP(wsEndpoint, { timeout: 1000 * 60 * 2 })).contexts()[0];
            this.browser.setDefaultNavigationTimeout(defaultTimeout);
            this.browser.setDefaultTimeout(defaultTimeout);
        });
    }
    fetchPages() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.gamePage) {
                const gamePage = this.browser.pages().find(page => page.url().startsWith("https://play.pixels.xyz/"));
                if (gamePage) {
                    this.gamePage = gamePage;
                }
                else {
                    this.gamePage = yield this.browser.newPage();
                    yield this.gamePage.goto("https://play.pixels.xyz/");
                }
            }
            if (!this.walletPage) {
                const walletPage = this.browser.pages().find(page => page.url().startsWith("chrome-extension://fnjhmkhhmkbjkkabndcnnogagogbneec/popup.html#/"));
                if (walletPage) {
                    this.walletPage = walletPage;
                }
                else {
                    this.walletPage = yield this.browser.newPage();
                    yield this.walletPage.goto("chrome-extension://fnjhmkhhmkbjkkabndcnnogagogbneec/popup.html#/");
                }
            }
            if (!this.tempPage) {
                this.tempPage = yield this.browser.newPage();
            }
            for (const page of this.browser.pages()) {
                if (page !== this.tempPage && page !== this.gamePage && page !== this.walletPage) {
                    yield page.close();
                }
            }
            this.browser.on("page", (p) => __awaiter(this, void 0, void 0, function* () { return yield p.close(); }));
            yield this.gamePage.setViewportSize({
                width: dimensions.width,
                height: dimensions.height,
            });
            yield this.walletPage.setViewportSize({
                width: dimensions.width,
                height: dimensions.height,
            });
            yield this.tempPage.setViewportSize({
                width: dimensions.width,
                height: dimensions.height,
            });
            yield this.gamePage.bringToFront();
        });
    }
}
exports.Browser = Browser;
exports.default = (profileName) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = new Browser();
    yield browser.fetchBrowser(profileName);
    yield browser.fetchPages();
    return browser;
});
