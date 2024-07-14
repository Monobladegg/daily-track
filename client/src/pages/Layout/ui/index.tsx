import { Nunito } from "next/font/google";
import s from "./index.module.scss";
import { Metadata } from "next";
import Head from "next/head";

const NunitoFont = Nunito({ subsets: ["latin"] });

interface props {
  children: React.ReactNode
}

const Layout = ({ children }: props) => {

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={NunitoFont.className}>
        <div
          style={{
            backgroundImage: `url(Colorful-abstract-picture-paint-texture_3840x2160.jpg)`,
          }}
          className={s.bg}
        />
        <div className={s.darkBg} />
        {children}
      </body>
    </html>
  );
}

export default Layout