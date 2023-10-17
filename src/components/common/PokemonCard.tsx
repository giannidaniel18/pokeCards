"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { PokemonCardType } from "@/types/types";
// import { fetchTypes } from "@/libs/fetchTypes";

type Props = {
  card: PokemonCardType;
};

const PokemonCard: FC<Props> = ({ card }) => {
  //   const [CardsToShow, setCardsToShow] = useState(cards);
  //   const [types, setTypes] = useState([]);

  //   const [filters, setFilters] = useState([]);

  //   const typesGetted = async () => {
  //     const res = await fetchTypes();
  //     setTypes(res.data);
  //     return types;
  //   };

  return (
    <div className="flex flex-col items-center p-4">
      <p className="dark:text-white">{card.name}</p>
      <Image className="relative" alt={card.name} src={card.images.large} width={250} height={250} />
    </div>
  );
};

export default PokemonCard;
