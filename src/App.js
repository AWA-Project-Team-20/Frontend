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
import ShoppingCart from './pages/cart';
import ManagerPage from './pages/manager';
import EmptyPage from './pages/empty';
import { UserContext } from './contexts/UserContext';

function App() {
  const [ showModal, setShowModal ] = useState(false)
  const [ restaurants, setRestaurants ] = useState([])
  const [ user, setUser ] = useState(null)
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
      "name": "About Us"
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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      restaurantService.setToken(user.token)
      setNavLinks([
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
    }
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Modal showModal={showModal} setShowModal={setShowModal} setNavLinks={setNavLinks} />
        <Navbar openModal={() => setShowModal(!showModal)} navLinks={navLinks} setNavLinks={setNavLinks} />
        <Routes>
          <Route path="/" element={<HomePage restaurants={restaurants} />} />
          <Route path="/restaurants" element={<RestaurantsPage restaurants={restaurants} />} />
          <Route path="/restaurant/:restaurantId" element={<RestaurantMenuPage restaurants={restaurants} />} />
          <Route path="/about" element={<AboutPage />} />
          { user && <Route path="/cart" element={<ShoppingCart />} /> }
          { user && <Route path="/manager/restaurant" element={<ManagerPage setNavLinks={setNavLinks} restaurants={restaurants} setRestaurants={setRestaurants} />} /> }
          <Route path="*" element={<EmptyPage /> } />
        </Routes>
      </UserContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
