import React from 'react';
import './app.css';
import Navbar from 'components/navbar'
import Introduction from 'components/introduction';
import About from 'components/about';


function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <About/>
    </>
  )
}

export default App
