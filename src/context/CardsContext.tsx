import { PokemonCardType, pokemonTypes } from "@/types/types";
import React, { useContext, createContext, useState, PropsWithChildren } from "react";

type contextType = {
  cards: PokemonCardType[] | [];
  selectedCard: PokemonCardType | null;
  handleSetSelectedCard: (card: PokemonCardType) => void;
  handleSetCards: (cards: PokemonCardType[]) => void;
};

export const CardsContext = createContext<contextType | null>(null);

export const useCardContext = () => useContext(CardsContext) as contextType;

const CardsContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [cards, setCards] = useState<PokemonCardType[] | []>([]);
  const [selectedCard, setSelectedCard] = useState<PokemonCardType | null>(null);

  const handleSetCards = (cards: PokemonCardType[]) => {
    setCards(cards);
  };
  const handleSetSelectedCard = (card: PokemonCardType) => {
    setSelectedCard(card);
  };

  return (
    <CardsContext.Provider value={{ cards, selectedCard, handleSetSelectedCard, handleSetCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
