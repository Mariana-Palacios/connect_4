import { useEffect, useState } from 'react';
//import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Player_one from '../../public/player-one.svg'
import Player_two from '../../public/player-two.svg'
import Logo from '../../public/logo.svg'
import MarkerRed from '../../public/marker-red.svg'
import MarkerYellow from '../../public/marker-yellow.svg'
import TurnBackgroundRed from '../../public/turn-background-red.svg'
import TurnBackgroundYellow from '../../public/turn-background-yellow.svg'

export default function PlayVsPlayer() {
  // start play 
  const [startPLay, setStartPlay] = useState(false)
  //turn of players 
  const [playerTurn,setPlayerTurn] = useState(false) 
  //marker od the game board
  const [marker, setMarker] = useState([MarkerRed,TurnBackgroundRed,1]);
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
  //restart
  const restart = () =>{
    setStartPlay(false)
    setPlayerTurn(false) 
    setMarker([MarkerRed,TurnBackgroundRed,1])
  }

  const changeStatus = () =>{
    if(startPLay){
      setMarker(playerTurn==true?[MarkerRed,TurnBackgroundRed,1]:[MarkerYellow,TurnBackgroundYellow,2]) 
      setPlayerTurn(!playerTurn)
    }
    return playerTurn
  }

  return (
    <div >
      <nav className='flex flex-j-c flex-a-i nav'>
        <button className='smallBtn'>MENU</button>
        <Image src={Logo}/>
        <button className='smallBtn' onClick={restart}>RESTART</button>
      </nav>
      <div className='flex flex-j-c flex-a-i mainGame'>
        <section className='player' onClick={changeStatus}>
          <Image src={Player_one} className='player__img image'/>
          <p>PLAYER 1</p>
          <h2>0</h2>
        </section>
        <main className='flex flex-j-c gameBoard'>
          {tableroValor.map((column, i) =>
            <button className='flex flex-f-d-c gameBoard__btn' onClick={changeStatus}>{tableroValor[i].map((row, j) =>
                j==0?<div>{<Image alt='btnPointer' src={marker[0]} className={startPLay?'btnPointer':'hide'}/>}<div className='gameBoard__circle' key={`${i}_${j}`}>{`${i}_${j}`}</div></div>:<div className='gameBoard__circle' key={`${i}_${j}`}>{`${i}_${j}`}</div>
              )}</button>
          )}
          <div className={startPLay?'hide':'flex flex-j-c flex-a-i flex-f-d-c playBtn'}>
            <p className='smallP'>PLAYER 1 STARTS</p>
            <h2>READY ?</h2>
            <button className='playBtn__smallBtn' onClick={()=>setStartPlay(!startPLay)}>PLAY</button>
          </div>
          <div className={startPLay?`flex flex-j-c flex-a-i flex-f-d-c playerTurn playerTurn-${marker[2]}`:'hide'}>
            <p className='smallP'>{`PLAYER ${marker[2]}'S TURN`}</p>
            <h2>30s</h2>
            <Image src={marker[1]} className='playerTurn__img' alt='playerTurn'/>
          </div>
        </main>
        <section className='player'>
          <Image src={Player_two} className='player__img image'/>
          <p>PLAYER 2</p>
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
        <aside className='backgroundBLackTransition'></aside>
      </div>
    </div>
  )
}
