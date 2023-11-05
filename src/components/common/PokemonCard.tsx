"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { PokemonCardType } from "@/types/types";
import Link from "next/link";
// import { fetchTypes } from "@/libs/fetchTypes";

type Props = {
  card: PokemonCardType;
};

const PokemonCard: FC<Props> = ({ card }) => {
  return (
    <div className="flex flex-col items-center p-4  md:transition-transform md:hover:scale-110 md:duration-300 ">
      <p className="dark:text-white">{card.name}</p>
      <Link href={`${card.id}`}>
        <div className="w-[250px] h-[350px] relative ">
          <Image className="relative  " alt={card.name} src={card.images.large} fill priority placeholder="empty" />
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
