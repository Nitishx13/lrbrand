import React from 'react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800">
            Meet Our <span className="text-orange-600">Founder</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-orange-100 shadow-lg">
                <img 
                  src="/facebook-profile.jpg" 
                  alt="Er. Sunil Lodhi Rajput" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Er. Sunil Lodhi Rajput</h2>
              <p className="text-orange-600 font-semibold text-lg">Founder & Managing Director</p>
              <div className="mt-4 flex justify-center space-x-3">
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
            
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Founder's Message</h3>
                <p className="text-gray-600 text-lg leading-relaxed italic">
                  "With over 25 years of dedication to excellence, I've built LR Brand India on the foundation of quality, trust, and innovation. Our commitment to delivering premium uniform solutions has made us a trusted partner for businesses across India."
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <p className="text-gray-600">Quality Commitment</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 mt-8">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">Our Values</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Premium Quality Materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Customer-Centric Approach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Innovation in Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    On-Time Delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
