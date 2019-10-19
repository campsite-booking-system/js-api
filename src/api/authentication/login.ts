import API from '../Api';

async function login(this: API, uid: string, password: string): Promise<{ token: string }> {
  const url = new URL(`${this.getBaseUrl()}/auth/sign-in`);

  const response = await fetch(url.href, {
    method: 'POST',
    body: JSON.stringify({ uid, password }),
    headers: this.getHeaders(),
  });

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}

export default login;
