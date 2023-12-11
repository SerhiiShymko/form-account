import axios from 'axios';

axios.defaults.baseURL = 'https://656e2fffbcc5618d3c24a7a8.mockapi.io/';

export const fetchOrder = async () => {
  const response = await axios.get('/order');
  return response.data;
};

export const deleteOrder = async orderId => {
  const response = await axios.delete(`/order/${orderId}`);
  return response.data;
};

export const createOrder = async order => {
  const response = await axios.post('/orderez/', order);
  return response.data;
};
