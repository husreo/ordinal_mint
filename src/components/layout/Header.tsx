import Link from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

const links = [
  { href: '/', label: 'Home' },
  { href: '/market', label: 'Marketplace' },
  { href: '/faq', label: 'FAQ' },
];

export default function Header({ hhref }: { hhref?: string }) {
  return (
    <header className='absolute top-0 z-50 w-full p-3'>
      <nav className='layout'>
        <ul className='flex items-center justify-between md:space-x-4 md:px-16'>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link
                href={href}
                className={clsxm(
                  'px-3 py-1 font-accent text-xl text-white/80 hover:text-white',
                  hhref == href && 'text-white'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
