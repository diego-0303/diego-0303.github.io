---
layout: page
title: ERNIE Rover Project
permalink: /projects/ERNIE/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">ERNIE: Mars Rover Project</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech CRATER Team Project</h3>

  <div style="background: var(--primary-highlight-color); border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Lead designer for the rover's first arm joint (chassis-mounted, highest-load joint); early brainstorming contributor on the suspension</span>
      <strong>Team</strong><span>CRATER grew from about 10 people to about 20 over my two years on the team</span>
      <strong>Duration</strong><span>Two years (2023–2025); full-time design work in 2023–2024, part-time and mostly administrative in 2025</span>
      <strong>Stack</strong><span>SolidWorks / Fusion 360, McMaster-Carr hardware library, AndyMark FRC gearboxes, custom gear reduction design</span>
      <strong>Funding</strong><span>Helped write grant proposals that secured $18,000 for the club from Caltech's Housner Fund and the California Space Grant Consortium</span>
      <strong>Outcome</strong><span>Didn't qualify for URC in 2023; invited to demo the platform at CIRC instead</span>
    </div>
  </div>

  <p>
    ERNIE was my first college experience on an engineering project team. As part of the Caltech Rover Autonomy, Technology and Exploration Research (CRATER) team, I spent two years designing mechanical subsystems for a Mars-analog rover, most substantially the first joint of its robotic arm. The team grew from about ten people when I joined to roughly twenty by the time I left, and the rover itself went through two hardware generations: an original silver-chassis version (2023–2024) and a later version (2024–2025) with a new chassis from Protocase, shown in blue below.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ERNIE_OG_GROUP.JPG" alt="Early CRATER team with ERNIE" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: Early CRATER team and the original ERNIE hardware.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The Arm's First Joint</h3>
  <p>
    My main contribution was the design of the arm's first joint, the one mounted directly to the chassis, providing rotation about the vertical axis and carrying the highest structural load of any joint in the arm since every other joint's weight passes through it. The target payload capacity was 5kg. My first design paired an off-the-shelf AndyMark "57 Sport" gearbox with a custom worm gear stage added on top. Choice of worm gear reduction was for self-locking, so the joint could hold a heavy arm in position under gravity without the motor fighting to stay in place.
  </p>
  <p>
    Initial design concepts introduced me to the inconsistencies between design and assembly and practical implementation. The worm gear stage turned out to be genuinely difficult to assemble reliably as undergraduates working without production tooling, and the fit tolerances required for the worm-and-shaft assembly to work correctly were harder to hit consistently than the analysis had suggested. After several redesign passes (from an initial two-shaft version through a revised three-shaft assembly), the team made a deliberate trade: we gave up the self-locking benefit of the worm stage in favor of a simpler commercial-off-the-shelf gearbox that we could actually assemble reliably. It's a decision I still think was correct: a joint that's theoretically superior but that a small team can't build consistently isn't actually the better design.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ARM_JOINT.jpg" alt="Robotic Arm Custom Joint Fabrication" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: An early version of the joint, built around a custom worm gear reduction stage.</figcaption>
  </figure>

  <p>
    By the time I graduated, the joint was at a first-prototype stage rather than a fully validated one. Its 3D-printed structural components and motor housings weren't able to hold up under real load conditions, a separate problem from the gearing choice above and the next thing that would have needed a metal redesign. The arm joint testing footage below was shot by teammates shortly after I graduated.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/ROBOTIC_ARM_TESTING.MP4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">The arm joint under bench test.</figcaption>
  </figure>

  <p>
    I was also part of early brainstorming on the rover's rocker-bogie suspension, the passive linkage (adapted from NASA JPL rover heritage) that keeps all wheels in ground contact over uneven terrain, though the arm work above was where I spent most of my time and where I had design ownership.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">A New Chassis</h3>
  <p>
    The later rover generation moved to a new blue chassis manufactured by Protocase. The clip below is from the chassis's first motor initialization test.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ERNIE_BLUE.JPG" alt="ERNIE rover with new blue Protocase chassis" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: The later ERNIE hardware generation, with a new chassis from Protocase.</figcaption>
  </figure>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/ERNIE_BLUE_TESTING.mp4" controls playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">First motor initialization test on the new chassis.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Competition Context</h3>
  <p>
    The rover was designed against the requirements of the University Rover Challenge (URC) and the Canadian International Rover Challenge (CIRC), competitions that test autonomous navigation, science sampling, equipment servicing, and extreme terrain traversal in simulated Martian environments. ERNIE didn't qualify for URC in 2023, but the team was invited to demonstrate the platform at CIRC that year.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/ERNIE_URC.JPG" alt="ERNIE at CIRC demonstration" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 4: ERNIE at the CIRC platform demonstration.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Funding the Team</h3>
  <p>
    Building a rover costs real money, so part of the work was raising it. As a group, we wrote proposals for grants and other fundraising, and together secured $18,000 for the club through Caltech's Housner Fund and the California Space Grant Consortium.
  </p>

  <p>
    Working on ERNIE was my introduction to a full engineering project with a team, and the valuable lesson that sacrifices in technical capability in a product have to be made according to other constraints such as time, budget, and, in this case, personnel.
  </p>
</div>
