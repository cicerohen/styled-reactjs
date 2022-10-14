import { useState } from "react";
import styled from "styled-components";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

const Wrpaper = styled.div``;

type Props = Partial<{
  children: React.ReactNode;
}>;

export const View = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setIsOpen(true);
  };

  const onCloseSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Wrpaper>
      <Sidebar isOpen={isOpen} onCloseSidebar={onCloseSidebar} />
      <Header onOpenSidebar={onOpenSidebar} />
      <main>{children}</main>
      <Footer />
    </Wrpaper>
  );
};
