import styled from "styled-components";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { Nav as StyledNav } from "./Nav";
import { Container as StyledContainer } from "./Container";

const Wrapper = styled.header`
  display: flex;
  height: ${(props) => props.theme.typography.pxToRem(89)};
  padding-left ${(props) => props.theme.typography.pxToRem(16)};
  padding-right ${(props) => props.theme.typography.pxToRem(16)};
  ${(props) => props.theme.media.xxl`
    padding-left: 0;
    padding-right: 0;
  `};
`;

const Container = styled(StyledContainer)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const Trailing = styled.div`
  display: flex;
  align-items: center;
`;

const Leading = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  > a {
    color: inherit;
    text-decoration: none;
  }
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

const GhLink = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.body2.fontSize};
  margin-left: ${(props) => props.theme.typography.pxToRem(16)};
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        color: ${props.theme.palette.grey[500]};
      `;
    }
    return `
      color: ${props.theme.palette.grey[700]};
    `;
  }}
`;

const Nav = styled(StyledNav)`
  display: none;
  ${(props) => props.theme.media.lg`
    display: flex;
  `}
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Trailing>
          <Title>
            <a href="/" title="Go to home page" aria-label="Go to homepage">
              Marvel
            </a>
          </Title>
          <GhLink
            href="https://github.com/cicerohen/playground-styled-reactjs"
            target="_blank"
          >
            View it on Github
          </GhLink>
        </Trailing>
        <Leading>
          <ThemeToggleButton />
          <Nav />
          <SidebarToggleButton />
        </Leading>
      </Container>
    </Wrapper>
  );
};
