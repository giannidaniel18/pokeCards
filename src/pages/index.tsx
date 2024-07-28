import Layout from "@/components/layouts/Layout";
import PokemonCardContainer from "@/components/pages/PokemonCardContainer";
import axios from "axios";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

export default function Home() {
  // return <ObtenerCartasPokemon />;
  // return <PokemonCardContainer />;
  return <div>hello world</div>;
}

export const ObtenerCartasPokemon = () => {
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerTodosLosIds = async () => {
      const apiKey = "src/hooks/useFetch.tsx"; // Reemplaza con tu clave de API
      const baseUrl = "https://api.pokemontcg.io/v2/cards";
      let idsAccumulados: any = [];
      let page = 10; // proximo 20
      const pageSize = 250;

      try {
        //proximo while hasta el 30
        while (page < 20) {
          const response = await axios.get(baseUrl, {
            headers: {
              "X-Api-Key": apiKey,
            },
            params: {
              page: page,
              pageSize: pageSize,
            },
          });

          idsAccumulados = idsAccumulados.concat(response.data.data.map((card: { id: any }) => card.id));

          // if (response.data.data.length < pageSize) {
          //   break;
          // }

          page++;
        }
        setIds(idsAccumulados);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    obtenerTodosLosIds();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Total de cartas obtenidas: {ids.length}</h1>
      <ul>
        {ids.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
};
