import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles';
import Navbar from './components/Navbar'
import Modal from './components/account/Modal';
import Footer from './components/Footer'
import Home from './pages/home';

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Router>
      <GlobalStyle />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Navbar openModal={() => setShowModal(!showModal)} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
