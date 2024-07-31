import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink  } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router className="App">
      <div className="gdBlock">

        <div className="leftBlock">
          <div className="logo">
            <div className="logoTextA">NEXA</div>
            <div className="logoTextB">Digital Agency</div>
          </div>

          <div className="blockFollow">
            <h3 className="tilte">Follow us</h3>
            <div className="followText">
              By reaching out to connect with us, you're taking the fist step 
              toward unlocking the full potential of your online presece
            </div>

            <div className="followLogo">
              <span>tiktok</span>, <span>instagram</span>, <span>facebook</span>
            </div>
          </div>
          
        </div>

        <div className="rigtBlock">

          <header className="header">
            <nav className="nav">      
              <NavLink  to="/"><span className="item">Home</span></NavLink >
              <NavLink  to="/services"><span className="item">Services</span></NavLink >
              <NavLink  to="/contact"><span className="item">Contact</span></NavLink >
              <NavLink  to="/about"><span className="item">About Us</span></NavLink >         
            </nav>
          </header>

          <div className="rightTop">
            <div className="leftRight"></div>
            <div className="contactDivButton">
            <div className="contactButton">Contact Us</div>
          </div>
          </div>

          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          
        </div>

      </div>
    </Router>
  );
}

export default App;
