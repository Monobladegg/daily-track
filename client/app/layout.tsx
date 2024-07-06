import { Nunito } from "next/font/google";
import './globals.scss';

const NunitoFont = Nunito({ subsets: ["latin"] });

interface props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: props) {
  return (
    <html lang="en">
      <body className={NunitoFont.className}>{children}</body>
    </html>
  );
}
