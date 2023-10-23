import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { PokemonCardType } from "@/types/types";
import { type } from "os";

export default function useCards() {
  const { startRequest } = useFetch();
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState<PokemonCardType[]>([]);
  // const [types, setTypes] = useState<[]>([]);
  const [filters, setFilters] = useState({ numberOfPages: 50, pokemonName: "", pokemonType: "" });

  const getCardById = async (id: string) => {
    const pokemonId = id;
    const apiResponse = await startRequest("get", `https://api.pokemontcg.io/v2/cards/${pokemonId}`);
    if (apiResponse.ok) {
      console.log(apiResponse);
      //   setCards(apiResponse.data.data);
    }
  };

  // const getTypes = async () => {
  //   setLoading(true);
  //   const apiResponse = await startRequest("get", `https://api.pokemontcg.io/v2/types`);
  //   if (apiResponse.ok) {
  //     setTypes(apiResponse.data.data);
  //     setLoading(false);
  //   }
  // };

  const getCards = async (cantidad: number = 50, nombre: string = "", type: string = "") => {
    setLoading(true);
    const qFilterName = `name:${nombre}*`;
    const qFilterType = `types:${type}*`;
    const qFilterSuperTypes= `supertype:energy`

    const queryParams = `?q=${qFilterName} ${qFilterSuperTypes} ${qFilterType}&pageSize=${cantidad}`;
    console.log(queryParams);
    const apiResponse = await startRequest("get", `https://api.pokemontcg.io/v2/cards${queryParams}`);
    if (apiResponse.ok) {
      setCards(apiResponse.data.data);
      setLoading(false);
    }
  };

  const handleSelectType = (type: string) => {
    const newFilters = filters;
    newFilters.pokemonType = type;

    setFilters(newFilters);

    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType);
  };

  useEffect(() => {
    console.log("first");
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType);
    // getTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cards, getCards, loading };
}
