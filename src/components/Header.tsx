import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
            <img 
              src="/logo.svg" 
              alt="LR Brand India" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            <Link 
              to="/" 
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={scrollToTop}
            >
              {isActive('/') && (
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-20 animate-pulse"></span>
              )}
              <span className="relative">Home</span>
            </Link>
            <Link 
              to="/about" 
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={scrollToTop}
            >
              {isActive('/about') && (
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-20 animate-pulse"></span>
              )}
              <span className="relative">About</span>
            </Link>
            <div className="relative group">
              <button className="relative px-4 py-2 text-sm font-semibold rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300">
                <span className="flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-56 bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 group-hover:translate-y-1 border border-orange-100">
                <div className="py-2">
                  <Link to="/corporate" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200" onClick={scrollToTop}>
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Corporate Uniforms
                    </span>
                  </Link>
                  <Link to="/industrial" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200" onClick={scrollToTop}>
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Industrial Uniforms
                    </span>
                  </Link>
                  <Link to="/school" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200" onClick={scrollToTop}>
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      School Uniforms
                    </span>
                  </Link>
                  <Link to="/hospital" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200" onClick={scrollToTop}>
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      Hospital Uniforms
                    </span>
                  </Link>
                  <Link to="/political-campaigns" className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-600 transition-all duration-200" onClick={scrollToTop}>
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Political Campaigns
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/gallery" 
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActive('/gallery') 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={scrollToTop}
            >
              {isActive('/gallery') && (
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-20 animate-pulse"></span>
              )}
              <span className="relative">Gallery</span>
            </Link>
            <Link 
              to="/digital-marketing" 
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActive('/digital-marketing') 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={scrollToTop}
            >
              {isActive('/digital-marketing') && (
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-20 animate-pulse"></span>
              )}
              <span className="relative">Digital Marketing</span>
            </Link>
            <Link 
              to="/team" 
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActive('/team') 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={scrollToTop}
            >
              {isActive('/team') && (
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-20 animate-pulse"></span>
              )}
              <span className="relative">Team</span>
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                  : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
              onClick={scrollToTop}
            >
              {isActive('/contact') && (
                <span className="absolute inset-0 rounded-lg bg-orange-500 opacity-20 animate-pulse"></span>
              )}
              <span className="relative">Contact</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/er.sunil.lodhi.rajput" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center text-gray-600 hover:text-orange-600 transition-colors"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="tel:+918076971019" 
              className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 80769 71019</span>
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`font-medium ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActive('/about') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                About
              </Link>
              <Link 
                to="/corporate" 
                className="font-medium text-gray-700"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Corporate Uniforms
              </Link>
              <Link 
                to="/industrial" 
                className="font-medium text-gray-700"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Industrial Uniforms
              </Link>
              <Link 
                to="/school" 
                className="font-medium text-gray-700"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                School Uniforms
              </Link>
              <Link 
                to="/hospital" 
                className="font-medium text-gray-700"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Hospital Uniforms
              </Link>
              <Link 
                to="/gallery" 
                className={`font-medium ${
                  isActive('/gallery') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Gallery
              </Link>
              <Link 
                to="/digital-marketing" 
                className={`font-medium ${
                  isActive('/digital-marketing') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Digital Marketing
              </Link>
              <Link 
                to="/team" 
                className={`font-medium ${
                  isActive('/team') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${
                  isActive('/contact') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
