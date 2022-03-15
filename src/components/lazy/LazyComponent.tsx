import { PropsWithChildren } from 'react';
import LazyLoad from 'react-lazyload';

interface Props {
  children: React.ReactNode;
}

export default function LazyComponent({ children }: PropsWithChildren<Props>) {
  return (
    <LazyLoad
      once={true}
      placeholder={<div>loading</div>}
      height={200}
    >
      {children}
    </LazyLoad>
  );
};
