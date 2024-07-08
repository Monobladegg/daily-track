import React, { FC } from "react";
import s from "./index.module.scss";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <>
      <h1 className={s.title}>Страница не знайдена 404</h1>
      <Link href={"/"}>Вернуться на главную</Link>
    </>
  );
};

export default NotFoundPage;
