import './App.css'

import { useMemo, useState } from 'react'

function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(1)

  const totalTip = useMemo(() => {
    return bill * tip * 0.01
  }, [bill, tip])
  const tipPerPerson = useMemo(() => totalTip / people, [totalTip, people])
  const payPerPerson = useMemo(
    () => (bill + totalTip) / people,
    [bill, totalTip, people]
  )

  console.count('component re-rendered')

  return (
    <div className="App">
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        id="bill"
        min="0"
        value={bill}
        onChange={evt => setBill(parseInt(evt.target.value))}
      />

      <label htmlFor="tip">Tip %</label>
      <input
        type="number"
        id="tip"
        min="0"
        value={tip}
        onChange={evt => setTip(parseInt(evt.target.value))}
      />

      <label htmlFor="people">No. of People</label>
      <input
        type="number"
        id="people"
        min="1"
        value={people}
        onChange={evt => setPeople(parseInt(evt.target.value))}
      />

      <p>
        Total tip: CAD$
        {isNaN(totalTip) ? '-' : totalTip.toFixed(2)}
      </p>
      <p>
        Tip per person: CAD$
        {isNaN(tipPerPerson) ? '-' : tipPerPerson.toFixed(2)}
      </p>
      <p>
        Total split per person: CAD$
        {isNaN(payPerPerson) ? '-' : payPerPerson.toFixed(2)}
      </p>
    </div>
  )
}

export default App
