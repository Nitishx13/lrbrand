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
      src: "https://images.unsplash.com/photo-1521572163474-6814f9a9bf64?w=400&h=300&fit=crop",
      title: "Custom T-Shirts",
      description: "High-quality custom printed t-shirts for all occasions"
    },
    {
      src: "https://images.unsplash.com/photo-1562157873-81897a0d6d2e?w=400&h=300&fit=crop",
      title: "Political Campaign T-Shirts",
      description: "Professional political campaign merchandise and apparel"
    },
    {
      src: "https://images.unsplash.com/photo-1516829948807-7cc98ce13c0f?w=400&h=300&fit=crop",
      title: "Party T-Shirts",
      description: "Custom party t-shirts for events and celebrations"
    },
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      title: "Sports Team T-Shirts",
      description: "Professional sports team apparel and jerseys"
    },
    {
      src: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=300&fit=crop",
      title: "Corporate T-Shirts",
      description: "Branded corporate t-shirts for team building"
    },
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
      title: "Political Banners",
      description: "Professional political campaign banners and flags"
    },
    {
      src: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&h=300&fit=crop",
      title: "Campaign Posters",
      description: "High-quality political campaign posters and signage"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      title: "Paint Products",
      description: "Premium quality paints for all surfaces"
    },
    {
      src: "https://images.unsplash.com/photo-1589929776498-a2847d5d9b5f?w=400&h=300&fit=crop",
      title: "Wall Paints",
      description: "Durable wall paints for homes and offices"
    },
    {
      src: "https://images.unsplash.com/photo-1589929776498-a2847d5d9b5f?w=400&h=300&fit=crop",
      title: "Industrial Paints",
      description: "Heavy-duty paints for industrial applications"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      title: "Paint Accessories",
      description: "Professional painting tools and accessories"
    },
    {
      src: "https://images.unsplash.com/photo-1517048678831-a65b137fb361?w=400&h=300&fit=crop",
      title: "Political Caps",
      description: "Custom branded caps for political campaigns"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Campaign Materials",
      description: "Complete political campaign material solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Paint Brushes",
      description: "Professional paint brushes for all applications"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a141a773c4?w=400&h=300&fit=crop",
      title: "Custom Hoodies",
      description: "Branded hoodies for political campaigns and events"
    },
    {
      src: "https://images.unsplash.com/photo-1540555703470-395e374385a9?w=400&h=300&fit=crop",
      title: "Paint Rollers",
      description: "High-quality paint rollers for smooth application"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Political Badges",
      description: "Custom political badges and pins"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      title: "Paint Samples",
      description: "Wide range of paint color samples"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      title: "Event T-Shirts",
      description: "Custom t-shirts for political events and rallies"
    },
    {
      src: "https://images.unsplash.com/photo-1511790405569-9289233254fc?w=400&h=300&fit=crop",
      title: "Paint Sprayers",
      description: "Professional paint sprayers for large projects"
    },
    {
      src: "https://images.unsplash.com/photo-1501183638990-5bf7d516ad42?w=400&h=300&fit=crop",
      title: "Campaign stickers",
      description: "Custom political stickers and decals"
    },
    {
      src: "https://images.unsplash.com/photo-1559138324-5c0c0651a9ea?w=400&h=300&fit=crop",
      title: "Paint Thinners",
      description: "Professional paint thinners and solvents"
    },
    {
      src: "https://images.unsplash.com/photo-1503376780353-57e69d71211a?w=400&h=300&fit=crop",
      title: "Political Flags",
      description: "Custom political flags and banners"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Paint Primers",
      description: "High-quality paint primers for better adhesion"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop",
      title: "Campaign Tote Bags",
      description: "Branded tote bags for political campaigns"
    },
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8f2a20c3f76?w=400&h=300&fit=crop",
      title: "Exterior Paints",
      description: "Weather-resistant exterior paint solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1515372039734-b8f2a20c3f76?w=400&h=300&fit=crop",
      title: "Political Merchandise",
      description: "Complete political merchandise solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=400&h=300&fit=crop",
      title: "Interior Paints",
      description: "Premium interior paints for all rooms"
    },
    {
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      title: "Custom Masks",
      description: "Branded face masks for political campaigns"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-12 text-center">
            Browse through our extensive collection of custom t-shirts, paint products, and political campaign materials. 
            Connect with us on Facebook for more updates and custom solutions!
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
            <h2 className="text-2xl font-bold mb-4">Need Custom Products?</h2>
            <p className="text-gray-600 mb-6">
              Contact us today to discuss your custom t-shirts, paint requirements, or political campaign materials. 
              We provide high-quality products for all your needs.
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
