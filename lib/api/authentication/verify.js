"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function verify() {
    const url = new URL(`${this.getBaseUrl()}/auth/verify`);
    const response = await fetch(url.href, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const data = await response.json();
        throw data;
    }
}
exports.default = verify;
//# sourceMappingURL=verify.js.map