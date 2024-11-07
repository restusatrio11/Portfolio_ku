import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

//component
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransation from "@/components/StairTransation";

const jetbrains_mono = JetBrains_Mono({
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variabel:"--font-jetbrainsMono",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio Restu ",
  description: "Portfolio dalam bentuk website nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrains_mono.variable}`}>
        <Header />
        <StairTransation/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
