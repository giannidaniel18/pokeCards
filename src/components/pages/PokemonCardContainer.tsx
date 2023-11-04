import React, { useState } from "react";
import PokemonCard from "../common/PokemonCard";
import useCards from "@/hooks/useCards";
import FiltersContainer from "../Filters/FiltersContainer";

import { BiFilterAlt } from "react-icons/bi";
import CurrentFilters from "../Filters/CurrentFilters";

const PokemonCardContainer = () => {
  const [superType, setSuperType] = useState("pokemon");
  const [pokemonType, setPokemonType] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(50);
  const [pokemonName, setPokemonName] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ numberOfPages: 50, superType: superType, pokemonName: "", pokemonType: "" });
  const { cards, getCards, loading } = useCards(filters);
  // const cards = await fetchPokemon();

  const onSetSupertype = (superType: string) => {
    setSuperType(superType);
  };
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };
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
  const handleNumberOfPagesChange = (newNumberOfPages: number) => {
    setNumberOfPages(newNumberOfPages);
  };
  const AplyFilters = () => {
    const newFilters = filters;
    newFilters.pokemonName = pokemonName;
    newFilters.pokemonType = pokemonType;
    newFilters.numberOfPages = numberOfPages;
    newFilters.superType = superType;
    setFilters(newFilters);
    // console.log(newFilters);
    // console.log(numberOfPages);
    toggleShowFilters();
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType, filters.superType);
  };
  const tamaño = loading ? "100vh" : "100%";

  return (
    <>
      <div className="flex flex-col md:flex-row gap-1">
        <div className="flex flex-col ">
          <div className="z-50 h-10 ">
            {!showFilters && !loading && (
              <div className="fixed top-16 left-5">
                <button onClick={toggleShowFilters} className="rounded-full bg-slate-800 p-2">
                  <BiFilterAlt size={40} />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className={`flex flex-col mt-10 h-[${tamaño}] w-full`}>
          <CurrentFilters
            numberOfPages={cards.length}
            pokemonName={filters.pokemonName}
            pokemonType={filters.pokemonType}
            superType={filters.superType}
          />
          <div className=" flex flex-row flex-wrap justify-center ">
            {loading ? "Loading ... " : cards.map((card) => <PokemonCard key={card.id} card={card} />)}
          </div>
        </div>
      </div>
      <div
        className={`fixed z-50 top-[-406px] md:top-0 md:left-[-450px] md:w-[450px] ${
          showFilters
            ? ` translate-y-full md:translate-x-full md:translate-y-0 duration-300`
            : `-translate-y-full md:-translate-x-full md:translate-y-0 duration-300`
        } `}
      >
        <FiltersContainer
          AplyFilters={AplyFilters}
          handleNumberOfPagesChange={handleNumberOfPagesChange}
          handleSelectType={handleSelectType}
          handleSetPokemonName={handleSetPokemonName}
          numberOfPages={numberOfPages}
          pokemonName={pokemonName}
          pokemonType={pokemonType}
          resetFilters={resetFilters}
          toggleShowFilters={toggleShowFilters}
          onSetSupertype={onSetSupertype}
          superType={superType}
        />
      </div>
    </>
  );
};

export default PokemonCardContainer;
