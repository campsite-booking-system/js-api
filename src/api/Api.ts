import { Config } from '../types';

import { login } from './authentication';

enum baseUrls {
  'local' = 'http://api.veepee.local',
  'development' = 'https://api.dev.veepee.com',
  'production' = 'https://api.veepee.com',
}

const defaultConfig: Config = {
  environment: 'production',
  version: '1.0',
};

class API {
  private baseUrl: string;

  constructor(userConfig?: Config) {
    const config = { ...defaultConfig, ...userConfig };
    const baseUrl = baseUrls[config.environment];

    this.baseUrl = `${baseUrl}/${config.version}`;
  }

  public async login(email: string, password: string) {
    return login(this.baseUrl, email, password);
  }
}

export default API;
