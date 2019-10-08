declare function login(baseUrl: string, uid: string, password: string): Promise<{
    token: string;
}>;
export default login;
