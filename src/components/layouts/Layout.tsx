import React, { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className={`flex min-h-screen flex-col items-starts justify-start  ${inter.className}`}>
      <div className="bg-red-500 flex flex-row justify-between w-full">barra de navegación</div>
      {children}
    </main>
  );
};

export default Layout;
