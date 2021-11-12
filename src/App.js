import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles';
import Navbar from './components/Navbar'
import Modal from './components/account/Modal';
import Footer from './components/Footer'
import HomePage from './pages/homePage';
import RestaurantsPage from './pages/restaurantsPage';
import About from './pages/about';


function App() {
  const [ showModal, setShowModal ] = useState(false)

  return (
    <Router>
      <GlobalStyle />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Navbar openModal={() => setShowModal(!showModal)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
