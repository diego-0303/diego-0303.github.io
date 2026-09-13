---
layout: page
title: Shuttle Bot
permalink: /projects/shuttlebot/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">Shuttle Bot: Lunar Infrastructure Concept (CHARIOT)</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech CS/ME/EE 75: System Design Capstone Project</h3>

  <div style="background: #f7f7f8; border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Lead on systems design / CONOPS development, and lead on the YOLOv8 crater-detection model</span>
      <strong>Team</strong><span>Varied by phase: 4 for systems engineering (with Enzo, Ethan, Shrey); 3 for the hardware build (with Maya, James)</span>
      <strong>Duration</strong><span>Three-quarter capstone (systems engineering followed by a hardware build phase)</span>
      <strong>Stack</strong><span>Systems engineering / CONOPS, MATLAB trade studies, Arduino Due-based electrical design, YOLOv8, NVIDIA Jetson</span>
      <strong>Outcome</strong><span>Final demo ran our crater-detection model live on a Jetson, paired with another team's mechanism</span>
    </div>
  </div>

  <p>
    As part of my design capstone at Caltech (CS/ME/EE 75), I helped design <strong>CHARIOT</strong>, a lunar infrastructure concept: a cable-riding "shuttle" that lowers a companion rover into a crater to explore permanently shadowed regions holding water ice, targeting Shackleton crater, a candidate landing site for NASA's crewed Artemis III mission. The first phase was systems engineering, with a four-person team: taking an existing teleoperated robot, a former NASA Big Idea Challenge finalist, and developing a full concept of operations (CONOPS) for how it could support a real lunar mission. I led that systems design effort, and later led development of a YOLOv8 computer-vision model for crater detection.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/SHUTTLEBOT.JPG" alt="Shuttle Bot cable-crawler mechanism under bench test" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: The inherited cable-crawler mechanism during capability exploration testing in lab, remote-controlled via RC transmitter.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The CONOPS: CHARIOT</h3>
  <p>
    Our mission concept was for a commercial lander (sized against the real Astrobotic Griffin lander's ~625kg payload capacity) to touch down a short distance from the crater rim. The companion rover, ERNIE, drives to the rim and plants an anchor stake, then circumnavigates the crater rim to plant a second stake with a cable pre-attached. A winch tensions the line, and the shuttle, riding a motorized cable-crawler subsystem we called LATTICE, traverses the cable carrying a small payload rover magnetically attached underneath. The shuttle descends into the crater, releases the payload rover to collect samples, and the whole sequence retraces itself back to the lander. We proposed CHARIOT as a real follow-up mission, flown commercially after Artemis II, to help NASA scout Shackleton crater ahead of the crewed Artemis III landing.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/SHUTTLE_CONOPS_DIAGRAM.png" alt="CHARIOT lunar mission CONOPS flowchart" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); background: white;">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: The CHARIOT lunar mission CONOPS.</figcaption>
  </figure>

  <p>
    One design decision I'm particularly glad we made: our first concept for planting the second anchor stake on the far side of the crater used a compressed-air "javelin" launcher to fire the stake across. After a faculty review, we killed this idea. A pressurized-gas launch system added real risk and complexity for uncertain benefit, and there was no guarantee it could deliver enough downforce to pierce lunar regolith, or that we could carry enough gas to span the crater. We replaced it with a simpler answer: have the rover just drive the second stake around the rim itself. We documented that reasoning in a formal written reflection responding to the review.
  </p>
  <p>
    We also ran a trade study on cable diameter versus tension versus depth. For a given cable diameter, required tension drops to a minimum around 800 to 1000 meters of depth before rising again, a result that shaped which cable specs we would have needed for the lunar-scale mission. To validate the concept at all, we designed a terrestrial demo standing in for the lunar case: driving the same CONOPS at Dish Hill in the Mojave, whose real rim terrain and incline angles (kept under ~20–30°) let us test the same "can the rover safely climb and traverse a rim" question without leaving Earth. Every mission phase was mapped against a risk and a concrete mitigation plan, from the rover tipping on rough terrain (addressed with obstacle detection and an IMU) to the shuttle losing cable tension (addressed with dedicated field testing of the anchor and winch).
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/SHUTTLE_RISK_TABLE.png" alt="CHARIOT risks and mitigation table" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); background: white;">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: Risk and mitigation table covering every phase of the CONOPS, from rim climbing to sample retrieval.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Hardware</h3>
  <p>
    For the hardware phase, now a three-person team, we designed the electrical system to actually drive the shuttle: an Arduino Due controlling four motion motors on the cable-crawler plus two independent tensioning motors (each with its own ESC, brake, and cooling fan), fed by LiDAR, a gyroscope, Hall-effect sensors, and thermistors, with a Kalman filter for state estimation and a Spektrum RC transceiver for manual control. The mechanical cable-crawler mechanism itself was inherited from the platform's prior team; our job was the electrical and autonomy layer on top of it. The starting platform could already self-tension itself on a slack line and let an operator manually traverse the cable by remote control, so our goal was to close that loop into autonomy. The design work behind it was rigorous, including motor torque and current sizing against normal and worst-case (single-motor-failure) loads, and a full battery Amp-hour budget that drove the actual battery selection (three 5S 6Ah LiPo packs wired in parallel, passively balanced through shared balance leads instead of a full battery management system).
  </p>
  <p>
    Our original plan was to use LiDAR to compute rim and crater slope for autonomous navigation. Due to time and personnel constraints, we ran into point-cloud processing issues on our onboard compute that we could not resolve reliably, so we pivoted to a simpler vision-based crater detection model instead. That pivot is directly why the YOLOv8 work below exists. We were never able to get the full cable-traversal system working end to end as an autonomous unit, a real reminder that a rigorously designed system and a working one are not the same thing.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Final Demo</h3>
  <p>
    A YOLOv8 crater-detection model I built and trained ran live on an NVIDIA Jetson Orin Nano with a ZED camera. The model does one thing. It detects craters in an image, trained on a custom dataset I selected and labeled myself. After several rounds of training iteration, the final model reached about 0.52 precision, 0.41 recall, and 0.47 mAP50 on our validation set, modest numbers for a small, single-class custom dataset. At the demo, we paired with another team, Adaptive Landing Gear, whose mechanism physically actuated in response to our model's live crater detections, a cross-team integration demo that let us show working computer vision even though our own cable mechanism was not part of it.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/CRATER_DEMO_CLIP.mp4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">The YOLOv8 crater-detection model running live at the final demo.</figcaption>
  </figure>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/SHUTTLE_BOT2.jpeg" alt="Team Shuttlebot final demo day setup" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 4: Final demo day, Team Shuttlebot paired with the Adaptive Landing Gear team.</figcaption>
  </figure>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ME75FINALDEMO.jpeg" alt="Final demo day setup" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 5: The joint demo setup on final presentation day.</figcaption>
  </figure>

  <p>
    The biggest lesson from this project was not technical. Systems engineering courses exist to teach exactly this. Real systems rarely go as planned, and the gap between a rigorously designed concept and a working prototype is where the real learning happens. Between the CONOPS work, the hardware design, and the pivot to a shipped crater-detection model, the real growth for me was learning how to manage a schedule and a project as circumstances changed. It's the project that best represents how I think about ambiguous, system-level engineering problems.
  </p>
</div>
