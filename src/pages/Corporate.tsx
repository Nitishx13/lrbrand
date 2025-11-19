import React from 'react';

const Corporate: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Corporate Uniforms</h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Professional corporate uniforms that enhance your brand identity and employee confidence. Our premium corporate wear combines style, comfort, and professionalism.
          </p>
          
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src="/assets/main-slider/image-1.jpg" 
              alt="Corporate Uniforms" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Features and Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom Design Options</li>
                <li>• Premium Fabrics</li>
                <li>• Brand Logo Integration</li>
                <li>• Professional Appearance</li>
                <li>• Breathable Materials</li>
                <li>• Easy Maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Enhanced Brand Identity</li>
                <li>• Employee Confidence</li>
                <li>• Professional Image</li>
                <li>• Team Unity</li>
                <li>• Customer Trust</li>
                <li>• Competitive Edge</li>
              </ul>
            </div>
          </div>
          
          {/* Products Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Corporate Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/resource/image-2.jpg" alt="Executive Suits" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Executive Suits</h3>
                  <p className="text-sm text-gray-600">Premium business suits for senior management</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/resource/image-3.jpg" alt="Office Wear" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Office Wear</h3>
                  <p className="text-sm text-gray-600">Comfortable daily wear for office staff</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/resource/image-4.jpg" alt="Corporate Casuals" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Corporate Casuals</h3>
                  <p className="text-sm text-gray-600">Smart casual options for modern workplaces</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonial */}
          <div className="bg-orange-50 rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200">
                <img src="/assets/resource/image-1.jpg" alt="Er. Sunil Lodhi Rajput" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-lg italic text-gray-700 mb-4">
                  "Our corporate uniforms are designed to make your business stand out. We believe that professional attire is not just clothing - it's a statement of your company's values and commitment to excellence."
                </p>
                <p className="font-semibold text-orange-600">Er. Sunil Lodhi Rajput</p>
                <p className="text-sm text-gray-600">Founder & Managing Director</p>
                <a 
                  href="https://www.facebook.com/er.sunil.lodhi.rajput" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
                >
                  Connect on Facebook →
                </a>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-gray-800 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Corporate Image?</h2>
            <p className="mb-6">Get a custom quote for your corporate uniform needs</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
