import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {footerData} from "../data/footerData";
import { Footer } from "../components/_organisms/Footer";
import { HeaderNav } from "../components/_organisms/HeaderNav";
import Container from "@mui/material/Container";
import NavBarItems from "../data/NavBarItems";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "RMPT LLC",
  description: "Renshu Media Production & Technologies LLC",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={nunito.className} style={{ margin: 0 }}>
        <HeaderNav menuItems={NavBarItems} />
        <Container
          maxWidth='lg'
          sx={{
            p: 2,
            minHeight: "100vh",
            py: 5,
          }}>
          {children}
        </Container>
        <Footer footer={footerData} />
      </body>
    </html>
  );
}