import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${(props) => props.theme.typography.pxToRem(8)};
  ${(props) => props.theme.media.lg`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export type Item = {
  Render: React.FC;
};

type Props = {
  items: Item[];
};

export const Grid = ({ items = [] }: Props) => {
  return <Wrapper>{items.map((item) => item.Render(item))}</Wrapper>;
};
