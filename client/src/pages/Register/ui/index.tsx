"use client";

import React, { FC, useState } from "react";
import s from "./index.module.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage: FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);
  };

  return (
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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Видимое имя (никнейм)" required />
          <input type="email" placeholder="Электронная почта" required />
          <div>
            <input
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
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
