"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { Cursor } from "@/components/cursor";
import * as React from "react";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Cursor />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex flex-col">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
