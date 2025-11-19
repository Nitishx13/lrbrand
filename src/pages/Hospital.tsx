import React from 'react';

const Hospital: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Hospital Uniforms</h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Hygienic and comfortable medical uniforms for healthcare professionals and staff. Our hospital uniforms meet the highest standards of cleanliness and professional appearance.
          </p>
          
          {/* Hero Image */}
          <div className="mb-12">
            <img 
              src="/assets/main-slider/image-4.jpg" 
              alt="Hospital Uniforms" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Features and Staff Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Antibacterial Fabric</li>
                <li>• Easy to Clean</li>
                <li>• Professional Appearance</li>
                <li>• Comfortable Fit</li>
                <li>• Fluid Resistant</li>
                <li>• Color Coded by Department</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Staff Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Doctor Coats</li>
                <li>• Nurse Uniforms</li>
                <li>• Support Staff</li>
                <li>• Administrative Staff</li>
                <li>• Lab Technicians</li>
                <li>• Surgeons Scrubs</li>
              </ul>
            </div>
          </div>
          
          {/* Products Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Healthcare Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/resource/image-11.jpg" alt="Doctor Coats" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Doctor Coats</h3>
                  <p className="text-sm text-gray-600">Professional lab coats for medical practitioners</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/resource/image-12.jpg" alt="Nurse Uniforms" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Nurse Uniforms</h3>
                  <p className="text-sm text-gray-600">Comfortable scrubs for nursing staff</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/resource/image-13.jpg" alt="Support Staff" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Support Staff</h3>
                  <p className="text-sm text-gray-600">Practical uniforms for hospital support teams</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quality Standards */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Healthcare Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Medical Grade</h3>
                <p className="text-sm text-gray-600">All fabrics meet medical industry standards</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Hygienic</h3>
                <p className="text-sm text-gray-600">Easy to sanitize and maintain cleanliness</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Durable</h3>
                <p className="text-sm text-gray-600">Built to withstand frequent washing and wear</p>
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
                  "Healthcare professionals deserve uniforms that protect them while maintaining comfort and dignity. Our hospital uniforms are designed with the highest standards of safety and hygiene in mind."
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
            <h2 className="text-2xl font-bold mb-4">Upgrade Your Healthcare Uniforms?</h2>
            <p className="mb-6">Get premium medical uniforms for your healthcare facility</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
