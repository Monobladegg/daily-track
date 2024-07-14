"use client";

import React, { FC, useState } from "react";
import s from "./index.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  emailValidation,
  passwordValidation,
} from "@/shared/lib/validations";
import { BackLink } from "@/widgets";

interface IRegisterForm {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control } = useForm<IRegisterForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IRegisterForm> = (data: IRegisterForm) => {
    console.log(data);
  };

  return (
    <>
      <BackLink />
      <div className={s.all}>
        <div className={s.left}>
          <h1>Daily Tracker</h1>
          <p>
            Войдите в свой потрясающий аккаунт, и продолжайте поль- <br /> зоваться моим творением!
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
            <button type="submit">Войти в аккаунт</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
