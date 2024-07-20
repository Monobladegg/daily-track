"use client";

import { useEffect } from "react";
import s from "./index.module.scss";
import { useStore } from "@/shared/store";
import { useShallow } from "zustand/react/shallow";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  const { username, email, setIsAuth, setUsername, setEmail, isAuth } =
    useStore(
      useShallow((state) => ({
        isAuth: state.isAuth,
        username: state.username,
        email: state.email,
        setIsAuth: state.setIsAuth,
        setUsername: state.setUsername,
        setEmail: state.setEmail,
      }))
    );

  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuth(true);
    if (!localStorage.getItem("token")) setIsAuth(false);
    setUsername(localStorage.getItem("username") || "");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(/Colorful-abstract-picture-paint-texture_3840x2160.jpg)`,
        }}
        className={s.bg}
      />
      <div className={s.darkBg} />
      {children}
    </>
  );
};

export default Layout;
