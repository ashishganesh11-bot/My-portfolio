// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Glitch effect intensity based on mouse movement
document.addEventListener('mousemove', (e) => {
    const glitch = document.querySelector('.glitch');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    glitch.style.textShadow = `
        ${x * 10}px ${y * 10}px 0 var(--accent-color),
        ${-x * 10}px ${-y * 10}px 0 var(--primary-color)
    `;
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add your form submission logic here
        const formData = new FormData(contactForm);
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Dynamic skill bar animation with glow effect
document.querySelectorAll('.skill-tags span').forEach((skill, index) => {
    skill.style.opacity = 0;
    skill.style.transform = 'scale(0.8)';
    skill.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    skill.style.transitionDelay = `${index * 0.1}s`;
    
    skill.addEventListener('mouseenter', () => {
        skill.style.boxShadow = '0 0 15px var(--accent-glow)';
        skill.style.transform = 'scale(1.1)';
    });
    
    skill.addEventListener('mouseleave', () => {
        skill.style.boxShadow = 'none';
        skill.style.transform = 'scale(1)';
    });
    
    observer.observe(skill);
});