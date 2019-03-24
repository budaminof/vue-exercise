import axios from 'axios';

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  delayed: true,
});

// set delay:true to see the loading message
apiClient.interceptors.request.use((config) => {
  if (config.delayed) {
    return new Promise(resolve => setTimeout(() => resolve(config), 4000));
  }
  return config;
});

export default {
  getPosts() {
    return apiClient.get('https://jsonplaceholder.typicode.com/posts');
    // thorw error to test the Error component
    // throw new Error();
  },
};
