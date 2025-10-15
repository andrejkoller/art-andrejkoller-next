"use client";

import { Header, Footer, Menu } from "@/components";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
