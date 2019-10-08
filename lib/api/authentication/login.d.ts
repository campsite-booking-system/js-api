declare function login(baseUrl: string, email: string, password: string): Promise<{
    token: string;
}>;
export default login;
