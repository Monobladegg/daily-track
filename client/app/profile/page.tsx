import ProfilePage from "@/pages/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Твой профиль',
  description: 'Заходи, и продолжай свое розвитие!',
}

export default function Profile() {
  return <ProfilePage />
}