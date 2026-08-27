---
layout: page
title: Projects
permalink: /projects/
---

<!-- Navigation Header -->
<div class="nav-link" style="width: 100%; padding: 20px 0; display: flex; justify-content: center; border-bottom: 2px solid var(--primary-text-color); margin-bottom: 30px;">
  {% include navigation.html %}
</div>

<div class="projects-grid">
  <a href="/projects/LARY/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/LARY1.jpeg" alt="Project 1">
  </a>
  <a href="/projects/flying-carpet/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/FLYING_CARPET1.jpeg" alt="Flying Carpet">
  </a>
  <a href="/projects/shuttlebot/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/SHUTTLEBOT.JPG" alt="Shuttle Bot">
  </a>
  <a href="/projects/ME133A/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/133A.png" alt="133A">
  </a>
  <a href="/projects/ERNIE/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/ERNIE.png" alt="ERNIE">
  </a>
  <a href="/projects/gearbox/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/GEARBOX.jpeg" alt="Gearbox">
  </a>
  <a href="/projects/earthquake/" class="project-image-link">
    <img src="https://diego-0303.github.io/images/EARTHQuAKE.jpg" alt="Earthquakes">
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