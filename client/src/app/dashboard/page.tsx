import DashboardPage from "@/pages/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Треккер',
  description: 'Треккер твоей жизни!',
}

export default function Dashboard() {
  return <DashboardPage />
}