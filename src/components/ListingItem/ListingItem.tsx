import Image, { StaticImageData } from 'next/image';
import React from 'react';


interface ListingItemProps {
  image: StaticImageData;
  name: string;
  price: number;
  lastSale: number;
}

export default function ListingItem({image, name, price, lastSale}: ListingItemProps) {
  return (
    <div className='flex flex-col w-1/4 px-2'>
      <div>
        <Image className='rounded-t-2xl' src={image} alt='Skull' />
      </div>
      <div className='flex flex-col px-3 py-2'>
        <span className='text-lg'>{name}</span>
        <span className='text-2xl'><span className='font-accent'>{price}</span> BTC</span>
        <span className='text-white/60 text-base'>Last sale: {lastSale} BTC</span>
      </div>
    </div>
  );
}
