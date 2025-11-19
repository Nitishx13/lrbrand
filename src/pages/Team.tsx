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
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">SLR</span>
              </div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Er. Sunil Lodhi Rajput</h2>
              <p className="text-orange-600 font-semibold text-lg">Founder & Managing Director</p>
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
