import API from '../api';

test('Should default to production url', () => {
  const api = new API();

  expect(api.getBaseUrl()).toBe('https://api.vulpee.com/1.0');
});

test('Should have configurable base url', () => {
  const environment = 'local';
  const version = '1.0';

  const api = new API({ environment, version });

  expect(api.getBaseUrl()).toBe('http://api.vulpee.local/1.0');
});
