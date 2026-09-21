---
layout: page
title: Biomimetic Flexible Drone
permalink: /projects/flying-carpet/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">Biomimetic Flexible Drone ("Flying Carpet")</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech GALCIT, Gharib Research Group</h3>

  <div style="background: var(--primary-highlight-color); border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Mechanical design lead: structure, motor/propeller sizing, and electronics integration, under PI Mory Gharib and graduate student advisor Ioannis Mandralis</span>
      <strong>Team</strong><span>Solo SURF Fellow, with a PI and a graduate student advisor</span>
      <strong>Duration</strong><span>10-week Howell N. Tyson, Sr. SURF Fellowship, with continued involvement through graduation</span>
      <strong>Stack</strong><span>SolidWorks and Onshape, 3D-printed PLA, machined polycarbonate and laser-cut mylar, BetaFlight, brushless motors + 4-in-1 ESC</span>
      <strong>Outcome</strong><span>Indoor lift-off tests achieved; later work moved to a constrained test rig with motion-capture cameras for controlled data collection. The research became the basis of my winning 2026 NDSEG Fellowship proposal</span>
    </div>
  </div>

  <p>
    As a SURF Fellow in Caltech's Gharib Research Group (GALCIT), I spent a summer, and remained involved afterward, designing a biomimetic flexible drone nicknamed the "Flying Carpet." The idea: most drones are rigid, but animals that fly or swim efficiently, jellyfish contracting their bell, birds flexing their wings, use flexible bodies to their advantage. The project asks whether embedding rotors directly into a flexible airframe can unlock similar benefits: multimodal flight combining hovering, flapping, and shape deformation, plus potential gains in efficiency, obstacle resilience, and crash tolerance.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/FLYING_CARPET1.jpeg" alt="Flying Carpet star-shaped flexible drone body" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: The assembled Flying Carpet, a star-shaped flexible body with a motor at each point and a central electronics hub.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Design Evolution</h3>
  <p>
    The design went through three real generations. It started as a single flapping wing on a hinge. That became the first "Flying Carpet": a square mylar sheet with a thruster at each corner. Once motors were mounted and powered on, that mylar version proved extremely hard to control and folded in on itself under thrust, so it was replaced with the current star-shaped foldable flying surface, machined from polycarbonate. The star shape is a deliberate choice: it decouples thruster action at each point from the others and provides natural folding modes for the structure itself, rather than fighting the material to get it to fold predictably.
  </p>
  <p>
    The design also branched into multiple prototype bodies built at different polycarbonate thicknesses. This wasn't about optimizing toward one "best," stiffest version; each thickness behaves differently in the air, and building several let us observe and capture data on how instability changed as flexibility changed, which is central to studying a flexible airframe in the first place. Alongside that, I moved motor and propeller sizing from a 1340-size motor and 2530 propeller combo up to a 1404 motor and 3025/3035 tri-blade propeller combo, adding roughly 400g of thrust headroom and landing on an estimated ~1200g of combined lift against a total vehicle mass of about 375g. I selected the motors, ESC, flight controller, and battery myself, and used BetaFlight's built-in tuning tools to fly rather than writing custom flight-control code.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/FLYING_CARPET3.png" alt="CAD model of the star-shaped Flying Carpet body" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: CAD model of the star-shaped body, designed in Onshape.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Electronics and Fabrication</h3>
  <p>
    The center of the body carries a 3D-printed electronics hub housing a 4-in-1 ESC and flight controller stack and a 3S 300mAh LiHV battery, controlled manually over a standard RC transmitter. The hub itself went through its own redesign to solve a real integration problem, mounting a battery and keeping wiring connected to the flight controller reliably on a structure that's supposed to flex and fold. Polycarbonate body sheets were waterjet-cut; the earlier mylar sheets were laser-cut; motor mounts and the hub were 3D-printed in PLA and assembled with M2 screws.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Testing</h3>
  <p>
    Initial testing was done indoors, on the lab floor, working toward stable hovering before attempting flapping or shape morphing, both of which were explicitly left as future work after the summer. The two biggest open challenges by the end of the SURF were embedding thrusters, electronics, and wiring in a flexible sheet without adding uncontrolled stiffness or failure points, and the fact that the system is dynamically unstable with no obvious off-the-shelf control method for stabilizing a body that's meant to deform in flight.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Constrained Test Rig</h3>
  <p>
    Later work moved testing into a dedicated rig built for controlled, repeatable data collection rather than free indoor hop tests. I modified the drone's center hub to slide up and down a vertical post, constraining it to motion along a single axis while flapping or producing thrust, and helped build the physical rig itself from a test table and aluminum extrusion. I also helped set up an OptiTrack motion-capture system, cameras positioned around the drone to record motion data during testing, aimed at informing flight-dynamics models on the controls side of the project. That controls and modeling work was led by the graduate student on the project; my role there was facilitating the physical setup rather than the modeling itself.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/FLYING_CARPET_CAMERA_RIG.jpeg" alt="OptiTrack motion capture camera rig for constrained flight testing" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: The OptiTrack motion-capture rig used for constrained, repeatable flight testing.</figcaption>
  </figure>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/FLYING_CARPET_RIG_TEST.mp4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">A test run on the z-constrained rig.</figcaption>
  </figure>

  <p>
    This project's biomimetic motivation traces back to animals like jellyfish, which use a flexible, contracting body to move efficiently through water, a useful reference point for why a flexible airframe might offer similar advantages in the air.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/FLYING_CARPET_2.jpg" alt="Jellyfish, the biomimetic inspiration for this project" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 4: Jellyfish, whose contracting, flexible bodies motivated this project's approach to flight.</figcaption>
  </figure>

  <p>
    Toward the end of this work, I wrote a graduate research proposal based on it, and it won me a 2026 National Defense Science and Engineering Graduate (NDSEG) Fellowship.
  </p>

  <p>
    This project is still active in the lab. I'd describe my role less as leading the whole research program and more as the person facilitating it end to end: specifying and building the mechanical hardware the controls and modeling work depends on, and helping stand up the physical infrastructure, the constrained rig and motion-capture setup, that later testing needed.
  </p>
</div>
