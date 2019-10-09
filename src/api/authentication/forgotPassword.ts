import API from '../Api';

async function forgotPassword(this: API, uid: string): Promise<void> {
  const url = new URL(`${this.getBaseUrl()}/auth/forgot-password`);

  const response = await fetch(url.href, {
    method: 'POST',
    body: JSON.stringify({ uid }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const data = await response.json();

    throw data;
  }
}

export default forgotPassword;
