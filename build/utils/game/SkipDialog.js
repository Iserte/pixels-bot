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
exports.SkipDialog = void 0;
function SkipDialog(gamePage) {
    return __awaiter(this, void 0, void 0, function* () {
        const skipButton = gamePage.locator("button[class*=GameDialog_skip_]");
        let isDialogEnded = false;
        while (!isDialogEnded) {
            try {
                yield skipButton.click({ timeout: 1000 });
                yield gamePage.waitForTimeout(200);
            }
            catch (error) {
                isDialogEnded = true;
            }
        }
    });
}
exports.SkipDialog = SkipDialog;
