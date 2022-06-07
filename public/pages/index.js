import Head from 'next/head'
import Image from 'next/image'
import GetTask from '../component/GetTask'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>To-Do List</title>
      <meta name="description" content="Simple todo website"></meta>
      <meta name="author" content="mdnazril"></meta>
    </Head>
    <GetTask />
    </>
  )
}
