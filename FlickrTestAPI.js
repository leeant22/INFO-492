var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// run tsc FlickrTestAPI.ts to conver to js
// run node FlickrTestAPI.js to execute js file
function getImages(apiKey, tag, text, pages) {
    return __awaiter(this, void 0, void 0, function () {
        var j, res, data, images, i, image, imageURL, img, flickrLink, a, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    j = 1;
                    _a.label = 1;
                case 1:
                    if (!(j <= pages)) return [3 /*break*/, 5];
                    return [4 /*yield*/, fetch("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(apiKey, "&tags=").concat(tag, "&text=").concat(text, "&page=").concat(j, "&format=json&nojsoncallback=1"))];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    images = data.photos.photo;
                    for (i = 0; i < images.length; i++) {
                        image = images[i];
                        imageURL = "https://live.staticflickr.com/".concat(image.server, "/").concat(image.id, "_").concat(image.secret, "_w.jpg");
                        img = document.createElement("img");
                        img.src = imageURL;
                        img.alt = image.title;
                        flickrLink = "https://www.flickr.com/photos/".concat(image.owner, "/").concat(image.id);
                        a = document.createElement("a");
                        a.href = flickrLink;
                        a.target = "_blank";
                        a.appendChild(img);
                        document.getElementById("EarthDiary").appendChild(a);
                    }
                    _a.label = 4;
                case 4:
                    j++;
                    return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.log();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
;
function getMetaData(apiKey, imageID) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, error_2;
        var _a, _b, _c, _d, _e, _f, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _h.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=".concat(apiKey, "&photo_id=").concat(imageID, "&format=json&nojsoncallback=1"))];
                case 1:
                    res = _h.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _h.sent();
                    console.log("Metadata");
                    console.log("Title: " + (((_a = data.photo.title) === null || _a === void 0 ? void 0 : _a._content) ? data.photo.title._content : undefined));
                    console.log("Description: " + (((_b = data.photo.description) === null || _b === void 0 ? void 0 : _b._content) ? data.photo.description._content : undefined));
                    console.log("Date Taken: " + (((_c = data.photo.dates) === null || _c === void 0 ? void 0 : _c.taken) ? data.photo.dates.taken : undefined));
                    console.log("Location (latitude, longitude): (" + (((_d = data.photo.location) === null || _d === void 0 ? void 0 : _d.latitude) ? data.photo.location.latitude : undefined) +
                        ", " + (((_e = data.photo.location) === null || _e === void 0 ? void 0 : _e.longitude) ? data.photo.location.longitude : undefined) + ")");
                    console.log("Country: " + (((_f = data.photo.location) === null || _f === void 0 ? void 0 : _f.country._content) ? data.photo.location.country._content : undefined));
                    console.log("Region: " + (((_g = data.photo.location) === null || _g === void 0 ? void 0 : _g.region._content) ? data.photo.location.region._content : undefined));
                    console.log("");
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _h.sent();
                    console.log("Error fetching metadata: " + error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getImages("0f56c63a41232cffabc80dd3f090a95d", "", "women_in_science", 100);
// getMetaData("0f56c63a41232cffabc80dd3f090a95d", "54023109266");
// getMetaData("0f56c63a41232cffabc80dd3f090a95d", "54027804603");
