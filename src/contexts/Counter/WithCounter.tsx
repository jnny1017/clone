import { createContext, SetStateAction, useContext, useState } from 'react';

interface ICounterContext {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
}

const CounterContext = createContext({} as ICounterContext);

export const useCounterContext = () => useContext(CounterContext);

export function WithCounter<P>(Component: React.ComponentType<P>) {
  const WithCounter = (props: P) => {
    const [count, setCount] = useState(0);
    return (
      <CounterContext.Provider value={{ count, setCount }}>
        <Component {...props} />
      </CounterContext.Provider>
    );
  };

  return WithCounter;
}
