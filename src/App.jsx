import { useState } from 'react'
import Logo from './assets/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://wellington-survey.netlify.app/" target="_blank">
          <img src={Logo} className="logo" alt="Trending Box Logo" />
        </a>
      </div>
      <h3>Website in progress...</h3>
    </>
  )
}

export default App
