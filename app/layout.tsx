import type { Metadata } from "next";
import "./globals.scss";

import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Number Ride",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
