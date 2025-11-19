import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About LR Brand India</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-6">
            LR Brand India is Delhi NCR's premier uniform manufacturing company with over 25 years of excellence in providing high-quality uniform solutions.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We specialize in manufacturing uniforms for corporate offices, industrial facilities, schools, hospitals, hotels, and security personnel across India.
          </p>
          
          {/* Founder Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-100 shadow-lg">
                <img src="/assets/resource/image-1.jpg" alt="Er. Sunil Lodhi Rajput" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Er. Sunil Lodhi Rajput</h2>
                <p className="text-orange-600 font-semibold text-lg mb-4">Founder & Managing Director</p>
                <p className="text-gray-600 mb-4">
                  With over 25 years of experience in the uniform manufacturing industry, our founder has built LR Brand India on the principles of quality, innovation, and customer satisfaction. His engineering background and passion for textiles have revolutionized uniform design and manufacturing in India.
                </p>
                <div className="flex justify-center md:justify-start space-x-3">
                  <a 
                    href="https://www.facebook.com/er.sunil.lodhi.rajput" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                    title="Facebook Profile"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To provide premium quality uniforms that enhance brand identity and ensure comfort, durability, and professional appearance for all our clients.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become India's most trusted uniform manufacturer by combining traditional craftsmanship with modern innovation and exceptional customer service.
              </p>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Uniform Designs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">States Served</div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Quality Excellence</h3>
                <p className="text-gray-600 text-sm">Uncompromising quality in every stitch and fabric choice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600 text-sm">Putting our clients' needs at the forefront of everything</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Continuously evolving with modern design and technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
