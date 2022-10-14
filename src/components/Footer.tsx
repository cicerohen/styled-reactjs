import styled from "styled-components";

import { Container as StyledContainer } from "./Container";

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.palette.grey[900]};
`;

const Container = styled(StyledContainer)`
  height: 100%;
  min-height: ${(props) => props.theme.typography.pxToRem(80)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Paragraph = styled.p`
  text-align: center;
  margin: 0;
  a {
    color: ${(props) => props.theme.palette.grey[50]};
    text-decoration: none;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Paragraph>
          <a
            href="https://github.com/cicerohen/playground-styled-reactjs"
            target="_blank"
          >
            View it on Github
          </a>
        </Paragraph>
      </Container>
    </Wrapper>
  );
};
