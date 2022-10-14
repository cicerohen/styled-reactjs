import styled from "styled-components";
import { ArrowPathIcon } from "./svg-icons/ArrowPathIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(ArrowPathIcon)`
  width: ${(props) => props.theme.typography.pxToRem(24)};
  height: ${(props) => props.theme.typography.pxToRem(24)};
  margin-right: ${(props) => props.theme.typography.pxToRem(8)};
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotating 2s linear infinite;
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

const Title = styled.p`
  margin; 0;
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

type Props = Partial<{
  title: React.ReactNode;
}>;

export const Loading = ({ title = "Loading...." }: Props) => {
  return (
    <Wrapper>
      <Icon />
      <Title>{title}</Title>
    </Wrapper>
  );
};
