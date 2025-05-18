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
          background-color: #f5f5f5;
        }
        
        h1 {
          color: #333;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default App 