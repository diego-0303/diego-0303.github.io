---
layout: page
title: Shuttle Bot
permalink: /projects/shuttlebot/
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

<!-- Shuttle Bot Image Carousel -->
<div class="carousel-container" style="max-width: 600px; margin: 20px auto; position: relative;">
  <div class="carousel-track" style="display: flex; transition: transform 0.5s ease-in-out;">
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/SHUTTLEBOT.JPG" alt="Shuttle Bot - View 1" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/SHUTTLE_BOT2.jpeg" alt="Shuttle Bot - View 2" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/SHUTTLE_BOT3.jpeg" alt="Shuttle Bot - View 3" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
  </div>
  
  <!-- Navigation Buttons -->
  <button class="carousel-btn prev" onclick="changeSlide(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">‹</button>
  <button class="carousel-btn next" onclick="changeSlide(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.8); border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; font-size: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.2);">›</button>
  
  <!-- Dots Indicator -->
  <div class="carousel-dots" style="display: flex; justify-content: center; margin-top: 15px; gap: 8px;">
    <span class="dot active" onclick="currentSlide(1)" style="width: 12px; height: 12px; border-radius: 50%; background: #007bff; cursor: pointer; transition: background 0.3s;"></span>
    <span class="dot" onclick="currentSlide(2)" style="width: 12px; height: 12px; border-radius: 50%; background: #ccc; cursor: pointer; transition: background 0.3s;"></span>
    <span class="dot" onclick="currentSlide(3)" style="width: 12px; height: 12px; border-radius: 50%; background: #ccc; cursor: pointer; transition: background 0.3s;"></span>
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
  <h2 style="font-size: 28px; margin-bottom: 10px;">Shuttle Bot: Lunar Infrastructure Robot</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech CS/ME/EE 125 Design Capstone Project</h3>
  
  <p>
    As part of my design capstone at Caltech (CS/ME/EE 125), I worked with a team of three people to develop a comprehensive systems engineering project focused on lunar infrastructure development. The first half of the year was dedicated to systems engineering, during which we developed a CONOPS (Concept of Operations) for an existing robot that was a previous finalist in the NASA Big Idea Challenge.
  </p>

  <p>
    Our CONOPS described an ambitious mission where a shuttle bot, designed to operate on a cable system, would be sent to the moon to serve as the hypothetical infrastructure for setting up a lunar base inside a crater. The project's primary goal was to demonstrate a small-scale prototype that could validate our conceptual design and operational approach.
  </p>

  <p>
    We used a pre-existing teleoperated robot as our starting platform and made significant hardware upgrades to transform it into a closed-loop autonomous system. The robot was equipped with LiDAR sensors and normal cameras to enable autonomous movement along the cable system and autonomous payload traversal capabilities. This required integrating multiple sensor systems, developing control algorithms, and implementing robust navigation software.
  </p>

  <p>
    The project demonstrated the complexity of systems engineering in space applications, requiring careful consideration of reliability, redundancy, and autonomous operation in challenging environments. Through this work, I gained valuable experience in robotics, autonomous systems, and the practical application of systems engineering principles to real-world aerospace challenges.
  </p>
</div> 