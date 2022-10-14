import { SVGAttributes } from "react";
import styled from "styled-components";

const Wrapper = styled.svg<SVGAttributes<{}>>``;

export type Props = SVGAttributes<{}>;

export const Icon = ({ children, ...rest }: Props) => {
  return (
    <Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...rest}>
      {children}
    </Wrapper>
  );
};
