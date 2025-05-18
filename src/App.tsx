import React from 'react'
import TextInput from './components/TextInput'

function App() {
  return (
    <div className="app">
      <h1>Rant Write</h1>
      <TextInput />
      <style>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4rem;
        }
        
        h1 {
          color: #1e88e5;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
          background: -webkit-linear-gradient(45deg, #1e88e5, #ff9800);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  )
}

export default App 