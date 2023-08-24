'use client';

import Image from 'next/image';
import Link from 'next/link';

const ErrorCountry = () => {
  return (
    <section className='container flex flex-col'>
      <h1 className='my-16 text-center text-5xl font-bold text-gray-800'>
        Ops, an Error occurred!
      </h1>
      <Link className='flex items-center py-2' href='/'>
        <Image src='/arrow.svg' alt='go back' width={24} height={24} />
        Back
      </Link>
    </section>
  );
};

export default ErrorCountry;
