import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className='root'>
      <Head>
        <title>Welcome to韩振方的博客</title>
      </Head>
      <div className='picture'>

      </div>

      <div className='slogan'>
        <h1>Welcome to my personal blog !</h1>
        <Link href="/aircondition">
          <a>别犹豫了,快进来吧~</a>
        </Link>
      </div>
    </div>
  )
}