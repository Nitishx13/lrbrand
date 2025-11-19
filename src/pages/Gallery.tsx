import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-12 text-center">
            Browse through our collection of high-quality uniforms for various industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="Corporate Uniforms" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Corporate Uniforms</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="School Uniforms" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">School Uniforms</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="Industrial Uniforms" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Industrial Uniforms</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="Hospital Uniforms" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Hospital Uniforms</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="Hotel Uniforms" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Hotel Uniforms</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop" alt="Security Uniforms" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Security Uniforms</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
