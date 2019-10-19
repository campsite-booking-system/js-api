import API from '../api';

describe('Vulpee API', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Should't have a token by default", () => {
    const api = new API();

    expect(api.hasToken()).toBeFalsy();
  });

  it('Should set token', () => {
    const api = new API();

    api.setToken('new-authentication-token');

    expect(api.hasToken()).toBeTruthy();
  });

  it('Should make an API call to', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const api = new API();
    await api.getEstablishments();

    expect(fetchMock.mock.calls.length).toEqual(1);
  });

  it('Should have Content-Type Header', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const api = new API();
    await api.getEstablishments();

    const response: Response = fetchMock.mock.calls[0][1];

    expect(response.headers.has('Content-Type')).toBeTruthy();
    expect(response.headers.get('Content-Type')).toBe('application/json');
  });

  it('Should have Authorization Header', async () => {
    fetchMock.mockResponse(JSON.stringify({}));

    const api = new API();
    await api.getEstablishments();

    const response: Response = fetchMock.mock.calls[0][1];

    expect(response.headers.has('Authorization')).toBeFalsy();

    api.setToken('authentication-token');
    await api.getEstablishments();

    const newResponse: Response = fetchMock.mock.calls[1][1];

    expect(newResponse.headers.has('Authorization')).toBeTruthy();
    expect(newResponse.headers.get('Authorization')).toBe('Bearer authentication-token');
  });
});
