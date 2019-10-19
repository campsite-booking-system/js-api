import { Establishment } from '../../types';
import API from '../Api';

async function getEstablishment(this: API, id: number): Promise<Establishment> {
  const url = new URL(`${this.getBaseUrl()}/establishment/${id}`);

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

export default getEstablishment;
