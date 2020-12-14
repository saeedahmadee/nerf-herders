import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import flushPromises from 'flush-promises';

import service from '@/service/index';

describe('product-list service', () => {
  const mock = new MockAdapter(axios);
  const DATA_API_PATH = "http://localhost:3000/trees";

  // Switch to this for getting data from gist
  // const DATA_API_PATH =
  //   "https://gist.githubusercontent.com/leefreemanxyz/903b8d090e8cb7caa82ab2ebf17c6a35/raw";

  afterEach(() => {
    mock.resetHistory();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should return the data on a successful get', async () => {
    mock.onGet(DATA_API_PATH).reply(200, { data: {}, });
    const response = await service.fetchData();
    await flushPromises();
    expect(response).toEqual({});
  });

  it('should throw an error on a failed get', async () => {
    mock.onGet(DATA_API_PATH).reply(500, {});
    const response = await service.fetchData().catch(e => {
      return e.message;
    });
    await flushPromises();
    expect(response).toEqual('Request failed with status code 500');
  });
});


