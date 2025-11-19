<?php
// Set page variables
$page_title = 'Contact Us - LR Brand India | Get in Touch for Uniform Requirements';
$page_description = 'Contact LR Brand India for all your uniform needs. Call us at +91 80769 77101 or email lrbrandindia@gmail.com. Visit our manufacturing unit in Delhi NCR for a consultation.';
$page_keywords = 'contact LR Brand India, uniform manufacturer Delhi NCR, contact uniform supplier, uniform consultation Delhi, uniform manufacturing contact';
$current_page = 'contact';
?>

<?php include 'includes/header.php'; ?>

<!-- Page Title -->
<section class="page-title" style="background-image: url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=400&fit=crop);">
    <div class="auto-container">
        <div class="content-box">
            <h1>Contact Us</h1>
            <ul class="bread-crumb clearfix">
                <li><a href="index.php">Home</a></li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
</section>

<!-- Contact Info Section -->
<section class="contact-info-section">
    <div class="auto-container">
        <div class="sec-title centered">
            <span class="title">Get in Touch</span>
            <h2>Reach Out to Us for Your Uniform Needs</h2>
            <div class="text">We're here to help you with all your uniform requirements. Contact us through any of the following methods.</div>
        </div>
        
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-box">
                    <div class="icon">
                        <i class="fas fa-phone-alt"></i>
                    </div>
                    <h3>Phone</h3>
                    <p><a href="tel:+918076977101">+91 80769 77101</a></p>
                    <p>Available Mon-Sat 9:00 AM - 7:00 PM</p>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-box">
                    <div class="icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3>Email</h3>
                    <p><a href="mailto:lrbrandindia@gmail.com">lrbrandindia@gmail.com</a></p>
                    <p>We respond within 24 hours</p>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-box">
                    <div class="icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Address</h3>
                    <p>Delhi NCR, India</p>
                    <p>Visit our manufacturing unit</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Form Section -->
<section class="contact-form-section">
    <div class="auto-container">
        <div class="row">
            <div class="col-lg-8">
                <div class="contact-form">
                    <div class="sec-title">
                        <span class="title">Send us a Message</span>
                        <h2>Get a Free Quote</h2>
                    </div>
                    
                    <div class="success-message" id="successMessage">
                        Thank you for your message! We'll get back to you soon.
                    </div>
                    
                    <form id="contactForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="name">Your Name *</label>
                                    <input type="text" class="form-control" id="name" name="name" required>
                                    <div class="error-message" id="nameError">Please enter your name</div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="phone">Phone Number *</label>
                                    <input type="tel" class="form-control" id="phone" name="phone" required>
                                    <div class="error-message" id="phoneError">Please enter your phone number</div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="email">Email Address *</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                    <div class="error-message" id="emailError">Please enter a valid email</div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="company">Company Name</label>
                                    <input type="text" class="form-control" id="company" name="company">
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="uniform-type">Uniform Type *</label>
                                    <select class="form-control" id="uniform-type" name="uniform-type" required>
                                        <option value="">Select Uniform Type</option>
                                        <option value="corporate">Corporate Uniforms</option>
                                        <option value="industrial">Industrial Uniforms</option>
                                        <option value="school">School Uniforms</option>
                                        <option value="hospital">Hospital Uniforms</option>
                                        <option value="hotel">Hotel Uniforms</option>
                                        <option value="security">Security Uniforms</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div class="error-message" id="uniformTypeError">Please select uniform type</div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="quantity">Approximate Quantity</label>
                                    <select class="form-control" id="quantity" name="quantity">
                                        <option value="">Select Quantity</option>
                                        <option value="1-50">1-50 pieces</option>
                                        <option value="51-100">51-100 pieces</option>
                                        <option value="101-500">101-500 pieces</option>
                                        <option value="501-1000">501-1000 pieces</option>
                                        <option value="1000+">1000+ pieces</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="message">Message *</label>
                                    <textarea class="form-control" id="message" name="message" rows="5" required placeholder="Tell us about your uniform requirements..."></textarea>
                                    <div class="error-message" id="messageError">Please enter your message</div>
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <div class="form-group">
                                    <button type="submit" class="theme-btn btn-style-one">
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="col-lg-4">
                <div class="contact-sidebar">
                    <div class="sidebar-widget">
                        <h3>Business Hours</h3>
                        <ul class="business-hours">
                            <li><span>Monday - Friday:</span> 9:00 AM - 7:00 PM</li>
                            <li><span>Saturday:</span> 9:00 AM - 6:00 PM</li>
                            <li><span>Sunday:</span> Closed</li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-widget">
                        <h3>Why Contact Us?</h3>
                        <ul class="features-list">
                            <li><i class="fas fa-check"></i> Free consultation and quote</li>
                            <li><i class="fas fa-check"></i> Custom design solutions</li>
                            <li><i class="fas fa-check"></i> Best price guarantee</li>
                            <li><i class="fas fa-check"></i> Quick response time</li>
                            <li><i class="fas fa-check"></i> Pan India delivery</li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-widget">
                        <h3>Follow Us</h3>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Map Section -->
<section class="map-section">
    <div class="auto-container">
        <div class="map-placeholder">
            <div class="map-content">
                <i class="fas fa-map-marked-alt"></i>
                <h3>Visit Our Manufacturing Unit</h3>
                <p>Delhi NCR, India</p>
                <p>Call us to schedule a visit and see our manufacturing facility</p>
                <a href="tel:+918076977101" class="theme-btn btn-style-two">Schedule Visit</a>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="faq-section">
    <div class="auto-container">
        <div class="sec-title centered">
            <span class="title">Frequently Asked Questions</span>
            <h2>Common Questions About Our Uniforms</h2>
        </div>
        
        <div class="row">
            <div class="col-lg-6">
                <div class="faq-item">
                    <h4>What is the minimum order quantity?</h4>
                    <p>We accept orders starting from 50 pieces. For smaller quantities, please contact us for special arrangements.</p>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="faq-item">
                    <h4>How long does delivery take?</h4>
                    <p>Standard orders are delivered within 15-20 working days. Express delivery options are available for urgent requirements.</p>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="faq-item">
                    <h4>Do you provide custom designs?</h4>
                    <p>Yes, we specialize in custom uniform designs tailored to your brand identity and specific requirements.</p>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="faq-item">
                    <h4>What payment methods do you accept?</h4>
                    <p>We accept bank transfers, checks, and online payments. Payment terms can be discussed based on order size.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
.contact-form-section {
    padding: 80px 0;
}

.contact-info-box {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    text-align: center;
    height: 100%;
    transition: transform 0.3s ease;
}

.contact-info-box:hover {
    transform: translateY(-5px);
}

.contact-info-box .icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 30px;
}

.contact-form {
    background: white;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.contact-form .form-group {
    margin-bottom: 25px;
}

.contact-form .form-control {
    border: 2px solid #e9ecef;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.contact-form .form-control:focus {
    border-color: #ff6b35;
    box-shadow: 0 0 0 0.2rem rgba(255, 107, 53, 0.25);
}

.contact-form textarea.form-control {
    min-height: 150px;
    resize: vertical;
}

.map-section {
    height: 400px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
}

.map-placeholder {
    text-align: center;
    padding: 40px;
}

.map-placeholder i {
    font-size: 60px;
    color: #ff6b35;
    margin-bottom: 20px;
}

.error-message {
    color: #dc3545;
    font-size: 14px;
    margin-top: 5px;
    display: none;
}

.success-message {
    background: #d4edda;
    color: #155724;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    display: none;
}

.contact-sidebar .sidebar-widget {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

.business-hours li {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
}

.business-hours li:last-child {
    border-bottom: none;
}

.features-list li {
    padding: 10px 0;
    color: #666;
}

.features-list i {
    color: #ff6b35;
    margin-right: 10px;
}

.social-links a {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #ff6b35;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    transition: background 0.3s ease;
}

.social-links a:hover {
    background: #f7931e;
}

.faq-section {
    padding: 80px 0;
    background: #f8f9fa;
}

.faq-item {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.faq-item h4 {
    color: #ff6b35;
    margin-bottom: 15px;
}

.faq-item p {
    color: #666;
    margin: 0;
}
</style>

<script>
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    
    // Validate form
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    if (phone === '') {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Uniform type validation
    const uniformType = document.getElementById('uniform-type').value;
    if (uniformType === '') {
        document.getElementById('uniformTypeError').style.display = 'block';
        isValid = false;
    }
    
    // Message validation
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
});
</script>

<?php include 'includes/footer.php'; ?>
