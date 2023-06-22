import Image from 'next/image'
import styles from './page.module.css'
import RecipeDashboard from '@/components/RecipeDashboard'

export default function Home() {
  return (
    <>
      <RecipeDashboard/>
      <h1>History</h1>
    </>
  )
}
