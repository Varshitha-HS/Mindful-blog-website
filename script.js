// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email-input').value;
            
            // Normally you would send this to a server
            alert(`Thank you for subscribing with: ${email}`);
            
            // Reset the form
            newsletterForm.reset();
        });
    }
    
    // Search functionality
    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = document.getElementById('search-input').value.trim();
            if (searchTerm) {
                // In a real app, this would perform a search
                alert(`You searched for: ${searchTerm}`);
            }
        });
    }
    
    // Also trigger search on Enter key
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    // In a real app, this would perform a search
                    alert(`You searched for: ${searchTerm}`);
                }
            }
        });
    }
    
    // Navigation active state management
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Add click event listeners to Read More links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the article title
            const articleTitle = this.closest('.post-content').querySelector('h3').textContent;
            
            // In a real app, this would navigate to the blog post
            alert(`You clicked to read: ${articleTitle}`);
        });
    });
    
    // Handle category links
    const categoryLinks = document.querySelectorAll('.footer-section.links ul li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the category name
            const categoryName = this.textContent;
            
            // In a real app, this would filter by category
            alert(`You selected category: ${categoryName}`);
        });
    });
    
    // Add a simple animation for post cards
    const postCards = document.querySelectorAll('.post-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    postCards.forEach(card => {
        // Set initial styles for animation
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Observe the card
        observer.observe(card);
    });
});