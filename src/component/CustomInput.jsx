import React, { useState } from 'react';

const CustomInput = () => {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Show alert with the input text
    alert(`Input text: ${inputValue}`);
  };

  return (
    <div>
      {/* Input field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />

      {/* Button */}
      <button onClick={handleButtonClick}>Show Alert</button>
    </div>
  );
};

export default CustomInput;
