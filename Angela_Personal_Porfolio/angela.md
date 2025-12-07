<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Angela's Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">        
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="container nav-container">
            <button class="back-btn"><a href="front.html">← Back</a></button>
            <a class="logo">Personal Portfolio</a>
            <ul class="nav-links">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#subjects" class="nav-link">Skills and Hobbies</a></li>
                <li><a href="#achievements" class="nav-link">Achievements</a></li>
                <li><a href="#contact" class="nav-link">About me</a></li>
            </ul>
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container hero-content">
            <h1 class="hero-title">Hi! My name is Angela Landicho Hernandez </h1>
            <p class="hero-subtitle">I'm a first-year BSIT student at Batangas State University <br> JPLPC Malvar Campus under the College of Informatics and Computing Sciences.</p>
            <div class="hero-buttons">
                <a href="#subjects" class="btn btn-outline">My Skills & Hobbies</a>
                <button class="btn" onclick="showMotivation()">Daily Motivation</button>
            </div>
           
        </div>
        <div class="hero-image">
            <img src="website/angela1.png" alt="Student studying in a coffee shop environment">
    </div>
</section>
   



    <!-- Subjects Section -->
    <section id="subjects" class="skills">
        <div class="container">
            <h2>My Skills and Hobbies</h2>
            <div class="skills-container">
                <div class="skill-card">
                    <div class="skill-icon">
                        
                    </div>
                    <h3>Mathematics</h3>
                    <p>I'm good at solving mathematical problems sometimes.</p>
                    </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        
                    </div>
                    <h3>Hobbies</h3>
                    <p>- I like reading chinese novels and also manhua or manhwa
<br>- Crocheting, I love to make handmade gifts and clothes for myself
<br>- I have creative hands and mind, I make costumes
.</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">
                        
                    </div>
                    <h3>Programming</h3>
                    <p>Basic knowledge in programming .</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="projects">
        <div class="container">
            <h2>My Achievements</h2>
            <div class="projects-container">
                <div class="project-card">
                   
                    <div class="project-content">
                        <h3>Honor Roll Student</h3>
                        <p>Honor Student  for 4 consecutive years (2022-2025).</p>
                        <div class="project-tags">
                            <span class="project-tag">Academic</span>
                            <span class="project-tag">2025</span>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    
                    <div class="project-content">
                        <h3>Pagent</h3>
                        <p>Bb. Looc 2024 1st runner up with 6 special awards.</p>
                        <div class="project-tags">
                            <span class="project-tag">Competition</span>
                            <span class="project-tag">2024</span>
                        </div>
                    </div>
                </div>
                
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>About me</h2>
            <div class="contact-container">
                <div class="contact-info">
                    <p>I'm 18 years old <br>
                   My birthday is on September 05, 2007 <br>
                   I live in Looc, Balete, Batangas <br>
                     </p>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>ghel05hernand3z@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p>+63 9913400433</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h3>Campus</h3>
                            <p>Batangas State University JPLPC Malvar Campus</p>
                        </div>
                    </div>
                </div>
                        <img src="website/angela2.jpg"alt="nothhing"> 
            </div>
    </section>

    <script src="java/script.js"></script>
</body>
</html>