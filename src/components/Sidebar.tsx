import { useEffect } from "react";
import styled from "styled-components";
import { transparentize } from "polished";

import { useSidebarContext } from "../contexts/Sidebar";

type Props = Partial<{
  isOpen: boolean;
  onCloseSidebar: () => void;
}>;

const Backdrop = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    transparentize(0.2, props.theme.palette.grey[900])};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.layout.zIndex[10]};
  transition: all 0.5s;
  ${(props) => {
    if (props.isOpen) {
      return `
        visibility:  visible;
        opacity: 1
      `;
    }
    return `
      visibility:  hidden;
      opacity: 0;
    `;
  }};
`;

const Wrapper = styled.aside<Props>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 320px;
  border-style: solid;
  z-index: ${(props) => props.theme.layout.zIndex[20]};
  transition: transform 0.2s;
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        background-color: ${props.theme.palette.grey[900]};
        border-left-color: ${props.theme.palette.grey[800]};
      `;
    }
    return `
      background-color: ${props.theme.palette.grey[50]};
      border-left-color: transparent;
    `;
  }};
  ${(props) => {
    if (props.isOpen) {
      return `
      transform: translateX(0%);
      `;
    }
    return `
      transform: translateX(100%);
    `;
  }};
`;

export const Sidebar = () => {
  const { isOpen } = useSidebarContext();

  const applyBodyStyles = () => {
    const scrolWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.marginRight = `${scrolWidth}px`;
    document.body.style.overflow = (isOpen && "hidden") || "";
  };

  const removeBodyStyles = () => {
    document.body.style.overflow = "";
    document.body.style.marginRight = "";
  };

  useEffect(() => {
    if (isOpen) {
      applyBodyStyles();
      return;
    }
    removeBodyStyles();
    return () => {
      removeBodyStyles();
    };
  }, [isOpen]);

  return (
    <>
      <Backdrop isOpen={isOpen} />
      <Wrapper isOpen={isOpen}></Wrapper>
    </>
  );
};
