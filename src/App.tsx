import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import InvoiceInfo from './Pages/InvoiceInfo/InvoiceInfo'
import { GlobalContextProvider } from './context/GlobalContext'
import Loader from './components/loader'

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Loader />
        <NavBar />
        <Routes>
          <Route path="/" element={<InvoiceInfo />} />
        </Routes>
      </div>
    </GlobalContextProvider>
  )
}

export default App
