import { useState } from 'react'
 
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
 
// Satunnainen anekdootti "muistaa" nykyisen ja pakottaa arpomaan uudelleen
// jos arpoo saman anekdootin. Painamalla 'next anecdote' painiketta saa aina uuden.
const RandomNumber = (selected) => {
  let randomAnecdote = Math.floor(Math.random() * 7)
  while (randomAnecdote === selected) {
    randomAnecdote = Math.floor(Math.random() * 7)
  }
  return (
    randomAnecdote
  )
}
 
const App = () => {
 
 
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
 
 
  const initPoints = () => {
    // Nollataan kaikki lähtöarvot
    var points = [], i = 0
    while (i < anecdotes.length) points[i++] = 0
    // Kaikki ovat saaneet 0 ääntä ja siten jokainen on TOP 1 anekdootti sen mukaan
    return (points)
  }
 
  const [selected, setSelected] = useState(RandomNumber())
  const [points, setPoints] = useState(initPoints())
  const getAnecdote = () => setSelected(RandomNumber(selected))
 
  const voteAnecdote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    getMaxPoints()
  };
 
  const getMaxPoints = () => {
    // Kerätään maksimipisteet
    const maxPoints = Math.max(...points)
    const maxValue = points[points.indexOf(maxPoints)]
    let maxVotes = []
    let maxVotes0 = []
    let maxVotes1 = []
    let oddEven = 0
    let appendPoints = ""
    for (let i = 0; i < points.length; ++i) {
      if (points[i] === maxValue) {
        if ( oddEven % 2 === 0 ) {
          maxVotes0 = [...maxVotes1, anecdotes[i]]
          // console.log(i, maxVotes0, maxVotes0.length, maxVotes1.length)
        }
        if ( oddEven % 2 > 0 ) {
          maxVotes1 = [...maxVotes0, anecdotes[i]]
          // console.log(i, maxVotes1, maxVotes0.length, maxVotes1.length)
        }
        // oddEven kasvaa joka kierroksella 1 isommaksi,
        // jolloin jakojäännös on 0 joka toisella kierroksella.
        oddEven++
      }
    }
    if (maxVotes0.length >= maxVotes1.length) {
      appendPoints = "has " + maxPoints + " vote(s)"
      if (maxVotes0.length > 1) {appendPoints = maxVotes0.length + " have " + maxPoints + " vote(s)"}
      maxVotes = [...maxVotes0, appendPoints]
    }
    if ( maxVotes1.length >= maxVotes0.length ) {
      appendPoints = "has " + maxPoints + " vote(s)"
      if (maxVotes1.length > 1) {appendPoints = maxVotes1.length + " have " + maxPoints + " vote(s)"}
      maxVotes = [...maxVotes0, appendPoints]
    }
 
    return (
      maxVotes.map(function (item, index) {
        return (
          <span key={index}>
            {item}<br />
          </span>
        )
    }))
  }
 
  return (
    <div>
      <header><h1>Anecdote of the day</h1></header> 
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button onClick={voteAnecdote} text="vote" />
      <Button onClick={getAnecdote} text='next anecdote' />
      <header><h2>Anecdote(s) with most votes</h2></header>
      <p>{getMaxPoints()}</p>
    </div>
  )
}
 
export default App