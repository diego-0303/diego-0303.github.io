---
layout: page
title: ERNIE Rover Project
permalink: /projects/ERNIE/
---

<!-- Navigation Header -->
<div class="nav-link" style="width: 100%; padding: 20px 0; display: flex; justify-content: center; border-bottom: 2px solid var(--primary-text-color); margin-bottom: 30px;">
  {% include navigation.html %}
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
    <div class="carousel-slide" style="min-width: 100%; display: flex; justify-content: center;">
      <img src="https://diego-0303.github.io/images/ARM_JOINT.jpg" alt="Robotic Arm Joint Design" style="width: 400px; height: 400px; object-fit: cover; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
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
  <h2 style="font-size: 28px; margin-bottom: 10px;">ERNIE</h2>
  <h3 style="font-size: 18px; color: #666; margin-top: 0;">Caltech CRATER Team Project</h3>
  
  <p>
    This rover project, dubbed ERNIE, was my first experience in college of participating in an engineering project team, and I was incredibly excited to build something with other people. This project was part of the Caltech Rover, Autonomy, Technology and Research (CRATER) team, where I had the opportunity to contribute to the mechanical design, analysis, and fabrication of many critical components.
  </p>

  <p>
    My role focused on several key mechanical systems of the rover, including the robotic arm and suspension system. I also contributed to chassis design and fabrication, gaining hands-on experience with real engineering challenges. This project showed me the importance of working as part of a cohesive team and the value of seeing a project through multiple iterations and versions, hence the two images showcasing the evolution of our design.
  </p>

  <p>
    One of the most exciting subsystems I worked on was the rocker bogie suspension system, which has heritage from one of the JPL rovers just down the road from us. This suspension design allows the rover to maintain stability while traversing rough terrain, making it perfect for the challenging environments we'd encounter in competition. I also led much of the mechanical design for the 6-DOF robotic arm, creating custom joints like the one shown in the third image that satisfied the torque requirements needed to lift the payload required by the competitions.
  </p>

  <p>
    The rover was specifically designed to satisfy the rigorous requirements presented by rover competitions such as the Canadian International Rover Challenge (CIRC) and the University Rover Challenge (URC). These competitions test the rover's capabilities in autonomous navigation, scientific sample collection, equipment servicing, and extreme terrain traversal, all while operating in Mars-like environments.
  </p>

  <p>
    Through this project, I gained invaluable experience in mechanical design, fabrication techniques, and most importantly, collaborative engineering. Working on ERNIE taught me how to balance technical requirements with practical constraints, how to iterate on designs based on testing feedback, and how to communicate effectively within a multidisciplinary team. The project's evolution from initial concept to competition-ready rover demonstrated the iterative nature of engineering and the importance of perseverance in complex projects.
  </p>
</div> 