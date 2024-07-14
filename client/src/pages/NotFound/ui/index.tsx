import React, { FC } from "react";
import s from "./index.module.scss";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Страница не знайдена 404</h1>
      <Link href={"/"}>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
