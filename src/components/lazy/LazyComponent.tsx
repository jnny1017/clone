import LazyLoad from 'react-lazyload';

interface Props {
  children: React.ReactNode;
}

export default function Lazy({ children }: Props) {
  return (
    <LazyLoad
      once={true}
      placeholder={<div>loading</div>}
      height={200}
      offset={[-100, 0]}
    >
      {children}
    </LazyLoad>
  );
};

