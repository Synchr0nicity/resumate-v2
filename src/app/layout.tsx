// app/layout.tsx
import { Box } from "@chakra-ui/react";
import NavBar from "../components/layout/NavBar";
import Provider from "./provider";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        ></link>
      </head>
      <body className={plusJakarta.className}>
        {/* SessionProvider remains a client component */}
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
