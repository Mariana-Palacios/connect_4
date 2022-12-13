//import Head from 'next/head'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import Player_vs_Cpu from '../public/player-vs-cpu.svg'
import Player_vs_Player from '../public/player-vs-player.svg'
import winDetector from './GameLogic'

export default function Home() {
  const [gameBoardStatus, setgameBoardStatus] = useState([
    {id:'0',array:[1,2,1,2,1,2]},
    {id:'1',array:[2,1,2,1,2,1]},
    {id:'2',array:[1,2,1,2,1,2]},
    {id:'3',array:[2,1,2,1,2,1]},
    {id:'4',array:[1,2,1,2,1,2]},
    {id:'5',array:[2,1,2,1,2,1]},
    {id:'6',array:[1,2,1,2,1,2]},
  ]);
  winDetector(gameBoardStatus)

  return (
    <div className='flex flex-j-c flex-a-i main background background-dark-purple'>
      <main className='flex flex-j-c flex-a-i flex-f-d-c mainMenu'>
        <Image src={Logo} className='image'/>
        <Link href='./PlayVsPlayer' className='link'><button className='flex flex-a-i flex-j-s-b mainMenu__btn-red'>PLAY VS CPU <Image src={Player_vs_Cpu} className='image'/></button></Link>
        <Link href='./PlayVsPlayer' className='link'><button className='flex flex-a-i flex-j-s-b mainMenu__btn-yellow'>PLAY VS PLAYER <Image src={Player_vs_Player} className='image'/></button></Link>
        <button className='flex flex-a-i flex-j-s-b mainMenu__btn-white' >GAME RULES </button>
      </main>
      <aside className='backgroundBLackTransition'></aside>
    </div>
  )
}
