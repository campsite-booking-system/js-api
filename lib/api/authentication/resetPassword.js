"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function resetPassword(token, password, passwordConfirmation) {
    const url = new URL(`${this.getBaseUrl()}/auth/reset-password`);
    const response = await fetch(url.href, {
        method: 'POST',
        body: JSON.stringify({ token, password, passwordConfirmation }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const data = await response.json();
        throw data;
    }
}
exports.default = resetPassword;
//# sourceMappingURL=resetPassword.js.map