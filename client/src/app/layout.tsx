import { Nunito } from "next/font/google";
import "./globals.scss";
import s from "./globals.module.scss";

const NunitoFont = Nunito({ subsets: ["latin"] });

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
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
