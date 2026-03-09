import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import ClientLayout from "./client-layout";

const chester = localFont({
  src: "../public/fonts/BNChester.otf",
  variable: "--font-chester",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrej Koller",
  description:
    "Andrej Koller is a digital creator specializing in graphic design, illustration, and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chester.variable} ${inter.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
