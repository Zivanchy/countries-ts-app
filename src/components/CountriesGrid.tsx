import React, { useState, useEffect, ChangeEvent } from 'react';

import { Country } from '../models/Country';

import { getCountries } from '../functions/getCountries';

import CountryCard from './CountryCard';
import SearchInput from './SearchInput';
import Filter from './Filter';

const CountriesGrid: React.FC = () => {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const selectRegion = (e: React.MouseEvent<HTMLDivElement>) => {
    setRegion(e.currentTarget.id);
  };

  if (!countries) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <SearchInput handleChange={handleChange} />
        <Filter handleClick={selectRegion} />
      </div>
      <div className="mt-10 flex flex-wrap gap-5">
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
            />
          ))}
      </div>
    </>
  );
};

export default CountriesGrid;
