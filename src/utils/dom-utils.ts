import { MouseEvent as MouseEventReact, RefObject } from 'react';

export function cursorAdder(e: MouseEventReact) {
  if (e.target instanceof HTMLDivElement) {
    const direction = e.target.getAttribute('data-direction');
    e.target.style.cursor = `${direction === 'horizontal' ? 'col' : 'row'}-resize`;
  }
}
export function cursorRemover(e: MouseEventReact) {
  if (e.target instanceof HTMLDivElement) {
    e.target.style.cursor = 'none';
  }
}
type setOrRemoveDocumentListenersProps = {
  mouseMoveHandler: (arg: MouseEvent) => void;
  mouseUpHandler: (arg: MouseEvent) => void;
  action: string;
};
export function setOrRemoveDocumentListeners({ mouseMoveHandler, mouseUpHandler, action }: setOrRemoveDocumentListenersProps) {
  if (action === 'set') {
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  } else {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }
}

export function removeCursorProperty(resizer: RefObject<HTMLDivElement>) {
  if (resizer.current) {
    resizer.current.style.removeProperty('cursor');
  }
  document.body.style.removeProperty('cursor');
}

export function setEscListener(setIsPanelOpen: (arg: boolean) => void) {
  return document.addEventListener(
    'keydown',
    ({ code }) => {
      if (code === 'Escape') {
        setIsPanelOpen(false);
      }
    },
    { once: true }
  );
}

export function addSticky(setSticky: (arg: string) => void) {
  return () => {
    if (window.pageYOffset > 20) {
      setSticky('is-sticky');
    } else {
      setSticky('');
    }
  };
}
export function setClickOnOverlay(setIsPanelOpen: (arg: boolean) => void, isPanelOpen: boolean) {
  return ({ target }: MouseEvent) => {
    if (target instanceof HTMLElement) {
      if (isPanelOpen && !target?.getAttribute('class')?.includes('settings')) {
        setIsPanelOpen(false);
      }
    }
  };
}
