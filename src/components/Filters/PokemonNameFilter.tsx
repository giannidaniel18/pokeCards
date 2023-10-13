import { CgPokemonIcon, FiDeleteIcon } from "@/lib/reactIcons";
import React, { FC, useState } from "react";

type Props = {
  onSetPokemonNameFilter: (type: string) => void;
  pokemonName: string;
};

const PokemonNameFilter: FC<Props> = ({ onSetPokemonNameFilter, pokemonName }) => {
  const handlePokemonName = (e: any) => {
    e.preventDefault();
    // console.log(e.target.value);
    onSetPokemonNameFilter(e.target.value);
  };

  const handleResetPokemonName = (e: any) => {
    e.preventDefault();
    onSetPokemonNameFilter("");
  };

  return (
    <div className="flex flex-col text-start md:w-fit">
      <label className="block text-white text-sm font-bold mb-2">Filter by name</label>
      <form className="flex flex-row gap-4 p-2 border rounded-xl justify-between md:justify-start">
        <input
          type="text"
          className="text-black rounded-md focus:outline-none px-2"
          value={pokemonName}
          onChange={handlePokemonName}
        />

        <button className="text-xl flex flex-row gap-2 items-center" onClick={handleResetPokemonName}>
          <FiDeleteIcon />
        </button>
      </form>
    </div>
  );
};

export default PokemonNameFilter;
