import './App.css';
import { useState } from 'react';

function App() {
  const [likes, setLikes] = useState<number>(0);

  const decrement = () => {
    setLikes(likes - 1);
  };

  const increment = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{likes}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
