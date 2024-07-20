"use client";

import React, { FC, useState, useEffect } from "react";
import s from "./index.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from "@/shared/lib/validations";
import { BackLink } from "@/widgets";
import { ILoginForm } from "@/shared/lib/types";
import { authAPI } from "@/shared/lib/api/api";
import { useStore } from "@/shared/store";
import { useShallow } from "zustand/react/shallow";

const LoginPage: FC = () => {
  
  useEffect(() => {
    isAuth && (window.location.href = "/");
  }, []);

  const { setIsAuth, isAuth, setUsername, setEmail, username, email } = useStore(
    useShallow((state) => ({
      setIsAuth: state.setIsAuth,
      setUsername: state.setUsername,
      setEmail: state.setEmail,
      username: state.username,
      email: state.email,
      isAuth: state.isAuth
    }))
  );

  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control } = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = async ({
    email,
    password,
  }: ILoginForm) => {
    try {
      authAPI
        .login({ email, password })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setIsAuth(true);
            setUsername(response.data.username);
            setEmail(response.data.email);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("email", response.data.email);
            console.log(localStorage.getItem("username"));
            console.log(localStorage.getItem("email"));
          }
        })
        .catch((e) => {
          console.log(e);
          alert("Неверная почта или пароль");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <BackLink />
      <div className={s.all}>
        <div className={s.left}>
          <h1>Daily Tracker</h1>
          <p>
            Войдите в свой потрясающий аккаунт, и продолжайте поль- <br />{" "}
            зоваться моим творением!
          </p>
        </div>
        <div className={s.right}>
          <h1>Вход в аккаунт</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="email"
              rules={emailValidation}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Электронная почта"
                  required
                />
              )}
            />
            <Controller
              rules={passwordValidation}
              control={control}
              name="password"
              render={({ field }) => (
                <div>
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="Пароль"
                    required
                  />
                  {showPassword ? (
                    <FaEye
                      className={s.icon}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <FaEyeSlash
                      className={s.icon}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              )}
            />
            <p className={s.link}>
              Нету аккаунта? <a href="/register">Зарегистрироваться</a>
            </p>
            <button type="submit">Войти в аккаунт</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
