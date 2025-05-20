import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState<string>('Текст в инпуте');

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleInput = (e: InputEvent) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{value}</h1>
      <input value={value} placeholder={value} onChange={handleInput} />
    </>
  );
}

export default App;
