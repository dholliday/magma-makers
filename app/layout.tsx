import type { Metadata } from "next";
import { Providers } from "./providers";
import { fonts } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Magma Makers",
  description: "A home for Magma Makers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.spaceGrotesk.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
