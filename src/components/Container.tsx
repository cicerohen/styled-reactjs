import styled from "styled-components";

const Wrapper = styled.div`
  @media ${(props) => props.theme.media.xxl} {
    max-width: 1536px;
    margin: 0 auto;
  }
`;

type Props = Partial<{
  children: React.ReactNode;
}>;

export const Container = ({ children, ...rest }: Props) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
