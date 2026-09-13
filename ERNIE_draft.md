# ERNIE Rover Page Rework — Draft to Fill In

Working doc for beefing up `project5.md`. Filled in from `/Users/Diego/Documents/edu/Caltech/CRATER/` (the `Manipulator/Theta1_2023` and `Manipulator/old designs` CAD trees, part drawings, and screenshots) plus the new media you dropped into `images/`: `ERNIE_BLUE.JPG`, `ERNIE_BLUE_TESTING.MOV` (~12s), `ERNIE_OG GROUP.JPG`, `ERNIE_URC.JPG`, `ROBOTIC_ARMTEST_SETUP.JPG`, `ROBOTIC_ARM_TESTING.MP4` (~19s).

Heads-up on the source folder: screenshots dated Aug 2023–Jan 2024 in `CRATER/` are **not** CRATER material — I checked one (Jan 24, 2024) and it's a Discord screenshot from the "CHARIOT" server with channels for `team1-flying-and-hopping`, `team2-shuttle-and-rover`, etc. — that's your ME75/Shuttle Bot course Discord, evidently synced into this folder alongside the real CRATER files. I only pulled from the screenshots in the Feb–May 2023 range and the CAD/part files themselves, which are unambiguously CRATER/ERNIE.

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** Confirmed from the CAD trail: you owned the manipulator/arm joint design end-to-end (multiple design generations under `Manipulator/Theta1_2023` and `Manipulator/old designs`), not just "contributed to" it as the current page's language undersells. [FILL IN — confirm suspension/rocker-bogie ownership; I didn't find CAD evidence of your specific suspension work, only a single bearing STEP file in the `suspension/` folder, which suggests either the suspension work happened elsewhere (not saved) or your role there was smaller than the arm work. Worth being precise here rather than repeating the current page's "arm + suspension" framing if suspension wasn't really yours.] I was a part of brainstorming designs for the initial suspension system, but yes definitely less involved than with the robotic arm. 
- **Team size:** [FILL IN — Total team of around 20 people as time went on.  Grew from 6 people to 20 within 2 years thanks to recruitment efforts.]
- **Duration:** CAD file dates span at least Feb 2023 ("old designs/theta1" screenshots) through mid-2023 ("3 Stage HD - 57 Sport" final arm assembly). [Total 2 years, 2023-2025, involvement in 2025 was mostly administrative and part time work.  The silver version rover is from 2023-2024 and the blue version with a new blue chasis from protocase was from 2024-2025.]
- **Stack/tags:** SolidWorks/Fusion 360 (mixed .SLDPRT/.SLDASM and .f3z files present), McMaster-Carr hardware library, an AndyMark "57 Sport" FRC gearbox as the base actuator, custom worm-gear + spur-gear reduction stages, 6061 aluminum tube/sheet stock, stainless/alloy steel fasteners.
- **Outcome:** `ERNIE_URC.JPG` (one of your new images) strongly suggests the rover did reach the University Rover Challenge. [Did not make the cut for 2023 URC, but did get invited to test out the platform for CIRC which is where this photo is from]
- **Links:** [FILL IN — CRATER team page/website if it's still up, competition results page]

---

## 2. The robotic arm / manipulator (this is your best-documented work — prioritize this)

The CAD trail here is genuinely deep and shows real iteration, not a single design pass.

- **Design lineage (confirmed from folder structure):** the joint went through at least three visible generations: an early "theta1" design (Feb 2023 screenshots show a 2-shaft worm-and-spur-gear reduction with a stepper/servo motor, mounted sleeve bearings, and a shaft-mounted worm + metal worm gear from McMaster), a revised "T1V2_2Shaft" version (adds a second worm-gear set, crossed-roller bearing at the "Theta0Connection," clamping shaft collars), and a final consolidated design in `Manipulator/arm/` built around an AndyMark "3 Stage HD - 57 Sport" gearbox (a stock FRC gearbox, revised in 2018 per its datasheet to add high-density stages and more ratio options) paired with a custom motor block, encoder mount (a CUI Devices AMT103 series encoder), and machined aluminum housings.
- **What made the joints "custom high-torque":** the base actuation used a proven, off-the-shelf FRC gearbox (57 Sport) for the bulk reduction, but you then added a custom worm-gear stage on top — worm gearing is a deliberate choice here since it's self-locking/non-backdrivable, which matters for an arm joint that needs to hold position under load without the motor fighting gravity constantly. [Yes the main choice was to avoid backdrivability]
- **What payload/torque requirement were you designing to?** [5kg]
- **How many DOF, and what tasks?** The current page says 6-DOF. [FILL IN — confirm, and which joints were yours specifically vs. teammates' — the CAD folder only shows detail for what looks like a single joint type (theta1), so if the arm had 6 DOF, other joints likely belonged to teammates.  Yes, I was in charge of the first joint providing rotation about the y axis coming off of the chasis, so had a lot of load on it.]
- **Did you test the arm under load, and did anything break or need redesign?** The multiple design generations (theta1 → T1V2_2Shaft → final 3-shaft assembly) are themselves evidence of real iteration. [No testing, mostly internal design reviews with teamates.  It actually moved away from the worm gear in the end because of assembly complexity was causing issues.]
- **Video idea:** `ROBOTIC_ARM_TESTING.MP4` (19s, already in `images/`) and `ROBOTIC_ARMTEST_SETUP.JPG` are exactly this — confirm what the test in the video actually shows (load test? range-of-motion check? a specific task?) so the caption can be accurate.

---

## 3. Rocker-bogie suspension work (currently claimed on the page, but thin in the source material)

- The `CRATER/suspension/` folder contains exactly one file: a McMaster low-profile sealed steel ball bearing STEP import. That's not enough on its own to support the current page's implication that you did significant suspension design work. [FILL IN — did you actually do suspension design, and if so, where are those files? Or was your suspension involvement more limited (e.g. reviewing/assembling a teammate's design) than the current page implies?]
- If your suspension involvement was real but the files just aren't saved here: [FILL IN — geometry/materials/joint hardware you specified, terrain requirements it was designed against, any testing]
- If it was minor: I'd recommend the rewritten page lead with the arm work (which is well-documented) and either cut the suspension claim or downgrade it to something accurate and modest.

---

## 4. Competition context (CIRC/URC)

- `ERNIE_URC.JPG` suggests the rover reached University Rover Challenge. [Only invited to test out system in CIRC, did not make URC]
- If you'd left the team or the rover was still in development when you moved on, what state did you leave the arm/rover in? [Robotic arm was left in mostly a first design -> prototype state.  The first prototype had failed becuase design had 3d printed components and motor housings that simply could not handle load conditions. The testing videos are from shortly after I graduated.]

---

## 5. A failure/debugging story

- The multiple CAD generations (theta1 → T1V2_2Shaft → final assembly) imply something drove each revision. [Redesigns were motivated by initial design with worm gear failing during assembly.  The assembly process proved quite complicated to accomplish for us as undergrads at the time, so we opted to sacrifice the anto-backdriving feature for a simple COTS gearbox.]

---

## 6. New media — how it maps to the page

- `ERNIE_OG GROUP.JPG` — likely your original CRATER team photo; good candidate for an early "how this started" figure. [Yes, early ERNIE work]
- `ERNIE_BLUE.JPG` + `ERNIE_BLUE_TESTING.MOV` (12s) — a rover chassis in blue, distinct from the earlier `ERNIE2.jpeg` already on the page. [Later hardware version, video shows first initialization of chasis motors]
- `ERNIE_URC.JPG` — [From CIRC]
- `ROBOTIC_ARMTEST_SETUP.JPG` / `ROBOTIC_ARM_TESTING.MP4` — the arm bench-test setup and footage; pairs directly with Section 2.

---

## Notes / anything else from the CRATER folder worth mining

- There's a custom-modeled brushless outrunner motor (`x8308s-outrunner-motor-1`, a full multi-part CAD model: rotor, stator, coil, windings, magnets) sitting alongside the theta1 joint files — this looks like it was modeled to evaluate fit/mounting for an alternative actuator, separate from the AndyMark-gearbox-based final design. [This is a motor and housing design for the arm joints that go after the one that I designed.]
- The BOM discipline is worth a mention on the page in its own right: real McMaster part numbers imported directly as CAD (bearings, shaft collars, socket head screws by exact McMaster SKU) rather than generic placeholder geometry — this is the kind of detail that signals real fabrication-ready design work to a reviewer who knows what to look for.
