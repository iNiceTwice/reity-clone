import Head from 'next/head'
import AvaibleInvestments from '../views/main/AvaibleInvestments'
import Benefits from '../views/main/Benefits'
import Hero from '../views/main/Hero'
import HowItWorks from '../views/main/HowItWorks'
import WhyUs from '../views/main/WhyUs'
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
        <Benefits/>
        <AvaibleInvestments/>
        <WhyUs/>
        <HowItWorks/>
      </main>
    </div>
  )
}
