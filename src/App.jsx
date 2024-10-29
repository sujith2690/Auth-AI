import React from 'react'

import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import Loading from './components/pages/Loading'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className="h-screen  bg-[#050E17] ">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

export default App