import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "@/components/ui/loading";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${APP_NAME} | Discover and Explore Pokémon`,
    description: "A comprehensive app to explore and learn about different Pokémon, their stats, abilities, and more.",
    keywords: ["Pokémon", "explore", "stats", "abilities", "evolutions"],
    openGraph: {
      title: `${APP_NAME} | Discover and Explore Pokémon`,
      description: "Explore Pokémon, their stats, abilities, and more.",
      url: "https://poke.kozenetpro.com",
      type: "website",
      images: [{ url: "/logo.svg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${APP_NAME} | Discover and Explore Pokémon`,
      description: "Explore Pokémon, their stats, abilities, and more.",
      images: ["/logo.svg"],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth h-full dark">
      <body
        className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen dark:bg-gray-900 dark:text-white`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main className="flex-grow mt-8 px-4 sm:px-6 lg:px-8">{children}</main>
        </Suspense>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}