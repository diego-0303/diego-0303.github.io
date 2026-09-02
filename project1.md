---
layout: page
title: LARY Autonomous Robot
permalink: /projects/LARY/
---

<!-- Navigation Header -->
<div class="nav-link site-nav">
  {% include navigation.html %}
</div>

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">LARY: LiDAR Assisted Robot for You</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 30px;">Caltech ME/CS/EE 133a: Mobile Robots</h3>
  
  <p>
    LARY is a fully autonomous mobile robot I built as part of Caltech’s capstone robotics course, designed to integrate key concepts in localization, planning, navigation, and mapping using the Robot Operating System (ROS). Working in a team of two, I assembled the robot from scratch, outfitted it with encoders, a gyroscope, and a lidar sensor, and implemented the full software stack required to operate it autonomously in real-world conditions.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/LARY1.jpeg" alt="LARY Autonomous Robot Platform" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: LARY autonomous mobile robot platform configured with LiDAR sensor, wheel encoders, and onboard power distribution.</figcaption>
  </figure>

  <p>
    Throughout the course, I programmed LARY to perform odometry, fuse sensor data for robust heading estimation, and localize on a known map while rejecting noise and outliers. I developed planning and control algorithms for collision-free navigation and incorporated online mapping to detect and avoid unknown obstacles. All algorithms were built and tested within the ROS framework, with extensive debugging and validation in hardware.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/LARY2.jpeg" alt="LARY Hardware and Sensor Setup" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: Close-up of internal electronics stack, motor drivers, and Raspberry Pi compute unit.</figcaption>
  </figure>

  <p>
    As a final challenge, LARY competed in a class-wide Pac-Man-inspired competition. The robot had to autonomously navigate a maze, collect tokens, and interact with dynamic agents simulating ghosts. LARY successfully completed all course requirements and placed 4th in the competition, demonstrating strong performance in autonomous decision-making, real-time navigation, and reactive behavior in a dynamic environment.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/LARY3.jpeg" alt="LARY Maze Competition Setup" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: Testing LARY's real-time mapping and path planning in the maze environment.</figcaption>
  </figure>

  <p>
    This project solidified my skills in ROS, sensor fusion, autonomous navigation, and hardware-software integration under real-world constraints.
  </p>
</div>
