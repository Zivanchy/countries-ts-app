export interface Country {
  name: CountryName;
  capital: string;
  population: number;
  region: string;
  flags: Flag;
  cca3: string;
}

export interface TCountryPage {
  name: CountryName;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  flags: Flag;
  cca3: string;
  altSpellings: string[];
  currencies: Currency[];
  languages: Object[];
}

interface Currency {
  name: string;
}

interface Flag {
  png: string;
}

interface CountryName {
  common: string;
  official: string;
}
