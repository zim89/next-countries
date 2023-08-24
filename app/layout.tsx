import clsx from 'clsx';
import './globals.css';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Countries App',
  description: 'Countries App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(nunitoSans.className, 'min-h-screen bg-gray-100')}>
        <header className='flex w-full items-center justify-center bg-white'>
          <nav className='container'>
            <div className='flex items-center gap-3 py-4'>
              <Image src='/logo.png' alt='Earth' width={48} height={48} />
              <span className='text-2xl font-bold'>Countries App</span>
            </div>
          </nav>
        </header>

        <main className='container mx-auto flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
