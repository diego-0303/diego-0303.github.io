---
layout: page
title: ME133A & ME133B
permalink: /projects/ME133A/
---

<!-- Navigation Header -->
<div class="nav-link site-nav">
  {% include navigation.html %}
</div>

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">ME133A/ME133B: Robotics Kinematics & Path Planning</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 30px;">Caltech ME133A & ME133B Course Projects</h3>
  
  <p>
    This two-quarter sequence develops core theoretical and computational concepts in robotics. Fall quarter (ME133a) is dedicated to understanding the robot mechanism itself: analyzing degrees of freedom, forward/inverse kinematics, and smooth motion generation—effectively looking "inward" at how a robot coordinates its joints. Winter quarter (ME133b) transitions to an "outward" view: planning and navigating around obstacles, map building, and localization.
  </p>

  <p>
    After completing ME133a, I gained a comprehensive understanding of robotics fundamentals including describing robot kinematics in 2D/3D (SO(3) and SE(3)), mapping joint-to-task space via Jacobians, trajectory generation, and implementing ROS motion controllers.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/133A.png" alt="Atlas Robot Kinematic Simulation on Crutches" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: Full kinematic ROS simulation of the Boston Dynamics Atlas robot walking on custom crutch URDF models.</figcaption>
  </figure>

  <p>
    My final project for ME133a demonstrated a full kinematic simulation in ROS of the Boston Dynamics Atlas robot on crutches. I created new URDF files to act as crutches and physically constrained the model. The challenge was to coordinate walking on crutches according to the full kinematic chain, making it far more complex than classic manipulator trajectory planning.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/133B.png" alt="Trapezoidal Cell Decomposition Coverage Planning" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: Non-intersecting grid coverage path planning via trapezoidal cell decomposition.</figcaption>
  </figure>

  <p>
    In ME133b, my project focused on coverage path planning inspired by cleaning robots. We implemented a non-intersecting grid coverage algorithm using trapezoidal cell decomposition. The problem was broken down into decomposing the workspace into trapezoidal cells, finding an optimal Eulerian path through all cells, and generating continuous coverage paths within each cell.
  </p>
</div>