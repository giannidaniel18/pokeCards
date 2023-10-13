import React, { FC } from "react";
import TypeButton from "../common/TypeButton";
import { FiDeleteIcon } from "@/lib/reactIcons";
import { ArrayPokemonTypes } from "@/constants/constantes";

type Props = {
  onSetPokemonType: (type: string) => void;
  selectedType: string;
};

const TypeFilter: FC<Props> = ({ onSetPokemonType, selectedType }) => {
  const resetTypeFilter = () => {
    onSetPokemonType("");
  };

  return (
    <div className="flex flex-col text-start md:w-fit  ">
      <label className="block text-white text-sm font-bold mb-2">Filter by type</label>
      <div className="flex flex-row gap-2 p-2 border rounded-xl justify-between items-center  md:justify-start">
        {ArrayPokemonTypes.map((type) => (
          <TypeButton
            key={type}
            type={type}
            onChangeType={onSetPokemonType}
            selected={selectedType === type ? true : false}
          />
        ))}
        <button className="text-xl flex flex-row gap-2 items-center" onClick={resetTypeFilter}>
          <FiDeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default TypeFilter;
