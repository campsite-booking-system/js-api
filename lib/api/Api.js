"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./authentication");
var baseUrls;
(function (baseUrls) {
    baseUrls["local"] = "http://api.veepee.local";
    baseUrls["development"] = "https://api.dev.veepee.com";
    baseUrls["production"] = "https://api.veepee.com";
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