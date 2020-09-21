import axiosClient from './axiosClient.js'

const projectAPI = {
  getAll: () => {
    const url = '/list.json';
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/${id}.json`;
    return axiosClient.get(url);
  },
}

export default projectAPI;