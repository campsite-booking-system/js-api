async function login(baseUrl: string, email: string, password: string): Promise<{ token: string }> {
  const url = new URL(`${baseUrl}/auth/sign-in`);

  const response = await fetch(url.href, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw response;
  }

  const data = await response.json();

  return data;
}

export default login;
