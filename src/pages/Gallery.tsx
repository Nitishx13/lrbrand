import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "/facebook-profile.jpg",
      title: "Our Founder - Er. Sunil Lodhi Rajput",
      description: "Meet the visionary behind LR Brand India",
      facebook: true
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      title: "Corporate Uniforms",
      description: "Professional attire for modern businesses"
    },
    {
      src: "https://images.unsplash.com/photo-1555909224-1d3d283354a3?w=400&h=300&fit=crop",
      title: "School Uniforms",
      description: "Comfortable and durable uniforms for students"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      title: "Industrial Uniforms",
      description: "Safety-compliant workwear for industries"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      title: "Hospital Uniforms",
      description: "Medical scrubs and healthcare uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      title: "Hotel Uniforms",
      description: "Elegant uniforms for hospitality industry"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Security Uniforms",
      description: "Professional security personnel uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      title: "Sports Uniforms",
      description: "Athletic wear for teams and sports clubs"
    },
    {
      src: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&h=300&fit=crop",
      title: "Restaurant Uniforms",
      description: "Chef coats and restaurant staff uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      title: "Manufacturing Workwear",
      description: "Durable uniforms for manufacturing plants"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      title: "Construction Safety Wear",
      description: "High-visibility construction uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a141a773c4?w=400&h=300&fit=crop",
      title: "Banking Uniforms",
      description: "Professional banking sector uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1555426256-7134b9772c0f?w=400&h=300&fit=crop",
      title: "Retail Uniforms",
      description: "Customer service retail uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      title: "Aviation Uniforms",
      description: "Airline crew and airport staff uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1517048678831-a65b137fb361?w=400&h=300&fit=crop",
      title: "Logistics Uniforms",
      description: "Warehouse and logistics staff uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Healthcare Admin",
      description: "Administrative healthcare uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      title: "Event Staff Uniforms",
      description: "Professional event management uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      title: "Spa & Wellness",
      description: "Relaxing spa and wellness center uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1540555703470-395e374385a9?w=400&h=300&fit=crop",
      title: "Corporate Executive",
      description: "Premium executive business attire"
    },
    {
      src: "https://images.unsplash.com/photo-1515372039734-b8f2a20c3f76?w=400&h=300&fit=crop",
      title: "Tech Startups",
      description: "Modern tech company casual uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      title: "Office Professional",
      description: "Smart office wear for professionals"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Customer Service",
      description: "Friendly customer service uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Engineering Workwear",
      description: "Technical engineering uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Laboratory Coats",
      description: "Professional laboratory and research uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      title: "Sales Team",
      description: "Professional sales team uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      title: "Management Uniforms",
      description: "Leadership and management professional wear"
    },
    {
      src: "https://images.unsplash.com/photo-1511790405569-9289233254fc?w=400&h=300&fit=crop",
      title: "Training Academy",
      description: "Educational institution staff uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1501183638990-5bf7d516ad42?w=400&h=300&fit=crop",
      title: "Quality Control",
      description: "Quality assurance team uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1559138324-5c0c0651a9ea?w=400&h=300&fit=crop",
      title: "Transportation",
      description: "Transport and delivery service uniforms"
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-57e69d71211a?w=400&h=300&fit=crop",
      title: "Emergency Services",
      description: "First responder and emergency uniforms"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-12 text-center">
            Browse through our extensive collection of high-quality uniforms for various industries. 
            Connect with us on Facebook for more updates and custom uniform solutions!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={image.src} alt={image.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">{image.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{image.description}</p>
                  {image.facebook && (
                    <a 
                      href="https://www.facebook.com/er.sunil.lodhi.rajput" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block font-medium"
                    >
                      View on Facebook →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Need Custom Uniforms?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your uniform requirements. We serve all industries with premium quality uniforms.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="https://www.facebook.com/er.sunil.lodhi.rajput" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow on Facebook
              </a>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
