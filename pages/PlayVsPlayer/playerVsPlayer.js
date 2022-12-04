import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Player_one from '../../public/player-one.svg'
import Player_two from '../../public/player-two.svg'

export default function PlayVsPlayer() {
  let tableroValor = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0]
  ]
  return (
    <div className='flex flex-j-c flex-a-i mainGame'>
      <section className='player'>
        <Image src={Player_one} className='player__img'/>
        <p>Player 1</p>
        <h2>0</h2>
      </section>
      <main className='flex flex-j-c gameBoard'>
        {tableroValor.map((column, i) =>
          <button className='flex flex-f-d-c gameBoard__btn'>{tableroValor[i].map((row, j) =>
              <div className='gameBoard__circle' key={`${i}_${j}`}></div>
            )}</button>
        )}
      </main>
      <section className='player'>
        <Image src={Player_two} className='player__img'/>
        <p>Player 2</p>
        <h2>0</h2>
      </section>
    </div>
  )
}
