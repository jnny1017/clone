import { useState } from 'react';

interface ReturnType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export default function useCounter(): ReturnType {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
}
