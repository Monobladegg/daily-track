import HomePage from '@/pages/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Track',
  description: 'Треккер твоей жизни! By Monoblade',
}

export default function Home() {
  return <HomePage />
}
