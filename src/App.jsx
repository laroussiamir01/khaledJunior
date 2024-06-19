import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Services from './component/Services'
import Blog from './component/MyBlogs'


function App() {
 

  return (
    <>
    {/*  <Header/>
  <Home />
  <Footer/> */}
   
     
        <Services></Services>
       
        <Blog></Blog>
       
     
  
  </>
   
  )
}

export default App
