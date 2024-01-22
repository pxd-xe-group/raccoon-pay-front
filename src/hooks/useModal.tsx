import React from 'react';
import { useReducer } from 'react';
import { createPortal } from 'react-dom';

type State = {
  isOpen: boolean;
};
type Action = { type: 'OPEN' | 'CLOSE' } | { type: Exclude<string, 'OPEN' | 'CLOSE'> };
type UseModalResult = {
  ModalWrapper: ({ children }: { children: React.ReactNode }) => React.ReactPortal | null;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};
type UseModal = (
  elementId?: string,
  initial?: boolean,
  reducer?: (state: State, action: Action) => State
) => UseModalResult;

const internalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        ...state,
        isOpen: true
      };
    case 'CLOSE':
      return {
        ...state,
        isOpen: false
      };
    default:
      throw new Error(`허용되지 않은 타입: ${action.type}`);
  }
};

const useModal: UseModal = (elementId = 'root', initial = false, reducer = internalReducer) => {
  const [{ isOpen }, dispatch] = useReducer(reducer, { isOpen: initial });
  const openModal = () => {
    dispatch({ type: 'OPEN' });
  };
  const closeModal = () => dispatch({ type: 'CLOSE' });
  const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
    if (typeof window === 'object') {
      return (isOpen && createPortal(<div>{children}</div>, document.body as HTMLElement)) || null;
    }
    return null;
  };
  const toggleModal = () => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  };
  return {
    ModalWrapper,
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
};

export default useModal;
