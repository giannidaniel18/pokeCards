import { pokemonTypes } from "@/types/types";
import { setServers } from "dns";
import Image from "next/image";

import React, { FC, useState } from "react";

type Props = {
  type: pokemonTypes;
  onChangeType: (type: string) => void;
  selected: boolean;
};

const TypeButton: FC<Props> = ({ type, onChangeType, selected }) => {
  // const [selectedType, setselectedType] = useState<pokemonTypes | null>(null);
  // console.log(selected);

  const selectedStyle = selected ? "border scale-125 " : "";

  const handleSelectedType = (e: any) => {
    e.preventDefault();
    onChangeType(e.target.id);
  };

  const bgColorsCode = {
    Darkness: "bg-Darkness",
    Dragon: "bg-dragon",
    Lightning: "bg-Lightning",
    Fairy: "bg-fairy",
    Fighting: "bg-fighting",
    Fire: "bg-fire",
    Grass: "bg-grass",
    Colorless: "bg-Colorless",
    Psychic: "bg-psychic",
    Metal: "bg-Metal",
    Water: "bg-water",
  };

  return (
    <button
      id={type}
      className={`${bgColorsCode[type]} rounded-full p-1 md:hover:scale-110 transition-all w-auto h-auto md:w-6 md:h-6  ${selectedStyle}`}
      onClick={handleSelectedType}
    >
      <Image alt={"tipo de pokemon"} src={`/icons/poketypes/${type}.svg`} width={20} height={20} id={type} />
    </button>
  );
};

export default TypeButton;
