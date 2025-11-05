// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Buy button functionality
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const ebookName = this.getAttribute('data-ebook');
        const ebookPrice = this.closest('.ebook-footer').querySelector('.ebook-price').textContent;

        // Show alert with purchase info (in a real app, this would redirect to payment)
        alert(`🎉 Great choice!\n\nYou selected: ${ebookName}\nPrice: ${ebookPrice}\n\nIn a production environment, this would redirect to a secure payment gateway.`);

        // Add visual feedback
        this.textContent = 'Added! ✓';
        this.style.background = '#10b981';

        setTimeout(() => {
            this.textContent = 'Buy Now';
            this.style.background = '';
        }, 2000);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, message });

        // Show success message
        alert(`Thank you, ${name}! 📧\n\nWe've received your message and will get back to you at ${email} soon.`);

        // Reset form
        contactForm.reset();
    });
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe ebook cards for animation
document.querySelectorAll('.ebook-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe feature cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = `&copy; ${currentYear} EbookStore. All rights reserved.`;
}

console.log('🚀 Ebook Store loaded successfully!');
