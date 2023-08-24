interface ICountry {
  name: {
    common: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  translations: {
    rus: {
      common: string;
      official: string;
    };
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages: {
    [key: string]: string;
  };
  borders?: string[];
  cca3: string;
}
