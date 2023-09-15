import Layout from "@/components/layouts/Layout";
import PokemonCardContainer from "@/components/pages/PokemonCardContainer";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <Layout>
      <PokemonCardContainer />
    </Layout>
  );
}
