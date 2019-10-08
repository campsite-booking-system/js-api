import { Config } from '../types';
declare class API {
    private baseUrl;
    constructor(userConfig?: Config);
    login(uid: string, password: string): Promise<{
        token: string;
    }>;
}
export default API;
