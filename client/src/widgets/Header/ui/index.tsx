import Link from "next/link";
import React, { FC } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import s from "./index.module.scss";

const Header: FC = () => {
  const isAuth = false;

  return (
    <div className={s.header}>
      <Link href={"/"}>
        <h1 className={s.title}>Dayli Tracker</h1>
      </Link>
      <div>
        {isAuth ? (
          <div className={s.links}>
            <Link href={"/dashboard"}><h3>Треккер</h3></Link>
            <Link href={"/profile"}><h3><FaRegUserCircle /></h3></Link>
          </div>
        ) : (
          <div className={s.links}>
            <Link href={"/login"}><h3>Войти в аккаунт</h3></Link>
            <Link href={"/register"}><h3>Зарегестрироваться</h3></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
