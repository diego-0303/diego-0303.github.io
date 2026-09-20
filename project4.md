---
layout: page
title: ME133A & ME133B
permalink: /projects/ME133A/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">ME133A/ME133B: Robotics Kinematics & Path Planning</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech ME133A & ME133B Course Projects</h3>

  <div style="background: #f7f7f8; border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Partner final project in both quarters: with a graduate student in ME133a, with a classmate in ME133b</span>
      <strong>Duration</strong><span>Two-quarter sequence, ME133a in Fall 2023 and ME133b in Winter 2024</span>
      <strong>Stack</strong><span>ME133a: ROS 2, Python, URDF, RViz. ME133b: pure Python and matplotlib</span>
      <strong>Outcome</strong><span>Two working final projects, both with real code and demo footage below</span>
    </div>
  </div>

  <p>
    This two-quarter sequence develops core theoretical and computational concepts in robotics. Fall quarter (ME133a) is dedicated to understanding the robot mechanism itself: analyzing degrees of freedom, forward/inverse kinematics, and smooth motion generation, effectively looking "inward" at how a robot coordinates its joints. Winter quarter (ME133b) transitions to an "outward" view: planning and navigating around obstacles.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">ME133a: An Injured Atlas, Walking on Crutches</h3>
  <p>
    My ME133a final project, with a graduate student partner, was a full kinematic simulation in ROS of the Boston Dynamics Atlas robot walking on crutches, specifically simulating an Atlas with an injured right leg keeping weight off that leg while it moves, using two crutches gripped in its hands. I built custom URDF models for the crutches and the choreography that moves the robot through a scripted sequence: gripping the crutches, shifting weight and rotating the torso, then alternating crutch-assisted steps on the good leg while the injured leg is carried through.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/133A.png" alt="Atlas Robot Kinematic Simulation on Crutches" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: Full kinematic ROS simulation of Atlas walking on crutches with an injured right leg.</figcaption>
  </figure>

  <p>
    We were challenged to make something a bit more complex than assignments focused on controlling manipulator arms. Atlas is a 30-DOF floating-base humanoid: the pelvis itself translates and rotates as part of the gait rather than staying fixed in the world, and I solved inverse kinematics independently across six separate kinematic chains hanging off it, both feet, the torso, the head, and both hands, each driven by closed-loop IK through the Jacobian pseudoinverse with proportional error feedback, integrated forward at every timestep. Coordinating six chains and a moving base simultaneously, on a specific timed choreography, is what made this substantially harder than a single fixed-base arm reaching for a target.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/ME133A_ATLAS_CRUTCHES_DEMO.mp4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">The submitted final demo: Atlas gripping the crutches and walking with its injured leg kept off the ground.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">ME133b: Trapezoidal Decomposition and Roadmap Path Planning</h3>
  <p>
    My ME133b final project, with a classmate, built a path planner from scratch around trapezoidal cell decomposition: given a 2D world with polygonal obstacles, we decompose the free space into trapezoidal cells, extract each cell's centroid as a roadmap node, connect neighboring centroids, and run A* over that roadmap to find a path between a start and goal point. It's a roadmap-based motion planner built on a real computational-geometry decomposition.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ME133B_TRAPEZOIDAL_DECOMP.png" alt="Trapezoidal Cell Decomposition of a polygon world" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: Trapezoidal cell decomposition of a world with triangular obstacles.</figcaption>
  </figure>

  <p>
    Building the decomposition itself was the hard part, particularly getting node creation right at the trapezoid vertices and correctly placing centroids for cells with unusual shapes. A handful of malformed cells can still produce an empty centroid, which the planner needs to skip rather than crash on.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/ME133B_TRAP_DECOMP_DEMO.mp4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">The decomposition, roadmap, and resulting A* path weaving between all four obstacles.</figcaption>
  </figure>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ME133B_FINAL_PATH.png" alt="Final A* path through the trapezoidal decomposition roadmap" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: The resulting path, routed through roadmap nodes around every obstacle.</figcaption>
  </figure>

  <p>
    Between the two quarters, ME133a was about coordinating a robot's own many degrees of freedom to hit a target motion, and ME133b was about reasoning over the space a robot moves through to find a path at all.
  </p>
</div>
