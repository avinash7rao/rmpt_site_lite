import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import footerData from "../data/footerData";
import { Footer } from "../components/_organisms/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RMPT LLC",
  description: "Renshu Media Production & Technologies LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='max-w-screen-md p-6 mx-auto'>
          {/* <HeaderNav menuItems={menuItemsRaw} /> */}
          <main className='container py-10 mx-auto'>{children}</main>
          <Footer footer={footerData} />
        </div>
      </body>
    </html>
  );
}
