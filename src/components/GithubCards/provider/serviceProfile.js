import axios from 'axios';

const serviceProfiler = async (url) => {
  return axios.get(url);
};

export default serviceProfiler;
