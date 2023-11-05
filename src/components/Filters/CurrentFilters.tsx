import React, { FC } from "react";

type Props = {
  pokemonName: string;
  pokemonType: string;
  superType: string;
  numberOfPages: number;
};

const CurrentFilters: FC<Props> = ({ pokemonName, pokemonType, superType, numberOfPages }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-fit self-end items-end md:w-full justify-end">
      {pokemonName && (
        <div className="p-2 bg-slate-500  font-semibold text  text-slate-900 rounded-3xl">
          <p>Name : {pokemonName}</p>
        </div>
      )}
      {pokemonType && (
        <div className="p-2 bg-slate-500  font-semibold text text-slate-900 rounded-3xl">
          <p>Type: {pokemonType}</p>{" "}
        </div>
      )}
      {superType && (
        <div className="p-2 bg-slate-500  font-semibold text text-slate-900 rounded-3xl">
          <p>Card type: {superType}</p>{" "}
        </div>
      )}
      {!!numberOfPages && (
        <div className="p-2 bg-slate-500  font-semibold text text-slate-900 rounded-3xl">
          <p>Result : {numberOfPages}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default CurrentFilters;
