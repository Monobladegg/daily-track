"use client";

import Link from "next/link";
import React, { FC } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import s from "./index.module.scss";
import { useStore } from "@/shared/store";
import { useShallow } from "zustand/react/shallow";

const Header: FC = () => {

  const {isAuth, deleteUser} = useStore(useShallow((state) => ({
    isAuth: state.isAuth,
    setIsAuth: state.setIsAuth,
    deleteUser: state.deleteUser
  })))

  return (
    <div className={s.header}>
      <Link href={"/"}>
        <h1 className={s.title}>Dayli Tracker</h1>
      </Link>
      <div>
        {isAuth ? (
          <div className={s.links}>
            <Link href={"/dashboard"}><h3>Треккер</h3></Link>
            <Link href={"/profile"}><h3><HiOutlineUserCircle size={32} className={s.icon} /></h3></Link>
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

