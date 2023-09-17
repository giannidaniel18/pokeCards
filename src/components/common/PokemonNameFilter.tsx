import { CgPokemonIcon, FiDeleteIcon } from "@/lib/reactIcons";
import React, { FC, useState } from "react";

type Props = {
  onSetPokemonNameFilter: (type: string) => void;
  onClearPokemonName: (e: any) => void;
  pokemonName: string;
};

const PokemonNameFilter: FC<Props> = ({ onSetPokemonNameFilter, onClearPokemonName, pokemonName }) => {
  const handlePokemonName = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    onSetPokemonNameFilter(e.target.value);
  };

  //   const handlePokemonNameFilter = (e: any) => {
  //     e.preventDefault();
  //     onSetPokemonNameFilter(pokemonName);
  //   };

  return (
    <>
      <span className="text-sm font-medium">Filter by name</span>
      <form className="flex flex-row gap-4 p-2 border rounded-xl justify-center md:justify-start">
        <input type="text" className="text-black rounded-md" value={pokemonName} onChange={handlePokemonName} />

        <button className="text-xl flex flex-row gap-2 items-center" onClick={onClearPokemonName}>
          clear <FiDeleteIcon />
        </button>
      </form>
    </>
  );
};

export default PokemonNameFilter;
