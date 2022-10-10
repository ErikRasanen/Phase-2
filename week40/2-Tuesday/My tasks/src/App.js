import { useState } from 'react'

 

// Tässä versiossa on edellisen version erona oma Button komponentti.

// Myös statistiikka on eriytetty ja HTML muotoilussa käytetään taulukkoa

// jolla tilastotietorivit esitetään.

 

const Buttons = (props) => {

    return(

        <div>

            <h1>give feedback</h1>

            <Button handleClick={props.goodButton} text={"good"}></Button>

            <Button handleClick={props.neutralButton} text={"neutral"}></Button>

            <Button handleClick={props.badButton} text={"bad"}></Button>

        </div>

    )

}

 

const Button = ({ handleClick, text }) => {

  return (

    // Kasvatetaan vastaavan napin laskuria yhdellä

    <button onClick={() => handleClick(1)}>{text}</button>

  )

}

 

const Statistics = (props) => {

  // Tilastoa täytyy olla kerättynä vähintään 1kpl ennen kun tulos näytetään

  if (props.all === 0) {

    return (

      <div>

        <h2>statistics</h2>

        No feedback given

      </div>

    )

  }

  return (

    <div>

      <h2>statistics</h2>

      <StatisticLine text={"good"} value={props.goodValue}></StatisticLine>

      <StatisticLine text={"neutral"} value={props.neutralValue}></StatisticLine>

      <StatisticLine text={"bad"} value={props.badValue}></StatisticLine>

      <StatisticLine text={"all"} value={props.all}></StatisticLine>

      {/* Näytetään laskennallisten arvojen ensimmäinen desimaali esimerkin mukaan */}

      <StatisticLine text={"average"} value={Number(props.averageValue).toFixed(1)}></StatisticLine>

      <StatisticLine text={"positive"} value={Number(props.countPositive).toFixed(1) + "%"}></StatisticLine>

    </div>

  )

}

 

const StatisticLine = ({ text, value }) => {

    return (

        <table>

            <tbody>

                <tr>

                    <td>{text}</td>

                    <td>{value}</td>

                </tr>

            </tbody>

        </table>

    )

}

 

const App = () => {

  const [good, setGood] = useState(0)

  const [neutral, setNeutral] = useState(0)

  const [bad, setBad] = useState(0)

 

  const addGood = (addValue) => setGood(good+addValue)

  const addNeutral = (addValue) => setNeutral(neutral+addValue)

  const addBad = (addValue) => setBad(bad + addValue)

 

  const countAll = () => good + bad + neutral

  const averageValue = () => (good - bad) / countAll()

  const countPositive = () => 100 * (good / countAll())

 

  return (

    <div>

      <Buttons

        goodButton={addGood}

        neutralButton={addNeutral}

        badButton={addBad}

      />

      <Statistics

        goodValue = {good}

        neutralValue = {neutral}

        badValue={bad}

        all = {countAll()}

        averageValue={averageValue()}

        countPositive = {countPositive()}

       

      />

    </div>

  )

}

 

export default App