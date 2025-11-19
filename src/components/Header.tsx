import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="LR Brand India" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-primary-600 transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/corporate" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Corporate Uniforms
                </Link>
                <Link to="/industrial" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Industrial Uniforms
                </Link>
                <Link to="/school" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  School Uniforms
                </Link>
                <Link to="/hospital" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                  Hospital Uniforms
                </Link>
              </div>
            </div>
            <Link 
              to="/gallery" 
              className={`font-medium transition-colors ${
                isActive('/gallery') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/team" 
              className={`font-medium transition-colors ${
                isActive('/team') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Team
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="tel:+918076977109" 
              className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 80769 771099</span>
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
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`font-medium ${
                  isActive('/about') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/corporate" 
                className="font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Corporate Uniforms
              </Link>
              <Link 
                to="/industrial" 
                className="font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Industrial Uniforms
              </Link>
              <Link 
                to="/school" 
                className="font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                School Uniforms
              </Link>
              <Link 
                to="/hospital" 
                className="font-medium text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Hospital Uniforms
              </Link>
              <Link 
                to="/gallery" 
                className={`font-medium ${
                  isActive('/gallery') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/team" 
                className={`font-medium ${
                  isActive('/team') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium ${
                  isActive('/contact') ? 'text-primary-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
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
