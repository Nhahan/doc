import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://catfact.ninja/fact',
};

export const api = async () => axios.request(options).then(function (response) {
  return response.data;
}).catch(function (error) {
  console.error(error);
});