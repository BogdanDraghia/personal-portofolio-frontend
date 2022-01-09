import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Introduction from '../src/components/landing/Introductions'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bogdan Draghia</title>
        <meta name="description" content="Personal portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Introduction/>
    </div>
  )
}
