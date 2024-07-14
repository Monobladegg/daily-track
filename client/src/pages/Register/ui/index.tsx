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
import Link from "next/link";
import { BackLink } from "@/widgets";

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
}

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
            <button type="submit">Зарегистрироваться</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
