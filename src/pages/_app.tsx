import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
