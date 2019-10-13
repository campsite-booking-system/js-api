import API from '../Api';

async function resetPassword(
  this: API,
  token: string,
  password: string,
  passwordConfirmation: string,
): Promise<void> {
  const url = new URL(`${this.getBaseUrl()}/auth/reset-password`);

  const response = await fetch(url.href, {
    method: 'POST',
    body: JSON.stringify({ token, password, passwordConfirmation }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw response;
  }
}

export default resetPassword;
