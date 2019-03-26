import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Service from '../../../src/services/PostService';
import data from '../../__mocks__/data';

describe('========== POSTS SERVICE ============', () => {
  const mock = new MockAdapter(axios);

  it('have a method to call the API and fetch all posts', async () => {
    mock.onGet('https://jsonplaceholder.typicode.com/posts')
      .reply(() => new Promise(((resolve) => {
        resolve([200, data]);
      })));

    const request = await Service.getPosts();
    expect(request.data.length).to.equal(11);
  });
});
