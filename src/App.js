import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
