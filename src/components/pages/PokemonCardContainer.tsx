import React, { useState } from "react";
import PokemonCard from "../common/PokemonCard";
import useCards from "@/hooks/useCards";
import FiltersContainer from "../Filters/FiltersContainer";

import { BiFilterAlt } from "react-icons/bi";
import CurrentFilters from "../Filters/CurrentFilters";
import { InitialProps } from "@/constants/constantes";

import CardSkeleton from "../common/CardSkeleton";
import PagesButtons from "../common/PagesButtons";

const PokemonCardContainer = () => {
  const [superType, setSuperType] = useState(InitialProps.initialSuperType);
  const [pokemonType, setPokemonType] = useState(InitialProps.initialType);
  const [numberOfPages, setNumberOfPages] = useState(InitialProps.initialCards);
  const [pokemonName, setPokemonName] = useState(InitialProps.initialName);
  const [page, setPage] = useState(InitialProps.initialPage);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    numberOfPages: InitialProps.initialCards,
    superType: superType,
    pokemonName: "",
    pokemonType: "",
    page: InitialProps.initialPage,
  });
  const { cards, getCards, loading } = useCards(filters);
  const a = [];
  let b = {};
  // const cards = await fetchPokemon();
  console.log(
    cards.map(
      (card) =>
        (b = {
          number: card.number,
          nombre: card.name,
        }),
      a.push(b)
    )
  );
  const onSetSupertype = (superType: string) => {
    setSuperType(superType);
  };
  const toggleShowFilters = () => {
    setShowFilters(!showFilters);
  };
  const resetFilters = () => {
    setPokemonName(InitialProps.initialName);
    setPokemonType(InitialProps.initialType);
    setNumberOfPages(InitialProps.initialCards);
    setPage(InitialProps.initialPage);
  };
  const handleCurrentPage = (action: "next" | "prev") => {
    if (action === "next") {
      const newPage = page + 1;
      setPage(newPage);
      getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType, filters.superType, newPage);
    } else if (action === "prev") {
      if (page > 0) {
        const newPage = page - 1;
        setPage(newPage);
        getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType, filters.superType, newPage);
      }
    }
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
    newFilters.page = InitialProps.initialPage;
    setPage(InitialProps.initialPage);
    setFilters(newFilters);
    // console.log(newFilters);
    // console.log(numberOfPages);
    toggleShowFilters();
    getCards(filters.numberOfPages, filters.pokemonName, filters.pokemonType, filters.superType, filters.page);
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
        <div className={`flex flex-col h-[${tamaño}] w-full gap-5`}>
          <CurrentFilters
            numberOfPages={cards.length}
            pokemonName={filters.pokemonName}
            pokemonType={filters.pokemonType}
            superType={filters.superType}
            loading={loading}
          />

          {cards.length > 0 && <PagesButtons onSetPage={handleCurrentPage} currentPage={page} />}
          <div className="flex flex-row flex-wrap justify-center gap-10 ">
            {loading ? (
              [...Array(filters.numberOfPages)].map((item, index) => <CardSkeleton key={index} />)
            ) : cards.length > 0 ? (
              cards.map((card) => <PokemonCard key={card.id} card={card} />)
            ) : (
              <div className="w-full">
                <h1 className="text-4xl w-full">No encontramos resultados para tu busqueda </h1>
              </div>
            )}
          </div>
          {cards.length > 0 && <PagesButtons onSetPage={handleCurrentPage} currentPage={page} />}
        </div>
      </div>
      <div
        className={`fixed z-50 top-[-446px] w-full md:top-0 md:left-[-450px] md:w-[450px] ${
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
