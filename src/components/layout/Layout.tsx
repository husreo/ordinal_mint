import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

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
      <Header hhref={href} />
      <div className='purple-back -z-10'></div>
      <div className='blue-back-1 -z-10'></div>
      {children}
      <Footer />
    </>
  );
}
