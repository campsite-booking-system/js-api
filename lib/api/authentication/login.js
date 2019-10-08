"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function login(baseUrl, email, password) {
    const url = new URL(`${baseUrl}/auth/sign-in`);
    const response = await fetch(url.href, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw response;
    }
    const data = await response.json();
    return data;
}
exports.default = login;
//# sourceMappingURL=login.js.map