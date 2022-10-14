import React from "react";
import styled from "styled-components";
import { Bars3IconOutlined } from "../svg-icons/Bars3IconOutlined";

const Wrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        color: ${props.theme.palette.grey[50]};
      `;
    }
    return `
      color: ${props.theme.palette.grey[800]};
    `;
  }}
`;

const Icon = styled(Bars3IconOutlined)`
  width: ${(props) => props.theme.typography.pxToRem(24)};
  height: ${(props) => props.theme.typography.pxToRem(24)};
`;

export const HamburguerIconButton = (props: React.ButtonHTMLAttributes<{}>) => {
  return (
    <Wrapper {...props}>
      <Icon />
    </Wrapper>
  );
};
