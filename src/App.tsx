import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Corporate from './pages/Corporate';
import Industrial from './pages/Industrial';
import School from './pages/School';
import Hospital from './pages/Hospital';
import Gallery from './pages/Gallery';
import Team from './pages/Team';
import DigitalMarketing from './pages/DigitalMarketing';
import PoliticalCampaigns from './pages/PoliticalCampaigns';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/industrial" element={<Industrial />} />
            <Route path="/school" element={<School />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/political-campaigns" element={<PoliticalCampaigns />} />
            <Route path="/team" element={<Team />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
