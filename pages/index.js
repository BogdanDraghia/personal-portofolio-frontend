import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../src/components/layout/Layout'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bogdan Draghia</title>
        <meta name="description" content="Personal portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        MAIN
      </Layout>
    </div>
  )
}
