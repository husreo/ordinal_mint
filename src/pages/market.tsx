import React from 'react';

import Button from '@/components/Button/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function market() {
  return (
    <Layout href='/market'>
      {/* <Seo templateTitle='Home' /> url(#noiseFilter) */}
      <Seo templateTitle='Marketplace' />

      <main className='layout min-h-screen'>
        <section className='relative flex flex-col gap-10 pt-28 md:gap-20'>
          <div className='flex flex-col gap-4'>
            <h2 className=''>Marketplace</h2>
            <p className='text-xl md:w-3/5'>
              Sell your skulls here. Some collectors would pay a great price for
              rare skulls.
            </p>
          </div>
          <div className='flex flex-col gap-12'>
            <div className='flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-0 md:px-5'>
              <span className='order-2 font-accent text-white/60 md:order-1'>
                0 skulls listed...
              </span>
              <Button disabled className='order-1 md:order-2'>
                Create order
              </Button>
            </div>
            <div className='flex h-40 w-full items-center justify-center'>
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
