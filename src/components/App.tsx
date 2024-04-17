import React from 'react'
import classes from './App.module.scss'
export function App() {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count + 1)
  return (
    <div className={classes.layout}>
      <h3>{count}</h3>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
    </div>
  )
}
