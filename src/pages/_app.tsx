import Layout from "@/components/layouts/Layout";
import CardsContextProvider from "@/context/CardsContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <CardsContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CardsContextProvider>
    </div>
  );
}
