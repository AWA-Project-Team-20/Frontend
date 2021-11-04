import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './GlobalStyles';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  );
}

export default App;
