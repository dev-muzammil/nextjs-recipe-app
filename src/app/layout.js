import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Bottom from "./components/Bottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QuickCook",
  description: "Recipe App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Bottom/></body>
    </html>
  );
}
