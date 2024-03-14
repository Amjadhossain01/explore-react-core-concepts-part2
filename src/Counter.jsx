import { useState } from 'react';

export default function counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    // setCount(count + 1); // ? or
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleReduce = () => {
    // setCount(count - 1);//? or
    const newCount2 = count - 1;
    setCount(newCount2);
  };
  return (
    <div style={{ border: '2px solid tomato', borderRadius: '20px' }}>
      <h2>Counter : {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
