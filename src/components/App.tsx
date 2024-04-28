import React, { Suspense } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import image from '../assets/cognitive-bias-codex-ru.png'
import Logo from '../assets/logo.svg'
export function App() {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count + 1)
  return (
    <div className={classes.layout}>
      <h1>{__PLATFORM__}</h1>
      <Logo width={100} height={100} />
      <img height={700} src={image} alt='Cognitive Bias Codex' />
      <Link to='/about'>About</Link>
      <Link to='/shop'>Shop</Link>
      <h3>{count}</h3>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
