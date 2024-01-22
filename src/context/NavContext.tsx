'use client';

import { createContext, useState } from 'react';

export const NavContext = createContext<{
  isNavOpened: boolean;
  setIsNavOpened: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isNavOpened: true, setIsNavOpened: () => {} });

export const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpened, setIsNavOpened] = useState(true);

  return (
    <NavContext.Provider value={{ isNavOpened, setIsNavOpened }}>{children}</NavContext.Provider>
  );
};
