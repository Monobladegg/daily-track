import HomePage from '@/pages/Home'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Daily Track',
  description: 'Твой дневной трекер',
}

export default function Home() {
  return <HomePage />
}
