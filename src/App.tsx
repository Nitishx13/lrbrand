import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
