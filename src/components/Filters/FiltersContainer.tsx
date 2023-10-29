import path from "path";
import React, { FC, useState } from "react";
import TypeFilter from "./TypeFilter";
import PokemonNameFilter from "./PokemonNameFilter";
import PageFilter from "./PageFilter";
import { CgPokemonIcon, TfiReloadIcon } from "@/lib/reactIcons";
import SuperTypeFilter from "./SuperTypeFilter";

type Props = {
  handleSelectType: any;
  pokemonType: any;
  handleSetPokemonName: any;
  pokemonName: any;
  handleNumberOfPagesChange: any;
  numberOfPages: any;
  AplyFilters: any;
  resetFilters: any;
  toggleShowFilters: any;
  onSetSupertype: (superType: string) => void;
  superType: string;
};

const FiltersContainer: FC<Props> = ({
  handleSelectType,
  pokemonType,
  handleSetPokemonName,
  pokemonName,
  handleNumberOfPagesChange,
  numberOfPages,
  AplyFilters,
  resetFilters,
  toggleShowFilters,
  onSetSupertype,
  superType,
}) => {
  return (
    <div className="flex flex-col text-start md:h-[100vh] bg-slate-800 opacity-95 p-4 gap-4 shadow-lg shadow-slate-400 ">
      <button onClick={toggleShowFilters} className="w-fit self-end p-2">
        X
      </button>
      <SuperTypeFilter onSetSuperType={onSetSupertype} superSelected={superType} />
      {superType === "pokemon" && <TypeFilter onSetPokemonType={handleSelectType} selectedType={pokemonType} />}
      <PokemonNameFilter onSetPokemonNameFilter={handleSetPokemonName} pokemonName={pokemonName} />
      <PageFilter onChangeNumberOfPages={handleNumberOfPagesChange} pageNumber={numberOfPages} />

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
  );
};

export default FiltersContainer;
