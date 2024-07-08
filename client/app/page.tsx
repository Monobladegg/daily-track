import HomePage from '@/pages/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Track',
  description: 'Треккер твоей жизни!',
}

export default function Home() {
  return <HomePage />
}
