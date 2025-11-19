import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      {/* Search Popup */}
      <div id="search-popup" className="search-popup fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div className="close-search absolute top-4 right-4 bg-orange-500 text-white p-2 rounded cursor-pointer hover:bg-orange-600">
          <i className="fas fa-times"></i>
        </div>
        <div className="popup-inner flex items-center justify-center h-full">
          <div className="search-form bg-white p-8 rounded-lg shadow-xl">
            <form className="flex flex-col gap-4">
              <input 
                type="search" 
                className="form-control px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Search Here" 
                required 
              />
              <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                Search Now!
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <section className="banner-section relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-800/90"></div>
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop" alt="Professional Business Team" className="w-full h-full object-cover" />
        </div>
        <div className="banner-content text-center px-4 relative z-10">
          <h1 className="banner-headline text-5xl md:text-7xl font-bold mb-4 text-white">LR Brand India</h1>
          <p className="banner-subtitle text-xl md:text-3xl mb-8 text-white">Leading Uniform Manufacturer in Delhi NCR</p>
          <div className="banner-link">
            <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              <i className="fas fa-phone-alt"></i>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Showcase Section */}
      <section className="hero-showcase py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Professional Uniforms for Modern Professionals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your team's appearance with our premium quality uniforms designed for confidence and professionalism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop" alt="Corporate Professional" className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Corporate Excellence</h3>
                  <p className="text-sm">Professional business attire</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop" alt="Industrial Worker" className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Industrial Strength</h3>
                  <p className="text-sm">Durable workwear solutions</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=500&fit=crop" alt="Service Professional" className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Service Excellence</h3>
                  <p className="text-sm">Customer service uniforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section id="services" className="services-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-header text-center mb-12 relative">
            <div className="sec-title-dec absolute left-1/2 transform -translate-x-1/2 -top-4">
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <i className="fas fa-star text-orange-500 text-sm"></i>
              </div>
            </div>
            <div className="badge inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
              <span className="badge-text font-semibold">Our Services</span>
            </div>
            <h2 className="section-title text-3xl lg:text-5xl mb-6 text-gray-800">
              Premium Uniform <span className="text-orange-600">Solutions</span>
            </h2>
            <p className="section-description text-lg max-w-3xl mx-auto text-gray-600">
              We specialize in manufacturing high-quality uniforms for various industries with custom designs, premium fabrics, and competitive pricing.
            </p>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Uniforms */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="service-icon p-6">
                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-building text-white text-2xl"></i>
                </div>
              </div>
              <div className="service-content p-6">
                <h3 className="service-title text-xl font-bold mb-3 text-gray-800">Corporate Uniforms</h3>
                <p className="service-description text-gray-600 mb-4">
                  Professional corporate uniforms that enhance your brand identity and employee confidence.
                </p>
                <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Custom Design Options</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Premium Fabric Quality</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Brand Integration</li>
                </ul>
                <Link to="/corporate" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Corporate
                </Link>
              </div>
            </div>
            
            {/* School Uniforms */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="service-icon p-6">
                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-graduation-cap text-white text-2xl"></i>
                </div>
              </div>
              <div className="service-content p-6">
                <h3 className="service-title text-xl font-bold mb-3 text-gray-800">School Uniforms</h3>
                <p className="service-description text-gray-600 mb-4">
                  Comfortable and durable school uniforms designed for students of all age groups.
                </p>
                <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Comfortable Materials</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Durable Construction</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Age-Appropriate Designs</li>
                </ul>
                <Link to="/school" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Schools
                </Link>
              </div>
            </div>
            
            {/* Industrial Uniforms */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="service-icon p-6">
                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-hard-hat text-white text-2xl"></i>
                </div>
              </div>
              <div className="service-content p-6">
                <h3 className="service-title text-xl font-bold mb-3 text-gray-800">Industrial Uniforms</h3>
                <p className="service-description text-gray-600 mb-4">
                  Safety-compliant industrial uniforms designed for various manufacturing and production environments.
                </p>
                <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Safety Standards</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Heavy-Duty Materials</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Protective Features</li>
                </ul>
                <Link to="/industrial" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Industrial
                </Link>
              </div>
            </div>
            
            {/* Hospital Uniforms */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="service-icon p-6">
                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-user-md text-white text-2xl"></i>
                </div>
              </div>
              <div className="service-content p-6">
                <h3 className="service-title text-xl font-bold mb-3 text-gray-800">Hospital Uniforms</h3>
                <p className="service-description text-gray-600 mb-4">
                  Hygienic and comfortable medical uniforms for healthcare professionals and staff.
                </p>
                <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Antibacterial Fabric</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Easy to Clean</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Professional Look</li>
                </ul>
                <Link to="/hospital" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Hospital
                </Link>
              </div>
            </div>
            
            {/* Hotel Uniforms */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="service-icon p-6">
                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-concierge-bell text-white text-2xl"></i>
                </div>
              </div>
              <div className="service-content p-6">
                <h3 className="service-title text-xl font-bold mb-3 text-gray-800">Hotel Uniforms</h3>
                <p className="service-description text-gray-600 mb-4">
                  Elegant hotel uniforms that reflect luxury and professionalism for hospitality staff.
                </p>
                <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Premium Fabrics</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Elegant Designs</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Brand Consistency</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Hotels
                </Link>
              </div>
            </div>
            
            {/* Security Uniforms */}
            <div className="service-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="service-icon p-6">
                <div className="icon-wrapper w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
              </div>
              <div className="service-content p-6">
                <h3 className="service-title text-xl font-bold mb-3 text-gray-800">Security Uniforms</h3>
                <p className="service-description text-gray-600 mb-4">
                  Professional security uniforms designed for authority, visibility, and practical functionality.
                </p>
                <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>High Visibility</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Professional Design</li>
                  <li><i className="fas fa-check text-orange-500 mr-2"></i>Functional Features</li>
                </ul>
                <Link to="/contact" className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Security
                </Link>
              </div>
            </div>
          </div>
          
          <div className="services-cta text-center mt-12">
            <p className="text-lg mb-6 text-gray-600">Need custom uniform solutions for your industry?</p>
            <Link to="/contact" className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              <i className="fas fa-phone-alt mr-2"></i>
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=400&fit=crop" alt="Professional Uniform Manufacturing" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                </div>
                <div className="space-y-4 mt-8">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" alt="Quality Uniform Production" className="rounded-lg shadow-lg w-full h-64 object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            <div>
              <div className="mb-6 relative">
                <div className="sec-title-dec absolute left-0 -top-4">
                  <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-orange-500 text-xs"></i>
                  </div>
                </div>
                <span className="text-orange-600 font-semibold">About LR Brand India</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                Delhi NCR's Premier Uniform Manufacturing Company
              </h2>
              <p className="text-gray-600 mb-6">
                LR Brand India is a leading manufacturer of high-quality uniforms in Delhi NCR. With over 25 years of experience, we specialize in providing comprehensive uniform solutions for corporate offices, industrial facilities, schools, hospitals, hotels, and various other sectors across India. Our state-of-the-art manufacturing facility in Delhi NCR ensures premium quality and timely delivery.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Premium Quality Fabrics & Materials
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Custom Design & Tailoring Services
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Bulk Orders with Fast Turnaround
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-orange-500 mr-3"></i>
                  Competitive Pricing & On-Time Delivery
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Trusted by <span className="font-bold text-orange-600">5000+</span> Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="sec-title-dec absolute left-1/2 transform -translate-x-1/2 -top-4">
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <i className="fas fa-star text-orange-500 text-sm"></i>
              </div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across India for premium uniform solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-600">CEO, Tech Solutions</p>
                </div>
              </div>
              <div className="flex mb-3">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-700">
                "LR Brand India delivered exceptional corporate uniforms that perfectly represent our brand. The quality and attention to detail is outstanding."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Amit Sharma</h4>
                  <p className="text-sm text-gray-600">Operations Manager, Industrial Corp</p>
                </div>
              </div>
              <div className="flex mb-3">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-700">
                "The industrial uniforms are durable and comfortable. Our team feels safe and professional. Excellent service and timely delivery."
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold">Vikram Malhotra</h4>
                  <p className="text-sm text-gray-600">Director, Hospitality Group</p>
                </div>
              </div>
              <div className="flex mb-3">
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
                <i className="fas fa-star text-yellow-400"></i>
              </div>
              <p className="text-gray-700">
                "Beautiful hotel uniforms that enhance our brand image. The staff feels confident and guests notice the difference. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-orange-100">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">5000+</h3>
              <p className="text-orange-100">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">1M+</h3>
              <p className="text-orange-100">Uniforms Delivered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-orange-100">Quality Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Quality Uniforms for Your Organization?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a free consultation and quote for your uniform requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              <i className="fas fa-phone-alt mr-2"></i>
              Contact Us
            </Link>
            <Link to="/gallery" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors">
              <i className="fas fa-images mr-2"></i>
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
