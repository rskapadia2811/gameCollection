import apisauce from 'apisauce';

// const create = () => {
const api = apisauce.create({
  baseURL: '',
  headers: {},
});

// add monitor for response OR errors
api.addMonitor((response) => {
  console.log('API RESPONSE', response);
});

export default api;
