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
exports.GetSeed = void 0;
const pngjs_1 = require("pngjs");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const pixelmatch_1 = __importDefault(require("pixelmatch"));
const WaitForLoad_1 = require("../WaitForLoad");
const GetSeed = (gamePage, tempPage) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    yield (0, WaitForLoad_1.WaitForLoad)(gamePage);
    const itemList = gamePage.locator('div[class*=Hud_itemList_]');
    const seed = itemList.locator('div[class*=Hud_item_]').nth(2);
    const seedImage = (yield seed.locator('div[class=clickable]').locator("img").getAttribute("src", { timeout: 5000 }));
    const response = yield ((_a = (yield tempPage.goto(seedImage))) === null || _a === void 0 ? void 0 : _a.body());
    const quantity = Number((_b = (yield seed.locator('div[class*=Hud_quantity_]').textContent({ timeout: 5000 }))) === null || _b === void 0 ? void 0 : _b.replace("x", "")) | 0;
    const seedImages = [
        {
            name: "Astracactus Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Astracactus Seeds.png")))
        },
        {
            name: "Butterberry Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Butterberry Seeds.png")))
        },
        {
            name: "Clover Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Clover Seeds.png")))
        },
        {
            name: "Cotton Candy Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Cotton Candy Seeds.png")))
        },
        {
            name: "Grainbow Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Grainbow Seeds.png")))
        },
        {
            name: "Grumpkin Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Grumpkin Seeds.png")))
        },
        {
            name: "Java Bean Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Java Bean Seeds.png")))
        },
        {
            name: "Muckchuck Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Muckchuck Seeds.png")))
        },
        {
            name: "Orange Grumpkin Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Orange Grumpkin Seeds.png")))
        },
        {
            name: "Popberry Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Popberry Seeds.png")))
        },
        {
            name: "Scarrot Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Scarrot Seeds.png")))
        },
        {
            name: "Watermint Seeds",
            image: pngjs_1.PNG.sync.read(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "seeds", "Watermint Seeds.png")))
        },
    ];
    let seedName;
    for (const { name, image } of seedImages) {
        const gameImage = pngjs_1.PNG.sync.read(response);
        const { width, height } = image;
        const diff = new pngjs_1.PNG({ width, height });
        const numDiffPixels = (0, pixelmatch_1.default)(image.data, gameImage.data, diff.data, width, height, { threshold: 0.1 });
        if (numDiffPixels === 0) {
            seedName = name;
            return { name: seedName, quantity };
        }
    }
    return { name: seedName, quantity };
});
exports.GetSeed = GetSeed;
