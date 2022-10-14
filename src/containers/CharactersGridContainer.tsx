import { useEffect, useState } from "react";
import { CharactersGrid } from "../components/CharactersGrid";

import { useFetchApi } from "../hooks/useFetchApi";

import { Resource } from "../types/api";

export const CharactersGridContaienr = () => {
  const { response, isFetching, startFetch } = useFetchApi("/characters");
  const [characters, setCharacters] = useState<Resource[]>([]);

  useEffect(() => {
    startFetch();
  }, []);

  useEffect(() => {
    if (response?.data.results) {
      setCharacters(response?.data.results);
    }
  }, [response]);

  return <CharactersGrid loading={isFetching} characters={characters} />;
};
