"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function forgotPassword(uid) {
    const url = new URL(`${this.getBaseUrl()}/auth/forgot-password`);
    const response = await fetch(url.href, {
        method: 'POST',
        body: JSON.stringify({ uid }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const data = await response.json();
        throw data;
    }
}
exports.default = forgotPassword;
//# sourceMappingURL=forgotPassword.js.map