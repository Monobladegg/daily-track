"use client";

import React, { FC, useEffect } from "react";
import s from "./index.module.scss";
import { useStore } from "@/shared/store";
import { useShallow } from "zustand/react/shallow";
import { Header } from "@/widgets";

const ProfilePage: FC = () => {
  const { username, email } = useStore(
    useShallow((state) => ({
      username: state.username,
      email: state.email,
    }))
  );

  useEffect(() => {
    if (!username || !email) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
    <Header />
    <div className={s.container}>
      <h2>{username}</h2>
      <p>{email}</p>
    </div>
    </>
  );
};

export default ProfilePage;
