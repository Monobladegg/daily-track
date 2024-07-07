import React, { FC } from "react";
import Link from "next/link";
import s from "./index.module.scss";
import Header from "@/widgets/Header";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div className={s.container}>
        <h1>
          Daily Tracker - Планируйте свой день, и доби- вайтесь целей с помощью
          нашего сайта!
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
