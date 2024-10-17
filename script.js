
    // Get the navbar
    const navbar = document.querySelector('nav');

    // Listen for scroll events
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('fixed'); // Add fixed class when scrolled down
        } else {
            navbar.classList.remove('fixed'); // Remove fixed class when at the top
        }
    });
 // Function to navigate to the certificate page
function goToCertificatePage() {
    window.location.href = 'certificate-page.html'; // Redirect to certificate page
}