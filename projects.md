---
layout: description
title: Projects
permalink: /projects/
---

# Projects
# Projects
<div class="projects-grid">
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/LARY1.jpeg" alt="Project 1">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/FLYING_CARPET.jpeg" alt="Flying Carpet">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/SHUTTLEBOT.JPG" alt="Shuttle Bot">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/133A.png" alt="133A">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/133B.png" alt="133B">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/ERNIE.png" alt="ERNIE">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/ARM_JOINT.jpg" alt="Arm Joint">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/GEARBOX.jpeg" alt="Gearbox">
  </a>
  <a href="#" class="project-image-link">
    <img src="https://diego-0303.github.io/images/PET_TOY.png" alt="Pet toy">
  </a>
  
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.project-image-link {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  transition: transform 0.15s, box-shadow 0.15s;
}
.project-image-link:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.project-image-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style> 