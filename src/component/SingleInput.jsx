import React, { useState } from 'react';

const SingleInput = ({type, value, onInputChange }) => {
//   const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => 
  {
    // setInputValue(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleInputChange}
      placeholder="Enter text"
    />
  );
};

export default SingleInput;
