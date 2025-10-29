import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Pacifico } from "next/font/google";

import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
// import IntroWrapper from "./component/IntroWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Synt-x",
  description: "Websites Engineered for Tomorrow’s Market Leaders",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <IntroWrapper> */}
          <NavBar />
          {children}
          <Footer />
        {/* </IntroWrapper> */}
      </body>
    </html>
  );
}
