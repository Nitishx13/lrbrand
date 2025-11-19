import React from 'react';

const Industrial: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Industrial Uniforms</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Safety-compliant industrial uniforms designed for various manufacturing and production environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Safety Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Safety Standards Compliant</li>
                <li>• High-Visibility Options</li>
                <li>• Protective Features</li>
                <li>• Durable Materials</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Applications</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Manufacturing Plants</li>
                <li>• Construction Sites</li>
                <li>• Warehousing</li>
                <li>• Oil & Gas Industry</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industrial;
