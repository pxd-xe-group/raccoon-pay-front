'use client';

import { createContext, useState } from 'react';

export const NavContext = createContext<{
  isNavOpened: boolean;
  setIsNavOpend: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpened, setIsNavOpend] = useState(true);

  return (
    <NavContext.Provider value={{ isNavOpened, setIsNavOpend }}>{children}</NavContext.Provider>
  );
};
