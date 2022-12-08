import styled from "styled-components";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { SidebarToggleButton } from "./SidebarToggleButton";
import { Nav } from "./Nav";
import { Container as StyledContainer } from "./Container";

import { useTheme } from "../contexts/Theme";
import { useMedia } from "../hooks/useMedia";
import { useEffect } from "react";

const Wrapper = styled.header`
  display: flex;
  height: ${(props) => props.theme.typography.pxToRem(89)};
  padding-left ${(props) => props.theme.typography.pxToRem(16)};
  padding-right ${(props) => props.theme.typography.pxToRem(16)};

  ${(props) => {
    return `
      @media ${props.theme.media.xxl} {
        padding-left: 0;
        padding-right: 0;
      }
    `;
  }};
 
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
        color: ${props.theme.palette.grey[50]};
      `;
    }
    return `
      color: ${props.theme.palette.grey[700]};
    `;
  }}
`;

export const Header = () => {
  const theme = useTheme();
  const isLg = useMedia(theme.media.lg);

  useEffect(() => {
    console.log("lslg", isLg);
  }, [isLg]);
  return (
    <Wrapper>
      <Container>
        <Trailing>
          <Title data-testid="page-title">
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
          {isLg ? <Nav data-testid="main-nav" /> : null}
          {!isLg ? (
            <SidebarToggleButton data-testid="sidebar-toggle-button" />
          ) : null}
        </Leading>
      </Container>
    </Wrapper>
  );
};
