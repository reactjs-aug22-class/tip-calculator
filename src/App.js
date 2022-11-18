import './App.css'

import { useRef, useState } from 'react'

const calculateTip = (bill, tip, people) => {
  const totalTip = bill * tip * 0.01
  const tipPerPerson = totalTip / people
  const payPerPerson = (bill + totalTip) / people

  return {
    totalTip,
    tipPerPerson,
    payPerPerson
  }
}

function App() {
  const billRef = useRef()
  const tipRef = useRef()
  const peopleRef = useRef()

  const [calc, setCalc] = useState({
    totalTip: '-',
    tipPerPerson: '-',
    payPerPerson: '-'
  })

  console.count('component re-rendered')

  return (
    <div className="App">
      <label htmlFor="bill">Bill</label>
      <input ref={billRef} type="number" id="bill" min="0" defaultValue="100" />

      <label htmlFor="tip">Tip %</label>
      <input ref={tipRef} type="number" id="tip" min="0" defaultValue="0" />

      <label htmlFor="people">No. of People</label>
      <input
        ref={peopleRef}
        type="number"
        id="people"
        min="1"
        defaultValue="1"
      />

      <button
        onClick={() =>
          setCalc(
            calculateTip(
              parseInt(billRef.current.value),
              parseInt(tipRef.current.value),
              parseInt(peopleRef.current.value)
            )
          )
        }
      >
        Calculate!
      </button>

      <p>
        Total tip: CAD$
        {isNaN(calc.totalTip) ? '-' : calc.totalTip.toFixed(2)}
      </p>
      <p>
        Tip per person: CAD$
        {isNaN(calc.tipPerPerson) ? '-' : calc.tipPerPerson.toFixed(2)}
      </p>
      <p>
        Total split per person: CAD$
        {isNaN(calc.payPerPerson) ? '-' : calc.payPerPerson.toFixed(2)}
      </p>
    </div>
  )
}

export default App
