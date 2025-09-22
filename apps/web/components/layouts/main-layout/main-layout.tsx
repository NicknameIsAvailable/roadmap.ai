import React from "react";
import { PropsWithChildren } from "react";
import { NavBar } from "./nav-bar";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen relative">
      <main className="flex-1">{children}</main>
      <NavBar />
    </div>
  );
};
