import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { PokemonCardType } from "@/types/types";

export default function useCards(filters: {
  numberOfPages: number;
  superType: string;
  pokemonName: string;
  pokemonType: string;
}) {
  const { startRequest } = useFetch();
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<PokemonCardType[]>([]);
  // const [types, setTypes] = useState<[]>([]);
  // const [filters, setFilters] = useState({ numberOfPages: 50, pokemonName: "", pokemonType: "" });

  // const getCardById = async (id: string) => {
  //   const pokemonId = id;
  //   const apiResponse = await startRequest("get", `https://api.pokemontcg.io/v2/cards/${pokemonId}`);
  //   if (apiResponse.ok) {
  //     console.log(apiResponse);
  //     //   setCards(apiResponse.data.data);
  //   }
  // };

  const getCards = async (
    cantidad: number = 50,
    nombre: string = "",
    type: string = "",
    supertype: string = "pokemon"
  ) => {
    console.log(supertype);
    setLoading(true);
    const qFilterName = `name:${nombre}*`;
    const qFilterType = `types:${type}*`;
    const qFilterSuperTypes = `supertype:${supertype}`;

    const queryParams = `?q=${qFilterSuperTypes} ${
      supertype !== "pokemon" ? qFilterName : `${qFilterName} ${qFilterType}`
    } &pageSize=${cantidad} `;
    // const queryParams = `?q=${qFilterSuperTypes} ${qFilterName && qFilterName} ${
    //   qFilterType && qFilterType
    // } &pageSize=${cantidad} `;

    const apiResponse = await startRequest("get", `https://api.pokemontcg.io/v2/cards${queryParams}`);
    if (apiResponse.ok) {
      setCards(apiResponse.data.data);
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
    console.log(filters);
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType, filters.superType);
    // getTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cards, getCards, loading };
}
