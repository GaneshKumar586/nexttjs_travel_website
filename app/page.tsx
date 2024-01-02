import Image from 'next/image'
// import {Layout} from './layout'
import Hero from '@/components/Hero'
import Camp from '@/components/Camp'
import Features from '@/components/Features'
import Guide from '@/components/Guide'
import Getapp from '@/components/Getapp'
export default function Home() {
  return (
    <>
      {/* <Layout /> */}
      <Hero/>
      <Camp/>
      <Getapp/>
      <Features/>
      <Guide/>
    </>
  )
}
