import * as React from 'react';

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
      {children}
    </>
  );
}
