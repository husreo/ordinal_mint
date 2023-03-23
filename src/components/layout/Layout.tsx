import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import Noise from '~/images/noise.png';

export default function Layout({
  children,
  href,
  showHeader = true,
}: {
  children: React.ReactNode;
  href?: string;
  showHeader?: boolean;
}) {
  // Put Header or Footer Here

  return (
    <>
      <Image
        fill
        className='noisebg pointer-events-none -z-10 h-auto w-full object-cover'
        priority
        src={Noise}
        alt='noise'
      />
      {showHeader && <Header hhref={href} />}
      <div className='purple-back -z-20 hidden md:block'></div>
      <div className='blue-back-1 -z-20 hidden md:block'></div>
      {children}
      <Footer />
    </>
  );
}
