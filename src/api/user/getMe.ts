import { User } from '../../types';
import API from '../Api';

async function getMe(this: API): Promise<User> {
  const url = new URL(`${this.getBaseUrl()}/user/me`);

  const response = await fetch(url.href, {
    method: 'GET',
    headers: this.getHeaders(),
  });

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}

export default getMe;
