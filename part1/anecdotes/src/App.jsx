import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const GetMostVotedAnecdote = ({voteList, anecdotes}) => {
  let maxValue = voteList[0]
  let maxIndex = 0
  for (let i=1; i<voteList.length; i++) {
    if (voteList[i] > maxValue) {
      maxIndex = i
      maxValue = voteList[i]
    }
  }
     
  return <p>{anecdotes[maxIndex]}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const votes = new Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [voteList, setVoteList] = useState(votes)

  
  const handleNextAnecdoteClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleVoteClick = () => {
    const copy = [...voteList]
    copy[selected] += 1
    setVoteList(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {voteList[selected]} votes</p>
      <Button onClick={handleVoteClick} text="vote"/>
      <Button onClick={handleNextAnecdoteClick} text="next anecdote"/>

      <h1>Anecdote with most votes</h1>
      <GetMostVotedAnecdote voteList = {voteList} anecdotes = {anecdotes}/>
      
      
    
    </div>
  )
}

export default App
