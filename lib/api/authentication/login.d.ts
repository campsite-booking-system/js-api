import API from '../Api';
declare function login(this: API, uid: string, password: string): Promise<{
    token: string;
}>;
export default login;
