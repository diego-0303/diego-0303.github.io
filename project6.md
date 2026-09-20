---
layout: page
title: Mechanical Transmission & Mechatronic Toy
permalink: /projects/gearbox/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">ME14: Mechanical Transmission & Mechatronic Toy</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech ME14 Course Projects</h3>

  <div style="background: #f7f7f8; border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Transmission: BOM and bearing selection, shop fabrication. Mechatronic toy: sensor/actuator integration and firmware, plus enclosure fabrication</span>
      <strong>Team</strong><span>Transmission with four teammates; mechatronic toy with four teammates, split into two sub-teams</span>
      <strong>Duration</strong><span>Two team-based design projects during Spring 2023</span>
      <strong>Stack</strong><span>SolidWorks, manual lathe/mill/gear-cutting for the transmission; SolidWorks, laser cutting, Arduino, H-bridge motor drivers, and a microwave motion sensor for the toy</span>
      <strong>Outcome</strong><span>Two working final builds, both machined and assembled by the team</span>
    </div>
  </div>

  <p>
    ME14 closes with two team-based design projects: a Transmission Design and Fabrication Contest, and an open-ended Mechatronics Final Project defended in formal Preliminary and Critical Design Reviews (PDR/CDR).
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The Transmission Contest</h3>
  <p>
    The transmission project is a real scored competition. A motor drives your transmission, which powers a bicycle wheel, and a computer records wheel speed over a 180-second run, with score based on the wheel's max RPM divided by the time it takes to reach 250 RPM, so the transmission has to balance top speed against how quickly it gets there. Working with four teammates and a $200 budget, we sketched out a function/attribute design tree weighing gear train, belt, and chain-and-sprocket options before settling on a gear train, then chose a 2-stage spur gear reduction over a 3-stage one to keep machining time and part count down.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/GEARBOX.jpeg" alt="Machined Mechanical Gearbox Transmission" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: The assembled 2-stage spur gear transmission.</figcaption>
  </figure>

  <p>
    I owned the BOM and component selection, including working through a real bearing trade-off between McMaster, SDP/SI, and VEX options on price, dimensional tolerance, and stock availability before settling on SDP/SI for better tolerances at a comparable price. In the shop, I machined the gearbox walls, drilled the bearing holes, cut the shafts to length, made keys from keystock, and confirmed the gears were properly broached, then helped with initial assembly before the rest of the team finished it up.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/GEARBOX_FINAL_DEMO.mp4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">The finished transmission running at the contest.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The Mechatronic Cat Toy</h3>
  <p>
    For the mechatronics final project, a five-person team built an interactive cat toy: an acrylic enclosure housing motion-triggered feathers, plus a separate treat-launching mechanism, defended across PDR and CDR. We split into two sub-teams, one on the launching mechanism, one on the enclosure and feathers, and I was the connective thread on the electronics side of the feather sub-team: getting a microwave motion sensor to reliably trigger the linear actuators that move the feathers.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/PET_TOY.png" alt="Mechatronic Pet Toy Assembly" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: SolidWorks CAD model and acrylic physical prototype of the motion-triggered mechatronic cat toy.</figcaption>
  </figure>

  <p>
    On the mechanical side, I laser-cut the enclosure's top and bottom plates and the larger side-wall holes, and helped mill the outer wall. On the electronics side, I wired the Arduino, sensor, power supply, actuators, and motor drivers together and wrote the trigger logic myself. When the sensor reads high, three independently driven linear actuators each fire at a randomized speed and for a randomized duration, re-randomized every trigger, so the feathers move erratically rather than in an obviously repeated pattern. I'd planned that randomness deliberately, sketching out the random-speed, random-delay approach in my design notes before writing any code.
  </p>

  <p>
    The two sub-teams' work didn't fit together on the first pass: our enclosure came out too small for the launching mechanism the other sub-team built, which we caught and fixed together as a group. We also lost a teammate to COVID partway through and shifted her onto remote calculation work rather than losing that capacity entirely. Getting the electronics fully working took its own round of troubleshooting and test code before the sensor and actuators behaved the way I wanted.
  </p>

  <p>
    The biggest challenge on both projects turned out to be the same. Acrylic is genuinely hard to machine accurately, and since we had designed every hole and dimension ourselves, there was no one else to blame if a cut came out wrong. Both projects ran on a fixed budget, so a bad cut wasn't just a redo, it cost money and stock we didn't have room to lose, which made precision in the shop feel a lot higher-stakes than machining to someone else's forgiving tolerances.
  </p>
</div>
