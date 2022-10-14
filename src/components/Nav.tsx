import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  li {
    list-style: none;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  padding: ${(props) => props.theme.typography.pxToRem(12)};
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

export const Nav = ({ ...rest }) => {
  return (
    <Wrapper {...rest}>
      <li>
        <Anchor href="#">Favorites</Anchor>
      </li>
    </Wrapper>
  );
};
