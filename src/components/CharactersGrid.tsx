import styled from "styled-components";
import { Grid, Item as GridItem } from "./Grid";
import { CharacterCard } from "./CharacterCard";
import { Loading } from "./Loading";

import { Resource } from "../types/api";

const Wrapper = styled.div`
  position: relative;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export type Item = GridItem;

type Props = {
  loading: boolean;
  characters: Resource[];
};

export const CharactersGrid = ({ loading, characters }: Props) => {
  const items = characters.map((character) => ({
    Render: () => <CharacterCard key={character.id} {...character} />,
  }));

  return (
    <Wrapper>
      {loading ? (
        <LoadingWrapper>
          <Loading title="Loading characters..." />
        </LoadingWrapper>
      ) : null}
      <Grid items={items} />
    </Wrapper>
  );
};
