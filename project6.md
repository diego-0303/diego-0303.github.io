---
layout: page
title: Gearbox Transmission Project
permalink: /projects/gearbox/
---

<!-- Navigation Header -->
<div class="nav-link" style="width: 100%; padding: 20px 0; display: flex; justify-content: center; border-bottom: 2px solid var(--primary-text-color); margin-bottom: 30px;">
  <ul style="display: flex; gap: 20px; padding: 0; list-style: none; margin: 0;">
    <li style="display: inline;">
      <a href="/" style="text-decoration: none; color: var(--primary-text-color); padding: 5px 10px; border-radius: 4px; transition: background-color 0.2s;">Home</a>
    </li>
    <li style="display: inline;">
      <a href="/about/" style="text-decoration: none; color: var(--primary-text-color); padding: 5px 10px; border-radius: 4px; transition: background-color 0.2s;">About</a>
    </li>
    <li style="display: inline;">
      <a href="/projects/" style="text-decoration: none; color: var(--primary-text-color); padding: 5px 10px; border-radius: 4px; transition: background-color 0.2s;">Projects</a>
    </li>
    <li style="display: inline;">
      <a href="/blog/" style="text-decoration: none; color: var(--primary-text-color); padding: 5px 10px; border-radius: 4px; transition: background-color 0.2s;">Blog</a>
    </li>
    <li style="display: inline;">
      <a href="/DG_Resume.pdf" style="text-decoration: none; color: var(--primary-text-color); padding: 5px 10px; border-radius: 4px; transition: background-color 0.2s;">Resume</a>
    </li>
    <li style="display: inline;">
      <a href="/giving/" style="text-decoration: none; color: var(--primary-text-color); padding: 5px 10px; border-radius: 4px; transition: background-color 0.2s;">Giving</a>
    </li>
  </ul>
</div>

<!-- ME14 Projects Images Carousel -->
<div class="carousel-container" style="max-width: 600px; margin: 20px auto; position: relative;">
  <div class="carousel-track" style="display: flex; transition: transform 0.5s ease-in-out;">
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/GEARBOX.jpeg" alt="Gearbox Transmission Design" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/PET_TOY.png" alt="Mechatronics Pet Toy Project" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
  </div>
  
  <!-- Navigation Buttons -->
  <button class="carousel-btn prev" onclick="changeSlide(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">‹</button>
  <button class="carousel-btn next" onclick="changeSlide(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">›</button>
  
  <!-- Dots Indicator -->
  <div class="carousel-dots" style="display: flex; justify-content: center; margin-top: 15px; gap: 8px;">
    <span class="dot active" onclick="currentSlide(1)" style="width: 12px; height: 12px; border-radius: 50%; background: #007bff; cursor: pointer; transition: background 0.3s;"></span>
    <span class="dot" onclick="currentSlide(2)" style="width: 12px; height: 12px; border-radius: 50%; background: #ccc; cursor: pointer; transition: background 0.3s;"></span>
  </div>
</div>

<script>
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const track = document.querySelector('.carousel-track');

  function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
      dot.style.background = i === currentSlideIndex ? '#007bff' : '#ccc';
    });
  }

  function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
  }

  function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
  }

  // Auto-advance slides every 4 seconds
  setInterval(() => {
    changeSlide(1);
  }, 4000);
</script>

<div style="max-width: 800px; margin: 40px auto; font-family: Arial, sans-serif; line-height: 1.6;">
  <h2 style="font-size: 28px; margin-bottom: 10px;">ME14: Mechanical Design & Mechatronics Projects</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech ME14 Course Projects</h3>
  
  <p>
    The final leg of course modules in ME14 involved team-based design projects, and one of the most exciting was the Transmission Design and Fabrication Project. This project has been a staple of the course for decades, giving students hands-on experience with mechanical transmission design and manufacturing.
  </p>

  <p>
    Working with a modest budget of $150 to $200 per team, we had about 2 to 3 weeks to propose and design a small mechanical transmission according to specified constraints and physical dimensions. This project really brought together all the fundamental background we had spent weeks learning about the design and functionality of such devices.
  </p>

  <p>
    The project was a fantastic opportunity to apply theoretical knowledge to practical design challenges. We had to consider gear ratios, power transmission efficiency, material selection, and manufacturing constraints, all while working within tight dimensional specifications. The team-based approach meant we could leverage different strengths and perspectives to create the best possible design.
  </p>

  <p>
    One of the most valuable aspects was getting hands-on experience in the machine shop. Even though it had been a while since some of us had used the equipment, the shop staff and TAs were incredibly helpful in guiding us through the fabrication process. This project really demonstrated how classroom theory translates into real-world engineering challenges and the importance of practical manufacturing knowledge.
  </p>

  <p>
    Through this project, I gained a deeper understanding of mechanical transmission systems, learned to work effectively in a design team, and developed practical skills in both design analysis and fabrication. The experience of taking a design from concept to physical prototype was incredibly rewarding and gave me confidence in my ability to tackle complex mechanical engineering challenges.
  </p>
  
  <p>
    The second and final team-based project in ME14 was a Mechatronics Final Project that we proposed, designed, and defended in preliminary and critical design reviews. This project was an opportunity to integrate everything we had learned in the course, showcasing our design skills using SolidWorks and knowledge gained about mechanical design principles, electronics, and mechatronics.
  </p>

  <p>
    Working with the same modest budget of $150 to $200 per team and a 2-week timeline, we had to design and build our prototype while preparing for scheduled preliminary and critical design reviews. My team decided to build a pet toy since one of us had a pet cat on campus, and we wanted to create something that could serve multiple purposes.
  </p>

  <p>
    The pet toy featured actuators that popped out of an acrylic box that the cat could interact with through an IR sensor. This created an engaging interactive experience for feline users. Additionally, the top of the toy featured a launching mechanism for balls that a dog could go fetch, making it a versatile toy for different types of pets.
  </p>

  <p>
    This project really brought together all the interdisciplinary skills we had developed throughout ME14. We had to integrate mechanical design with electronics, sensors, and actuators, while ensuring the final product was both functional and safe for pets. The experience of going through formal design reviews taught me the importance of clear communication and thorough documentation in engineering projects.
  </p>
</div> 