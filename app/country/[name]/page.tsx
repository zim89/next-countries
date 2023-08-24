import CountryItem from '@/app/components/CountryItem';
import Image from 'next/image';
import Link from 'next/link';

interface ICountryDetail {
  params: { name: string };
}

const getCountryByName = async (name: string): Promise<ICountry> => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const country = await response.json();
  return country[0];
};

const getCountryBordersByName = async (name: string) => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries: ICountry[] = await response.json();

  const country = countries.find(
    (country: ICountry) => country.name.common === name
  )!;

  return country.borders?.map((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border)!;
    return {
      name: borderCountry.name.common,
      flag: borderCountry.flags.svg,
      flagAlt: borderCountry.flags.alt,
    };
  });
};

const CountryDetail = async ({ params: { name } }: ICountryDetail) => {
  const country = await getCountryByName(name);
  const borderCountries = await getCountryBordersByName(decodeURI(name));
  const formatter = Intl.NumberFormat('en', { notation: 'compact' });

  return (
    <section className='container flex flex-col'>
      <h1 className='mt-16 text-center text-5xl font-bold text-gray-800'>
        {country.name.common}
      </h1>

      <Link href='/' className='flex items-center gap-1 py-2'>
        <Image src='/arrow.svg' alt='go back home' width={24} height={24} />
        Back
      </Link>

      <article className=' flex min-w-full flex-col justify-between rounded-xl bg-white p-10 md:flex-row'>
        <div>
          {country.capital && (
            <h2 className='mt-3 text-xl text-gray-800'>
              <b>🏙️ Capital:</b> {country.capital}
            </h2>
          )}
          <h2 className='mt-3 text-xl text-gray-800'>
            <b>🗺️ Region: </b>
            {country.region} {country.subregion && `- ${country.subregion}`}
          </h2>
          <h2 className='mt-3 text-xl text-gray-800'>
            <b>👨‍👩‍👧‍👦 Population: </b> {formatter.format(country.population)}
          </h2>
          {country.languages && (
            <h2 className='mt-3 text-xl text-gray-800'>
              <b>🗣️ Language:</b>{' '}
              {Object.values(country.languages).map((language) => (
                <span
                  key={language}
                  className='mr-2 inline-block rounded-full bg-indigo-700 px-2 text-sm text-white'
                >
                  {language}
                </span>
              ))}
            </h2>
          )}
        </div>
        <div className='relative order-first my-2 h-40 w-64 bg-transparent md:order-last md:h-auto'>
          <Image
            src={country.flags.svg}
            alt={country.flags.alt || 'Image'}
            fill
          />
        </div>
      </article>

      <section>
        <h3 className='mt-12 text-2xl font-semibold text-gray-800'>
          Neighbor countries
        </h3>
        <div className='container grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {borderCountries?.map((border) => (
            <CountryItem key={border.name} {...border} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CountryDetail;
