/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { useState } from 'react';
import Popup from 'reactjs-popup'; //

import Button from '@/components/Button/Button';

const mintPrice = 0.01;
const fee = 0.0014268;

const MintPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [amount, setAmount] = useState<string>('1');
  const [address, setAddress] = useState<string>('');

  const getAmount = () => {
    if (isNum(amount)) {
      return parseInt(amount);
    }

    return 0;
  };

  function isNum(v: string) {
    return /\d/.test(v);
  }

  const handleAmountChange = (event: any) => {
    const inputValue = event.target.value;

    if (isNum(inputValue) || inputValue === '') {
      const newValue = inputValue.trim() === '' ? '' : inputValue;
      setAmount(newValue);
    }
    return false;
  };

  const handleAddressChange = (event: any) => {
    const inputValue = event.target.value;
    setAddress(inputValue);
  };

  return (
    <div>
      <Button onClick={() => setOpen((o) => !o)} className='px-32'>
        Mint
      </Button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal flex flex-col gap-3 bg-black p-2'>
          <h3>Mint your skull</h3>
          <div className='text-base text-white/70'>
            Select the number of NFTs you want to mint. Do not forget that each
            NFT, in addition to its cost, also requires the payment of a fee for
            minting and transfer. You can see the fee in the process of choosing
            the number of tokens. Do not forget that Bitcoin is a rather slow
            network and the minting of one ordinal can take more than an hour.
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='amount' className='font-accent text-xl'>
              Amount
            </label>
            <input
              className='rounded-md bg-transparent text-xl'
              min={0}
              step={1}
              max={3}
              value={amount}
              onChange={handleAmountChange}
              name='amount'
              type='number'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='address' className='font-accent text-xl'>
                Receiving address
              </label>
              <span className='text-lg'>
                (Taproot format recommended *starting with bc1p)
              </span>
            </div>
            <div className='text-base text-white/70'>
              Enter an Ordinals supported wallet address. If your wallet does
              not support Ordinals or you are not sure, you can use the{' '}
              <Link
                target='_blank'
                href='https://ordinalswallet.com/'
                className='border-b border-b-white/70'
              >
                OrdinalsWallet
              </Link>
            </div>{' '}
            <input
              className='rounded-md bg-transparent text-xl'
              name='address'
              type='text'
              value={address}
              onChange={handleAddressChange}
              placeholder='Wallet address'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='price' className='font-accent text-xl'>
              Total price
            </label>
            <span>
              <span className='text-2xl'>{getAmount() * mintPrice}</span> BTC +{' '}
              <span className='text-2xl'>{getAmount() * fee}</span> BTC fee ={' '}
              <span className='text-2xl font-bold'>
                {getAmount() * mintPrice + getAmount() * fee}
              </span>{' '}
              BTC
            </span>
          </div>
          <Button className='mt-6'>Mint</Button>
        </div>
      </Popup>
    </div>
  );
};

export default MintPopup;
