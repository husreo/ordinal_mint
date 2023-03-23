import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import Noise from '~/images/noise.png';

export default function Layout({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
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
      <Header hhref={href} />
      <div className='purple-back -z-20'></div>
      <div className='blue-back-1 -z-20'></div>
      {children}
      <Footer />
    </>
  );
}
