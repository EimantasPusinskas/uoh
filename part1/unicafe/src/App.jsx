
import { useState } from 'react'

const Positive = ({good, all}) => {
  const positivePercentage = good / all * 100 + " %"
  return positivePercentage
}

const Average = ({average, all}) => {
  const averageRate = average / all
  return averageRate
  
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all, average}) => {
  if (all == 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }  
  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value ={good} />
          <StatisticLine text="bad" value ={bad} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={<Average average={average} all={all}/>}/>
          <StatisticLine text="positive" value={<Positive good={good} all={all}/>}/>    
        </tbody>
        
      </table>
      
    </>

  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text = "good"/>
      <Button onClick={handleNeutralClick} text = "neutral"/>
      <Button onClick={handleBadClick} text = "bad"/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>
    </div>
  )
}

export default App
