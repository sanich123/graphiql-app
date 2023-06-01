import { addSticky, setClickOnOverlay } from '@/utils/dom-utils';
import { useEffect, useState } from 'react';
import { setEscListener } from '@/utils/dom-utils';

export default function useHeaderListeners() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [sticky, setSticky] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', addSticky(setSticky));
    if (isPanelOpen) {
      setEscListener(setIsPanelOpen);
      window.addEventListener('click', setClickOnOverlay(setIsPanelOpen, isPanelOpen));
    }
    return () => {
      window.removeEventListener('click', setClickOnOverlay(setIsPanelOpen, isPanelOpen));
      window.removeEventListener('scroll', addSticky(setSticky));
    };
  }, [setIsPanelOpen, isPanelOpen]);

  return {
    isPanelOpen,
    sticky,
    setIsPanelOpen,
    setSticky,
  };
}
