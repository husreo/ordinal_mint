import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='flex w-full items-center justify-center bg-black/20 py-3'>
      <div className='flex flex-col items-center justify-center text-base text-secondary/40'>
        <span>© Ordinal Skulls. All rights reserved</span>
        <span>
          Created by{' '}
          <Link
            target='_blank'
            className='font-bold'
            href='https://linktr.ee/steezydev'
          >
            steezy
          </Link>
        </span>
      </div>
    </footer>
  );
}
