import { Metadata } from "next";
import "./globals.scss";
import LayoutPage from "@/pages/Layout";
import Head from "next/head";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Daily Track",
  description: "By Monoblade",
  keywords: ["Daily Track", "Daily", "Track"],
};

const NunitoFont = Nunito({ subsets: ["latin"] });

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={NunitoFont.className}>
        <main>
          <LayoutPage>{children}</LayoutPage>
        </main>
      </body>
    </html>
  );
};

export default Layout;
