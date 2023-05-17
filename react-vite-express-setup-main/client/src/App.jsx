import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Nav from './layout/nav';
import Women from './pages/women';
import Men from './pages/men';
import Blog from './pages/blog';
import Closet from './pages/closet';
import Account from './pages/login';
import About from './pages/about';
import Home from './pages/home';
import Footer from './layout/footer';
import ItemDetails from './pages/itemDetails';
import Payment from './pages/payment';
import PaymentConfirm from './pages/paymentConfirm';

// Main application
function App() {

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
          <Route path="/:gender/:itemTitle" element={<ItemDetails />} />
          <Route path="/closet/:gender/:itemTitle" element={<ItemDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-confirm" element={<PaymentConfirm />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
