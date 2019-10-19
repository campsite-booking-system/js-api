import API from '../Api';

async function logout(this: API): Promise<void> {
  const url = new URL(`${this.getBaseUrl()}/auth/logout`);

  const response = await fetch(url.href, {
    method: 'POST',
    headers: this.getHeaders(),
  });

  if (!response.ok) {
    throw response;
  }
}

export default logout;
