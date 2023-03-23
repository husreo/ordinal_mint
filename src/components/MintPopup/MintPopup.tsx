/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

import Button from '@/components/Button/Button';
import MintForm from '@/components/MintForm/MintForm';

const MintPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => setOpen((o) => !o)} className='px-32'>
        Mint
      </Button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className='modal bg-black'>
          <MintForm />
        </div>
      </Popup>
    </div>
  );
};

export default MintPopup;
