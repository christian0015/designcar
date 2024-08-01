import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink  } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play();
      }
    }, 500); // Délai de 500ms

    // Nettoyage du timer lorsque le composant est démonté
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router className="App">
      <div className="gdBlock">

        <div className="leftBlock">
          <div className="logo">
            <div className="logoTextA">design</div>
            <div className="logoTextB">design Car</div>
          </div>

          <div className="blockFollow">
            <h3 className="title">Suivez-nous</h3>
            <div className="followText">
              <p>Rejoignez-nous pour découvrir comment nous pouvons élever votre présence en ligne et obtenir des résultats exceptionnels.</p>
            </div>

            <div className="followLogo">
              <a href="https://www.instagram.com/christian_tukunda" target="_blank" rel="noopener noreferrer">
                <img src="reseaux_icons/instagram.png" alt="Suivez-nous sur Instagram"></img>
              </a>
              <a href="https://www.tiktok.com/@christian_tukunda" target="_blank" rel="noopener noreferrer">
                <img src="reseaux_icons/tiktok.png" alt="Suivez-nous sur TikTok"></img>
              </a>
              <a href="https://t.me/christiantukunda" target="_blank" rel="noopener noreferrer">
                <img src="reseaux_icons/telegram.png" alt="Suivez-nous sur Telegram"></img>
              </a>
            </div>


            <div className="going">
              <a href='https://mysite-fbcd68.webflow.io/'>
                <div className="goingS1a">Découvrez la Mercedes-Benz G 63 AMG Brabus 800 Widestar
                  <div className="goingS1b"> 
                    <img src="arrow (1).png" alt="Description of image" ></img>
                  </div>
                </div> 
              </a>           
            </div>
          </div>
          
          
        </div>

        <div className="rigtBlock">
          <span className="video-background">
            <video ref={videoRef} muted loop>
              <source src="/backgroundVideo2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </span>

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
            <a href='https://api.whatsapp.com/send/?phone=212713088840&text=Bonjour,%20%20Je%20suis%20int%C3%A9ress%C3%A9+par+vos+services%20de%20site web,%20je+souhaite+mener+un+projet+avec+vous.&type=phone_number&app_absent=0'>
              <div className="contactButton">Contact Us</div>
            </a>
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
