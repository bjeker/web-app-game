import { useState } from "react"

function Game() {
  const [roll, setRoll] = useState(0)
  const [randChamp, setRandChamp] = useState(null)

  const champions = [
    { title: 'Jinx', id: 1},
    { title: 'Jhin', id: 2}
  ]

  const championImages = [
    {title: 'src/assets/jhin.jpg', id: 1},
    {title: 'src/assets/jinx.jpg', id: 2}
  ]

  const listChampions = champions.map(champion =>
    <li key={champion.id}>
      {champion.title}
    </li>
  )
  
  let random = Math.floor(Math.random() * listChampions.length)

  return (
    <>
      <div>
        <h1>
          League of Legends Random Champion Roller
        </h1>
        <p>
          Roll for a random champion to play.
        </p>
        <ul>{listChampions}</ul>
      </div>
      <div>
        <button onClick={() => {
          setRandChamp(champions[random].title);
          setRoll((roll) => roll + 1);
        }}>
          Random Champion: {randChamp} Rolls: {roll}
        </button>
        <br></br>
        <button onClick={() => {
          setRandChamp(null)
          setRoll(0);
        }}>
          Reset Champion Rolls
        </button>
        <br></br>
        <img src={championImages[random].title} alt={champions[random].title}/>
      </div>
    </>
  )
}

export default Game