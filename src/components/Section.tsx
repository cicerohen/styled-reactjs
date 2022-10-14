import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-left: ${(props) => props.theme.typography.pxToRem(16)};
  padding-right: ${(props) => props.theme.typography.pxToRem(16)};
  padding-top: ${(props) => props.theme.typography.pxToRem(32)};
  padding-bottom: ${(props) => props.theme.typography.pxToRem(32)};
`;

const Header = styled.div`
  margin-bottom: ${(props) => props.theme.typography.pxToRem(32)};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  text-align: center;
  margin: 0;
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        color: ${props.theme.palette.grey[50]};
      `;
    }
    return `
      color: ${props.theme.palette.primary.main};
    `;
  }}
`;

const Subtitle = styled.p`
  color: ${(props) => props.theme.palette.grey[500]};
  font-size: ${(props) => props.theme.typography.subtitle1};
  text-align: center;
`;

type Props = Partial<{
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}>;

export const Section = ({ title, subtitle, children }: Props) => {
  return (
    <Wrapper>
      <Header>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Header>
      {children}
    </Wrapper>
  );
};
