import { GlobalWithFetchMock, FetchMock } from 'jest-fetch-mock';

const fetchMock = async () => {
  const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;

  customGlobal.fetch = (await import('jest-fetch-mock')) as FetchMock;
  customGlobal.fetchMock = customGlobal.fetch;
};

fetchMock();
