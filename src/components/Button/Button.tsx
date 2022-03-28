import { MouseEvent, PropsWithChildren } from 'react';

interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function IconButton({ children, onClick }: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button >
  );
}
