<?php
// Define page title and meta information for dynamic use
$page_title = isset($page_title) ? $page_title : 'LR Brand India - Leading Uniform Manufacturer in Delhi NCR | Corporate, Industrial & School Uniforms';
$page_description = isset($page_description) ? $page_description : 'LR Brand India is Delhi NCR\'s premier uniform manufacturer with 25+ years of experience. We provide high-quality corporate, industrial, school, hospital, hotel, and security uniforms. Bulk orders, custom designs, and on-time delivery guaranteed.';
$page_keywords = isset($page_keywords) ? $page_keywords : 'uniform manufacturer Delhi NCR, corporate uniforms Delhi, school uniforms Delhi, industrial uniforms, hospital uniforms, hotel uniforms, security uniforms, bulk uniform orders, custom uniform design, uniform supplier India';
$current_page = isset($current_page) ? $current_page : 'home';
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title><?php echo htmlspecialchars($page_title); ?></title>
<meta name="description" content="<?php echo htmlspecialchars($page_description); ?>">
<meta name="keywords" content="<?php echo htmlspecialchars($page_keywords); ?>">
<meta name="author" content="LR Brand India">
<meta name="robots" content="index, follow">
<meta name="language" content="English">
<meta name="revisit-after" content="7 days">
<meta name="distribution" content="global">
<meta name="rating" content="general">

<!-- Open Graph Meta Tags for Social Media -->
<meta property="og:title" content="<?php echo htmlspecialchars($page_title); ?>">
<meta property="og:description" content="<?php echo htmlspecialchars($page_description); ?>">
<meta property="og:type" content="website">
<meta property="og:url" content="https://lrbrandindia.com">
<meta property="og:image" content="assets/images/logo-dark.png">
<meta property="og:site_name" content="LR Brand India">
<meta property="og:locale" content="en_IN">

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php echo htmlspecialchars($page_title); ?>">
<meta name="twitter:description" content="<?php echo htmlspecialchars($page_description); ?>">
<meta name="twitter:image" content="assets/images/logo-dark.png">

<!-- Business Contact Information -->
<meta name="contact" content="lrbrandindia@gmail.com">
<meta name="phone" content="+91-80769-77101">
<meta name="address" content="Delhi NCR, India">

<!-- Stylesheets -->
<link href="assets/css/bootstrap.css" rel="stylesheet">
<link href="assets/css/style.css" rel="stylesheet">
<!-- Responsive File -->
<link href="assets/css/responsive.css" rel="stylesheet">
<!-- Color File -->
<link href="assets/css/color.css" rel="stylesheet">
<!-- Desi Indian Design Elements -->
<link href="assets/css/desi-indian.css" rel="stylesheet">

<!-- Desi Indian Color Scheme CSS -->
<style>
:root {
    --primary-color: #FF6B35;
    --secondary-color: #138808;
    --accent-color: #FF9933;
    --dark-color: #1A1A1A;
    --light-color: #F8F9FA;
    --text-color: #333333;
    --white-color: #FFFFFF;
    --gradient-Indian: linear-gradient(135deg, #FF6B35 0%, #FF9933 50%, #138808 100%);
    --gradient-Saffron: linear-gradient(135deg, #FF6B35 0%, #FF9933 100%);
    --gradient-Green: linear-gradient(135deg, #138808 0%, #2E7D32 100%);
    
    /* Modern Container System */
    --container-max-width: 1200px;
    --container-padding: 2rem;
    --section-padding: 4rem 0;
    --border-radius: 12px;
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Modern Container System */
.container {
    width: 100%;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--container-padding);
}

.container-fluid {
    width: 100%;
    padding: 0 var(--container-padding);
}

.container-sm {
    max-width: 640px;
}

.container-md {
    max-width: 768px;
}

.container-lg {
    max-width: 1024px;
}

.container-xl {
    max-width: 1280px;
}

/* Modern Section System */
.section {
    padding: var(--section-padding);
    position: relative;
    overflow: hidden;
}

.section-sm {
    padding: 2rem 0;
}

.section-lg {
    padding: 6rem 0;
}

.section-py {
    padding: 4rem 0;
}

.section-pt {
    padding-top: 4rem;
}

.section-pb {
    padding-bottom: 4rem;
}

/* Modern Grid System */
.grid {
    display: grid;
    gap: 2rem;
}

.grid-2 {
    grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
    grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
    grid-template-columns: repeat(4, 1fr);
}

.grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Modern Card System */
.card {
    background: var(--white-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-md);
    padding: 2rem;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.card-header {
    margin-bottom: 1.5rem;
}

.card-body {
    margin-bottom: 1.5rem;
}

.card-footer {
    margin-top: auto;
}

/* Modern Button System */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
    min-height: 48px;
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--primary-color);
    color: var(--white-color);
}

.btn-primary:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: var(--secondary-color);
    color: var(--white-color);
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}

.btn-outline:hover {
    background: var(--primary-color);
    color: var(--white-color);
}

.btn-lg {
    padding: 1rem 2rem;
    font-size: 1.125rem;
    min-height: 56px;
}

.btn-sm {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    min-height: 40px;
}

/* Header Top Bar with Indian Colors */
.header-top {
    background: var(--gradient-Indian);
    border-bottom: 3px solid var(--primary-color);
}

.header-top .contact-info li {
    color: var(--white-color);
    border-right: 1px solid rgba(255,255,255,0.3);
}

.header-top .contact-info li:last-child {
    border-right: none;
}

.header-top .contact-info a {
    color: var(--white-color);
}

.header-top .social-icon li a {
    background: rgba(255,255,255,0.2);
    color: var(--white-color);
    border: 1px solid rgba(255,255,255,0.3);
}

.header-top .social-icon li a:hover {
    background: var(--white-color);
    color: var(--primary-color);
    transform: translateY(-2px);
}

/* Main Header Styling */
.main-header {
    background: var(--white-color);
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    border-bottom: 3px solid var(--primary-color);
}

/* Navigation Styling */
.navigation > li > a {
    color: var(--text-color);
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    position: relative;
}

.navigation > li > a:hover,
.navigation > li.current > a {
    color: var(--primary-color);
}

.navigation > li > a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: var(--gradient-Indian);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.navigation > li > a:hover::after,
.navigation > li.current > a::after {
    width: 80%;
}

/* Dropdown Menu Styling */
.navigation .dropdown > ul {
    background: var(--white-color);
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.navigation .dropdown > ul li a {
    color: var(--text-color);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.navigation .dropdown > ul li a:hover {
    background: var(--gradient-Saffron);
    color: var(--white-color);
    padding-left: 25px;
}

/* Logo Styling */
.logo img {
    height: 60px;
    transition: all 0.3s ease;
}

.logo img:hover {
    transform: scale(1.05);
}

/* Contact Info Button */
.navbar-right .contact-info {
    background: var(--gradient-Saffron);
    padding: 15px 20px;
    border-radius: 25px;
    color: var(--white-color);
    margin-right: 15px;
    box-shadow: 0 5px 15px rgba(255,107,53,0.3);
}

.navbar-right .contact-info .icon {
    color: var(--white-color);
}

.navbar-right .contact-info h4 a {
    color: var(--white-color);
    font-weight: 700;
}

/* Search Button */
.search-toggler {
    background: var(--secondary-color);
    color: var(--white-color);
    border: 2px solid var(--secondary-color);
    padding: 12px 20px;
    border-radius: 25px;
    margin-right: 15px;
    transition: all 0.3s ease;
}

.search-toggler:hover {
    background: var(--white-color);
    color: var(--secondary-color);
    transform: translateY(-2px);
}

/* Get Quote Button */
.link-btn .theme-btn {
    background: var(--gradient-Indian);
    color: var(--white-color);
    border: none;
    padding: 12px 25px;
    border-radius: 25px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 5px 15px rgba(255,107,53,0.3);
    transition: all 0.3s ease;
}

.link-btn .theme-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255,107,53,0.4);
}

/* Sticky Header */
.sticky-header {
    background: var(--white-color);
    border-bottom: 3px solid var(--primary-color);
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

/* Mobile Navigation */
.mobile-nav-toggler img {
    filter: invert(1);
}

/* Indian Pattern Background */
.main-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,30 50,50 T100,50" stroke="%23FF6B35" stroke-width="0.5" fill="none" opacity="0.1"/></svg>');
    opacity: 0.05;
    pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    .header-top {
        padding: 10px 0;
    }
    
    .navigation > li > a {
        font-size: 14px;
        padding: 10px 15px;
    }
    
    .navbar-right .contact-info {
        padding: 10px 15px;
        margin-right: 10px;
    }
    
    .link-btn .theme-btn {
        padding: 10px 20px;
        font-size: 14px;
    }
}

/* Modern Services Section Styles */
.services-section {
    background: linear-gradient(135deg, var(--light-color) 0%, var(--white-color) 100%);
}

.section-header {
    text-align: center;
}

.services-grid {
    margin-top: 4rem;
}

.service-card {
    text-align: center;
    transition: var(--transition);
    border: 1px solid rgba(0,0,0,0.05);
    position: relative;
    overflow: hidden;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-Indian);
    transform: scaleX(0);
    transition: var(--transition);
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
}

.service-icon {
    margin-bottom: 2rem;
    position: relative;
}

.icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.service-card:hover .icon-wrapper {
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
}

.icon-wrapper::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: inherit;
    filter: blur(10px);
    opacity: 0.3;
    z-index: -1;
}

.service-title {
    color: var(--dark-color);
    margin-bottom: 1rem;
    font-weight: 700;
}

.service-description {
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.service-features {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
    text-align: left;
}

.service-features li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
}

.service-features li i {
    flex-shrink: 0;
}

.services-cta {
    background: var(--gradient-Indian);
    padding: 3rem;
    border-radius: var(--border-radius);
    color: var(--white-color);
    margin-top: 4rem;
}

.services-cta p {
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.services-cta .btn {
    background: var(--white-color);
    color: var(--primary-color);
    border: none;
}

.services-cta .btn:hover {
    background: var(--accent-color);
    color: var(--white-color);
}

/* Old Section - Classic Heritage Styles */
.old-section {
    background: linear-gradient(135deg, #2c1810 0%, #4a2c1a 50%, #6b3e20 100%);
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.old-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="100" fill="rgba(255,255,255,0.03)♦</text></svg>');
    background-size: 50px 50px;
}

.old-content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.old-header {
    margin-bottom: 60px;
}

.old-title {
    font-family: 'Crimson Text', serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: #f4e4d4;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    margin-bottom: 20px;
    letter-spacing: 2px;
}

.old-subtitle {
    font-family: 'Crimson Text', serif;
    font-size: 1.4rem;
    color: #d4c4b0;
    font-style: italic;
    margin-bottom: 30px;
}

.old-divider {
    width: 200px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #d4a574, transparent);
    margin: 0 auto;
    position: relative;
}

.old-divider::before,
.old-divider::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: #d4a574;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}

.old-divider::before {
    left: 0;
}

.old-divider::after {
    right: 0;
}

.old-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 60px;
}

.old-item {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid #d4a574;
    padding: 40px 30px;
    text-align: center;
    position: relative;
    transition: all 0.3s ease;
}

.old-item::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #d4a574, #f4e4d4, #d4a574);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.old-item:hover::before {
    opacity: 1;
}

.old-item:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
}

.old-icon {
    width: 80px;
    height: 80px;
    background: #d4a574;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 25px;
    font-size: 2rem;
    color: #2c1810;
    box-shadow: 0 4px 15px rgba(212, 165, 116, 0.3);
}

.old-item-title {
    font-family: 'Crimson Text', serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #f4e4d4;
    margin-bottom: 15px;
}

.old-item-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    color: #d4c4b0;
    line-height: 1.6;
}

.old-footer {
    text-align: center;
    padding-top: 40px;
    border-top: 1px solid rgba(212, 165, 116, 0.3);
}

.old-quote {
    font-family: 'Crimson Text', serif;
    font-size: 1.6rem;
    font-style: italic;
    color: #f4e4d4;
    margin-bottom: 20px;
    position: relative;
}

.old-quote::before,
.old-quote::after {
    content: '"';
    font-size: 3rem;
    color: #d4a574;
    position: absolute;
}

.old-quote::before {
    top: -20px;
    left: -30px;
}

.old-quote::after {
    bottom: -40px;
    right: -30px;
}

.old-signature {
    margin-top: 30px;
}

.old-signature-text {
    font-family: 'Crimson Text', serif;
    font-size: 1.2rem;
    color: #d4a574;
    font-style: italic;
    position: relative;
    display: inline-block;
}

.old-signature-text::before,
.old-signature-text::after {
    content: '';
    position: absolute;
    height: 1px;
    background: #d4a574;
    top: 50%;
    width: 50px;
}

.old-signature-text::before {
    right: 100%;
    margin-right: 15px;
}

.old-signature-text::after {
    left: 100%;
    margin-left: 15px;
}

/* Responsive Design for Old Section */
@media (max-width: 768px) {
    .old-section {
        padding: 60px 0;
    }
    
    .old-title {
        font-size: 2.5rem;
    }
    
    .old-subtitle {
        font-size: 1.2rem;
    }
    
    .old-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .old-item {
        padding: 30px 20px;
    }
    
    .old-quote {
        font-size: 1.4rem;
    }
    
    .old-quote::before {
        left: -20px;
    }
    
    .old-quote::after {
        right: -20px;
    }
}

@media (max-width: 576px) {
    .old-title {
        font-size: 2rem;
    }
    
    .old-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
    }
    
    .old-item-title {
        font-size: 1.5rem;
    }
    
    .old-quote {
        font-size: 1.2rem;
    }
}

/* Banner Section Styles */
.banner-section {
    min-height: 40vh;
    max-height: 400px;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.banner-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1920&h=800&fit=crop') center/cover;
    opacity: 0.2;
    z-index: 1;
}

.banner-content {
    text-align: center;
    z-index: 2;
    position: relative;
    padding: 0 20px;
}

.banner-headline {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    letter-spacing: 2px;
    text-transform: uppercase;
}

.banner-subtitle {
    font-size: 1.4rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 35px;
    font-weight: 300;
    letter-spacing: 1px;
}

.banner-link {
    text-align: center;
    margin-top: 25px;
}

.banner-link a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 400;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    transition: all 0.3s ease;
}

.banner-link a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.banner-link a:hover {
    color: rgba(255,255,255,0.8);
}

.banner-link a:hover::after {
    width: 100%;
}

/* Responsive Design for Banner Section */
@media (max-width: 768px) {
    .banner-section {
        min-height: 50vh;
        max-height: 500px;
    }
    
    .banner-section .inner h1 {
        font-size: 2rem;
    }
    
    .banner-section .inner h4 {
        font-size: 1rem;
    }
    
    .banner-slider-nav {
        bottom: 20px;
        right: 20px;
    }
    
    .banner-slider-control {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 576px) {
    .banner-section {
        min-height: 40vh;
        max-height: 400px;
    }
    
    .banner-section .inner h1 {
        font-size: 1.5rem;
    }
    
    .banner-section .content-box {
        padding: 0 15px;
    }
    
    .banner-section .link-box .theme-btn {
        padding: 10px 25px;
        font-size: 0.9rem;
    }
}

/* Responsive Design for Hero Section */
@media (max-width: 768px) {
    .hero-section {
        min-height: 100vh;
        padding: 2rem 0;
    }
    
    
    .hero-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        padding: 4rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
    }
    
    .hero-slide.active {
        opacity: 1;
        visibility: visible;
        position: relative;
    }
    
    .hero-content {
        text-align: center;
        color: white;
        padding: 4rem 0;
    }
    
    .hero-title {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .hero-subtitle {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        opacity: 0.9;
    }
    
    .hero-description {
        font-size: 1.1rem;
        margin-bottom: 2rem;
        opacity: 0.8;
    }
    
    .hero-nav-btn {
        width: 50px;
        height: 50px;
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        color: var(--primary-color);
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }
    
    
    
    .image-grid {
        grid-template-columns: 1fr;
    }
    
    .experience-badge {
        position: static;
        margin-top: 2rem;
        transform: none;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .icon-wrapper {
        width: 60px;
        height: 60px;
    }
    
    .services-cta {
        padding: 2rem;
    }
}

@media (max-width: 576px) {
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .badge-number {
        font-size: 2rem;
    }
    
    .features-grid {
        gap: 1rem;
    }
    
    .feature-item {
        padding: 1rem;
    }
    
    .feature-icon {
        width: 40px;
        height: 40px;
        font-size: 1rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .service-card {
        padding: 1.5rem;
    }
    
    .icon-wrapper {
        width: 50px;
        height: 50px;
    }
}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<!-- Flaticon Alternative - Using Font Awesome -->
<style>
.flaticon-pin:before { content: "\f3c5"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-email:before { content: "\f0e0"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-clock:before { content: "\f017"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-phone-call:before { content: "\f095"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-magnifying-glass:before { content: "\f002"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-suit:before { content: "\f553"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-measuring:before { content: "\f546"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-botton:before { content: "\f553"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-seam-ripper:before { content: "\f0ad"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-embroidery:before { content: "\f5d2"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
.flaticon-thread:before { content: "\f1e0"; font-family: "Font Awesome 6 Free"; font-weight: 900; }
</style>

<link rel="shortcut icon" href="lr-brand-logo-favicon.svg" type="image/svg+xml">
<link rel="icon" href="lr-brand-logo-favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="lr-brand-logo-favicon.svg">

<!-- Responsive -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

<!-- Structured Data (JSON-LD) for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "LR Brand India",
  "description": "Leading uniform manufacturer in Delhi NCR with 25+ years of experience. Specializing in corporate, industrial, school, hospital, hotel, and security uniforms.",
  "url": "https://lrbrandindia.com",
  "logo": "https://lrbrandindia.com/assets/images/logo-dark.png",
  "image": "https://lrbrandindia.com/assets/images/main-slider/image-1.jpg",
  "telephone": "+91-80769-77101",
  "email": "lrbrandindia@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Delhi NCR",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6448",
    "longitude": "77.2167"
  },
  "openingHours": "Mo-Sa 09:00-19:00",
  "priceRange": "$$",
  "areaServed": "India",
  "sameAs": [
    "https://www.facebook.com/lrbrandindia",
    "https://www.instagram.com/lrbrandindia",
    "https://twitter.com/lrbrandindia",
    "https://www.linkedin.com/company/lrbrandindia"
  ]
}
</script>
</head>

<body>
<div class="page-wrapper">

    <!-- Main Header -->
    <header class="main-header header-style-one">

        <!-- Header Top -->
        <div class="header-top">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="left-column">
                        <ul class="contact-info">
                            <li><i class="flaticon-pin"></i>Delhi NCR, India</li>
                            <li><a href="mailto:lrbrandindia@gmail.com"><i class="flaticon-email"></i>lrbrandindia@gmail.com</a></li>
                            <li><i class="flaticon-clock"></i>Mon - Sat 9:00 am to 7:00 pm</li>
                        </ul>
                    </div>
                    <div class="right-column">
                        <ul class="social-icon">
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Header Upper -->
        <div class="header-upper">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="left-column">
                        <!--Logo-->
                        <div class="logo-box">
                            <div class="logo"><a href="index.php"><img src="lr-brand-logo.svg" alt="LR Brand India - Uniform Manufacturer Logo"></a></div>
                        </div>
                        <!--Nav Box-->
                        <div class="nav-outer">
                            <!--Mobile Navigation Toggler-->
                            <div class="mobile-nav-toggler"><img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="Menu Icon"></div>

                            <!-- Main Menu -->
                            <nav class="main-menu navbar-expand-md navbar-light">
                                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul class="navigation clearfix">
                                        <li class="<?php echo $current_page === 'home' ? 'current' : ''; ?>"><a href="index.php">Home</a></li>
                                        <li class="<?php echo $current_page === 'about' ? 'current' : ''; ?>"><a href="about.php">About</a></li>                                       
                                        <li class="dropdown <?php echo in_array($current_page, ['corporate', 'industrial', 'school', 'hospital']) ? 'current' : ''; ?>"><a href="#">Services</a>
                                            <ul>
                                                <li><a href="corporate.php">Corporate Uniforms</a></li>
                                                <li><a href="industrial.php">Industrial Uniforms</a></li>
                                                <li><a href="school.php">School Uniforms</a></li>
                                                <li><a href="hospital.php">Hospital Uniforms</a></li>
                                            </ul>
                                        </li>
                                        <li class="<?php echo $current_page === 'team' ? 'current' : ''; ?>"><a href="team.php">Team</a></li>
                                        <li class="<?php echo $current_page === 'gallery' ? 'current' : ''; ?>"><a href="gallery.php">Gallery</a></li>
                                        <li class="<?php echo $current_page === 'contact' ? 'current' : ''; ?>"><a href="contact.php">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>                        
                    </div>
                    <div class="right-column">
                        <div class="navbar-right">
                            <div class="contact-info">
                                <div class="icon"><i class="flaticon-phone-call"></i></div>
                                <div class="content">
                                    <h5>Call Anytime</h5>
                                    <h4><a href="tel:+918076977101">+91 80769 77101</a></h4>
                                </div>
                            </div>
                            <button type="button" class="theme-btn search-toggler"><i class="flaticon-magnifying-glass"></i></button>
                            <div class="link-btn"><a href="contact.php" class="theme-btn btn-style-two"><span>Get a Quote</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End Header Upper-->

        <!-- Sticky Header  -->
        <div class="sticky-header">
            <div class="header-upper">
                <div class="auto-container">
                    <div class="inner-container">
                        <!--Logo-->
                        <div class="logo-box">
                            <div class="logo"><a href="index.php"><img src="lr-brand-logo.svg" alt="LR Brand India - Uniform Manufacturer Logo"></a></div>
                        </div>
                        <div class="right-column">
                            <!--Nav Box-->
                            <div class="nav-outer">
                                <!--Mobile Navigation Toggler-->
                                <div class="mobile-nav-toggler"><img src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="Menu Icon"></div>

                                <!-- Main Menu -->
                                <nav class="main-menu navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation clearfix">
                                            <li class="<?php echo $current_page === 'home' ? 'current' : ''; ?>"><a href="index.php">Home</a></li>
                                            <li class="<?php echo $current_page === 'about' ? 'current' : ''; ?>"><a href="about.php">About</a></li>                                       
                                            <li class="dropdown <?php echo in_array($current_page, ['corporate', 'industrial', 'school', 'hospital']) ? 'current' : ''; ?>"><a href="#">Services</a>
                                                <ul>
                                                    <li><a href="corporate.php">Corporate Uniforms</a></li>
                                                    <li><a href="industrial.php">Industrial Uniforms</a></li>
                                                    <li><a href="school.php">School Uniforms</a></li>
                                                    <li><a href="hospital.php">Hospital Uniforms</a></li>
                                                </ul>
                                            </li>
                                            <li class="<?php echo $current_page === 'team' ? 'current' : ''; ?>"><a href="team.php">Team</a></li>
                                            <li class="<?php echo $current_page === 'gallery' ? 'current' : ''; ?>"><a href="gallery.php">Gallery</a></li>
                                            <li class="<?php echo $current_page === 'contact' ? 'current' : ''; ?>"><a href="contact.php">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="navbar-right">
                                <button type="button" class="theme-btn search-toggler"><i class="flaticon-magnifying-glass"></i></button>
                                <div class="link-btn"><a href="contact.php" class="theme-btn btn-style-two"><span>Get a Quote</span></a></div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div><!-- End Sticky Menu -->

    </header>

    <!-- Mobile Menu  -->
    <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><i class="icon fal fa-times"></i></div>
        
        <nav class="menu-box">
            <div class="nav-logo"><a href="index.php"><img src="lr-brand-logo-light.svg" alt="LR Brand India Logo" title="LR Brand India"></a></div>
            <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
            <!--Social Links-->
            <div class="social-links">
                <ul class="clearfix">
                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                    <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                    <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                </ul>
            </div>
        </nav>
    </div><!-- End Mobile Menu -->
