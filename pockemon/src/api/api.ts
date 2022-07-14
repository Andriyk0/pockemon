import axios from 'axios';

export const getPockemons = async (url:string) => {
  const response = await axios.get(url);

  return response.data;
};

export const getPockemonInfo = async (URL: string) => {
  const response = await axios.get(URL);

  return response.data;
};
