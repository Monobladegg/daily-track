import { Metadata } from "next";
import "./globals.scss";
import LayoutPage from "@/pages/Layout";

export const metadata: Metadata = {
  title: "Daily Track",
  description: "Daily Track",
  keywords: ["Daily Track", "Daily", "Track"],
};

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return <LayoutPage>{children}</LayoutPage>;
};

export default Layout;
