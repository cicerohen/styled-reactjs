import { createContext, useContext, useState } from "react";

export type SidebarContext = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
};

export const SidebarContext = createContext<SidebarContext>(
  {} as SidebarContext
);

type Props = {
  children: React.ReactNode;
};

export const SidebarProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
