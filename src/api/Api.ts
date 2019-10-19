import { Config } from '../types';

import * as authentication from './authentication';

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
  setToken(token?: string): this;
  hasToken(): boolean;

  login(uid: string, password: string): Promise<{ token: string }>;
  logout(): Promise<void>;
  verify(): Promise<void>;
  forgotPassword(uid: string): Promise<void>;
  resetPassword(token: string, password: string, passwordConfirmation: string): Promise<void>;
}

class API implements APIInterface {
  public login = authentication.login;
  public logout = authentication.logout;
  public verify = authentication.verify;
  public forgotPassword = authentication.forgotPassword;
  public resetPassword = authentication.resetPassword;

  private baseUrl: string;
  private token?: string;

  constructor(userConfig?: Config) {
    const config = { ...defaultConfig, ...userConfig };
    const baseUrl = baseUrls[config.environment];

    this.baseUrl = `${baseUrl}/${config.version}`;
  }

  public setToken(token?: string): this {
    this.token = token;

    return this;
  }

  public hasToken(): boolean {
    return this.token !== undefined;
  }

  protected getBaseUrl(): string {
    return this.baseUrl;
  }

  protected getToken(): string | undefined {
    return this.token;
  }

  protected getHeaders(): Headers {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (this.hasToken()) {
      headers.set('Authorization', `Bearer ${this.getToken()}`);
    }

    return headers;
  }
}

export default API;
