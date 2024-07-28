import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import ThemeToggler from "../common/ThemeToggler";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className={`flex min-h-screen items-center flex-col  ${inter.className}`}>
      <div className="bg-red-500 flex flex-row justify-between w-full h-10 sticky top-0 z-50 ">
        <ThemeToggler />
      </div>
      <section className="max-w-screen-2xl ">{children}</section>
    </main>
  );
};

export default Layout;
