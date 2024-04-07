import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { PokemonCardType } from "@/types/types";
import { InitialProps } from "@/constants/constantes";
import { useCardContext } from "@/context/CardsContext";

export default function useCards(filters: {
  numberOfPages: number;
  superType: string;
  pokemonName: string;
  pokemonType: string;
}) {
  const { handleSetCards, cards } = useCardContext();
  const { startRequest } = useFetch();
  const [loading, setLoading] = useState(false);
  // const [cards, setCards] = useState<PokemonCardType[]>([]);

  const getCards = async (
    cantidad: number = InitialProps.initialCards,
    nombre: string = InitialProps.initialName,
    type: string = InitialProps.initialType,
    supertype: string = InitialProps.initialSuperType,
    page: number = InitialProps.initialPage
  ) => {
    console.log(page);
    // if (cards.length && page == InitialProps.initialPage) return;
    setLoading(true);

    const qFilterName = `name:${nombre}*`;
    const qFilterType = `types:${type}*`;
    const qFilterSuperTypes = `supertype:${supertype}`;
    const qFilterCurrentPage = `&page=${page}`;

    const queryParams = `?q=${qFilterSuperTypes} ${
      supertype !== "pokemon" ? qFilterName : `${qFilterName} ${qFilterType}`
    } &pageSize=${cantidad} ${qFilterCurrentPage}`;
    // const queryParams = `?q=${qFilterSuperTypes} ${qFilterName && qFilterName} ${
    //   qFilterType && qFilterType
    // } &pageSize=${cantidad} `;

    // const apiResponse = await startRequest("get", `https://api.pokemontcg.io/v2/cards${queryParams}`);
    const apiResponse = await startRequest(
      "get",
      `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:[1%20TO%20151]`
    );
    if (apiResponse.ok) {
      handleSetCards(apiResponse.data.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  // const handleSelectType = (type: string) => {
  //   const newFilters = filters;
  //   newFilters.pokemonType = type;

  //   setFilters(newFilters);

  //   getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType);
  // };

  useEffect(() => {
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType, filters.superType);
    // getTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cards, getCards, loading };
}
