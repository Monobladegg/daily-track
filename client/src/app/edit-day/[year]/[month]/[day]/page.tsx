import EditDay from "@/pages/EditDay";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Треккер',
  description: 'Треккер твоей жизни!',
}

type Props = {
  params: {
    year: string
    month: string
    day: string
  }
}

export default function Dashboard({params}: Props) {
  return <EditDay params={params} />
}