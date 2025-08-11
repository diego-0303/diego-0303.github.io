---
layout: page
title: ME133A
permalink: /projects/ME133A/
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

<!-- ME133A/ME133B Project Images Carousel -->
<div class="carousel-container" style="max-width: 600px; margin: 20px auto; position: relative;">
  <div class="carousel-track" style="display: flex; transition: transform 0.5s ease-in-out;">
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/133A.png" alt="ME133A Project - Boston Dynamics Atlas Robot on Crutches" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    </div>
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/133B.png" alt="ME133B Project - Robotics Planning and Navigation" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
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

<script>
  let currentSlideIndex = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const track = document.querySelector('.carousel-track');

  function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;
    
    track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
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

  setInterval(() => {
    changeSlide(1);
  }, 4000);
</script>

<div style="max-width: 800px; margin: 40px auto; font-family: Arial, sans-serif; line-height: 1.6;">
  <h2 style="font-size: 28px; margin-bottom: 10px;">ME133A/ME133B: Robotics Fundamentals & Planning</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech ME133A & ME133B Course Projects</h3>
  
  <p>
    This course develops the core concepts of robotics. In the fall quarter, 133a is dedicated to understanding the robot mechanism itself: analyzing its degrees of freedom, computing the forward and inverse kinematics, and smoothly moving the robot. Effectively, this looks "inward", at how a robot controls, coordinates, and moves itself. In the Winter, 133b transitions to an "outward" view: planning and navigating around obstacles and in the external world. This includes various planning algorithms, from discrete to continuous and probabilistic, as well as understanding how to localize the robot within a map or how to build a map from sensor data.
  </p>

  <p>
    The course focuses on the theory and topics that are central and unique to robotics and not taught in other courses. It hence does not discuss mechanical design or fabrication, nor details computer vision, machine learning, or other topics of general artificial intelligence.
  </p>

  <p>
    After completing 133a, I gained a comprehensive understanding of robotics fundamentals including: describing and controlling robot movements, expressing kinematics in 2D and 3D (position and orientation), mapping between motor, joint, and output spaces, computing forward kinematics of serial linkage mechanisms, generating motion trajectories, mastering inverse kinematics using analytic or numerical tools, dealing with under or over-constrained systems, and understanding how to use ROS (Robot Operating System) to implement these concepts.
  </p>

  <p>
    In 133b, I explored the "outward" perspective of robotics, focusing on planning and navigation in complex environments. This included studying various planning algorithms from discrete to continuous and probabilistic approaches, understanding robot localization within maps, and learning how to build maps from sensor data. The course emphasized the theoretical foundations of robotic navigation and obstacle avoidance, providing a comprehensive understanding of how robots interact with and navigate through their external environment.
  </p>

  <p>
    My final project for 133a, demonstrated in the first image above, showcases a full kinematic simulation in ROS of the Boston Dynamics Atlas robot on crutches. I created new URDF files to act as crutches and had to physically constrain the model. The challenge was to get the robot to walk on crutches according to the full kinematic chain, making it much more complex than simply directing a trajectory on a classic robotic arm. This project required applying all the theoretical concepts learned throughout the course to create a realistic and functional simulation.
  </p>

  <p>
    The second image represents my work in 133b, focusing on robotics planning and navigation. This project was motivated by the planning problem of a Roomba. This concept was then simplified into covering an entire grid without crossing over lines, similar to how painting is done to prevent streaks. The goal of this project is to cover an entire grid without the path intersecting itself using trapezoidal cell decomposition. At a high level we broke this problem down into creating the trapezoids, finding a path which goes through all of those trapezoids only once and a path which fully covers each trapezoid. Through this comprehensive two-quarter sequence, I developed a complete understanding of both the internal mechanics of robots and their external interaction with the world, making me well-equipped to tackle complex robotics challenges that require both kinematic control and intelligent navigation.
  </p>
</div> 