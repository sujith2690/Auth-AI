import React from 'react'

import { lazy, Suspense } from 'react'
import Navbar from './components/common/Navbar'
import Loading from './components/pages/Loading'
import { Route, Routes } from 'react-router-dom'


const App = () => {

  const Home = lazy(() => import('./components/pages/HomePage'))
  const About = lazy(() => import('./components/pages/AboutPage'))
  const Contact = lazy(() => import('./components/pages/ContactPage'))
  const Services = lazy(() => import('./components/pages/ServicesPage'))
  const ServiceDetails = lazy(() => import('./components/pages/ServiceDetail'))
  const Faq = lazy(() => import('./components/pages/FaqPage'))
  const Mobile = lazy(() => import('./components/pages/MobileApplication'))
  const Web = lazy(() => import('./components/pages/WebApplication'))

  return (
    <>
      <div className="h-screen  bg-[#050E17] ">
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path="/services/serviceDetails/:serviceName" element={<ServiceDetails />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/mobile' element={<Mobile />} />
            <Route path='/web_application' element={<Web />} />
            <Route path='/loading' element={<Loading />} />
          </Routes>
        </Suspense>
      </div>

    </>
  )
}

export default App