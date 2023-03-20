import React from 'react';

import Button from '@/components/Button/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';


export default function market() {
  return (
    <Layout href='/market'>
      {/* <Seo templateTitle='Home' /> url(#noiseFilter) */}
      <Seo />

      <main className='layout min-h-screen'>
        <section className='relative flex flex-col gap-20 pt-28'>
          <div className='flex flex-col gap-4'>
            <h2 className=''>Marketplace</h2>
            <p className='w-3/5 text-xl'>
              Sell your skulls here. Some collectors would pay a great price for
              rare skulls.
            </p>
          </div>
          <div className='flex flex-col gap-12'>
            <div className='flex w-full flex-row justify-between px-5 items-center'>
              <span className='font-accent text-white/60'>
                6 skulls listed...
              </span>
              <Button>Create order</Button>
            </div>
            <div className='w-full flex items-center justify-center h-40'>
              <span className='text-3xl'>No skulls listed yet...</span>
            </div>
            {/* <div className='flex flex-row flex-wrap gap-y-10'>
              <ListingItem image={Skull} name="#482931" price={0.12} lastSale={0.01}/>
              <ListingItem image={Skull} name="#482931" price={0.12} lastSale={0.01}/>
              <ListingItem image={Skull} name="#482931" price={0.12} lastSale={0.01}/>
              <ListingItem image={Skull} name="#482931" price={0.12} lastSale={0.01}/>
              <ListingItem image={Skull} name="#482931" price={0.12} lastSale={0.01}/>
            </div> */}
          </div>
        </section>
      </main>
    </Layout>
  );
}
