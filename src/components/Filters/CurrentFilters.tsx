import React, { FC } from "react";

type Props = {
  pokemonName: string;
  pokemonType: string;
  superType: string;
  numberOfPages: number;
};

const CurrentFilters: FC<Props> = ({ pokemonName, pokemonType, superType, numberOfPages }) => {
  return (
    <div className="flex flex-row gap-4 p-2 text-end">
      {pokemonName && (
        <div className="p-2 bg-slate-950 rounded-3xl">
          <p>Name : {pokemonName}</p>
        </div>
      )}
      {pokemonType && (
        <div className="p-2 bg-slate-950 rounded-3xl">
          <p>Type: {pokemonType}</p>{" "}
        </div>
      )}
      {superType && (
        <div className="p-2 bg-slate-950 rounded-3xl">
          <p>Card type: {superType}</p>{" "}
        </div>
      )}
      {numberOfPages && (
        <div className="p-2 bg-slate-950 rounded-3xl">
          <p>Result : {numberOfPages}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default CurrentFilters;
