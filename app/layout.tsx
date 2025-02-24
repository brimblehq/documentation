import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { TypeTable } from "fumadocs-ui/components/type-table";

const inter = Inter({
  subsets: ["latin"],
});

const components = {
  Accordion,
  Accordions,
  TypeTable,
  // Add other components here if needed
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider components={components}>{children}</RootProvider>
      </body>
    </html>
  );
}