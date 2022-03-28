import { useState } from 'react';

interface ReturnType {
  isToastOpen: boolean;
  setToastIsOpen: (type: boolean) => void;
  toggleToast: () => void;
}

export default function useToast(): ReturnType {
  const [isToastOpen, setToastIsOpen] = useState(false);

  const toggleToast = () => setToastIsOpen(!isToastOpen);

  return {
    isToastOpen,
    setToastIsOpen,
    toggleToast,
  };
}
