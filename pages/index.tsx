import Link from 'next/link'
import styles from './../styles/Home.module.css'
import MainLayout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>HOME PAGE</h1>

        <h1 className={styles.title}>
          Ir a <Link href='/about'>About</Link>
        </h1>

        <p className={styles.description}>
          Hola
        </p>
      </MainLayout>
    </>
  )
}
