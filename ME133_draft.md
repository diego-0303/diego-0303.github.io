# ME133A/ME133B Page Rework — Draft to Fill In

Working doc for beefing up `project4.md`. Filled in from `edu/Caltech/JuniorYr/ME133a/` (trajectory code, HW7 Jacobian/singularity work, RViz screenshots, 4 final-project video files) and `edu/Caltech/JuniorYr/WI2023_24/ME133b/` (weekly problem sets on planning/localization).

**Update: found the real ME133b final project** at `edu/Robotics/ME133b/packages/ME133b_FinalProject/` (a separate ROS 2 workspace, not the `JuniorYr` course-notes folder). See Section 3 below — it required actually running the code (which crashed on an edge case I had to patch around) to confirm what it does and generate real demo video/images.

**ME133a is well-supported by contrast:** real trajectory-generation code (`133trajectoryideas.py`) and RViz screenshots confirming the Atlas-on-crutches simulation described on the current page. Note the actual IK solver / main ROS control node isn't in this file (it's a small scratch/utilities file, not the full package), so some solver-level detail below is still open.

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** [FILL IN — individual project for both ME133a and ME133b, or team? The current page's language is first-person throughout, suggesting solo, but confirm.  133a was a partner final project with a grad student, 133b was a partner final project with a classmate]
- **Duration:** Two-quarter sequence confirmed — ME133a in Fall 2023, ME133b in Winter 2024 (per folder names `JuniorYr/ME133a` vs `JuniorYr/WI2023_24/ME133b`).
- **Stack/tags:** ROS 2, Python (numpy-based kinematics/trajectory code), URDF, RViz. [FILL IN — did ME133b use the same ROS 2 stack, or was it pure Python/matplotlib for planning algorithms? It was pure matplotlib for planning algorithms]
- **Outcome:** [Not really, don't think its worth mentioning.]
- **Links:** [Yes, I will say maybe we sort out Github repo stuff for all projects in the future.]

---

## 2. Atlas-on-crutches project (ME133a) — now fully confirmed, and it's a better story than the current page tells

Found the actual submitted ROS package at `edu/Caltech/JuniorYr/ME133a/FInal_project_updated-main/` (`project_main.py`, `CustomUtils.py`, `GeneratedTrajectories.py`, `KinematicChain.py`, `atlas_crutches.urdf`). `133trajectoryideas.py` was an earlier scratch/ideas file; this is the real thing.

- **The actual narrative is more specific than "walking on crutches":** the trajectory functions are literally named `injured_right_leg_move`, `right_leg_only_move`, and `walk` — the project simulates Atlas with an **injured right leg**, using the crutches to keep weight off that leg while it walks primarily on the good leg. This is a much stronger hook than the generic framing currently on the page and should headline the section.
- **Confirmed kinematic method:** closed-loop inverse kinematics via the Moore-Penrose pseudoinverse of the stacked linear+angular Jacobian, with proportional error feedback: `qdot = pinv(J) @ (v + 20*error)`, integrated forward each timestep (`q += dt*qdot`). This runs independently across **six separate kinematic chains** hanging off the pelvis: pelvis→left foot, pelvis→right foot, pelvis→upper torso, upper torso→head, upper torso→left hand, upper torso→right hand — a 30-DOF floating-base humanoid, not a single manipulator arm. A secondary-task, null-space-projected variant of the same solver also exists in the code (`get_qdot_and_q_from_qlast_with_secondary`) for prioritized/weighted tasks, available if needed but the main choreography drives each chain independently.
- **Confirmed floating base:** the pelvis itself translates and rotates over time as part of the gait (small per-step increments), which is what makes this "far more complex than classic manipulator trajectory planning" concretely true — you were solving IK for a robot whose base isn't fixed in the world, coordinated across six chains simultaneously, while also choreographing a specific timed sequence (grip crutches → shift weight/rotate torso → move the injured leg → alternate crutch-assisted steps on a loop).
- **No explicit damping/singularity-robustness in the IK law** (plain pseudoinverse, no damped-least-squares lambda term) — worth being honest about this rather than implying HW7's singularity-avoidance work carried directly into the final project's solver; it may not have been necessary for this motion range, but it's not there in the code as saved. [FILL IN if you recall specifically choosing not to damp, or hitting/avoiding a singularity during development]
- **Confirmed visually from RViz screenshots (`Screenshot 2024-01-03...`):** custom red crutch URDF models rigidly gripped by the Atlas hands, with visible torso lean/twist while the crutches are planted.
- **Failure modes before it worked?** [FILL IN — did you have an early version where Atlas fell over, or the IK solver failed to converge?]
- **Video confirmed:** `133aFinalVideov3.mp4` is the version actually submitted. Compressed and copied to `images/ME133A_ATLAS_CRUTCHES_DEMO.mp4` (19MB → 2.2MB, same H.264 codec, no quality loss beyond the resize).

---

## 3. Trapezoidal-decomposition path planning project (ME133b) — found and confirmed, but needs a correction

Found the real source at `edu/Robotics/ME133b/packages/ME133b_FinalProject/`. **Important correction to the current page:** this project is not coverage path planning (visiting every cell, cleaning-robot style). It's trapezoidal cell decomposition used to build a roadmap, then a single point-to-point A* path through that roadmap — closer to a PRM/roadmap-based motion planner than a coverage planner. You confirmed this is genuinely what was left as the final version, so the page needs to describe this accurately rather than repeat the old "Eulerian path through all cells" framing.

- **Confirmed implementation, from scratch:** `Test.py` (978 lines) builds everything itself on top of a provided `astar.py` utility (generic reusable A* — course-provided, not yours) — vertex extraction from triangular obstacles (`createVertices`), trapezoidal decomposition (`createTrapezoids`, `TrapLinesVertices`, `TrapLinesEdges`, several iterated `TrapNodes`/`TrapNodes2` attempts visible in git history), cell centroid extraction (`findCentroid`) to form roadmap nodes, connectivity checking between centroids (`connectsTo`), and finally A* search from a start node to a goal node through that roadmap.
- **Confirmed from git history** (16 commits): real iteration — "progress on creating polygon map" → "progress on trapezoid decomp" → several rounds of node-creation fixes ("still need to add nodes in middle of the trapezoids," "fixed node creation between vertices," "final node creation (fixed rightmost centroid)") → "Base for depth first search" → "Updated map with sufficient nodes and large space divisions; testing cost metrics for path" (final commit). This reads as genuine incremental debugging of a nontrivial geometric algorithm, which is worth keeping on the page as the "difficulty" story even without you needing to add much more.
- **What environment/map:** a small 14×10 grid world with 4 triangular obstacles (hardcoded polygon coordinates in the script), not a real-world/scanned map.
- **What broke it, confirmed directly:** I ran the actual code to generate demo footage and it crashed on an edge case — `findCentroid` can produce an empty/degenerate centroid for certain malformed trapezoids, which crashed the main loop with an `IndexError` until I added a one-line guard to skip empty centroids. This is a real, concrete example of exactly the kind of geometric edge-case bug that trapezoidal decomposition is notorious for (degenerate cells at obstacle vertices) — good failure-story material if you remember hitting this yourself during development.
- **Video generated:** I wrote a modified, non-destructive copy of the script (`Test_recording.py`, left the original untouched) that saves each visualization stage to disk instead of pausing for keyboard input, then stitched the frames into `images/ME133B_TRAP_DECOMP_DEMO.mp4` — a real run of your actual algorithm, not a mockup. Also grabbed `ME133B_TRAPEZOIDAL_DECOMP.png` (the decomposition stage) and `ME133B_FINAL_PATH.png` (final stage) as static figures.
- **Updated per your request:** regenerated the demo using the `(1,5)` → `(13,5)` start/goal pair instead of the original hardcoded `(1,7.5)`/`(1,2.5)`. The resulting path genuinely weaves between all four triangular obstacles (`(1,5) → (3,8) → (7,2.5) → (11.5,7.25) → (13,5)`), a much better demonstration of the roadmap actually routing around obstacles. `images/ME133B_TRAP_DECOMP_DEMO.mp4` and `images/ME133B_FINAL_PATH.png` are both updated to this version.

---

## 4. What connects the two quarters

- Current page frames ME133a as "inward" (mechanism/kinematics) and ME133b as "outward" (planning/navigation) — a clean framing worth keeping. [I would not say anything was re-used for these classes.]
- Which project do you consider the stronger demonstration of your skills? [Both equally, I would say kinematics focusses more on the mechanical nature of robotics.]

---

## 5. Video placement

- ME133a has real footage to use (see the 4 files above — just need to pick which one). ME133b now has a real generated demo video plus two still frames (Section 3) — ready to use.

---

## Notes / anything else worth mining

- HW7's P3/P4 subfolders (`a`, `b`, `c`, `d` variants sweeping a `lambda`/`gamma` damping parameter, each with condition-number and joint-state plots) show real quantitative investigation of singularity-robust inverse kinematics — a nice concrete technical detail if you want a "kinematics fundamentals" aside on the page, separate from the final project itself.
