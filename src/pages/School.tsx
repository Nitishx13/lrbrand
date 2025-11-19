import React from 'react';

const School: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">School Uniforms</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Comfortable and durable school uniforms designed for students of all age groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Comfortable Materials</li>
                <li>• Durable Construction</li>
                <li>• Age-Appropriate Designs</li>
                <li>• Easy Maintenance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily Wear Uniforms</li>
                <li>• Sports Uniforms</li>
                <li>• Winter Wear</li>
                <li>• Custom School Logos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
