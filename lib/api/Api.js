"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./authentication");
var baseUrls;
(function (baseUrls) {
    baseUrls["local"] = "http://api.vulpee.local";
    baseUrls["development"] = "https://api.dev.vulpee.com";
    baseUrls["production"] = "https://api.vulpee.com";
})(baseUrls || (baseUrls = {}));
const defaultConfig = {
    environment: 'production',
    version: '1.0',
};
class API {
    constructor(userConfig) {
        const config = { ...defaultConfig, ...userConfig };
        const baseUrl = baseUrls[config.environment];
        this.baseUrl = `${baseUrl}/${config.version}`;
    }
    async login(email, password) {
        return authentication_1.login(this.baseUrl, email, password);
    }
}
exports.default = API;
//# sourceMappingURL=Api.js.map