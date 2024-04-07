import React, { FC } from "react";
import Image from "next/image";
import { PokemonCardType } from "@/types/types";
import Link from "next/link";
import { useCardContext } from "@/context/CardsContext";

// import { fetchTypes } from "@/libs/fetchTypes";

type Props = {
  card: PokemonCardType;
};

const PokemonCard: FC<Props> = ({ card }) => {
  const { handleSetSelectedCard } = useCardContext();

  return (
    <div className="flex flex-col items-center  md:transition-transform md:hover:scale-110 md:duration-300 ">
      <p className="dark:text-white">{card.name}</p>
      <Link href={`${card.id}`} onClick={() => handleSetSelectedCard(card)}>
        <div className="w-[250px] h-[350px] relative ">
          <Image className="relative " alt={card.name} src={card.images.large} fill quality={50} />
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
