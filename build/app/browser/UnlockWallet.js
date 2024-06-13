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
exports.UnlockWallet = void 0;
const UnlockWallet = (walletPage, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield walletPage.locator("#password-input").fill(password, { timeout: 5000 });
        yield walletPage.getByRole("button", { name: "Unlock" }).click();
    }
    catch (error) {
        yield walletPage.reload();
        yield walletPage.locator("#password-input").fill(password, { timeout: 5000 });
        yield walletPage.getByRole("button", { name: "Unlock" }).click();
    }
});
exports.UnlockWallet = UnlockWallet;
