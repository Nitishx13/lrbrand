<?php
// Vercel PHP Entry Point
$request_uri = $_SERVER['REQUEST_URI'];
$request_method = $_SERVER['REQUEST_METHOD'];

// Remove query string from URI
$path = parse_url($request_uri, PHP_URL_PATH);

// Route to appropriate PHP file
switch ($path) {
    case '/':
    case '/index':
    case '/index.php':
        include '../index.php';
        break;
    case '/about':
    case '/about.php':
        include '../about.php';
        break;
    case '/contact':
    case '/contact.php':
        include '../contact.php';
        break;
    case '/team':
    case '/team.php':
        include '../team.php';
        break;
    case '/gallery':
    case '/gallery.php':
        include '../gallery.php';
        break;
    case '/corporate':
    case '/corporate.php':
        include '../corporate.php';
        break;
    case '/industrial':
    case '/industrial.php':
        include '../industrial.php';
        break;
    case '/hospital':
    case '/hospital.php':
        include '../hospital.php';
        break;
    case '/school':
    case '/school.php':
        include '../school.php';
        break;
    default:
        // Try to serve the file directly if it exists
        $file_path = '../' . ltrim($path, '/');
        if (file_exists($file_path) && is_file($file_path)) {
            include $file_path;
        } else {
            // 404 - File not found
            http_response_code(404);
            echo '<h1>404 - Page Not Found</h1>';
        }
        break;
}
?>