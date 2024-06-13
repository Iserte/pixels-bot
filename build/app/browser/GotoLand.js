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
exports.GotoLand = void 0;
const WaitForLoad_1 = require("../../utils/WaitForLoad");
const GotoLand = (gamePage, landNumber) => __awaiter(void 0, void 0, void 0, function* () {
    yield gamePage.getByLabel("Land and Bookmarks").click();
    yield (yield gamePage.locator("button[class*=LandAndTravel_tab_]").all())[2].click();
    const landsSelector = yield gamePage.locator("div[class*=LandAndTravel_mapSquare_]").all();
    for (const [index, selector] of landsSelector.entries()) {
        try {
            const landSelector = selector.getByText(`${landNumber}`);
            const text = yield landSelector.textContent({ timeout: 200 });
            if (text) {
                yield (yield gamePage.locator("button[class*=LandAndTravel_buttonTeleport_]").all())[index].click();
            }
        }
        catch (error) { }
    }
    yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
});
exports.GotoLand = GotoLand;
