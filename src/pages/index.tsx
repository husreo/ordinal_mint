import Image from 'next/image';
import * as React from 'react';

import 'reactjs-popup/dist/index.css';

import Layout from '@/components/layout/Layout';
import MintPopup from '@/components/MintPopup/MintPopup';
import Seo from '@/components/Seo';

import Skull from '~/images/skull.jpg';

export default function HomePage() {
  return (
    <Layout href='/'>
      {/* <Seo templateTitle='Home' /> url(#noiseFilter) */}
      <Seo />
      <main className='layout min-h-screen bg-opacity-0'>
        <section className='relative flex flex-col items-center gap-7 pt-24 text-center md:gap-12 md:pt-32'>
          <h1 className='p-2 text-center'>
            Ordinal
            <br /> Skulls
          </h1>
          <p className='text-lg md:w-[34rem] md:text-xl'>
            Experience the Enigmatic World of Ancient Numismatic Artifacts and
            Uncover the Rarity of Each Piece with Ordinal Skulls NFTs
          </p>
          <div className='flex flex-col items-center justify-center gap-3'>
            <MintPopup />
            <span className='font-matrix text-xl'>0/300</span>
          </div>
        </section>
        <section className='py-24'>
          <div className='flex flex-row gap-6'>
            <div>
              <Image className='rounded-2xl' src={Skull} alt='Skull' />
            </div>
            <div className='flex-grow p-3'>
              <h3 className='mb-5'>
                OrdSkulls NFT on the Ordinals Protocol $200,000 PRIZE
              </h3>
              <p>
                Nam tincidunt ultricies urna, in molestie dolor euismod vel.
                Cras id odio placerat, ultricies erat in, condimentum felis.
                Phasellus condimentum, nibh sit amet malesuada faucibus, risus
                est tempor tortor, id placerat tortor ipsum vel diam.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
