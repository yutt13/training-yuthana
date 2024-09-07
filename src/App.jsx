import React from 'react'
import Home from './pages/Home';
import Course from './pages/Course';
import Contact from './pages/Contact';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Course/>} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App