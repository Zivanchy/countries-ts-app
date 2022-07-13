import React, { useState, useEffect } from 'react';

import { Country } from '../models/Country';
import { getCountries } from '../functions/getCountries';

import CountryCard from './CountryCard';
import SearchInput from './SearchInput';
import Filter from './Filter';

interface Props {
  theme: boolean;
}

const CountriesGrid: React.FC<Props> = ({ theme }) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [input, setInput] = useState<string>('');
  const [region, setRegion] = useState<string>('all');

  const fetchData = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const selectRegion = (e: React.MouseEvent<HTMLDivElement>) => {
    setRegion(e.currentTarget.id);
  };

  if (!countries) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="mx-20 my-20">
      <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
        <SearchInput handleChange={handleChange} />
        <Filter handleClick={selectRegion} theme={theme} />
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-between">
        {countries
          .filter((country) => {
            return (
              (region === 'all' || country.region.toLowerCase() === region) &&
              country.name.official.toLowerCase().includes(input.toLowerCase())
            );
          })
          .map((country: Country, index) => (
            <CountryCard
              key={index}
              name={country.name.official}
              capital={country.capital}
              population={country.population}
              img={country.flags.png}
              region={country.region}
              cca3={country.cca3}
            />
          ))}
      </div>
    </div>
  );
};

export default CountriesGrid;
