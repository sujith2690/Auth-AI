import React from 'react'

import { lazy, Suspense } from 'react'
import Navbar from './components/common/Navbar'
import HomePage from './components/pages/HomePage'
import Loading from './components/pages/Loading'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import ServicesPage from './components/pages/ServicesPage'
import FaqPage from './components/pages/FaqPage'
import ServiceDetail from './components/pages/ServiceDetail'

const App = () => {
  return (
    <>
      <div className="h-screen  bg-[#050E17] ">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/services' element={<ServicesPage/>} />
            <Route path="/services/serviceDetails/:serviceName" element={<ServiceDetail />} />
            <Route path='/faq' element={<FaqPage/>} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

export default App