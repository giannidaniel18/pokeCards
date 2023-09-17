import React, { useEffect, useState } from "react";
import PokemonCard from "../common/PokemonCard";
import TypeButton from "../common/TypeButton";
import useCards from "@/hooks/useCards";
import PokemonNameFilter from "../common/PokemonNameFilter";
import { CgPokemonIcon, TfiReloadIcon } from "@/lib/reactIcons";

const PokemonCardContainer = () => {
  const { cards, getCards, types } = useCards();
  const [pokemonType, setPokemonType] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(50);
  const [pokemonName, setPokemonName] = useState("");
  const [filters, setFilters] = useState({ numberOfPages: 50, pokemonName: "", pokemonType: "" });

  // const cards = await fetchPokemon();

  const resetFilters = () => {
    setPokemonName("");
    setPokemonType("");
    setNumberOfPages(50);
  };

  const handleSelectType = (type: string) => {
    setPokemonType(type);
  };

  const handleSetPokemonName = (name: string) => {
    setPokemonName(name);
  };

  const ClearPokemonName = (e: any) => {
    e.preventDefault();
    setPokemonName("");
  };

  const AplyFilters = () => {
    const newFilters = filters;
    newFilters.pokemonName = pokemonName;
    newFilters.pokemonType = pokemonType;
    newFilters.numberOfPages = numberOfPages;
    setFilters(newFilters);
    console.log(newFilters);
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType);
  };

  return (
    <div className="flex flex-col gap-2 ">
      {types && (
        <div className="flex  flex-col md:items-start p-2">
          <div className="flex gap-4 flex-col  p-2">
            <div className="flex flex-col text-start md:w-fit  ">
              <span className="text-sm font-medium">Filter by type</span>
              <div className="flex flex-row gap-2 p-2 border rounded-xl justify-center md:justify-start">
                {types.map((type) => (
                  <TypeButton
                    key={type}
                    type={type}
                    onChangeType={handleSelectType}
                    selected={pokemonType === type ? true : false}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col text-start md:w-fit ">
              <PokemonNameFilter
                onSetPokemonNameFilter={handleSetPokemonName}
                onClearPokemonName={ClearPokemonName}
                pokemonName={pokemonName}
              />
            </div>
          </div>
          <div className="flex flex-row place-items-end justify-end w-full md:w-fit">
            <button
              className="text-xl flex flex-row gap-2 border rounded-xl items-center self-end p-2 m-2 "
              onClick={AplyFilters}
            >
              go
              <CgPokemonIcon />
            </button>
            <button
              className="text-xl flex flex-row gap-2 border rounded-xl items-center self-end p-2 m-2 "
              onClick={resetFilters}
            >
              Reset
              <TfiReloadIcon />
            </button>
          </div>
        </div>
      )}

      {cards && (
        <div className="flex flex-row flex-wrap justify-center">
          {cards.map((card) => (
            <PokemonCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonCardContainer;
