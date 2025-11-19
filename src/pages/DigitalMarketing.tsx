import React from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketing: React.FC = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      {/* Banner Section */}
      <section className="banner-section relative h-96 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="banner-content text-center px-4">
          <h1 className="banner-headline text-4xl md:text-6xl font-bold mb-4">Digital Marketing Services</h1>
          <p className="banner-subtitle text-xl md:text-2xl mb-8">Grow Your Business Online with Expert Digital Solutions</p>
          <div className="banner-link">
            <Link to="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              <i className="fas fa-phone-alt"></i>
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="sec-title-dec absolute left-1/2 transform -translate-x-1/2 -top-4">
              <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center">
                <i className="fas fa-star text-purple-500 text-sm"></i>
              </div>
            </div>
            <span className="text-purple-600 font-semibold">Our Digital Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Comprehensive Digital Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end digital marketing services to help your business reach its full potential in the online space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO Service */}
            <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="service-icon mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-search text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Search Engine Optimization</h3>
              <p className="text-gray-600 mb-6">
                Improve your website's visibility on search engines and drive organic traffic with our expert SEO strategies.
              </p>
              <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Keyword Research & Analysis</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>On-Page & Off-Page SEO</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Technical SEO Audits</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Local SEO Optimization</li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
                Get SEO Services <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Social Media Marketing */}
            <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="service-icon mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-share-alt text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Social Media Marketing</h3>
              <p className="text-gray-600 mb-6">
                Build brand awareness and engage with your audience across all social media platforms with targeted campaigns.
              </p>
              <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Social Media Strategy</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Content Creation & Management</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Community Management</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Paid Social Advertising</li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
                Get Social Services <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* PPC Advertising */}
            <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="service-icon mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-bullhorn text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">PPC Advertising</h3>
              <p className="text-gray-600 mb-6">
                Drive immediate results with targeted pay-per-click campaigns on Google, Facebook, and other advertising platforms.
              </p>
              <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Google Ads Management</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Facebook & Instagram Ads</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Campaign Optimization</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>ROI Tracking & Reporting</li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
                Get PPC Services <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Content Marketing */}
            <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="service-icon mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-pen text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Content Marketing</h3>
              <p className="text-gray-600 mb-6">
                Create compelling content that resonates with your audience and drives engagement across all digital channels.
              </p>
              <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Blog Writing & Management</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Video Content Production</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Infographic Design</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Email Marketing Campaigns</li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
                Get Content Services <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Web Development */}
            <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="service-icon mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Build responsive, high-performance websites that convert visitors into customers with modern web technologies.
              </p>
              <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Custom Website Design</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>E-commerce Development</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Mobile-Responsive Design</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Website Maintenance</li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
                Get Web Services <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Email Marketing */}
            <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="service-icon mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-envelope text-purple-600 text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Email Marketing</h3>
              <p className="text-gray-600 mb-6">
                Nurture leads and build customer relationships with targeted email marketing campaigns and automation.
              </p>
              <ul className="service-features text-sm text-gray-500 mb-6 space-y-2">
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Email Campaign Design</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Automation Workflows</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>List Management</li>
                <li><i className="fas fa-check text-purple-500 mr-2"></i>Performance Analytics</li>
              </ul>
              <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2">
                Get Email Services <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 relative">
                <div className="sec-title-dec absolute left-0 -top-4">
                  <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center">
                    <i className="fas fa-star text-purple-500 text-xs"></i>
                  </div>
                </div>
                <span className="text-purple-600 font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                Your Partner in Digital Growth
              </h2>
              <p className="text-gray-600 mb-6">
                We combine creativity, technology, and data-driven strategies to deliver digital marketing solutions that drive real business results. Our team of experts is dedicated to helping you succeed in the digital landscape.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Proven Track Record of Success
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Customized Strategies for Your Business
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Transparent Reporting & Analytics
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-purple-500 mr-3"></i>
                  Dedicated Account Management
                </li>
              </ul>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <img src="/assets/resource/image-14.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/assets/resource/image-15.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/assets/resource/image-16.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/assets/resource/image-17.jpg" alt="Client" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Trusted by <span className="font-bold text-purple-600">500+</span> Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/assets/main-slider/image-5.jpg" alt="Digital Marketing Team" className="rounded-lg shadow-lg w-full" />
              <div className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-6 rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm">Years of Digital Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Our Digital Marketing Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your digital marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">1. Strategy</h3>
              <p className="text-gray-600">Develop comprehensive digital marketing strategy tailored to your goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">2. Implementation</h3>
              <p className="text-gray-600">Execute campaigns across all digital channels with precision</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">3. Optimization</h3>
              <p className="text-gray-600">Monitor performance and optimize campaigns for better results</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-trophy text-purple-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">4. Results</h3>
              <p className="text-gray-600">Achieve your business goals with measurable ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital marketing services can help you achieve your business goals
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <i className="fas fa-phone-alt"></i>
              Get a Free Consultation
            </Link>
            <a 
              href="https://www.facebook.com/er.sunil.lodhi.rajput" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <i className="fab fa-facebook"></i>
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
