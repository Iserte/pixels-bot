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
exports.GetAccounts = void 0;
const GetAccounts = (walletPage) => __awaiter(void 0, void 0, void 0, function* () {
    const profileAccounts = [];
    yield walletPage.reload();
    yield walletPage.locator("#root > div:nth-child(1) > div > div > div.flex.w-full.flex-col.p-20.pt-0.text-white.relative > div.flex.items-start.justify-between.mb-8.pt-12 > button").click();
    const accountsList = walletPage.locator("#root > div:nth-child(1) > div > div.overflow-y-scroll.show-scroll-bar");
    const accounts = yield accountsList.locator("div.flex.w-full.px-20.pr-32.py-12.justify-between.cursor-pointer.items-center.mt-8").all();
    for (const account of accounts) {
        const accountName = yield account.locator("div > div.flex.items-center.ml-16.justify-between > div > div.font-semibold.text-basic-8.truncate").textContent();
        const walletAddress = yield account.locator("div > div.flex.items-center.ml-16.justify-between > div > div.inline-block.text-basic-5.cursor-pointer").textContent();
        if (accountName && walletAddress) {
            profileAccounts.push({ name: accountName, walletAddress: walletAddress.replace("ronin:", "0x") });
        }
    }
    return profileAccounts;
});
exports.GetAccounts = GetAccounts;
