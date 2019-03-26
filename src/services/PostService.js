import axios from 'axios';

export default {
  getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => new Promise(resolve => setTimeout(() => resolve(res), 1000)));
  },
};
