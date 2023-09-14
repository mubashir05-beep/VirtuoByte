import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";
import ScrollObserver from "@/utils/scroll-observer";
import { Toaster } from "react-hot-toast";
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: "VirtuoByte",
  description: "Elevating Online Presence with Premier Web Services and Solutions.",
};
const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-black transition duration-300  bg-white max-[1000px]:mx-8 mx-16 my-4 ${inter.className}`}>
        <Providers>
        <Toaster/>
          <ScrollObserver>
            <Header />
            {children}
            <Footer/>
          </ScrollObserver>
        </Providers>
      </body>
    </html>
  );
}
