import { useRouter } from "next/router";
import React from "react";

const SelectedPokemonPage = () => {
  const router = useRouter();

  console.log(router);
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-white "> {router.query.id}</p>
    </div>
  );
};

export default SelectedPokemonPage;
