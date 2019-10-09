import { Config } from '../types';

import { login, forgotPassword, resetPassword } from './authentication';

enum baseUrls {
  'local' = 'http://api.vulpee.local',
  'development' = 'https://api.dev.vulpee.com',
  'production' = 'https://api.vulpee.com',
}

const defaultConfig: Config = {
  environment: 'production',
  version: '1.0',
};

export interface APIInterface {
  getBaseUrl(): string;

  login(uid: string, password: string): Promise<{ token: string }>;
  forgotPassword(uid: string): Promise<void>;
  resetPassword(token: string, password: string, passwordConfirmation: string): Promise<void>;
}

class API implements APIInterface {
  public login = login;
  public forgotPassword = forgotPassword;
  public resetPassword = resetPassword;

  private baseUrl: string;

  constructor(userConfig?: Config) {
    const config = { ...defaultConfig, ...userConfig };
    const baseUrl = baseUrls[config.environment];

    this.baseUrl = `${baseUrl}/${config.version}`;
  }

  public getBaseUrl() {
    return this.baseUrl;
  }
}

export default API;
