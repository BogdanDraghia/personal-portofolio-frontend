import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../src/components/landing/Hero";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bogdan Draghia</title>
        <meta name="description" content="Personal portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
