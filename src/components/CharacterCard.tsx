import styled from "styled-components";
import { Resource } from "../types/api";

const Wrapper = styled.section`
  text-align: center;
  border-width: 1px;
  border-style: solid;
  padding: ${(props) => props.theme.typography.pxToRem(16)};
  border-radius: ${(props) => props.theme.typography.pxToRem(8)};
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        border-color: ${props.theme.palette.grey[800]};
      `;
    }
    return `
    border-color: ${props.theme.palette.grey[300]};
    `;
  }}
`;

const Thumbnail = styled.div<{ thumbnail: Resource["thumbnail"] }>`
  width: 100%;
  height: 400px;
  margin-bottom: ${(props) => props.theme.typography.pxToRem(16)};
  border-radius: ${(props) => props.theme.typography.pxToRem(8)};
  background-image: ${(props) =>
    `url(${props.thumbnail.path}.${props.thumbnail.extension})`};
  background-position: center;
  background-size: cover;
  filter: grayscale(100%);
  transition: all 0.5s;

  &:hover {
    filter: grayscale(0%);
  }
`;

const Name = styled.h3`
  margin: 0;
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  ${(props) => {
    if (props.theme.palette.mode === "dark") {
      return `
        color: ${props.theme.palette.grey[50]};
      `;
    }
    return `
    color: ${props.theme.palette.grey[800]};
    `;
  }};
`;

const Description = styled.p`
  margin: 0;
  margin-top: ${(props) => props.theme.typography.pxToRem(16)};
  font-size: ${(props) => props.theme.typography.body2};
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

type Props = Resource;

export const CharacterCard = ({ name, description, thumbnail }: Props) => {
  const src = `${thumbnail.path}.${thumbnail.extension}`;
  return (
    <Wrapper>
      <Thumbnail thumbnail={thumbnail} />
      <Name>{name}</Name>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};
