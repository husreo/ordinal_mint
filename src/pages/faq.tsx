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

      <main className='layout mb-10 min-h-screen'>
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
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <h3>What is Ordinal Skulls?</h3>
              <p>
                <span className='font-accent'>{'>'}</span> Ordinal Skulls is a
                collection of unique pixel skeletons on BTC. Holders will get
                access to the alpha group and early access to our marketplace
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3>Why is our project interesting for investment?</h3>
              <p>
                <span className='font-accent'>{'>'}</span> A closed alpha group
                is planned for holders of the collection. Also a free mint of
                our second collection is planned for holders of the main
                collection. At the launch of our marketplace, holders of the
                collection will have early closed access to it.
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3>How to mint?</h3>
              <p>
                <span className='font-accent'>1. </span>Go to{' '}
                <Link href='/' className='border-b border-b-white'>
                  Home
                </Link>{' '}
                page and click Mint button
              </p>
              <p>
                <span className='font-accent'>2. </span>Select the number of
                NFTs you want to mint. Do not forget that each NFT, in addition
                to its cost, also requires the payment of a fee for minting and
                transfer. You can see the fee in the process of choosing the
                number of tokens. Do not forget that Bitcoin is a rather slow
                network and the minting of one ordinal can take more than an
                hour.
              </p>
              <p>
                <span className='font-accent'>3. </span>Enter an Ordinals
                supported wallet address. If your wallet does not support
                Ordinals or you are not sure, you can use{' '}
                <Link
                  target='_blank'
                  href='https://ordinalswallet.com/'
                  className='border-b border-b-white'
                >
                  OrdinalsWallet
                </Link>
              </p>
              <p>
                <span className='font-accent'>4. </span>Send the exact amount of
                BTC from the same wallet you've provided in the form to our
                address and recieve your NFTs in return
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3>What supply, mint price, mint date? </h3>
              <p>
                <span className='font-accent'>{'>'}</span> Supply - TBA | Mint
                price - TBA | Mint date - TBA
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <h3>How to buy and sell NFT?</h3>
              <p>
                <span className='font-accent'>{'>'}</span> Trading will be
                available on our website, OTC format in our discord in the
                market section and marketplaces{' '}
                <Link
                  target='_blank'
                  href='https://ordswap.io/'
                  className='border-b border-b-white'
                >
                  OrdSwap
                </Link>{' '}
                and{' '}
                <Link
                  target='_blank'
                  href='https://ordinalswallet.com/'
                  className='border-b border-b-white'
                >
                  OrdinalsWallet
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
