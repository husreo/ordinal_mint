import Link from 'next/link';
import * as React from 'react';

import 'reactjs-popup/dist/index.css';

import Button from '@/components/Button/Button';
import Layout from '@/components/layout/Layout';
import MintPopup from '@/components/MintPopup/MintPopup';
import Seo from '@/components/Seo';

const mintStatus = (process.env.NEXT_PUBLIC_MINT_STATUS ?? 0) as number;
const supply = (process.env.NEXT_PUBLIC_SUPPLY ?? 0) as number;

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
          <div className='hidden flex-col items-center justify-center gap-3 md:flex'>
            <MintPopup />
            {mintStatus !== 0 && (
              <span className='font-matrix'>0/{supply}</span>
            )}
          </div>
          <div className='flex flex-col items-center justify-center gap-3 md:hidden'>
            <Link href='/mint'>
              <Button className='px-32'>Mint</Button>
            </Link>
            {mintStatus !== 0 && (
              <span className='font-matrix'>0/{supply}</span>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
