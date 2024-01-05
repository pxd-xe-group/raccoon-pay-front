'use client';

import { createContext, useState } from 'react';

export const NavContext = createContext<{
  isSideNavOpend: boolean;
  setIsSideNavOpend: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSideNavOpend, setIsSideNavOpend] = useState(true);

  return (
    <NavContext.Provider value={{ isSideNavOpend, setIsSideNavOpend }}>
      {children}
    </NavContext.Provider>
  );
};
