import React, { useState } from "react";
import PokemonCard from "../common/PokemonCard";
import useCards from "@/hooks/useCards";
import FiltersContainer from "../Filters/FiltersContainer";

import { BiFilterAlt } from "react-icons/bi";

const PokemonCardContainer = () => {
  const { cards, getCards, loading } = useCards();
  const [pokemonType, setPokemonType] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(50);
  const [pokemonName, setPokemonName] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ numberOfPages: 50, pokemonName: "", pokemonType: "" });
  // const cards = await fetchPokemon();

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
    setFilters(newFilters);
    // console.log(newFilters);
    // console.log(numberOfPages);
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType);
  };

  const tamaño = loading ? "100vh" : "100%";

  return (
    <>
      <div className="flex flex-col md:flex-row gap-1">
        <div className="flex flex-col ">
          {!showFilters && !loading && (
            <div className="z-50 h-10">
              <div className="fixed mt-16 ml-2">
                <button onClick={toggleShowFilters} className="rounded-full bg-slate-800 p-2">
                  <BiFilterAlt size={40} />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className={`flex-flex col mt-10 h-[${tamaño}]`}>
          <div className="flex flex-row gap-4 p-2">
            {pokemonName && (
              <div className="p-2 bg-slate-950 rounded-3xl">
                <p>Nombre : {pokemonName}</p>
              </div>
            )}

            {pokemonType && (
              <div className="p-2 bg-slate-950 rounded-3xl">
                {" "}
                <p>tipo : {pokemonType}</p>{" "}
              </div>
            )}
          </div>
          <div className=" flex flex-row flex-wrap justify-center ">
            {loading ? "Loading ... " : cards.map((card) => <PokemonCard key={card.id} card={card} />)}
          </div>
        </div>
      </div>
      {showFilters && (
        <div
          className={`fixed z-50 transform top-0 left-0 md:w-[450px] transition-all duration-300 ease-in-out ${
            showFilters ? "translate-x-0 translate-y-0" : "-translate-x-full -translate-y-full"
          } lg:translate-x-0 lg:translate-y-0`}
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
          />
        </div>
      )}
    </>
  );
};

export default PokemonCardContainer;
