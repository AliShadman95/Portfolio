import "./globals.css";
import type { Metadata } from "next";
import { Caveat_Brush } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "./ThemeProvider";

config.autoAddCss = false;

const inter = Caveat_Brush({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Ali Shadman (ASHD)",
  description: "Portfolio di Ali Shadman (ASHD)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
