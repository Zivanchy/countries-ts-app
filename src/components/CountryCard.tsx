import React from 'react';

interface Country {
  name: string;
  capital: string;
  population: number;
  region: string;
  img: string;
}

const CountryCard: React.FC<Country> = ({
  name,
  capital,
  population,
  region,
  img,
}) => {
  return (
    <div className="card card-normal card-bordered bg-slate-800 w-72 shadow-md ease-in-out duration-200 hover:scale-105 hover:cursor-pointer">
      <figure className="w-72 h-40 max-h-full object-cover">
        <img src={img} alt="Country flag" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-slate-50">{name}</h2>
        <p>
          <span className="font-bold text-slate-50 mr-2">Population:</span>
          {population.toLocaleString('en-US')}
        </p>
        <p>
          <span className="font-bold text-slate-50 mr-2">Region:</span>
          {region}
        </p>
        <p>
          <span className="font-bold text-slate-50 mr-2">Capital:</span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
