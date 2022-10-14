import styled from "styled-components";

const Wrapper = styled.div`
  ${(props) => props.theme.media.sm`
      max-width: 1536px;
      margin: 0 auto;
    `}
`;

type Props = Partial<{
  children: React.ReactNode;
}>;

export const Container = ({ children, ...rest }: Props) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
