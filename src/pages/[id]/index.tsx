import TypeButton from "@/components/common/TypeButton";
import { useCardContext } from "@/context/CardsContext";
import { pokemonTypes } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SelectedPokemonPage = () => {
  const router = useRouter();
  const { selectedCard, cards } = useCardContext();

  const sleected = cards?.find((card) => card.id === router.query.id);
  console.log(sleected);

  return (
    <div className=" w-full">
      <button onClick={router.back}>{"<"} volver</button>
      <div className="flex flex-col max-w-7xl  p-10 ">
        {sleected && (
          <div className="flex flex-col md:flex-row justify-evenly gap-5">
            <Image alt={sleected?.name} src={sleected.images.large} width={500} height={200}></Image>
            <div className=" flex flex-col divide-y-2 gap-4 divide-cyan-50 divide-opacity-30 ">
              <div className="flex flex-row gap-2">
                <p className="text-3xl md:text-5xl"> {sleected?.name}</p>
                <p> {sleected.hp} HP</p>
                {sleected.types?.map((type: string) => (
                  <TypeButton type={type as pokemonTypes} key={type} variant="icon" />
                ))}
              </div>
              <div className=""></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedPokemonPage;
