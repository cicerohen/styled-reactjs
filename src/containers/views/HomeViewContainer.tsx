import { useEffect, useMemo } from "react";

import { View } from "../../components/View";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Container } from "../../components/Container";

import { CharactersGridContaienr } from "../CharactersGridContainer";
export const HomeViewContainer = () => {
  return (
    <View>
      <Hero />
      <Section title="Characters">
        <Container>
          <CharactersGridContaienr />
        </Container>
      </Section>
    </View>
  );
};
