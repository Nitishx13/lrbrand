<?php
// Set page variables
$page_title = 'LR Brand India - Leading Uniform Manufacturer in Delhi NCR | Corporate, Industrial & School Uniforms';
$page_description = 'LR Brand India is Delhi NCR\'s premier uniform manufacturer with 25+ years of experience. We provide high-quality corporate, industrial, school, hospital, hotel, and security uniforms. Bulk orders, custom designs, and on-time delivery guaranteed.';
$page_keywords = 'uniform manufacturer Delhi NCR, corporate uniforms Delhi, school uniforms Delhi, industrial uniforms, hospital uniforms, hotel uniforms, security uniforms, bulk uniform orders, custom uniform design, uniform supplier India';
$current_page = 'home';
?>

<?php include 'includes/header.php'; ?>

<!--Search Popup-->
<div id="search-popup" class="search-popup">
    <div class="close-search theme-btn"><i class="fal fa-times"></i></div>
    <div class="popup-inner">
        <div class="overlay-layer"></div>
        <div class="search-form">
            <form method="post" action="index.php">
                <div class="form-group">
                    <fieldset>
                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required >
                        <input type="submit" value="Search Now!" class="theme-btn">
                    </fieldset>
                </div>
            </form>
        </div>
    </div>
</div>

 <!-- Banner Section -->
    <section class="banner-section">
        <div class="banner-content">
            <h1 class="banner-headline">LR Brand India</h1>
            <p class="banner-subtitle">Leading Uniform Manufacturer in Delhi NCR</p>
            <div class="banner-link">
                <a href="contact.php">Get a Quote</a>
            </div>
        </div>
    </section>
    <!-- End Banner Section -->

<!-- Modern Services Section -->
<section id="services" class="services-section section section-lg">
    <div class="container">
        <div class="section-header text-center mb-12">
            <div class="badge mb-4">
                <span class="badge-text">Our Services</span>
            </div>
            <h2 class="section-title text-3xl lg:text-5xl mb-6">
                Premium Uniform <span class="text-primary">Solutions</span>
            </h2>
            <p class="section-description text-lg max-w-3xl mx-auto">
                We specialize in manufacturing high-quality uniforms for various industries with custom designs, premium fabrics, and competitive pricing.
            </p>
        </div>
        
        <div class="services-grid grid grid-auto gap-8">
            <!-- Corporate Uniforms -->
            <div class="service-card card">
                <div class="service-icon">
                    <div class="icon-wrapper bg-gradient-to-br from-orange-400 to-orange-600">
                        <i class="fas fa-building text-white text-2xl"></i>
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title text-xl font-bold mb-3">Corporate Uniforms</h3>
                    <p class="service-description text-gray-600 mb-4">
                        Professional corporate uniforms that enhance your brand identity and employee confidence.
                    </p>
                    <ul class="service-features text-sm text-gray-500 mb-6">
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Custom Design Options</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Premium Fabric Quality</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Brand Integration</li>
                    </ul>
                    <a href="corporate.php" class="btn btn-primary">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Explore Corporate
                    </a>
                </div>
            </div>
            
            <!-- School Uniforms -->
            <div class="service-card card">
                <div class="service-icon">
                    <div class="icon-wrapper bg-gradient-to-br from-green-400 to-green-600">
                        <i class="fas fa-graduation-cap text-white text-2xl"></i>
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title text-xl font-bold mb-3">School Uniforms</h3>
                    <p class="service-description text-gray-600 mb-4">
                        Comfortable and durable school uniforms designed for students of all age groups.
                    </p>
                    <ul class="service-features text-sm text-gray-500 mb-6">
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Comfortable Materials</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Durable Construction</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Age-Appropriate Designs</li>
                    </ul>
                    <a href="school.php" class="btn btn-primary">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Explore Schools
                    </a>
                </div>
            </div>
            
            <!-- Industrial Uniforms -->
            <div class="service-card card">
                <div class="service-icon">
                    <div class="icon-wrapper bg-gradient-to-br from-blue-400 to-blue-600">
                        <i class="fas fa-hard-hat text-white text-2xl"></i>
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title text-xl font-bold mb-3">Industrial Uniforms</h3>
                    <p class="service-description text-gray-600 mb-4">
                        Safety-compliant industrial uniforms designed for various manufacturing and production environments.
                    </p>
                    <ul class="service-features text-sm text-gray-500 mb-6">
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Safety Standards</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Heavy-Duty Materials</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Protective Features</li>
                    </ul>
                    <a href="industrial.php" class="btn btn-primary">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Explore Industrial
                    </a>
                </div>
            </div>
            
            <!-- Hospital Uniforms -->
            <div class="service-card card">
                <div class="service-icon">
                    <div class="icon-wrapper bg-gradient-to-br from-red-400 to-red-600">
                        <i class="fas fa-user-md text-white text-2xl"></i>
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title text-xl font-bold mb-3">Hospital Uniforms</h3>
                    <p class="service-description text-gray-600 mb-4">
                        Hygienic and comfortable medical uniforms for healthcare professionals and staff.
                    </p>
                    <ul class="service-features text-sm text-gray-500 mb-6">
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Antibacterial Fabric</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Easy to Clean</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Professional Look</li>
                    </ul>
                    <a href="hospital.php" class="btn btn-primary">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Explore Hospital
                    </a>
                </div>
            </div>
            
            <!-- Hotel Uniforms -->
            <div class="service-card card">
                <div class="service-icon">
                    <div class="icon-wrapper bg-gradient-to-br from-purple-400 to-purple-600">
                        <i class="fas fa-concierge-bell text-white text-2xl"></i>
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title text-xl font-bold mb-3">Hotel Uniforms</h3>
                    <p class="service-description text-gray-600 mb-4">
                        Elegant hotel uniforms that reflect luxury and professionalism for hospitality staff.
                    </p>
                    <ul class="service-features text-sm text-gray-500 mb-6">
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Premium Fabrics</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Elegant Designs</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Brand Consistency</li>
                    </ul>
                    <a href="contact.php" class="btn btn-primary">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Explore Hotels
                    </a>
                </div>
            </div>
            
            <!-- Security Uniforms -->
            <div class="service-card card">
                <div class="service-icon">
                    <div class="icon-wrapper bg-gradient-to-br from-gray-600 to-gray-800">
                        <i class="fas fa-shield-alt text-white text-2xl"></i>
                    </div>
                </div>
                <div class="service-content">
                    <h3 class="service-title text-xl font-bold mb-3">Security Uniforms</h3>
                    <p class="service-description text-gray-600 mb-4">
                        Professional security uniforms designed for authority, visibility, and practical functionality.
                    </p>
                    <ul class="service-features text-sm text-gray-500 mb-6">
                        <li><i class="fas fa-check text-green-500 mr-2"></i>High Visibility</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Professional Design</li>
                        <li><i class="fas fa-check text-green-500 mr-2"></i>Functional Features</li>
                    </ul>
                    <a href="contact.php" class="btn btn-primary">
                        <i class="fas fa-arrow-right mr-2"></i>
                        Explore Security
                    </a>
                </div>
            </div>
        </div>
        
        <div class="services-cta text-center mt-12">
            <p class="text-lg mb-6">Need custom uniform solutions for your industry?</p>
            <a href="contact.php" class="btn btn-secondary btn-lg">
                <i class="fas fa-phone-alt mr-2"></i>
                Get Custom Quote
            </a>
        </div>
    </div>
</section>

<!-- Welcome Section -->
<section class="welcome-section">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-7">
                <div class="image-block wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="image-one" data-parallax='{"y": -30}'><img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop" alt="Professional Uniform Manufacturing"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="image-two" data-parallax='{"y": 30}'><img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=800&fit=crop" alt="Quality Uniform Production"></div>
                        </div>
                    </div>
                    <div class="experience-year"><h3>25+</h3>Years of <br>Excellence</div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="sec-title-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="sec-title-dec"><img src="https://img.icons8.com/fluency/48/000000/star--v1.png" alt="Decorative Element"></div>
                    <div class="sub-title">About LR Brand India</div>
                    <h2 class="sec-title mb-35">Delhi NCR's Premier Uniform Manufacturing Company</h2>
                </div>
                <div class="text">LR Brand India is a leading manufacturer of high-quality uniforms in Delhi NCR. With over 25 years of experience, we specialize in providing comprehensive uniform solutions for corporate offices, industrial facilities, schools, hospitals, hotels, and various other sectors across India. Our state-of-the-art manufacturing facility in Delhi NCR ensures premium quality and timely delivery.</div>
                <ul class="list">
                    <li><img src="https://img.icons8.com/fluency/20/000000/checkmark.png" alt="Checkmark Icon"> Premium Quality Fabrics & Materials</li>
                    <li><img src="https://img.icons8.com/fluency/20/000000/checkmark.png" alt="Checkmark Icon"> Custom Design & Tailoring Services</li>
                    <li><img src="https://img.icons8.com/fluency/20/000000/checkmark.png" alt="Checkmark Icon"> Bulk Orders with Fast Turnaround</li>
                    <li><img src="https://img.icons8.com/fluency/20/000000/checkmark.png" alt="Checkmark Icon"> Competitive Pricing & On-Time Delivery</li>
                </ul>
                <div class="author-wrapper wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="author-thumb"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Company Owner"></div>
                    <div class="signature"><img src="https://via.placeholder.com/200x80/333333/ffffff?text=Signature" alt="Signature"></div>
                </div>
            </div>
        </div>  
    </div>
</section>

<!-- Our services -->
<section id="services" class="services-section" style="background-image: url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&h=1080&fit=crop&overlay=gradient&opacity=0.3);">
    <div class="auto-container">
        <div class="sec-title-box text-center">
            <div class="sec-title-dec"><img src="assets/images/shape/shape-1.png" alt="Decorative Element"></div>
            <div class="sub-title">Our Uniform Categories</div>
            <h2 class="sec-title">Uniform Solutions We Provide</h2>
        </div>
        <div class="theme_carousel owl-theme owl-carousel owl-style-one" data-options='{"loop": true, "margin": 0, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 1000, "responsive":{ "0" :{ "items": "1" }, "480" :{ "items" : "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "2" } , "992":{ "items" : "3", "center": true }, "1200":{ "items" : "3", "center": true }}}'>
            <div class="col-lg-12 service-block-one">
                <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="image img_hover_1"><img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop" alt="Corporate Uniforms - Professional Office Wear"></div>
                    <h4><a href="corporate.php">Corporate Uniforms</a></h4>
                    <div class="text">Professional corporate attire <br> including formal shirts, trousers, <br> blazers and complete office wear.</div>
                </div>                
            </div>
            <div class="col-lg-12 service-block-one">
                <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="image img_hover_1"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop" alt="Industrial Uniforms - Durable Workwear"></div>
                    <h4><a href="industrial.php">Industrial Uniforms</a></h4>
                    <div class="text">Durable workwear for factories, <br> manufacturing units, warehouses <br> and industrial facilities.</div>
                </div>
            </div>
            <div class="col-lg-12 service-block-one">
                <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="image img_hover_1"><img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" alt="School Uniforms - Complete Student Attire"></div>
                    <h4><a href="school.php">School Uniforms</a></h4>
                    <div class="text">Complete school uniform solutions <br> including shirts, pants, skirts, <br> ties and sports wear.</div>
                </div>
            </div>
            <div class="col-lg-12 service-block-one">
                <div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div class="image img_hover_1"><img src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop" alt="Hospital Uniforms - Medical Scrubs and Lab Coats"></div>
                    <h4><a href="hospital.php">Hospital Uniforms</a></h4>
                    <div class="text">Medical scrubs, lab coats, <br> nurse uniforms and healthcare <br> professional attire.</div>
                </div>                
            </div>
            <div class="col-lg-12 service-block-one">
                <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="image img_hover_1"><img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop" alt="Hotel Uniforms - Hospitality Staff Attire"></div>
                    <h4><a href="corporate.php">Hotel Uniforms</a></h4>
                    <div class="text">Hospitality uniforms for hotels, <br> restaurants, housekeeping and <br> front desk staff.</div>
                </div>
            </div>
            <div class="col-lg-12 service-block-one">
                <div class="inner-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                    <div class="image img_hover_1"><img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop" alt="Security Uniforms - Professional Guard Attire"></div>
                    <h4><a href="industrial.php">Security Uniforms</a></h4>
                    <div class="text">Professional security guard <br> uniforms with customizable <br> badges and accessories.</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Funfacts -->
<section class="funfacts-section">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6">
                        <div class="funfacts-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="background-image: url(assets/images/resource/image-6.jpg);">
                            <div class="content-middle">
                                <div class="funfacts-block_icon"><i class="flaticon-suit"></i></div>
                                <h4 class="funfacts-block_title">Uniform Design</h4>
                            </div>
                        </div>                            
                    </div>
                    <div class="col-md-6">
                        <div class="funfacts-block wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="content-middle">
                                <div class="count-outer count-box funfacts-block_number">
                                    <span class="count-text" data-speed="3000" data-stop="8800">0</span>
                                </div>
                                <h4 class="funfacts-block_title">Uniforms Delivered</h4>
                            </div>
                        </div>
                    </div>                                              
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-md-6">
                        <div class="funfacts-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms" style="background-image: url(assets/images/resource/image-7.jpg);">
                            <div class="content-middle">
                                <div class="funfacts-block_icon"><i class="flaticon-measuring"></i></div>
                                <h4 class="funfacts-block_title">Custom Fitting</h4>
                            </div>
                        </div>                            
                    </div>
                    <div class="col-md-6">
                        <div class="funfacts-block wow fadeInDown" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div class="content-middle">
                                <div class="count-outer count-box funfacts-block_number">
                                    <span class="count-text" data-speed="3000" data-stop="25">0</span>
                                </div>
                                <h4 class="funfacts-block_title">Years Experience</h4>
                            </div>
                        </div>
                    </div>                                              
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Call To Action -->
<section class="call-to-action" style="background-image: url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop);">
    <div class="auto-container">
        <div class="content-box">
            <div class="sec-title">
                <h2>Ready to Get Premium Quality Uniforms for Your Business?</h2>
                <div class="text">Contact us today for a free consultation and quote. We serve clients across Delhi NCR and throughout India.</div>
                <div class="link-box">
                    <a href="contact.php" class="theme-btn btn-style-one"><span>Contact Us Now</span></a>
                    <a href="tel:+918076977101" class="theme-btn btn-style-two"><span>Call +91 80769 77101</span></a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Testimonial Section -->
<section class="testimonial-section">
    <div class="auto-container">
        <div class="sec-title-box text-center">
            <div class="sec-title-dec"><img src="assets/images/shape/shape-1.png" alt="Decorative Element"></div>
            <div class="sub-title">Client Testimonials</div>
            <h2 class="sec-title">What Our Clients Say</h2>
        </div>
        <div class="testimonial-carousel owl-carousel owl-theme">
            <div class="testimonial-block">
                <div class="inner-box">
                    <div class="text">"LR Brand India has been our uniform supplier for over 5 years. Their quality is exceptional and delivery is always on time. Highly recommended!"</div>
                    <div class="author-info">
                        <div class="author-thumb"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="Client"></div>
                        <h6>Rajesh Kumar</h6>
                        <span class="designation">HR Manager, Tech Company</span>
                    </div>
                </div>
            </div>
            <div class="testimonial-block">
                <div class="inner-box">
                    <div class="text">"Excellent quality uniforms at competitive prices. The team at LR Brand India is very professional and understands our requirements perfectly."</div>
                    <div class="author-info">
                        <div class="author-thumb"><img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop" alt="Client"></div>
                        <h6>Priya Sharma</h6>
                        <span class="designation">School Principal</span>
                    </div>
                </div>
            </div>
            <div class="testimonial-block">
                <div class="inner-box">
                    <div class="text">"We've been sourcing industrial uniforms from LR Brand India for 3 years. Their durability and quality are unmatched. Great service!"</div>
                    <div class="author-info">
                        <div class="author-thumb"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" alt="Client"></div>
                        <h6>Amit Verma</h6>
                        <span class="designation">Factory Manager</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Clients Section -->
<section class="clients-section">
    <div class="auto-container">
        <div class="sec-title-box text-center">
            <div class="sub-title">Trusted by Leading Organizations</div>
            <h2 class="sec-title">Our Valued Clients</h2>
        </div>
        <div class="theme_carousel owl-theme owl-carousel" data-options='{"loop": true, "center": false, "margin": 30, "autoheight":true, "lazyload":true, "nav": true, "dots": true, "autoplay": true, "autoplayTimeout": 6000, "smartSpeed": 1000, "responsive":{ "0" :{ "items": "1" }, "480" :{ "items" : "1" }, "600" :{ "items" : "2" }, "768" :{ "items" : "3" } , "992":{ "items" : "4" }, "1200":{ "items" : "5" }}}'>
            <div class="column">
                <div class="image"><img src="https://via.placeholder.com/150x80/f3f4f6/1e40af?text=Client+Logo" alt="Client Logo"></div>
            </div>
            <div class="column">
                <div class="image"><img src="https://via.placeholder.com/150x80/f3f4f6/1e40af?text=Client+Logo" alt="Client Logo"></div>
            </div>
            <div class="column">
                <div class="image"><img src="https://via.placeholder.com/150x80/f3f4f6/1e40af?text=Client+Logo" alt="Client Logo"></div>
            </div>
            <div class="column">
                <div class="image"><img src="https://via.placeholder.com/150x80/f3f4f6/1e40af?text=Client+Logo" alt="Client Logo"></div>
            </div>
            <div class="column">
                <div class="image"><img src="https://via.placeholder.com/150x80/f3f4f6/1e40af?text=Client+Logo" alt="Client Logo"></div>
            </div>
        </div>
    </div>
</section>

<!-- Old Section - Classic Heritage -->
<section class="old-section">
    <div class="auto-container">
        <div class="old-content">
            <div class="old-header">
                <h2 class="old-title">Our Timeless Heritage</h2>
                <div class="old-subtitle">Since 1998 - A Legacy of Excellence</div>
                <div class="old-divider"></div>
            </div>
            
            <div class="old-grid">
                <div class="old-item">
                    <div class="old-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <h3 class="old-item-title">Traditional Craftsmanship</h3>
                    <p class="old-item-desc">Hand-stitched perfection with attention to every detail, maintaining the highest standards of uniform manufacturing.</p>
                </div>
                
                <div class="old-item">
                    <div class="old-icon">
                        <i class="fas fa-history"></i>
                    </div>
                    <h3 class="old-item-title">25+ Years of Trust</h3>
                    <p class="old-item-desc">Building lasting relationships with organizations across India through consistent quality and reliable service.</p>
                </div>
                
                <div class="old-item">
                    <div class="old-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3 class="old-item-title">Family Legacy</h3>
                    <p class="old-item-desc">Three generations of expertise in uniform manufacturing, combining traditional values with modern innovation.</p>
                </div>
            </div>
            
            <div class="old-footer">
                <div class="old-quote">
                    "Quality is not an act, it is a habit." - Aristotle
                </div>
                <div class="old-signature">
                    <span class="old-signature-text">The LR Brand Family</span>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
