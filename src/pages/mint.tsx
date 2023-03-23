import React from 'react';

import Layout from '@/components/layout/Layout';
import MintForm from '@/components/MintForm/MintForm';
import Seo from '@/components/Seo';

export default function MintPage() {
  return (
    <Layout showHeader={false}>
      <Seo templateTitle='Mint' />

      <main className='layout min-h-screen bg-opacity-0'>
        <section className='relative mb-10 flex flex-col items-center gap-7 md:gap-12 md:pt-32'>
          <MintForm />
        </section>
      </main>
    </Layout>
  );
}
