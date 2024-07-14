"use client";

import React, { FC, useEffect } from "react";
import Link from "next/link";
import s from "./index.module.scss";
import { Header } from "@/widgets";
import { useStore } from "@/shared/store";
import { useShallow } from "zustand/react/shallow";

const HomePage: FC = () => {

  const {isAuth, setIsAuth} = useStore(useShallow((state) => ({
    isAuth: state.isAuth,
    setIsAuth: state.setIsAuth
  })))

  useEffect(() => {
    if (localStorage.getItem('token') && !isAuth) setIsAuth(true)
    if (!localStorage.getItem('token') && isAuth) setIsAuth(false)
  }, []);

  return (
    <>
      <Header />
      <div className={s.container}>
        <h1>
          Daily Tracker - Планируйте свой день, и доби- вайтесь целей с помощью
          моего сайта!
        </h1>

        <section>
          <h2>Указывайте время планов!</h2>
          <img />
        </section>

        <section>
          <h2>Ставьте цели, и не забывайте за чем добиваетесь их!</h2>
          <img />
        </section>

        <Link className={s.start} href={"/register"}>
          <h3 className={s.go}>
            Начните планировать свой первый день прямо сейчас!
          </h3>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
