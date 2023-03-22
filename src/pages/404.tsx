import Link from 'next/link';
import * as React from 'react';

import Button from '@/components/Button/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-white'>
            <h2 className='text-4xl leading-none md:text-[20rem]'>404</h2>
            <span className='font-accent text-4xl'>page not found</span>
            <Link className='mt-16' href='/'>
              <Button className='px-28'>Home</Button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
