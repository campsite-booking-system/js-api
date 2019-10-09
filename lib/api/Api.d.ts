import { Config } from '../types';
import { login, forgotPassword, resetPassword } from './authentication';
export interface APIInterface {
    getBaseUrl(): string;
    login(uid: string, password: string): Promise<{
        token: string;
    }>;
    forgotPassword(uid: string): Promise<void>;
    resetPassword(token: string, password: string, passwordConfirmation: string): Promise<void>;
}
declare class API implements APIInterface {
    login: typeof login;
    forgotPassword: typeof forgotPassword;
    resetPassword: typeof resetPassword;
    private baseUrl;
    constructor(userConfig?: Config);
    getBaseUrl(): string;
}
export default API;
