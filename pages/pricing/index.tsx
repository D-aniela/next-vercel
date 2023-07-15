import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
import styles from '@/styles/Home.module.css';


export default function Pricing() {
  return (
    <>
      <MainLayout>
        <h1>Pricing</h1>

        <h1 className={styles.title}>
          Ir a <Link href='/'>HOME</Link>
        </h1>

        <p className={styles.description}>
          Hola
        </p>
      </MainLayout>
    </>
  )
}
