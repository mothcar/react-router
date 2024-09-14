// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <div>Home</div>
      <button>
      <Link to="/about" replace> About</Link>
      </button>
      
    </>
  )
}

export default App
