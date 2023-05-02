import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Destination from '@/components/Form/Destination'
import Hotel from '@/components/Hotel/Hotel'
import Nights from '@/components/nights/Nights'
import Nationallity from '@/components/Nationallity/Nationallity'
import More from '@/components/More/More'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Task</title>
        <meta name="description" content="Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='frame mt-5'>
        <div className='formBorder'>
        <h2 className='text-white'>Search  For Your Best Hotel</h2>
        <div className='d-flex gap-5'>
        <Destination />
        <Hotel />
        </div>
        <Nights />
        <Nationallity />
        <More />
      </div>
      </div>
    </>
  )
}
