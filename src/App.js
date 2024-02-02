import React, {useState} from 'react';
import CustomInput from './component/CustomInput';
import SingleInput from './component/SingleInput';
import Button from './component/Button';

const App = () => {


  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonClick = () => {
    // You can perform any other action here
    alert(`Input text: ${inputText}`);
  };

  return (
    <div>
      <h1>React Input Component with Button</h1>
      <CustomInput />
      <br />
      <br />
      <br />
      <h1>React Input and button component</h1>
      <SingleInput
        type={'text'} 
        value={inputText}
        onInputChange={handleInputChange} 
      />
      <Button onClick={handleButtonClick} />
    </div>
  );
};

export default App;
