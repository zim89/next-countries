import CountryItem from './components/CountryItem';

const getCountries = async (): Promise<ICountry[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return response.json();
};

const Home = async () => {
  const countries = await getCountries();

  return (
    <section className='container mt-16 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {countries.map((country) => (
        <CountryItem
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          flagAlt={country.flags.alt}
        />
      ))}
    </section>
  );
};

export default Home;
