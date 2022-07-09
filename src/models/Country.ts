export interface Country {
  name: CountryName;
  capital: string;
  population: number;
  region: string;
  flags: Flag;
}

interface Flag {
  png: string;
}

interface CountryName {
  common: string;
  official: string;
}
