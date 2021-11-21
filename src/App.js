import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles';
import Navbar from './components/Navbar'
import Modal from './components/account/Modal';
import Footer from './components/Footer'
import HomePage from './pages/home';
import RestaurantsPage from './pages/restaurants';
import RestaurantMenuPage from './pages/restaurantMenu';
import AboutPage from './pages/about';
import restaurantService from './services/restaurants'
import Cart from './pages/cart';

function App() {
  const [ showModal, setShowModal ] = useState(false)
  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    restaurantService
    .getAll()
    .then(initialRestaurants => {
      setRestaurants(initialRestaurants)
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Navbar openModal={() => setShowModal(!showModal)} />
      <Routes>
        <Route path="/" element={<HomePage restaurants={restaurants} />} />
        <Route path="/restaurants" element={<RestaurantsPage restaurants={restaurants} />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantMenuPage restaurants={restaurants} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
