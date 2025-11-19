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
        </div>
      </div>
    </div>
  );
};

export default About;
