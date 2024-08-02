import LoginPage from "@/pages/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Вход',
  description: 'Войдите в свой потрясающий аккаунт, и продолжайте пользоваться моим творением!',
}

export default function Login() {
  return <LoginPage />
}