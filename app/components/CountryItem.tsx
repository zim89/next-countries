import Link from 'next/link';
import Image from 'next/image';

interface ICountryItem {
  name: string;
  flag: string;
  flagAlt: string;
}

const CountryItem = ({ name, flag, flagAlt }: ICountryItem) => {
  return (
    <Link href={`/country/${name}`}>
      <article className='h-64 min-w-full rounded-xl border-2 bg-white p-2 transition-all hover:border-indigo-200 hover:shadow-xl '>
        <div className='relative h-40 w-full overflow-hidden rounded-xl p-2'>
          <Image
            src={flag}
            alt={flagAlt || name}
            fill
            className='object-cover'
          />
        </div>
        <h1 className='mt-1 text-center text-xl font-bold'>{name}</h1>
      </article>
    </Link>
  );
};

export default CountryItem;
