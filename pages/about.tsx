import MainLayout from '@/components/layouts/MainLayout'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import LightLayout from '@/components/layouts/LightLayout'

export default function About() {
  return (
    <>
      <h1>ABOUT</h1>

      <h1 className={styles.title}>
        Ir a <Link href='/contact'>CONTACT</Link>
      </h1>

      <p className={styles.description}>Hola</p>
    </>
  )
}

About.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  )
}
