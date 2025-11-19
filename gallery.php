<?php
// Set page variables
$page_title = 'Gallery - LR Brand India | Uniform Portfolio & Showcase';
$page_description = 'Explore our uniform gallery showcasing high-quality corporate, industrial, school, hospital, and custom uniforms. View our portfolio of uniform designs and manufacturing excellence.';
$page_keywords = 'uniform gallery, uniform portfolio, uniform designs Delhi, corporate uniform gallery, school uniform gallery, industrial uniform gallery';
$current_page = 'gallery';
?>

<?php include 'includes/header.php'; ?>

<!-- Page Title -->
<section class="page-title" style="background-image: url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=400&fit=crop);">
    <div class="auto-container">
        <div class="content-box">
            <h1>Gallery</h1>
            <ul class="bread-crumb clearfix">
                <li><a href="index.php">Home</a></li>
                <li>Gallery</li>
            </ul>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="gallery-section">
    <div class="auto-container">
        <div class="sec-title centered">
            <span class="title">Our Work</span>
            <h2>Uniform Portfolio Showcase</h2>
            <div class="text">Browse through our extensive collection of uniform designs and completed projects across various industries.</div>
        </div>
        
        <!-- Filter Buttons -->
        <div class="filter-buttons text-center">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="corporate">Corporate</button>
            <button class="filter-btn" data-filter="industrial">Industrial</button>
            <button class="filter-btn" data-filter="school">School</button>
            <button class="filter-btn" data-filter="hospital">Hospital</button>
            <button class="filter-btn" data-filter="hotel">Hotel</button>
            <button class="filter-btn" data-filter="security">Security</button>
        </div>
        
        <!-- Gallery Grid -->
        <div class="gallery-grid">
            <!-- Corporate Uniforms -->
            <div class="gallery-item corporate" data-category="corporate">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop" alt="Corporate Uniform Design">
                    <div class="overlay">
                        <div class="content">
                            <h4>Professional Corporate Attire</h4>
                            <p>Complete office wear solution</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gallery-item corporate" data-category="corporate">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop" alt="Corporate Blazer">
                    <div class="overlay">
                        <div class="content">
                            <h4>Executive Blazers</h4>
                            <p>Premium formal wear</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Industrial Uniforms -->
            <div class="gallery-item industrial" data-category="industrial">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop" alt="Industrial Workwear">
                    <div class="overlay">
                        <div class="content">
                            <h4>Industrial Workwear</h4>
                            <p>Durable factory uniforms</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gallery-item industrial" data-category="industrial">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop" alt="Safety Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Safety Uniforms</h4>
                            <p>High-visibility protective wear</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- School Uniforms -->
            <div class="gallery-item school" data-category="school">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" alt="School Uniform Design">
                    <div class="overlay">
                        <div class="content">
                            <h4>School Uniforms</h4>
                            <p>Complete student attire</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gallery-item school" data-category="school">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" alt="Sports Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Sports Uniforms</h4>
                            <p>Athletic wear for schools</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Hospital Uniforms -->
            <div class="gallery-item hospital" data-category="hospital">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" alt="Medical Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Medical Uniforms</h4>
                            <p>Healthcare professional wear</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gallery-item hospital" data-category="hospital">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" alt="Nurse Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Nurse Uniforms</h4>
                            <p>Comfortable medical wear</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Hotel Uniforms -->
            <div class="gallery-item hotel" data-category="hotel">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1563399023143-8a9bd8b7e0e8?w=600&h=400&fit=crop" alt="Hotel Staff Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Hotel Staff Uniforms</h4>
                            <p>Hospitality industry wear</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gallery-item hotel" data-category="hotel">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Restaurant Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Restaurant Uniforms</h4>
                            <p>Food service attire</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Security Uniforms -->
            <div class="gallery-item security" data-category="security">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1581092795851-08551e9430b8?w=600&h=400&fit=crop" alt="Security Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Security Uniforms</h4>
                            <p>Professional security wear</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="gallery-item security" data-category="security">
                <div class="image-box">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" alt="Security Guard Uniforms">
                    <div class="overlay">
                        <div class="content">
                            <h4>Guard Uniforms</h4>
                            <p>Security personnel attire</p>
                            <a href="#" class="view-btn"><i class="fas fa-search-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Manufacturing Process Section -->
<section class="process-section">
    <div class="auto-container">
        <div class="sec-title centered">
            <span class="title">Our Process</span>
            <h2>From Design to Delivery</h2>
            <div class="text">See how we transform your requirements into perfect uniform solutions.</div>
        </div>
        
        <div class="process-grid">
            <div class="process-item">
                <div class="icon">
                    <i class="fas fa-pencil-ruler"></i>
                </div>
                <h4>Design Consultation</h4>
                <p>Understanding your needs and creating custom designs</p>
            </div>
            
            <div class="process-item">
                <div class="icon">
                    <i class="fas fa-cut"></i>
                </div>
                <h4>Pattern Making</h4>
                <p>Precision pattern creation for perfect fit</p>
            </div>
            
            <div class="process-item">
                <div class="icon">
                    <i class="fas fa-tshirt"></i>
                </div>
                <h4>Manufacturing</h4>
                <p>Quality production with attention to detail</p>
            </div>
            
            <div class="process-item">
                <div class="icon">
                    <i class="fas fa-search"></i>
                </div>
                <h4>Quality Check</h4>
                <p>Rigorous inspection for premium quality</p>
            </div>
            
            <div class="process-item">
                <div class="icon">
                    <i class="fas fa-truck"></i>
                </div>
                <h4>Delivery</h4>
                <p>Timely delivery to your location</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section" style="background-image: url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=600&fit=crop);">
    <div class="auto-container">
        <div class="content-box">
            <h2>Want to See More?</h2>
            <p>Contact us to schedule a visit to our manufacturing facility and see our work in person.</p>
            <div class="btn-box">
                <a href="contact.php" class="theme-btn btn-style-one">Schedule Visit</a>
                <a href="tel:+918076977101" class="theme-btn btn-style-two">Call Now</a>
            </div>
        </div>
    </div>
</section>

<style>
.gallery-section {
    padding: 80px 0;
}

.filter-buttons {
    margin-bottom: 50px;
}

.filter-btn {
    background: transparent;
    border: 2px solid #ff6b35;
    color: #ff6b35;
    padding: 10px 25px;
    margin: 5px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
    background: #ff6b35;
    color: white;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.gallery-item:hover {
    transform: translateY(-5px);
}

.gallery-item.hidden {
    display: none;
}

.image-box {
    position: relative;
    overflow: hidden;
    height: 250px;
}

.image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover .image-box img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 107, 53, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gallery-item:hover .overlay {
    opacity: 1;
}

.overlay .content {
    text-align: center;
    color: white;
}

.overlay .content h4 {
    font-size: 20px;
    margin-bottom: 10px;
}

.overlay .content p {
    margin-bottom: 20px;
    opacity: 0.9;
}

.view-btn {
    display: inline-block;
    width: 50px;
    height: 50px;
    background: white;
    color: #ff6b35;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    transition: transform 0.3s ease;
}

.view-btn:hover {
    transform: scale(1.1);
}

.process-section {
    padding: 80px 0;
    background: #f8f9fa;
}

.process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    margin-top: 50px;
}

.process-item {
    text-align: center;
    background: white;
    padding: 40px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.process-item:hover {
    transform: translateY(-5px);
}

.process-item .icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 30px;
}

.process-item h4 {
    color: #333;
    margin-bottom: 10px;
}

.process-item p {
    color: #666;
    font-size: 14px;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});
</script>

<?php include 'includes/footer.php'; ?>
