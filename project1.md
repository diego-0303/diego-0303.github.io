---
layout: page
title: LARY Autonomous Robot
permalink: /projects/LARY/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">LARY: LiDAR Assisted Robot for You</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech ME/CS/EE 169: Mobile Robots</h3>

  <div style="background: #f7f7f8; border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Co-lead, sole owner of hardware assembly, integration, and wheel/motor control</span>
      <strong>Team</strong><span>2 (with William Cen)</span>
      <strong>Duration</strong><span>~10 weeks (Spring 2025)</span>
      <strong>Stack</strong><span>ROS 2, Python, tf2, RViz, Raspberry Pi, LiDAR, wheel encoders + gyro, custom RRT planner, scan-matching localization</span>
      <strong>Outcome</strong><span>4th place of 15 teams, class-wide Pac-Man maze competition</span>
    </div>
  </div>

  <p>
    LARY is a fully autonomous mobile robot I built with classmate William Cen as part of Caltech's capstone robotics course, integrating localization, planning, navigation, and mapping on top of ROS 2. I assembled the robot from scratch, outfitted it with encoders, a gyroscope, and a LiDAR sensor, and owned the hardware and integration layer: motor control, sensor fusion, and wiring every ROS node together into one working autonomy stack, while William focused on localization and planning.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <video src="https://diego-0303.github.io/images/LARY_clip.mp4" autoplay muted loop playsinline style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);"></video>
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">LARY driving the maze autonomously, sensing, localizing, and replanning in real time.</figcaption>
  </figure>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/LARY1.jpeg" alt="LARY Autonomous Robot Platform" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: LARY autonomous mobile robot platform configured with LiDAR sensor, wheel encoders, and onboard power distribution.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Sense → Plan → Act, on Every Cycle</h3>
  <p>
    "Fully autonomous" meant three loops running concurrently, on separate ROS 2 callback groups so a slow sensor update could never stall the drive loop. On every wheel-encoder update, an odometry node fused encoder deltas with gyro heading into a live pose estimate. On every LiDAR scan, a localization node matched scanned points against a known map to correct that pose against drift. And on every odometry tick, a driving node read the corrected pose and current path segment to compute the next velocity command, while continuously watching three LiDAR sectors (forward, left, right) for anything blocking the way.
  </p>
  <p>
    If something blocked LARY's path for several scans in a row, whether a maze wall it hadn't mapped or a "ghost" robot standing in the way, it responded instead of stalling out: it marked itself stuck, added the obstacle into its internal map, and re-ran its path planner from its current position to the same goal, finding a new route around it in real time.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Localization: Fusing Encoders, Gyro, and LiDAR</h3>
  <p>
    Rather than a full EKF or particle filter, LARY used a simpler two-stage approach. First, wheel encoder deltas combined with gyro heading gave a fast, continuously updated pose estimate through basic dead-reckoning. Then, on each LiDAR scan, LARY matched its scanned points against the nearest wall points in the known map and used that comparison to nudge a separate correction transform back into alignment, rather than overwriting the odometry pose directly. Keeping drift correction on its own transform is the standard ROS localization pattern (as in AMCL): it let the fast odometry loop and the slower correction loop run independently without stepping on each other.
  </p>
  <p>
    The hard part was rejecting bad matches. A LiDAR ray reflecting off a moving ghost robot, rather than a real wall, could easily corrupt the correction, so a match was only accepted within a tight outlier distance threshold, and even accepted corrections were applied only fractionally per scan rather than all at once. That fractional update rate took real tuning: wheel slip was common enough that a higher correction fraction made the robot's pose estimate jerk back and forth, occasionally getting stuck fighting its own correction in place. Settling on the right fraction was a matter of trial and error, balancing responsiveness against stability.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/LARY_rviz.png" alt="RViz view of LARY's driven path over the mapped maze walls" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: RViz visualization during an autonomous run: LARY's driven odometry trail (red) against the LiDAR-scanned map (magenta), tracking toward a commanded goal pose (green arrow).</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The Pac-Man Competition</h3>
  <p>
    As a final challenge, LARY competed against 14 other teams in a class-wide Pac-Man-inspired maze competition, autonomously navigating the course to collect coins while avoiding a physical "ghost" robot patrolling the maze. Ghost and pellet positions were broadcast live over dedicated ROS topics during the event, which LARY's competition-specific code subscribed to directly, with that game-state wiring going in as one of the last pieces added, roughly a week before competition day. LARY's strategy combined obstacle avoidance around the ghost with prioritizing coin collection against the clock, scored on a combination of coins collected, ghosts "eaten" while powered up, and avoiding capture. LARY placed 4th overall, with the final ranking coming down to total coins collected: the one round it lost time in was a maze corner where it got cornered by the ghost.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/LARY3.jpeg" alt="LARY Maze Competition Day" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08);">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: Competition day, LARY navigating the Pac-Man maze course.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Debugging the Transform Tree</h3>
  <p>
    The most stubborn bug of the project lived in the ROS transform (TF) tree connecting odometry, map correction, and the LiDAR frame. The robot's motion started looking effectively random relative to the path it was supposed to be driving, with no obvious single point of failure, since every node touched the transforms in some way. Diagnosing it meant systematically disabling one node at a time and watching what broke, to isolate exactly which node was publishing, consuming, or transforming coordinates incorrectly. That process of elimination, rather than staring at any one file, was what finally pinned down the fault and got the pose chain behaving consistently again.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Hardware Notes</h3>
  <p>
    LARY ran on an onboard Raspberry Pi (Ubuntu 22 + ROS 2 Humble) paired with a 360° LiDAR unit (15 cm to 12 m range, 1080 points per scan). To keep the correction loop real-time on the Pi's limited compute, localization scans were down-sampled before matching. Rather than trusting the motors' labeled 48:1 gear ratio, I measured each motor's actual reduction directly from encoder counts, coming out to 48.438:1 and 48.875:1 for the left and right motors respectively, and empirically fit the PWM-to-velocity relationship for each wheel, since the labeled spec and the real hardware didn't quite agree.
  </p>

  <p>
    This project solidified my skills in ROS, sensor fusion, autonomous navigation, and hardware-software integration under real-world constraints.
  </p>
</div>
