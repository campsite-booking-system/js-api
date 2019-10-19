import { Establishment } from '../../types';
import API from '../Api';

async function getEstablishments(this: API): Promise<Establishment[]> {
  const url = new URL(`${this.getBaseUrl()}/establishment`);

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

export default getEstablishments;
