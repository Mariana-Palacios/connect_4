//import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Player_vs_Cpu from '../public/player-vs-cpu.svg'
import Player_vs_Player from '../public/player-vs-player.svg'

export default function Home() {
  return (
    <div className='flex flex-j-c flex-a-i main background background-dark-purple'>
      <main className='flex flex-j-c flex-a-i flex-f-d-c mainMenu'>
        <Image src={Logo} className='image'/>
        <Link href='./PlayVsPlayer'><button className='flex flex-a-i flex-j-s-b mainMenu__btn-red'>PLAY VS CPU <Image src={Player_vs_Cpu} className='image'/></button></Link>
        <button className='flex flex-a-i flex-j-s-b mainMenu__btn-yellow'>PLAY VS PLAYER <Image src={Player_vs_Player} className='image'/></button>
        <button className='flex flex-a-i flex-j-s-b mainMenu__btn-white'>GAME RULES <Image src={Player_vs_Cpu} className='image'/></button>
      </main>
      <aside className='backgroundBLackTransition'></aside>
    </div>
  )
}
