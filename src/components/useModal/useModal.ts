import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickModal() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    handleClickModal,
  };
}
