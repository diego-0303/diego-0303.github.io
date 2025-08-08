---
layout: page
title: Flying Carpet Project
permalink: /projects/flying-carpet/
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

<!-- Flying Carpet Image Carousel -->
<div class="carousel-container" style="max-width: 600px; margin: 20px auto; position: relative;">
  <div class="carousel-track" style="display: flex; transition: transform 0.5s ease-in-out;">
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/FLYING_CARPET1.jpeg" alt="Flying Carpet - View 1" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/FLYING_CARPET_2.jpg" alt="Flying Carpet - View 2" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/FLYING_CARPET3.png" alt="Flying Carpet - View 3" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
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
  <h2 style="font-size: 28px; margin-bottom: 10px;">Flying Carpet: Aerodynamic Research Project</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech SURF 2024 - Gharib Research Group</h3>
  
  <p>
    As part of my two-year research experience with the Gharib Research Group at Caltech, I conducted extensive aerodynamic research on a novel "flying carpet" concept. This project, which became my primary contribution and favorite research endeavor, focused on understanding the complex fluid dynamics and aerodynamic principles behind levitating objects through controlled air flow.
  </p>

  <p>
    The research involved designing and testing various configurations to achieve stable levitation and controlled movement of flat objects using carefully engineered air flow patterns. I worked extensively with experimental setups, data collection, and analysis to understand the fundamental physics behind this fascinating aerodynamic phenomenon.
  </p>

  <p>
    Throughout the project, I developed expertise in fluid dynamics, experimental design, and data analysis. The work required careful attention to detail in both the experimental setup and the theoretical understanding of the underlying physics. This research experience significantly enhanced my understanding of aerodynamics and experimental methods in mechanical engineering.
  </p>

  <p>
    The project culminated in a comprehensive final report that documented our findings, experimental methodology, and theoretical framework. This research represents one of my most significant contributions during my time at Caltech and demonstrates my ability to tackle complex engineering challenges through systematic research and experimentation.
  </p>
</div> 