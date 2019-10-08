"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function login(baseUrl, uid, password) {
    const url = new URL(`${baseUrl}/auth/sign-in`);
    const response = await fetch(url.href, {
        method: 'POST',
        body: JSON.stringify({ uid, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw data;
    }
    return data;
}
exports.default = login;
//# sourceMappingURL=login.js.map