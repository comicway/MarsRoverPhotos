import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Calendar from './Components/Calendar/Calendar'
import Feed from './Components/Feed/Feed'

function App() {

  return (
    <>
      <div className="container mx-auto px-4 max-w-2xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/feed" element={<Feed/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App