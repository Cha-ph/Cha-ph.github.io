// Navigation scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backButtons = document.querySelectorAll('.back-btn');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navLinks.classList.remove('active');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Student life specific functions
function showMotivation() {
    const motivations = [
        "Every day is a new opportunity to learn something amazing!",
        "Small progress is still progress. Keep going!",
        "You're capable of amazing things. Believe in yourself!",
        "Challenges make you stronger. Embrace them!",
        "Your education is the most powerful tool you have!"
    ];
    const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
    alert(randomMotivation);
}

  backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        window.close();
      sections.forEach(section => section.classList.remove('active'));
      home.style.display = 'block';
    });
  });