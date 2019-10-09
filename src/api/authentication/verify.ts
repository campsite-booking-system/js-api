import API from '../Api';

async function verify(this: API): Promise<void> {
  const url = new URL(`${this.getBaseUrl()}/auth/verify`);

  const response = await fetch(url.href, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const data = await response.json();

    throw data;
  }
}

export default verify;
