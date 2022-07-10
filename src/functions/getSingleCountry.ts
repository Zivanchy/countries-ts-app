import axios from 'axios';

export const getSingleCountry = async (code: string | undefined) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    return data;
  } catch (error) {
    return error;
  }
};
