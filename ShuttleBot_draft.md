# Shuttle Bot Page Rework — Draft to Fill In

Working doc for beefing up `project3.md`. Filled in from `ME75 Presentation 10_4.pdf`, `Revised Conops ME75 Presentation.pdf`, `ME75 CONOPS Reflection.pdf`, the ME75b electrical schematic and hardware-spec screenshots (motor/power calcs, Kalman filter notes), and the cable-tension MATLAB plot — all found in `Shuttle Bot Combined/`. This is a genuinely bigger project than the current page lets on: it's actually the **CHARIOT** lunar infrastructure concept (cable-riding "shuttle" + companion rover), and it directly connects to your ERNIE/CRATER project — CONOPS reflection docs refer to the rover by name as "ERNIE." Worth deciding whether to cross-link the two pages.

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** Lead on systems design/CONOPS development, and lead on the YOLOv8 crater-detection model. Team size confirmed at 4 (Diego, Enzo, Ethan, Shrey) — current page's "team of three" is wrong and needs fixing.
- **Team size:** 4 (plus TA Jules as advisor) (team size for second hald of class was 3, Maya Rushlow and James Estrella).
- **Duration:** Two-quarter capstone (ME/CS/EE 125: ME75a for systems engineering/CONOPS in fall, ME75b for hardware build in winter — dated Oct 2023 through Feb 2024 based on file dates).
- **Stack/tags:** Arduino Duo (motor/relay control), Spektrum DSMX RC transceiver, LiDAR, gyroscope, thermistors, Hall-effect sensors, brushed DC motors + ESCs, MATLAB (cable tension/power trade studies), Kalman filtering (state estimation), YOLOv8 (computer vision, crater detection).
- **Outcome:** Confirmed: the cable-traversal hardware never became fully functional — an important honesty constraint for the page (the current page's "successfully completed all course requirements" framing overstates this and needs to be walked back). The class demo itself worked around this: your YOLOv8 crater-detection model ran live on hardware, paired with a mechanism from a different team that physically actuated on the model's crater detections. The shuttle/cable-traversal mechanism itself was never demoed working.
- **Links:** [CRATER_DETECTION_DEMO shows software running on zed camera running on edge on NVIDIA Jetson Orin nano]

---

## 2. The systems engineering half (currently under-specified)

This is genuinely the strongest material in the source folder — the CONOPS decks show real mission-architecture thinking, not just a vague "developed a CONOPS" line.

- What did the CONOPS actually define? The mission was named **CHARIOT**: deliver an exploration rover (**ERNIE**) into a lunar crater (Shackleton, a NASA Artemis III candidate landing site, chosen specifically for its permanently shadowed regions / PSRs holding water ice) using a cable-riding "shuttle" to lower a payload rover to the crater floor and map terrain from above. The CONOPS defined the full mission sequence: commercial lander touchdown ~50–100m from the crater rim (sized against the real Astrobotic Griffin lander's ~625kg payload capacity), ERNIE driving to and climbing the rim, deploying a first anchor stake, circumnavigating the rim to plant a second stake with the cable pre-attached, a winch tensioning the line, the shuttle traversing the cable via a motorized cable-crawler subsystem (**LATTICE**), descending into the crater with a small payload rover attached magnetically, releasing it to collect samples, and retracing the whole sequence back to the lander.
- What systems engineering artifacts did you personally produce? Visible in the source material: a CONOPS diagram/flowchart (mission-phase breakdown), a risks-and-uncertainties table (6 mission steps each mapped to a specific risk and mitigation plan — e.g. rover tipping on the rim mitigated by obstacle detection + IMU inclinometer, cable disengagement mitigated by field/flume testing of tension and the magnetic hook), an assumptions list, and a full terrestrial-demo CONOPS mapped 1:1 to the lunar one (substituting a real desert site — Dish Hill — for the lunar crater). [Authored risks section and also CONOPS diagram]
- What was the biggest design trade-off you had to justify? Two stand out in the materials: (1) how to plant the second anchor stake on the far rim — the original concept used a compressed-air "javelin" launcher to fire a stake across the crater, which the team explicitly killed after faculty feedback (deemed too complex mechanically/controls-wise, uncertain if compressed air could deliver enough downforce to pierce lunar regolith or volcanic rock, and unclear if enough gas could be carried to span the crater) in favor of just having ERNIE physically drive the second stake around the rim; (2) cable count/topology — the team considered 4 cables (allows 3D motion, not just a 2D plane) vs. 1 cable (a single tensioned anchor point, simpler but less initial reach) vs. the 2-cable baseline that was chosen. There's also a real engineering trade study on cable diameter vs. tension vs. depth (see the MATLAB "Depth vs. tension" plot) showing tension has a sweet-spot minimum around 800–1000m of cable depth for a given diameter before it rises again — a legitimate mechanical engineering analysis worth describing on the page.
- Was this reviewed/scored by faculty or outside evaluators? Confirmed: the team received formal feedback after a preliminary CONOPS presentation (the "Reflection" memo is a direct response to that feedback, explaining what changed and why — this is strong evidence of an iterative, faculty-reviewed design process). [Don't recall much, would it be helpful to include diagrams as figures in website?]

---

## 3. Your specific hardware/software contribution (most under-specified part — prioritize this)

Now reframed: you were not the electrical/hardware owner — the ME75b schematic and motor/power calcs were likely a teammate's work — your two concrete ownership areas were (1) systems design/CONOPS and (2) the YOLOv8 crater-detection model. The page should center these two rather than claiming the electrical build as yours.

- **YOLOv8 crater detection (your work, confirmed details):** purpose was straightforward — detect craters in an image, full stop (not rim-entry-point localization or anything more elaborate). Trained on a custom, self-selected and self-labeled single-class dataset (`craters2.yaml`, class: "crater"). Confirmed from the actual training run logs (`runs/detect/train6/`, the final/best of at least 6 training attempts, `yolov8n.pt` base model, 100 epochs, batch size 16, 640px images): final-epoch metrics of ~0.52 precision, ~0.41 recall, ~0.47 mAP50, ~0.16 mAP50-95 — modest, honest numbers for a small custom single-class dataset, worth stating plainly rather than oversold. The repo shows real iteration (6 separate training runs, progressively refined) rather than a single one-shot attempt, plus a working inference/deployment path (`inference_yolov8.py`) that's what actually ran live at the final demo.  Can you add this into my Github, should it be visible?
- **CONOPS/systems design (your work):** you drove the mission architecture described in Section 2 — the CHARIOT concept, the stake-deployment redesign after faculty feedback, the risk/mitigation table, and the terrestrial-demo mapping. Worth stating plainly that this was your primary leadership contribution, distinct from teammates' hardware work.
- What was the starting teleoperated platform like, and what specifically had to change? [Initial teleoperated platform included a remote control that allowed the robot to self tension itself on a slacked line and once that was done, the user was able to use the control to traverse the cable.]
- Hardware note: the Arduino Duo-based electrical architecture (motion motors, tensioning motors/ESCs/brakes, LiDAR/gyro/Hall-effect/thermistor sensing, Kalman-filter state estimation, full battery/power budget) was designed on paper with real engineering rigor — motor torque/current sizing, a cable tension-vs-depth MATLAB trade study, and a full Amp-hour budget driving battery selection (3× 5S 6Ah LiPo in parallel, no BMS) — but never became a working physical system. Frame this on the page as "designed" rather than "built/demonstrated," to keep the page honest.
- **Video idea:** footage of YOLO crater detection running live on hardware at the final demo, ideally showing the paired team's mechanism actuating on a detection. Do you have this? [Not exactly, there is an image, ME75FINALDEMO]

---

## 4. Payload traversal capability (mentioned but not explained)

- What did the "payload" represent? Per the CONOPS: a small RC rover (conceptually "a mini version of ERNIE," with the same terrain wheels and a smaller camera for computer vision) that the shuttle carries down into the crater, releases magnetically to explore and collect samples, then magnetically reattaches to be hauled back up. In the demo it was just a general payload, don't remember the weight exactly, was simply to demonstrate that it could be deployed and lowered to the ground.
- How was payload stability maintained during traversal? The design used electromagnets to couple the payload rover to the shuttle rather than a mechanical arm — chosen explicitly as "simpler... and less complicated than an arm of sorts," at the acknowledged cost of constraining the payload rover's top-side design. The cable/line itself was specified to be wrapped in a durable protective jacket to simulate protection against sharp lunar debris. [FILL IN — purely passive/mechanical enswer?]
- What load/weight could it handle? [FILL IN — was a small mass maybe 2 pounds in demo, we didn't want to push it.]

---

## 5. A failure/debugging story

- What's a specific integration or reliability problem you hit when converting the platform to closed-loop autonomy? [FILL IN — When testing LiDar capability to compute slope of surface we quickly ran into point cloud processing issues for on board algorithm deployment, these bugs were quite costly and made us abondon this concept in favor of simpler vision based crater detection algorithm.]
- How did you diagnose and fix it? [Answered above]
- Did anything about "reliability and redundancy" come from a real failure? One candidate already documented: the risk table explicitly calls out "shuttle disengages with cable, cable loses tension due to shuttle weight" and "winch failure to de-tension, rover not separate" as named risks with field/flume-testing mitigation plans — worth mentioning even if these were anticipated risks rather than realized failures, since it shows the reliability thinking was concrete, not hand-wavy. [FILL IN — no, they were anticipated risks.]

---

## 6. Competition/evaluation context

- Was this tied to the NASA Big Idea Challenge lineage formally? Confirmed by the current page's existing text — the starting platform was a previous NASA Big Idea Challenge finalist robot. [FILL IN — Was purely the platform's history]
- How was the capstone project formally evaluated? Confirmed: a preliminary CONOPS presentation followed by formal feedback, which the team responded to in a written reflection and a revised CONOPS presentation — a real PDR-style review cycle. There was also a final demo day: your team's cable-traversal hardware itself was never tested/demoed working, so the demo instead ran your YOLOv8 crater-detection model live on hardware, paired with a second team's mechanism, which physically actuated in response to the model's crater detections — a cross-team integration demo rather than your own system end-to-end. [FILL IN — Don't have any formalized feedback, but we could say that TAs and professor valued the on the fly thinking during the project and going for a big goal, even though it did not exactly pan out.]

---

## 7. Video placement

- Do you have footage of the cable traversal test or CONOPS presentation? [FILL IN]
- Where should it sit — after the hardware upgrade section, since that's the most demonstrable part? [FILL IN — agree/disagree]

---

## Notes / anything else from the capstone report worth mining

- The mission's broader context is real and citable: the team proposed deploying CHARIOT on an actual commercial lunar mission (CP-11 or CP-12, as a follow-up to Artemis II) to provide infrastructure ahead of the crewed Artemis III landing — this is a legitimate, NASA-program-aware mission pitch, not a toy scenario, and is worth a sentence on the page for credibility.
- The terrestrial demo site was Dish Hill (Mojave region) — chosen for real topography (crater-like terrain, ~20–30° rim inclines) to stand in for the lunar crater, with ERNIE's obstacle avoidance and an IMU-based incline threshold (backing off past ~30°, targeting ≤20° for safety) doing the same job the CONOPS specified for the lunar case. This terrestrial/lunar mapping (real desert site standing in for Shackleton crater) is a nice concrete detail that makes the mission concept feel grounded rather than purely notional.
- Confirmed: the `yolo/` folder (YOLOv5/v8 crater-detection pipeline) is your work and belongs on this page — it's now the centerpiece of Section 3.
- The Student Acknowledgment PDF for Keck B212 lab use (Jan 2024) confirms some real fabrication/build work happened in a Caltech lab space, even though the cable-traversal system never became fully functional — worth a neutral mention ("built and bench-tested subsystems" rather than implying a working end-to-end prototype).
- Overall framing shift for the rewrite: this page should read primarily as a **systems engineering + computer vision** project (your two real ownership areas), with the electrical/mechanical build described honestly as "designed, not completed" — rather than the current page's framing, which implies a fully working autonomous hardware demo. That's a more defensible and, frankly, more interesting story for a portfolio: it shows mission architecture thinking, real trade-off decisions, and a shipped ML model, without overclaiming hardware results.
