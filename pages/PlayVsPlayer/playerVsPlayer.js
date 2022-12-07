import { useEffect, useState } from 'react';
//import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Player_one from '../../public/player-one.svg'
import Player_two from '../../public/player-two.svg'
import Logo from '../../public/logo.svg'
import MarkerRed from '../../public/marker-red.svg'
import MarkerYellow from '../../public/marker-yellow.svg'

export default function PlayVsPlayer() {
  //turn of players 
  const [playerTurn,setPlayerTurn] = useState(true) 
  //marker od the game board
  const [marker, setMarker] = useState(MarkerRed);
  //value of position
  let tableroValor = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
  const changeStatus = () =>{
    setPlayerTurn(!playerTurn)
    console.log(playerTurn)
    setMarker(playerTurn==true?MarkerRed:MarkerYellow)
    return playerTurn
  }

  return (
    <div >
      <nav className='flex flex-j-c flex-a-i nav'>
        <button>MENU</button>
        <Image src={Logo}/>
        <Link href='../index'><button>RESTART</button></Link>
      </nav>
      <div className='flex flex-j-c flex-a-i mainGame'>
        <section className='player' onClick={changeStatus}>
          <Image src={Player_one} className='player__img image'/>
          <p>Player 1</p>
          <h2>0</h2>
        </section>
        <main className='flex flex-j-c gameBoard'>
          {tableroValor.map((column, i) =>
            <button className='flex flex-f-d-c gameBoard__btn' onClick={changeStatus}>{tableroValor[i].map((row, j) =>
                j==0?<div>{<Image alt='btnPointer' src={marker} className='btnPointer'/>}<div className='gameBoard__circle' key={`${i}_${j}`}>{`${i}_${j}`}</div></div>:<div className='gameBoard__circle' key={`${i}_${j}`}>{`${i}_${j}`}</div>
              )}</button>
          )}
          <div className='playBtn'>
            <p>PLAYER 1 STARTS</p>
            <h2>READY ?</h2>
            <button>play</button>
          </div>
        </main>
        <section className='player'>
          <Image src={Player_two} className='player__img image'/>
          <p>Player 2</p>
          <h2>0</h2>
        </section>
        <aside className='flex flex-j-c flex-a-i asideMenu hide'>
          <div className='flex flex-j-c flex-a-i flex-f-d-c mainMenu asideMenu__div'>
            <h1>PAUSE</h1>
            <button className='flex flex-a-i flex-j-s-b mainMenu__btn-white'>CONTINUE GAME</button>
            <button className='flex flex-a-i flex-j-s-b mainMenu__btn-white'>RESTART</button>
            <button className='flex flex-a-i flex-j-s-b mainMenu__btn-red'>QUIT GAME</button>
          </div>
        </aside>
        <footer className='darkPurpleBackground'>
        </footer>
      </div>
    </div>
  )
}
