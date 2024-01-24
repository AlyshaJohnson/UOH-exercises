import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatsLine = ({text, value}) => {
  return(
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Stats = ({clicks}) => {
  const total = () => clicks.bad + clicks.good + clicks.neutral
  const average = () => total()/3
  const positive = () => {
    const percentage = clicks.good/total()*100
    return percentage + "%"
  }

  if (total() == 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return(
      <div>
        <table>
          <tbody>
            <StatsLine text="good" value={clicks.good} />
            <StatsLine text="neutral" value={clicks.neutral} />
            <StatsLine text="bad" value={clicks.bad} />
            <StatsLine text="total" value={total()} />
            <StatsLine text="average" value={average()} />
            <StatsLine text="positive" value={positive()} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const increaseGood = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }
  const increaseNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
  }
  const increaseBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <Heading text='Give Feedback' />
      <Button onClick={increaseGood} text='Good' />
      <Button onClick={increaseNeutral} text='Neutral' />
      <Button onClick={increaseBad} text='Bad' />
      <Heading text='Statistics' />
      <Stats clicks={clicks} />
    </div>
  )
}

export default App