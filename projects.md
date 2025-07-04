---
layout: page
title: Projects
permalink: /projects/
---

# Projects

<div class="projects-grid">
  <a class="project-card" href="#">
    <img src="https://via.placeholder.com/400x250?text=Project+1" alt="Project 1">
    <h3>Robotic Arm</h3>
    <p>Designed and built a 6-DOF robotic arm for my senior engineering capstone. Features custom electronics and Python control software.</p>
    <span class="tag">Engineering</span>
    <span class="tag">School</span>
  </a>
  <a class="project-card" href="#">
    <img src="https://via.placeholder.com/400x250?text=Project+2" alt="Project 2">
    <h3>Personal Portfolio Website</h3>
    <p>This very site! Built with Jekyll, custom SCSS, and a focus on accessibility and responsive design.</p>
    <span class="tag">Web</span>
    <span class="tag">Passion</span>
  </a>
  <a class="project-card" href="#">
    <img src="https://via.placeholder.com/400x250?text=Project+3" alt="Project 3">
    <h3>AI Tutor</h3>
    <p>Developed an AI-powered tutoring app to help students with math and science homework, using GPT-4 and React Native.</p>
    <span class="tag">Professional</span>
    <span class="tag">AI</span>
  </a>
  <a class="project-card" href="#">
    <img src="https://via.placeholder.com/400x250?text=Project+4" alt="Project 4">
    <h3>Smart Home Dashboard</h3>
    <p>Created a dashboard to monitor and control smart home devices, integrating IoT sensors and real-time data visualization.</p>
    <span class="tag">Engineering</span>
    <span class="tag">Passion</span>
  </a>
</div>

<style>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.project-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.15s, box-shadow 0.15s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.project-card:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.project-card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  object-fit: cover;
  min-height: 150px;
  background: #eee;
}
.project-card h3 {
  margin: 0.5rem 0 0.3rem 0;
  font-size: 1.2rem;
  font-weight: 600;
}
.project-card p {
  font-size: 0.98rem;
  margin-bottom: 0.5rem;
}
.tag {
  display: inline-block;
  background: #eee;
  color: #333;
  border-radius: 4px;
  padding: 0.2em 0.6em;
  font-size: 0.8em;
  margin-right: 0.3em;
  margin-bottom: 0.2em;
}
</style> 