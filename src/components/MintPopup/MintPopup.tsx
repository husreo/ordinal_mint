/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';

import Button from '@/components/Button/Button';

import QR from '~/images/qr.png';
import Btc from '~/svg/Btc.svg';
import Copy from '~/svg/Copy.svg';

const mintPrice = 0.01;
const fee = 0.0014268;
const recieverAddress = 'bc1q6ysjd9px5zvtp5ujwh3zzcn0ttz39rwpluz2kf';

const MintPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const [isValid, setIsValid] = useState<boolean>(false);

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

  const checkValid = () => {
    // regex check for address start with bc1p
    const regex = /^(bcrt|bc){1}([A-Za-z0-9]{10,70})$/;

    if (isNum(amount) && regex.test(address)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const inputRefValue = useRef<HTMLInputElement>(null);
  const inputRefAddress = useRef<HTMLInputElement>(null);

  const handleCopyValue = async (
    ref: React.RefObject<HTMLInputElement>
  ): Promise<void> => {
    try {
      if (ref.current) {
        ref.current.select();
        await navigator.clipboard.writeText(ref.current.value);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen((o) => !o)} className='px-32'>
        Mint
      </Button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal flex flex-col gap-3 bg-black p-2'>
          {!isValid ? (
            <>
              <h3>Mint your skull</h3>
              <div className='text-base text-white/70'>
                Select the number of NFTs you want to mint. Do not forget that
                each NFT, in addition to its cost, also requires the payment of
                a fee for minting and transfer. You can see the fee in the
                process of choosing the number of tokens. Do not forget that
                Bitcoin is a rather slow network and the minting of one ordinal
                can take more than an hour.
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
                  Enter an Ordinals supported wallet address. If your wallet
                  does not support Ordinals or you are not sure, you can use the{' '}
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
                  <span className='text-2xl'>{getAmount() * mintPrice}</span>{' '}
                  BTC + <span className='text-2xl'>{getAmount() * fee}</span>{' '}
                  BTC fee ={' '}
                  <span className='text-2xl font-bold'>
                    {getAmount() * mintPrice + getAmount() * fee}
                  </span>{' '}
                  BTC
                </span>
              </div>
              <Button disabled className='mt-6' onClick={checkValid}>
                Mint soon
              </Button>
            </>
          ) : (
            <>
              <h3>Payment</h3>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-col items-stretch gap-1'>
                  <span className='text-center  text-white/70'>Send</span>
                  <div className='flex flex-row items-stretch'>
                    <span
                      onClick={() => handleCopyValue(inputRefValue)}
                      className='flex items-center rounded-l-md border border-white/50 px-3 text-2xl hover:bg-white/10'
                    >
                      <Copy />
                    </span>
                    <input
                      ref={inputRefValue}
                      className='grow rounded-r-md bg-transparent text-center text-2xl'
                      type='number'
                      readOnly
                      value={getAmount() * mintPrice + getAmount() * fee}
                    />
                    <span className='flex items-center px-3 text-2xl'>
                      <Btc />
                    </span>
                  </div>
                </div>

                <div className='flex flex-col items-stretch gap-1'>
                  <span className='text-center  text-white/70'>To</span>
                  <div className='flex flex-row items-stretch'>
                    <span
                      onClick={() => handleCopyValue(inputRefAddress)}
                      className='flex items-center rounded-l-md border border-white/50 px-3 text-2xl hover:bg-white/10'
                    >
                      <Copy />
                    </span>
                    <input
                      ref={inputRefAddress}
                      className='grow rounded-r-md bg-transparent text-center text-2xl'
                      type='text'
                      readOnly
                      value={recieverAddress}
                    />
                  </div>
                </div>

                <div className='flex flex-col items-stretch gap-1'>
                  <span className='text-center text-white/70'>For</span>
                  <div className='flex flex-row justify-center'>
                    <span className='text-2xl'>
                      <span className='font-accent'>{amount}</span> Ordinal
                      Skull(s)
                    </span>
                  </div>
                </div>

                <div className='flex flex-col items-center gap-1'>
                  <div className='w-fit bg-white p-2'>
                    <Image src={QR} alt='qrcode' />
                  </div>
                </div>
              </div>

              <div className='mt-4 text-center text-white/60'>
                Send the whole amount in one transaction. The wallet should
                support Taproot addresses.{' '}
              </div>
            </>
          )}
        </div>
      </Popup>
    </div>
  );
};

export default MintPopup;
