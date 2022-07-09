import axios from 'axios';

export const getCountries = async () => {
  try {
    const { data } = await axios.get('https://restcountries.com/v3.1/all');
    return data;
  } catch (error) {
    return error;
  }
};
