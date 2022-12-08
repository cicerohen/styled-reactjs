import styled from "styled-components";
import { Container } from "./Container";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-style: solid;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: ${(props) => {
    return props.theme.typography.pxToRem(1);
  }};
  border-bottom-width: ${(props) => {
    return props.theme.typography.pxToRem(1);
  }};
  padding-left: ${(props) => {
    return props.theme.typography.pxToRem(16);
  }};
  padding-right: ${(props) => {
    return props.theme.typography.pxToRem(16);
  }};
  min-height: ${(props) => {
    return props.theme.typography.pxToRem(252);
  }};

  ${(props) => {
    return `
      @media ${props.theme.media.sm} {
        min-height: ${props.theme.typography.pxToRem(348)};
      }
    `;
  }};

  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
      border-color: ${props.theme.palette.grey[800]};
      background-color: ${props.theme.palette.primary.dark};
      `;
    }
    return `
      border-color: transparent;
      background-color: ${props.theme.palette.primary.main};
    `;
  }};
`;

const Title = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: ${(props) => props.theme.typography.pxToRem(16)};
  color: ${(props) => props.theme.palette.grey[50]};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  font-size: ${(props) => props.theme.typography.h4.fontSize};

  ${(props) => {
    return `
      @media ${props.theme.media.sm} {
        font-size: ${props.theme.typography.h4.fontSize};
      }
    `;
  }};

  ${(props) => {
    return `
      @media ${props.theme.media.lg} {
        font-size: ${props.theme.typography.h3.fontSize};
      }
    `;
  }};
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.typography.subtitle1.fontSize};
  line-height: ${(props) => props.theme.typography.subtitle1.lineHeight};
  color: ${(props) => props.theme.palette.grey[50]};

  ${(props) => {
    return `
      @media ${props.theme.media.sm} {
        max-width: 70%;
        margin: 0 auto;
      }
    `;
  }};
`;

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Marvel</Title>
        <Subtitle>
          This is just a small project that shows how to theming a ReactJS app
          with Styled-Components
        </Subtitle>
      </Container>
    </Wrapper>
  );
};
