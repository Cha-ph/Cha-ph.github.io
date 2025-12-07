
      function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(sec => sec.classList.remove('active'));
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            // Update page title if needed
            document.title = `Group Portfolio - ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
        }

        // Toggle sidebar on hamburger click
        document.getElementById('hamburger-btn').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('active');
        });

// Get all modals, buttons, and close spans
var modals = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName("openmodal");
var spans = document.getElementsByClassName("close");

function closeAllModals() {
    for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = "none";
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        closeAllModals();  // Close any open modals
        modals[i].style.display = "block";
    }
}
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        modals[i].style.display = "none";
    }
}

window.onclick = function(event) {
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i] && modals[i].style.display === "block") {
            modals[i].style.display = "none";
        }
    }
}

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeAllModals();
    }
});

const slideshow = document.querySelector('.slideshow');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Array of 15 image URLs (using Lorem Picsum for random images)
const images = [
    'actpic/1.jpg',
    'actpic/2.jpg',
    'actpic/3.jpg',
    'actpic/4.jpg',
    'actpic/5.jpg',
    'actpic/6.jpg',
    'actpic/7.jpg',
    'actpic/8.jpg',
    'actpic/9.jpg',
    'actpic/10.jpg',
    'actpic/11.jpg',
];

let currentIndex = 0;

// Load images into the slideshow
images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Slide ${index + 1}`;
    if (index === 0) img.classList.add('active');
    slideshow.appendChild(img);
});

const slides = document.querySelectorAll('.slideshow img');

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Optional: Auto-play (uncomment to enable)
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);
