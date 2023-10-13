import React, { useState } from "react";
import PokemonCard from "../common/PokemonCard";
import useCards from "@/hooks/useCards";
import FiltersContainer from "../Filters/FiltersContainer";

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
    <div className="flex flex-col md:flex-row gap-1 bg-slate-800">
      <div className="flex flex-col md:bg-slate-700">
        {!showFilters && (
          <div className="z-50 h-10">
            <div className=" h-fit mb-96 md:w-[150px] md:mb-0 mt-12 md:p-4 ">
              <div className="fixed  bg-slate-700">
                <button onClick={toggleShowFilters}>Show FIlters</button>
              </div>
            </div>
          </div>
        )}
        {showFilters && (
          <div className="z-50">
            <div className=" h-fit mb-96 md:w-[450px] md:mb-0 mt-8 md:p-2">
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
        <div className="flex flex-row flex-wrap justify-center ">
          {loading ? "Loading ... " : cards.map((card) => <PokemonCard key={card.id} card={card} />)}
        </div>
      </div>
    </div>
  );
};

export default PokemonCardContainer;
