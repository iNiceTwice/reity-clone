import Head from 'next/head'
import Hero from '../views/main/Hero'
//yepegow204@cmeinbox.com

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
      </main>
    </div>
  )
}
