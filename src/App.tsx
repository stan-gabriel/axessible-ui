import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import InvoiceInfo from './Pages/InvoiceInfo/InvoiceInfo'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<InvoiceInfo />} />
      </Routes>
    </div>
  )
}

export default App
