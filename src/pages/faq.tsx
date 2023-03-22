import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Discord from '~/images/Discord.png';
import Twitter from '~/images/Twitter.png';

export default function FaqPage() {
  return (
    <Layout href='/faq'>
      <Seo templateTitle='FAQ' />

      <main className='layout min-h-screen'>
        <section className='relative flex flex-col gap-14 pt-28'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
              <h2>FAQ</h2>
              <div className='flex flex-row gap-3'>
                <div>
                  <Link target='_blank' href='https://twitter.com/OrdinalSkull'>
                    <Image width={35} src={Twitter} alt='Twitter' />
                  </Link>
                </div>
                <div>
                  <Link target='_blank' href='https://discord.gg/dDGAHEgr'>
                    <Image width={35} src={Discord} alt='Twitter' />
                  </Link>
                </div>
              </div>
            </div>
            <p className='text-xl md:w-3/5'>
              If you have any questions about Ordinal Skulls you will probably
              find an answer here...
            </p>
          </div>
          <div>
            <div className='flex flex-col gap-2'>
              <h3>What is Ordinal Skulls NFT project?</h3>
              <p>
                <span className='font-accent'>{'>'}</span> Ordinal Skulls is a
                collection of high-quality collectible artifacts built on the
                Bitcoin network using the Ordinals protocol. Each ordinal in the
                collection has a unique number, which represents its rarity and
                numismatic value.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
