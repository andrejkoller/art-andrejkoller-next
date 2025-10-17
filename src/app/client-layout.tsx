"use client";

import { Header, Footer, Menu } from "@/components";
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
