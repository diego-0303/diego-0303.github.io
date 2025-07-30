---
layout: page
title: Projects
permalink: /projects/
---

# Projects

<div class="projects-grid">
  <a href="/projects/robotic-arm/" class="project-image-link">
    <img src="LARY1.jpeg" alt="Robotic Arm Project">
  </a>
  <a href="/projects/portfolio-website/" class="project-image-link">
    <img src="https://via.placeholder.com/400x400?text=Project+2" alt="Portfolio Website">
  </a>
  <a href="/projects/ai-tutor/" class="project-image-link">
    <img src="https://via.placeholder.com/400x400?text=Project+3" alt="AI Tutor">
  </a>
  <a href="/projects/smart-home-dashboard/" class="project-image-link">
    <img src="https://via.placeholder.com/400x400?text=Project+4" alt="Smart Home Dashboard">
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