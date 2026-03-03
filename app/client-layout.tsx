"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { Cursor } from "@/components/cursor";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Cursor />
      <Menu />
      <div className="flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
