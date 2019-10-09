import API from '../Api';
declare function resetPassword(this: API, token: string, password: string, passwordConfirmation: string): Promise<void>;
export default resetPassword;
