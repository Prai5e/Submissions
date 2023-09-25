import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () =>{
    const randomValue = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomValue);
  }

  const voter = () =>{
    const voteCopy = [...vote]
    voteCopy[selected] += 1;
    setVote(voteCopy)
  }

  const indexOfMax = (arr) => {
    if(arr.length === 0){
      return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for(let i =1; i< arr.length; i++){
      if(arr[i]>max){
        maxIndex = i;
        max = arr[i];
      }
    }

    return maxIndex;
  }

  const maxIndex = indexOfMax(vote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={voter}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <p>has {vote[selected]} votes</p>
    </div>
  )
}

export default App