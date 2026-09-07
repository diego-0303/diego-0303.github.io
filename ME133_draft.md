# ME133A/ME133B Page Rework — Draft to Fill In

Working doc for beefing up `project4.md`. Fill in the `[FILL IN]` blanks from your course projects, code, and reports. This page covers two distinct final projects (Atlas-on-crutches kinematics, and coverage path planning) — treat them as two mini-projects that each need their own specifics.

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** [FILL IN — individual project or team? If team, what size?]
- **Duration:** [FILL IN — two quarters total, confirm]
- **Stack/tags:** [FILL IN — ROS, Python, URDF, RViz, whatever libraries you used for kinematics/path planning]
- **Outcome:** [FILL IN — grade, standout feedback from the professor, or a specific benchmark your solution hit]
- **Links:** [FILL IN — GitHub repo for either project, if shareable]

---

## 2. Atlas-on-crutches project (ME133a) — needs the most detail

Current text explains the setup but not what made your specific solution work or what was technically hard about it.

- What kinematic method did you use to coordinate the crutches with the walking gait — inverse kinematics, a specific solver? [FILL IN]
- How did you handle the added constraint of the crutches within the kinematic chain (e.g. closed-loop constraints, contact points)? [FILL IN]
- What made this "far more complex than classic manipulator trajectory planning" in concrete terms — more DOF, contact constraints, balance? [FILL IN]
- Did you hit a specific failure mode (robot falling over, IK solver failing to converge, foot slipping) before getting it working? [FILL IN]
- **Video idea:** screen recording of the ROS/RViz simulation showing Atlas walking on the crutches. Do you have this saved? [FILL IN]

---

## 3. Coverage path planning project (ME133b) — needs the most detail

Current text explains the algorithm name but not your implementation choices or results.

- How did you implement the trapezoidal cell decomposition — from scratch, or using an existing library? [FILL IN]
- How did you solve for an optimal Eulerian path through the cells — what algorithm? [FILL IN]
- What environment/map did you test this on (a specific maze, an arbitrary polygon map)? [FILL IN]
- How did you measure "coverage" success — percentage of area covered, path efficiency, no gaps/overlaps? [FILL IN]
- What edge cases broke your first implementation (non-convex regions, obstacles, disconnected cells)? [FILL IN]
- **Video idea:** an animation or screen recording of the generated coverage path executing on the test map. Do you have this? [FILL IN]

---

## 4. What connects the two quarters (currently just narrated as "inward" vs "outward")

- Did anything from the ME133a kinematics work carry over into how you approached ME133b's planning problem? [FILL IN]
- Which of the two projects do you consider the stronger demonstration of your skills, and why? [FILL IN — this should probably get more visual space on the page]

---

## 5. Video placement

- Two distinct video opportunities here — recommend one clip per sub-project, placed right after each project's description. [FILL IN — confirm you have or can regenerate footage for one or both]

---

## Notes / anything else from your project reports worth mining

[FILL IN]
