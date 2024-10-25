import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { metadata } from "@/lib/data";
import Head from "next/head";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-switch";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth h-full">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Pokémon Explorer Team" />
        {metadata["og:title"] && <meta property="og:title" content={metadata["og:title"]} />}
        {metadata["og:description"] && <meta property="og:description" content={metadata["og:description"]} />}
        {metadata["og:url"] && <meta property="og:url" content={metadata["og:url"]} />}
        {metadata["og:type"] && <meta property="og:type" content={metadata["og:type"]} />}
        {metadata["og:image"] && <meta property="og:image" content={metadata["og:image"]} />}
        {metadata["twitter:card"] && <meta name="twitter:card" content={metadata["twitter:card"]} />}
        {metadata["twitter:title"] && <meta name="twitter:title" content={metadata["twitter:title"]} />}
        {metadata["twitter:description"] && <meta name="twitter:description" content={metadata["twitter:description"]} />}
        {metadata["twitter:image"] && <meta name="twitter:image" content={metadata["twitter:image"]} />}
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen dark:bg-gray-900 dark:text-white`}
      >
              <Navbar />
              <main className="flex-grow ">{children}</main>
              <Footer />
              <Toaster position="top-right" />
              <ThemeSwitch />
      </body>
    </html>
  );
}