import { Config } from '../types';
declare class API {
    private baseUrl;
    constructor(userConfig?: Config);
    login(email: string, password: string): Promise<{
        token: string;
    }>;
}
export default API;
