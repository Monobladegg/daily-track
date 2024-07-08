import RegisterPage from "@/pages/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Регистрация',
  description: 'Зарегистрируйте свой аккаунт на моем сайте, и проройте свой путь к успешному будущему!',
}

export default function Register() {
  return <RegisterPage />
}