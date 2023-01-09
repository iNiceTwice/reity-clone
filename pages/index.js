import Head from 'next/head'
import AvaibleInvestments from '../views/main/AvaibleInvestments'
import Benefits from '../views/main/Benefits'
import FAQ from '../views/main/faq'
import Hero from '../views/main/Hero'
import HowItWorks from '../views/main/howItWorks'
import ReachGoals from '../views/main/ReachGoals'
import { Team } from '../views/main/Team'
import WhyUs from '../views/main/WhyUs'
//yepegow204@cmeinbox.com

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reity Clone Frontend</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero/>
        <Benefits/>
        <AvaibleInvestments/>
        <WhyUs/>
        <HowItWorks/>
        <ReachGoals/>
        <Team/>
        <FAQ/>
      </main>
    </div>
  )
}
