import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Contact from './components/Contact/Contact';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Aboutus" element={<Aboutus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
