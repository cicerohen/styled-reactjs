import styled from "styled-components";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

import { SidebarProvider } from "../contexts/Sidebar";

const Wrpaper = styled.div``;

type Props = Partial<{
  children: React.ReactNode;
}>;

export const View = ({ children }: Props) => {
  return (
    <Wrpaper>
      <SidebarProvider>
        <Sidebar />
        <Header />
      </SidebarProvider>
      <main>{children}</main>
      <Footer />
    </Wrpaper>
  );
};
