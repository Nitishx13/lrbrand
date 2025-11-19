<?php
// Test script to verify PHP structure
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "<h1>PHP Structure Test Results</h1>";

$php_files = [
    'index.php',
    'about.php', 
    'contact.php',
    'team.php',
    'gallery.php',
    'corporate.php',
    'industrial.php',
    'school.php',
    'hospital.php'
];

echo "<h2>Checking PHP Files Structure:</h2>";

foreach ($php_files as $file) {
    echo "<h3>Checking $file:</h3>";
    
    if (file_exists($file)) {
        echo "✓ File exists<br>";
        
        $content = file_get_contents($file);
        
        // Check for PHP opening tag
        if (strpos($content, '<?php') === 0) {
            echo "✓ Has proper PHP opening tag<br>";
        } else {
            echo "✗ Missing or misplaced PHP opening tag<br>";
        }
        
        // Check for page variables
        if (strpos($content, '$page_title') !== false) {
            echo "✓ Has page_title variable<br>";
        } else {
            echo "✗ Missing page_title variable<br>";
        }
        
        if (strpos($content, '$page_description') !== false) {
            echo "✓ Has page_description variable<br>";
        } else {
            echo "✗ Missing page_description variable<br>";
        }
        
        if (strpos($content, '$current_page') !== false) {
            echo "✓ Has current_page variable<br>";
        } else {
            echo "✗ Missing current_page variable<br>";
        }
        
        // Check for includes
        if (strpos($content, "include 'includes/header.php'") !== false) {
            echo "✓ Has header include<br>";
        } else {
            echo "✗ Missing header include<br>";
        }
        
        if (strpos($content, "include 'includes/footer.php'") !== false) {
            echo "✓ Has footer include<br>";
        } else {
            echo "✗ Missing footer include<br>";
        }
        
    } else {
        echo "✗ File does not exist<br>";
    }
    
    echo "<hr>";
}

// Check include files
echo "<h2>Checking Include Files:</h2>";

$include_files = [
    'includes/header.php',
    'includes/footer.php'
];

foreach ($include_files as $file) {
    echo "<h3>Checking $file:</h3>";
    
    if (file_exists($file)) {
        echo "✓ File exists<br>";
        
        $content = file_get_contents($file);
        
        if (strpos($content, '<?php') !== false) {
            echo "✓ Has PHP content<br>";
        } else {
            echo "✗ Missing PHP content<br>";
        }
        
    } else {
        echo "✗ File does not exist<br>";
    }
    
    echo "<hr>";
}

echo "<h2>Test Complete!</h2>";
?>
