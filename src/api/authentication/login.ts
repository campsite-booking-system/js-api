async function login(baseUrl: string, email: string, password: string): Promise<{ token: string }> {
  const url = new URL(`${baseUrl}/auth/sign-in`);

  const response = await fetch(url.href, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

export default login;
