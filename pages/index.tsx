import Head from 'next/head'
import { Feed } from "../components/Feed"
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Feed />
      </main>
    </div>
  )
}
