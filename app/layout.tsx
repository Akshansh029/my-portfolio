import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Akshansh Singh - Software Developer",
  description:
    "I write code, ship products, and break things in staging. Welcome to my corner of the internet.",
};

import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth min-w-full">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RCRJRTJLFP"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RCRJRTJLFP'); 
          `}
        </Script>
      </head>
      <body>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <TooltipProvider>
              <Navigation />
              {children}
              <SpeedInsights />
              <Footer />
              <Toaster />
            </TooltipProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
