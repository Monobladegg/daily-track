"use client";

import React, { FC, useState } from "react";
import s from "./index.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  usernameValidation,
  emailValidation,
  passwordValidation,
} from "@/shared/lib/validations";
import { BackLink } from "@/widgets";
import { IRegisterForm } from "@/shared/lib/types";
import { authAPI } from "@/shared/lib/api/api";

const RegisterPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control } = useForm<IRegisterForm>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async ({
    username,
    email,
    password,
  }: IRegisterForm) => {
    try {
      authAPI
        .register({ username, email, password })
        .then((response) => {
          console.log(response);
          if (response.status === 400) alert("Пользователь с таким email уже существует");
          if (response.status === 201) {
            alert(`Вы успешно зарегистрировались! Ваш пароль ${password}, пожалуйста, не забудьте его!`);
            window.location.href = "/";
          }
        })
        .catch((e) => {
          console.log(e);
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
            Зарегистрируйте свой аккаунт на моем сайте, и проройте <br /> свой
            путь к успешному будущему!
          </p>
        </div>
        <div className={s.right}>
          <h1>Регистрация</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="username"
              rules={usernameValidation}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Видимое имя (никнейм)"
                  required
                />
              )}
            />
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
            <p className={s.link}>Есть аккаунт? <a href="/login">Вход</a></p>
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
