import Link from "next/link";
import s from "./index.module.scss";
import { FC } from "react";

const BackLink: FC = () => {
  return (
    <div className={s.back}>
      <Link href="/">Вернуться на главную страницу</Link>
    </div>
  );
};

export default BackLink;
