import React, { useState } from 'react';

interface Props {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const IntegerInput: React.FC<Props> = ({ value, onChange, className }) => {
  const [inputValue, setInputValue] = useState(
    value === 0 ? '' : String(value)
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue === '' || /^\d+$/.test(newValue)) {
      setInputValue(newValue);
      onChange(newValue === '' ? 0 : parseInt(newValue));
    }
  };

  return (
    <input
      className={className}
      type='text'
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default IntegerInput;
