import React from "react";
import styled from "styled-components";
import { Bars3IconOutlined } from "./svg-icons/Bars3IconOutlined";
import { XIconOutlined } from "./svg-icons/XIconOutlined";

import { useSidebarContext, SidebarContext } from "../contexts/Sidebar";

const Wrapper = styled.div<Pick<SidebarContext, "isOpen">>`
  position: relative;
  background-color: transparent;
  border: none;
  width: ${(props) => props.theme.typography.pxToRem(32)};
  height: ${(props) => props.theme.typography.pxToRem(32)};
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        color: ${props.theme.palette.grey[50]};
      `;
    }
    return `
      color: ${props.theme.palette.grey[800]};
    `;
  }};
  ${(props) => {
    if (props.isOpen) {
      return `
        z-index: ${props.theme.layout.zIndex[20]};
      `;
    }
  }}
`;

const Input = styled.input`
  cursor: pointer;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
`;

const IconWrapper = styled.div`
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const SidebarToggleButton = () => {
  const { isOpen, setIsOpen } = useSidebarContext();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(e.target.checked);
  };

  return (
    <Wrapper isOpen={isOpen} data-testid="sidebar-toggle-button">
      <Input
        type="checkbox"
        title="Open menu"
        aria-label="Open menu"
        checked={isOpen}
        onChange={onChange}
      />
      <IconWrapper>
        {isOpen ? (
          <XIconOutlined data-testid="x-icon" />
        ) : (
          <Bars3IconOutlined data-testid="bars-3-icon" />
        )}
      </IconWrapper>
    </Wrapper>
  );
};
