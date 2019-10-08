import { Config } from '../types';

import { login } from './authentication';

enum baseUrls {
  'local' = 'http://api.vulpee.local',
  'development' = 'https://api.dev.vulpee.com',
  'production' = 'https://api.vulpee.com',
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

  public async login(uid: string, password: string) {
    return login(this.baseUrl, uid, password);
  }
}

export default API;
