import type { Metadata } from "next";
import {Archivo } from 'next/font/google';
import "./globals.css";
import { cn } from "@/components/lib/utils";
import dynamic from 'next/dynamic';

// Dynamically import ThemeProvider with no SSR
const ThemeProvider = dynamic(
  () => import("@/components/theme-provider").then((mod) => ({ default: mod.ThemeProvider })),
  { ssr: false }
);

const archivo = Archivo({
  display: "swap",
  weight : "variable",
  subsets: ["latin"],
  variable: "--archivo-font",
});

export const metadata: Metadata = {
  title: "ENSAIN",
  description: "The End of Limits",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={cn(`antialiased bg-stone-100 dark:bg-black text-black dark:text-white transition-colors duration-300 ${archivo.variable} font-sans`)}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        </body> 
    </html>
  );
}
