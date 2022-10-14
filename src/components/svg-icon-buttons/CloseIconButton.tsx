import React from "react";
import styled from "styled-components";
import { XIconOutlined } from "../svg-icons/XIconOutlined";

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

const Icon = styled(XIconOutlined)`
  width: ${(props) => props.theme.typography.pxToRem(24)};
  height: ${(props) => props.theme.typography.pxToRem(24)};
`;

export const CloseIconButton = (props: React.ButtonHTMLAttributes<{}>) => {
  return (
    <Wrapper {...props}>
      <Icon />
    </Wrapper>
  );
};
