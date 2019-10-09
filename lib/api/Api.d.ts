import { Config } from '../types';
import { login, verify, forgotPassword, resetPassword } from './authentication';
export interface APIInterface {
    getBaseUrl(): string;
    login(uid: string, password: string): Promise<{
        token: string;
    }>;
    verify(): Promise<void>;
    forgotPassword(uid: string): Promise<void>;
    resetPassword(token: string, password: string, passwordConfirmation: string): Promise<void>;
}
declare class API implements APIInterface {
    login: typeof login;
    verify: typeof verify;
    forgotPassword: typeof forgotPassword;
    resetPassword: typeof resetPassword;
    private baseUrl;
    constructor(userConfig?: Config);
    getBaseUrl(): string;
}
export default API;
