import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
import ShoppingCart from './pages/cart';
import ManagerPage from './pages/manager';

const EmptyRoute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  font-size: 30px;
  background-color: rgba(255, 0, 0, 0.3);
  font-weight: 700;
`;

function App() {
  const [ showModal, setShowModal ] = useState(false)
  const [ restaurants, setRestaurants ] = useState([])
  const [ navLinks, setNavLinks] = useState([
    {
      "path": "/"
    },
    {
      "path": "/restaurants",
      "name": "Restaurants"
    },
    {
      "path": "/about",
      "name": "About Us",
    },
    {
      "path": "/account",
      "name": "Account"
    },
    {
      "path": "/cart",
      "name": "Cart"
    }
  ])

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
      <Navbar openModal={() => setShowModal(!showModal)} navLinks={navLinks} />
      <Routes>
        <Route path="/" element={<HomePage restaurants={restaurants} />} />
        <Route path="/restaurants" element={<RestaurantsPage restaurants={restaurants} />} />
        <Route path="/restaurant/:restaurantId" element={<RestaurantMenuPage restaurants={restaurants} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/manager/restaurant" element={<ManagerPage setNavLinks={setNavLinks} restaurants={restaurants} setRestaurants={setRestaurants} />} />
        <Route path="*" element={<EmptyRoute>There's nothing to see here!</EmptyRoute>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
