---
layout: page
title: ERNIE Rover Project
permalink: /projects/ERNIE/
---

<!-- Navigation Header -->
<div style="background: var(--primary-bg-color); padding: 15px 0; border-bottom: 2px solid var(--accent-color); margin-bottom: 30px;">
  <ul style="list-style: none; margin: 0; padding: 0; text-align: center;">
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

<!-- ERNIE Rover Project Images Carousel -->
<div class="carousel-container" style="max-width: 600px; margin: 20px auto; position: relative;">
  <div class="carousel-track" style="display: flex; transition: transform 0.5s ease-in-out;">
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/ERNIE.png" alt="ERNIE Rover - Version 1" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/ERNIE2.jpeg" alt="ERNIE Rover - Version 2" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
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
  <h2 style="font-size: 28px; margin-bottom: 10px;">ERNIE: Engineering Rover for Novel Innovation and Exploration</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech CRATER Team Project</h3>
  
  <p>
    The ERNIE rover project represents my first experience in college of participating in an engineering project team, and I was incredibly excited to build something truly cool. This project was part of the Caltech Rover, Autonomy, Technology and Research (CRATER) team, where I had the opportunity to contribute to the mechanical design, analysis, and fabrication of many critical components.
  </p>

  <p>
    My role focused on several key mechanical systems of the rover, including the robotic arm and suspension system. I also contributed to chassis design and fabrication, gaining hands-on experience with real engineering challenges. This project showed me the importance of working as part of a cohesive team and the value of seeing a project through multiple iterations and versions - hence the two images showcasing the evolution of our design.
  </p>

  <p>
    The rover was specifically designed to satisfy the rigorous requirements presented by prestigious rover competitions such as the Canadian International Rover Challenge (CIRC) and the University Rover Challenge (URC). These competitions test the rover's capabilities in autonomous navigation, scientific sample collection, equipment servicing, and extreme terrain traversal - all while operating in Mars-like environments.
  </p>

  <p>
    Through this project, I gained invaluable experience in mechanical design, fabrication techniques, and most importantly, collaborative engineering. Working on ERNIE taught me how to balance technical requirements with practical constraints, how to iterate on designs based on testing feedback, and how to communicate effectively within a multidisciplinary team. The project's evolution from initial concept to competition-ready rover demonstrated the iterative nature of engineering and the importance of perseverance in complex projects.
  </p>
</div> 