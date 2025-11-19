import React from 'react';

const Hospital: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Hospital Uniforms</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">
            Hygienic and comfortable medical uniforms for healthcare professionals and staff.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Antibacterial Fabric</li>
                <li>• Easy to Clean</li>
                <li>• Professional Appearance</li>
                <li>• Comfortable Fit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Staff Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Doctor Coats</li>
                <li>• Nurse Uniforms</li>
                <li>• Support Staff</li>
                <li>• Administrative Staff</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
