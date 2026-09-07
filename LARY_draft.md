# LARY Page Rework — Draft to Fill In

Working doc for beefing up `project1.md`. Go through your course materials (report, code, slides, photos/footage) and fill in the `[FILL IN]` blanks. Once this is filled out, I'll turn it back into the actual page.

---

## 1. At-a-glance bar (new — goes at top of page)

Recruiters scan before they read. This block should answer "what is this, in 5 seconds."

- **Role:** [Co-lead, sole owner of integration, hardware assembly, and wheel control]
- **Team size:** [2 — Diego Garcia & William Cen]
- **Duration:** [~8 weeks (repo history runs 2025-04-06 to 2025-05-27)]
- **Stack/tags:** ROS 2 (rclpy), Python, tf2, RViz, Raspberry Pi, RPLiDAR (via `rplidarfix.py`/`shared169` driver), differential-drive encoders + gyro, custom RRT motion planner, scan-matching localization
- **Outcome:** ["4th of 15 teams"]
- **Links:** [FILL IN — GitHub repo URL if code can be shared / video URL once you have it. Confirmed local repo exists at `robotws/src/project` — check if it's pushed anywhere, e.g. a private Caltech GitHub org, before linking publicly.]

---

## 2. What "autonomous" means here (expand existing intro paragraph)

Current text just says "fully autonomous" — needs to show the actual sense→plan→act loop.

- What was the control loop doing on every cycle? Every odometry update (`odometry.py`), LARY fused wheel-encoder deltas with gyro heading into a pose estimate, broadcast as an `odom→base` TF; every scan (`localize.py`), it scan-matched LiDAR points against the known map to correct that pose (`map→odom` TF); and `autodrive.py` read the fused pose plus the current path segment to compute the next `cmd_vel`, while continuously checking LiDAR sectors (forward/left/right) for obstacles to gate motion.
- What loop rate / update frequency did it run at? Odometry updated on every wheel-state message (fast, motor-controller rate); LiDAR-based localization/obstacle-checking ran on every scan (~5–10 Hz typical for RPLiDAR); driving commands were re-evaluated on every odometry callback (fast group) so the robot was always re-checking pose against its current waypoint. Fast (odometry/driving) and slow (scan-based) callbacks were split into separate ROS 2 callback groups running on a multithreaded executor so localization/replanning never blocked the drive loop.
- What happened when something unexpected entered its path — did it replan, stop, or reroute? `autodrive.py` monitored 3 LiDAR sectors (forward, left, right) each scan; if a sector stayed blocked for `STUCK_VALUE` consecutive scans, it published `/stuck`. `planner.py` caught that, froze a snapshot of the known map, inflated LiDAR-detected obstacle cells into it for `REPLAN_DURATION` scans, rebuilt the RRT roadmap around the new obstacle, and re-ran RRT from the robot's current pose to the same goal — i.e., a genuine local replan around a dynamically appearing obstacle (a ghost), not just a stop. [Great candidate for the video clip]

---

## 3. Localization & mapping approach (this is the most under-specified part — prioritize this)

Current text: "localize on a known map while rejecting noise and outliers" — too vague, this is likely your strongest technical selling point.

- What algorithm did you use? Not an EKF or particle filter — a custom two-stage approach: (1) dead-reckoning odometry from wheel encoders + gyro, giving a fast local `odom→base` estimate; (2) a point-to-point scan-matching correction (closed-form least-squares alignment of LiDAR return points to nearest known-map wall points — essentially one ICP-style iteration per scan) that nudges a separate `map→odom` correction transform. Splitting drift correction into its own transform (rather than rewriting the odometry pose directly) is the standard ROS localization pattern (like AMCL) and let the two loops run at different rates/threads without corrupting each other.
- What sensors fed into it and how were they fused? Wheel encoders (`encoder.py`) gave left/right wheel angle deltas → converted to forward distance + heading change via differential-drive kinematics; gyro (`gyro.py`) directly supplied heading `theta`, replacing the (less accurate) encoder-derived heading in `odometry.py`'s pose update. LiDAR scans were down-sampled (every 20th ray) and used only for the map-correction step, not blended into odometry directly — a loose/sequential fusion rather than a single joint filter.
- What specifically made this hard? Rejecting bad scan-to-wall correspondences was the crux: a match was only accepted if the matched wall point was within an `OUTLIER` distance threshold (0.2 m) of the scanned point, so a LiDAR ray hitting a moving "ghost" robot instead of a real wall wouldn't corrupt the pose correction. The correction was also only ever applied fractionally (`UPDATE_FRACTION = 0.3` per scan) rather than fully, to avoid jerky pose jumps or overcorrecting on a single noisy scan — a smoothing/damping tradeoff against responsiveness. [FILL IN — any wheel slip or gyro drift issues you personally hit are worth a sentence here.  In the event of a wheel slip, which happened quite often, a higher value update fraction produced very jerkey movement and the robot would get stuck in the same position correcting itself back and forth, some of the reasoning for settling on this update fraction after some trial and error.]
- Do you have a way to show estimated pose vs. ground truth (e.g. an RViz recording, a plot from your report)? Yes — Write Up 2 includes `plotwheeldata`-generated plots (position/velocity/PWM vs. time, command vs. desired vs. actual) from two stages: an unfiltered feedback-control run and a filtered run using a 0.1s filter time constant that visibly smooths out actual-velocity noise. Write Up 4 also has an RViz screenshot showing a real autonomous run's odometry trail (red) against the LiDAR-scanned map (magenta points) with a live goal pose. These are static images, not live-correction footage, but they're real evidence of the pipeline working and are usable on the page now.
- **Video idea:** screen capture of RViz/visualization showing the estimate correcting itself in real time. Do you have this footage or can you regenerate it? Robot is no longer assembled, so this can't be regenerated. Use the existing RViz screenshot (Write Up 4, showing the driven path over the mapped walls) as a static image instead, with a caption explaining what's shown — good enough for a portfolio page, and you can swap in real video later if you ever find footage from the event.

---

## 4. Competition mechanics (Pac-Man maze round)

Current text is a one-liner. Needs specifics to be credible.

- How many total teams competed? Confirmed: 15 teams.
- What separated 4th place from 1st–3rd — time, tokens collected, collisions, something else? [Overall tokens corrected did it, one round where bot got cornered.]
- How did LARY "interact with dynamic agents simulating ghosts" — detect and evade? Something else? Per `planner.py`/`autodrive.py`: LiDAR-sector monitoring flagged when a path was blocked for several consecutive scans (`/stuck` topic), which triggered the planner to inflate the obstacle into its map and re-run RRT for a new route around it — so specifically: detect via sustained LiDAR blockage, then replan (not just stop-and-wait or reactive swerve). [FILL IN — confirm ghosts were physically other robots/props on the course, and whether there was also a purely reactive obstacle-avoidance layer independent of full replanning. Ghost was a physical robot in the course. Strategy was to avoid ghost while doing obstacle avoidance and collect coins along the way, prioritizing time in course.]
- Was there a scoring rubric or set of rules you can summarize in a sentence? [FILL IN — message types like `pacman_msgs/GameState`, `BlinkyState`, `PowerPelletInfo` exist in the repo, suggesting tokens/pellets and ghost state were broadcast over ROS topics as part of the game — worth describing if you recall the format. These states where in fact broadcasted over ROS topics on competition day and were how out bot was able to tell where these specific elements were during competition.  The rubric was a combined score of coins collected, times eating ghost with power up, and not getting eaten by ghost.]
- **Video idea:** actual maze run footage, ideally with a caption/voiceover noting the decision being made at key moments (e.g. "replanning after ghost blocks path"). Do you have raw footage from the event? [FILL IN, yes instruct me how to add into website, along with other images. ]

---

## 5. Your specific contribution vs. your partner's

Page currently reads as pure "I" despite being a 2-person team.

- What did you personally own — localization? Control? Hardware assembly? Something else? [FILL IN — git history is mostly committed under a shared "LARY" machine account rather than per-person, so I can't split this from the repo alone. Your working-doc note says "sole owner of integration, and wheel control" — that maps to `odometry.py`/`wheelcontrol.py` (encoder+gyro fusion, PWM/velocity conversion) plus wiring the nodes together end-to-end. Confirm/expand.]
- What did your partner own? [FILL IN — William Cen is your named co-author on the Write-Up 1 PDF and appears in git commit authorship as "William"; worth naming his specific piece, e.g. localization, planning, or hardware build.  WIlliam mostly worked on localization and planner. I took care of hardware assmebly and integration, ecoder+gyro fusion, transforms for positon, PWM/Velocity conversion, and wiring nodes together end-to-end.]
- If the video is a screen recording, can you caption which parts are your code specifically? [FILL IN]

---

## 6. A failure/debugging story (currently missing entirely — strong signal for interviews)

One good "it broke, here's how I found and fixed it" beat is worth more than a paragraph of polished description.

- What's a specific bug or failure you hit? Candidates visible in the repo history worth writing up (pick whichever you remember best): (1) commit "Fixed system crash and reduced velocity max" — some combination of speed and control caused an outright crash, fixed partly by capping `MAX_VEL`; (2) commit "Fixed estimate update, added pose message, tweaked autodrive" — a bug in how the `/initialpose` estimate was applied to the `map→odom` transform; (3) from the Write Up 1 PDF: the right motor's commanded speed came out inverted, which they exploited to produce a 90° clockwise turn — worth mentioning if this caused early confusion before you understood why. [I remember one specifically where the transforms where very difficult to get right.]
- How did you diagnose it? [The robot was not doing what was expected of it based on out tranforms and the path that was being commanded, the motions seemed quite random when we noticed.]
- How did you fix it, and what changed as a result? [We had to run the stack eliminating one file at a time to determine what file was either creating, recieving, or doing operations with the transforms.]
- **Video idea (optional, nice if available):** before/after clip — robot failing vs. robot corrected. [Don't have this unfortunately]

---

## 7. Hardware/scale context (currently only implied by photos)

- LiDAR model/specs (range, resolution)? Confirmed from Write Up 4: range 15 cm – 12 m, 1080 points per full scan (~0.33° angular resolution) — consistent with an RPLiDAR-class 360° 2D LiDAR (driven via the `rplidarfix.py` workaround in `shared169`).
- Compute constraints — Raspberry Pi model, any performance limits you had to work around? Setup scripts (`setup/SetupPiUbuntu22.bash`, `PiInstallUbuntuROS.pdf`) confirm a Raspberry Pi running Ubuntu 22 + ROS 2 Humble (exact model unconfirmed — safe to describe generically as "an onboard Raspberry Pi" on the page rather than naming a specific model). Localization down-sampled LiDAR scans to every 20th point (`interval = 20` in `localize.py`) before scan-matching — a direct compute-budget tradeoff to keep the correction loop real-time on the Pi.
- Control loop rate, if not already covered in section 2? Wheel radius (0.0339 m) and half-track-width (0.06765 m) constants in `odometry.py` set the differential-drive kinematics; `MAX_VEL = 0.5` m/s and `MAX_THETA_DOT = 5.0` rad/s in `autodrive.py` were the commanded-velocity saturation limits. Per-motor gear reduction was individually calibrated rather than trusting the labeled 48:1 spec — measured at 48.438:1 (left) and 48.875:1 (right), from 16 magnet-disk counts × 4 north poles per motor rotation, yielding 775 (left) / 782 (right) encoder counts per wheel rotation. Worth a line here since it's a concrete example of calibrating actual hardware rather than trusting datasheet values — the wheel PWM-to-velocity relationship was similarly measured empirically (linear fit, ~0.09–0.10 rad/s per PWM count) rather than assumed.

---

## 8. Video placement

Once you have footage:

- Where should it live on the page — hero spot at top, or after the intro paragraph? [near top, before the technical detail, so it's the first thing seen]
- Format — embedded player, GIF loop, or link out to YouTube? [GIF ]

---

## Notes / anything else from the course materials worth mining

- The RRT planner (`rrt.py`) is a from-scratch implementation, not a library call: random sampling within map bounds, nearest-node extension in fixed `DSTEP=0.1m` increments, collision checking against an inflated free-space grid (obstacles inflated by `NODE_THRESHOLD=0.25m` so the path keeps clearance from walls), goal-connection check each iteration, and a shortcutting post-process pass that removes unnecessary intermediate waypoints when a direct line between non-adjacent nodes is collision-free. Worth a line in the planning section if you want another concrete algorithmic detail.
- ROS message types `pacman_msgs/GameState`, `BlinkyState`, `PowerPelletInfo`, `PointWithIDStamped` exist in `common/pacman_msgs` — broadcast by the course's game-master infrastructure (ghost positions, pellet locations, game state). Confirmed: these were wired into your own code roughly a week before competition (not present in the earlier goal-by-goal development, which explains why no subscriber to them shows up in the main `robot` package checkout used for this draft).
- Two most-recent commits are WIP/stash entries ("WIP on master" / "index on master") from 2025-05-27 — confirmed this is close to the actual competition date, consistent with the ~8-week "Duration" above.
