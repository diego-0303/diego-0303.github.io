---
layout: page
title: Robotic Arm Project
permalink: /projects/LARY/
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

<div style="max-width: 800px; margin: 40px auto; font-family: Arial, sans-serif; line-height: 1.6;">
  
  <!-- LARY Image Carousel -->
  <div class="carousel-container" style="max-width: 600px; margin: 20px auto; position: relative;">
    <div class="carousel-track" style="display: flex; transition: transform 0.5s ease-in-out;">
      <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
        <img src="https://diego-0303.github.io/images/LARY1.jpeg" alt="LARY Autonomous Robot - View 1" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      </div>
      <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
        <img src="https://diego-0303.github.io/images/LARY2.jpeg" alt="LARY Autonomous Robot - View 2" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
      </div>
      <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
        <img src="https://diego-0303.github.io/images/LARY3.jpeg" alt="LARY Autonomous Robot - View 3" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
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
  
  <h2 style="font-size: 28px; margin-bottom: 10px;">LARY: LiDAR Assisted Robot for You</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech ME/CS/EE 133a: Mobile Robots</h3>
  
  <p>
    LARY is a fully autonomous mobile robot I built as part of Caltech’s capstone robotics course, designed to integrate key concepts in localization, planning, navigation, and mapping using the Robot Operating System (ROS). Working in a team of two, I assembled the robot from scratch, outfitted it with encoders, a gyroscope, and a lidar sensor, and implemented the full software stack required to operate it autonomously in real-world conditions.
  </p>

  <p>
    Throughout the course, I programmed LARY to perform odometry, fuse sensor data for robust heading estimation, and localize on a known map while rejecting noise and outliers. I developed planning and control algorithms for collision-free navigation and incorporated online mapping to detect and avoid unknown obstacles. All algorithms were built and tested within the ROS framework, with extensive debugging and validation in hardware.
  </p>

  <p>
    As a final challenge, LARY competed in a class-wide Pac-Man-inspired competition. The robot had to autonomously navigate a maze, collect tokens, and interact with dynamic agents simulating ghosts. LARY successfully completed all course requirements and placed 4th in the competition, demonstrating strong performance in autonomous decision-making, real-time navigation, and reactive behavior in a dynamic environment.
  </p>

  <p>
    This project solidified my skills in ROS, sensor fusion, autonomous navigation, and hardware-software integration under real-world constraints.
  </p>
</div>
