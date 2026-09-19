# ME133A/ME133B Page Rework — Draft to Fill In

Working doc for beefing up `project4.md`. Filled in from `edu/Caltech/JuniorYr/ME133a/` (trajectory code, HW7 Jacobian/singularity work, RViz screenshots, 4 final-project video files) and `edu/Caltech/JuniorYr/WI2023_24/ME133b/` (weekly problem sets on planning/localization).

**Heads-up — ME133b's actual final project files aren't in this folder.** ME133b's directory is entirely weekly problem sets (roadmaps, D*, RRT, occupancy grids, Bayes-filter localization) plus two genuinely empty "untitled folder" directories. There's no trapezoidal-decomposition coverage-planning code or writeup anywhere in the dump — the current page's ME133b description may be drawing on memory/a report saved elsewhere, or that project might need to be reconstructed from memory. [FILL IN — do you have this code/report saved anywhere else? If not, I can still describe the algorithm accurately from memory of how trapezoidal decomposition coverage planning works, but I can't confirm your specific implementation choices without source material.]

**ME133a is well-supported by contrast:** real trajectory-generation code (`133trajectoryideas.py`) and RViz screenshots confirming the Atlas-on-crutches simulation described on the current page. Note the actual IK solver / main ROS control node isn't in this file (it's a small scratch/utilities file, not the full package), so some solver-level detail below is still open.

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** [FILL IN — individual project for both ME133a and ME133b, or team? The current page's language is first-person throughout, suggesting solo, but confirm.]
- **Duration:** Two-quarter sequence confirmed — ME133a in Fall 2023, ME133b in Winter 2024 (per folder names `JuniorYr/ME133a` vs `JuniorYr/WI2023_24/ME133b`).
- **Stack/tags:** ROS 2, Python (numpy-based kinematics/trajectory code), URDF, RViz. [FILL IN — did ME133b use the same ROS 2 stack, or was it pure Python/matplotlib for planning algorithms?]
- **Outcome:** [FILL IN — grade, or any standout feedback from the professor on either project?]
- **Links:** [FILL IN — any GitHub repo for either project?]

---

## 2. Atlas-on-crutches project (ME133a) — confirmed by real code and screenshots

- **Confirmed from `133trajectoryideas.py`:** the trajectory generator computes separate Cartesian-space desired trajectories (position, velocity, rotation, angular velocity) for the left hand, right hand, and both shoulders simultaneously, moving hands to grip the crutches and rotating the shoulders through a specified angle, plus a separate `walk()` function for foot trajectories. This is task-space trajectory generation (not joint-space), which matches "far more complex than classic manipulator trajectory planning" — you were driving multiple independent end-effectors (two hands + torso/shoulder orientation + feet) simultaneously, not just one arm's tip.
- **What kinematic method coordinated crutches with the gait?** [FILL IN — the file I have is trajectory generation only; the actual inverse-kinematics solve (likely a weighted pseudoinverse Jacobian method, standard for this course based on the HW7 problem set on Jacobian condition numbers) must live in a separate main/IK node not present in this folder. Can you confirm the IK approach — primary/secondary task weighting, damped least squares, something else?]
- **Confirmed visually from RViz screenshots (`Screenshot 2024-01-03...`):** custom red crutch URDF models rigidly gripped by the Atlas hands, with visible torso lean/twist while the crutches are planted — matches a real physically-plausible crutch-walking gait, not just a kinematic curiosity.
- **What made this hard, concretely:** [FILL IN — HW7's focus on Jacobian condition number and singularity avoidance (with a `lambda`/damping parameter swept across values, per the P3/P4 subfolder naming) suggests singularity handling was a live issue in the course generally — was this directly relevant to the crutch project too, e.g. the robot approaching a kinematic singularity while balancing on crutches?]
- **Failure modes before it worked?** [FILL IN — did you have an early version where Atlas fell over, or the IK solver failed to converge?]
- **Video evidence — you have 4 separate video files:** `133a Final project VideoDemo.mp4` and `133aFinalProjectVideo.mp4` (both exactly 65.1s — likely the same final cut saved twice), `133aFinalVideov2.mp4` (102s), `133aFinalVideov3.mp4` (79s). [FILL IN — which of these is the one to feature? The differing lengths suggest different edits/takes — is v3 the final polished one, or is the "VideoDemo" pair the submitted final?]

---

## 3. Coverage path planning project (ME133b) — needs source material or memory

Per the heads-up above, I don't have your actual implementation to verify against. From what the current page already states (trapezoidal cell decomposition, Eulerian path through cells, continuous coverage within each cell) plus your own recollection, please fill in:

- How did you implement the trapezoidal cell decomposition — from scratch, or using an existing library? [FILL IN]
- How did you solve for an optimal Eulerian path through the cells — what algorithm? [FILL IN]
- What environment/map did you test this on? [FILL IN]
- How did you measure coverage success? [FILL IN]
- What broke your first implementation (non-convex regions, obstacles, disconnected cells)? [FILL IN]
- **Video/image evidence:** [FILL IN — anything saved from this project? A generated coverage-path plot, a screen recording?]

---

## 4. What connects the two quarters

- Current page frames ME133a as "inward" (mechanism/kinematics) and ME133b as "outward" (planning/navigation) — a clean framing worth keeping. [FILL IN — did anything concrete carry over, e.g. did you reuse any trajectory-generation code or math between the two projects?]
- Which project do you consider the stronger demonstration of your skills? [FILL IN — this should probably get more visual space on the page]

---

## 5. Video placement

- ME133a has real footage to use (see the 4 files above — just need to pick which one). ME133b currently has none confirmed. [FILL IN once source material for ME133b is settled]

---

## Notes / anything else worth mining

- HW7's P3/P4 subfolders (`a`, `b`, `c`, `d` variants sweeping a `lambda`/`gamma` damping parameter, each with condition-number and joint-state plots) show real quantitative investigation of singularity-robust inverse kinematics — a nice concrete technical detail if you want a "kinematics fundamentals" aside on the page, separate from the final project itself.
