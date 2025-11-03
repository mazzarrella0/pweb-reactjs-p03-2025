import { useState, type FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App: FC = () => {
  const [count, setCount] = useState<number>(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </header>

      <main className="app-main">
        <div className="card">
          <button onClick={handleIncrement}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
    </>
  )
}

export default App
