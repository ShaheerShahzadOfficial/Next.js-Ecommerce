import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Design And Developed by Shaheer Shahzad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className=" bg-white min-h-screen flex flex-col items-center justify-center w-screen"
    >
      <body className={inter.className}>{children}</body>
     

    </html>
  );
}
