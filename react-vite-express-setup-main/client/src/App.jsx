import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Nav from './layout/nav';
import Women from './pages/women';
import Men from './pages/men';
import Blog from './pages/blog';
import Closet from './pages/closet';
import Account from './pages/account';
import About from './pages/about';
import Home from './pages/home';
import Footer from './layout/footer';

// Main application
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
    const url = "/api/v1";
  
useEffect(getData,[]);

  function getData() {
    console.log('in getData')
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      } )
      .catch((err) => {
        console.error(err);
      });
  }
      
 
  console.log('inside -App')

  // Render all components for application
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" end element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
