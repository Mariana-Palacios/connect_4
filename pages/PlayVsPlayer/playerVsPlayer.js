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
import CounterRedLarge from '../../public/counter-red-large.svg'
import CounterYellowLarge from '../../public/counter-yellow-large.svg'

export default function PlayVsPlayer() {
  // start play 
  const [startPLay, setStartPlay] = useState(false)
  //turn of players 
  const [playerTurn,setPlayerTurn] = useState(false)
  //main menu 
  const [mainMenu,setMainMenu] = useState(false) 
  //marker od the game board
  const [marker, setMarker] = useState([MarkerRed,TurnBackgroundRed,1,CounterRedLarge]);
  //value of position
  const [gameBoardStatus, setgameBoardStatus] = useState([
    {id:'0',array:[0,0,0,0,0,0]},
    {id:'1',array:[0,0,0,0,0,0]},
    {id:'2',array:[0,0,0,0,0,0]},
    {id:'3',array:[0,0,0,0,0,0]},
    {id:'4',array:[0,0,0,0,0,0]},
    {id:'5',array:[0,0,0,0,0,0]},
    {id:'6',array:[0,0,0,0,0,0]},
  ]);
  console.log(gameBoardStatus)
  //restart
  const restart = () =>{
    setStartPlay(false)
    setPlayerTurn(false) 
    setMarker([MarkerRed,TurnBackgroundRed,1])
    setMainMenu(false)
    setgameBoardStatus([
      {id:'0',array:[0,0,0,0,0,0]},
      {id:'1',array:[0,0,0,0,0,0]},
      {id:'2',array:[0,0,0,0,0,0]},
      {id:'3',array:[0,0,0,0,0,0]},
      {id:'4',array:[0,0,0,0,0,0]},
      {id:'5',array:[0,0,0,0,0,0]},
      {id:'6',array:[0,0,0,0,0,0]},
    ])
  }

  const changeStatus = () =>{
    if(startPLay){
      setMarker(playerTurn==true?[MarkerRed,TurnBackgroundRed,1,CounterRedLarge]:[MarkerYellow,TurnBackgroundYellow,2,CounterYellowLarge]) 
      setPlayerTurn(!playerTurn)
    }
    return playerTurn
  }
  let columnNumber = [0,0,0,0,0,0,0]

  const moveDisk = (columnPosition) =>{
    let copyOfgameBoardStatus = gameBoardStatus
    for (let i = 6 - 1; i >= 0; i--) {
      if(copyOfgameBoardStatus[columnPosition]['array'][i]==0){
        copyOfgameBoardStatus[columnPosition]['array'][i]=1
        break
      }
    } 
    setgameBoardStatus(copyOfgameBoardStatus)
    changeStatus()
    console.log(gameBoardStatus);
  } 

  return (
    <div >
      <nav className='flex flex-j-c flex-a-i nav'>
        <button className='smallBtn' onClick={()=>setMainMenu(!mainMenu)}>MENU</button>
        <Image src={Logo}/>
        <button className='smallBtn' onClick={restart}>RESTART</button>
      </nav>
      <div className='flex flex-j-c flex-a-i mainGame'>
        <section className='player' onClick={changeStatus}>
          <Image src={Player_one} className='player__img image'/>
          <p>PLAYER 1</p>
          <h2>0</h2>
        </section>
        <div className='flex diskManager'>
          {columnNumber.map((object, i) => <div className={`diskManager__div`}>{gameBoardStatus[0]['array'].map((object, j) =><Image alt='disk' className={`disk disk-${j} ${gameBoardStatus[i]['array'][j]==0?'hide':''}`} src={gameBoardStatus[i]['array'][j]==0?'':marker[3]} key={j}/>)}</div>)}
        </div>
        <main className='flex flex-j-c gameBoard'>
          {gameBoardStatus.map((column, i) =>
            <button className='flex flex-f-d-c gameBoard__btn' onClick={()=>moveDisk(i)}>{gameBoardStatus[i]['array'].map((row, j) =>
                j==0?<div>
                  {<Image alt='btnPointer' src={marker[0]} className={startPLay?'btnPointer':'hide'}/>}
                  <div className='gameBoard__circle' key={`${i}_${j}`}>{`${i}_${j}`}</div></div>:<div className='gameBoard__circle' key={`${i}_${j}`}>{`${i}_${j}`}</div>
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
        <aside className={mainMenu?'flex flex-j-c flex-a-i asideMenu': 'hide'}>
          <div className='flex flex-j-c flex-a-i flex-f-d-c mainMenu asideMenu__div'>
            <h1>PAUSE</h1>
            <button className='flex flex-a-i flex-j-s-b mainMenu__btn-white' onClick={()=>setMainMenu(!mainMenu)}>CONTINUE GAME</button>
            <button className='flex flex-a-i flex-j-s-b mainMenu__btn-white' onClick={restart}>RESTART</button>
            <Link href='../' className='link'><button className='flex flex-a-i flex-j-s-b mainMenu__btn-red'>QUIT GAME</button></Link>
          </div>
        </aside>
        <footer className='darkPurpleBackground'>
        </footer>
        <aside className={(startPLay==false && playerTurn==false && mainMenu==false)?'backgroundBLackTransition':'hide'}></aside>
      </div>
    </div>
  )
}
