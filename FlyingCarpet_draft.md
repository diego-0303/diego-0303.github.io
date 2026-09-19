# Flying Carpet (Biomimetic Flexible Drone) Page Rework — Draft to Fill In

Working doc for beefing up `project2.md`. Filled in from `Research/SURF 2024/` (final report, presentation deck, abstract) and `Research/Interaction of Rotor Flows for Morphing Aerial Vehicles.pdf`, plus the CAD and photo folders.

**Important finding — this may actually be two projects, not one:** the files show a SURF 2024 project ("A Flexible Flying Surface for Multimodal Flight" — the Flying Carpet itself) mentored by Mory Gharib with grad student Ioannis Mandralis, funded as a "Howell N. Tyson, Sr. SURF Fellow." Separately, there's a proposal document ("Interaction of Rotor Flows for Morphing Aerial Vehicles") for what reads as a **follow-on/second engagement** with the same mentor and grad student, studying rotor-flow interaction and flow-deflector design via CFD on a *different, rigid* quadcopter platform called "M4" (not the flexible Flying Carpet), including load-cell thrust testing. [FILL IN — did this second project actually happen, or was it just proposed? If it happened, it's arguably a separate page-worthy project, not a subsection of Flying Carpet, since it's a rigid-body CFD/testing project rather than a flexible-structure design project.] Disregard the M4 project, I never actually got a goot start on it.

**On the test fixturing / vision camera question you raised:** I went through the final report, the 15-slide presentation deck, and all photos in the SURF 2024 folder and did not find a z-axis-constrained test setup or a vision-camera demo/test rig. The closest related thing is the rotor-flows proposal's mention of "tests in the lab... using a load cell attached to the vehicle" for thrust measurement — but that's a load cell, not a vision system, and it's on the M4 project, not Flying Carpet. [FILL IN — where does this fixturing work fit? Was it built later than what's captured in this folder, is it part of the rotor-flows/M4 project specifically, or is there a separate folder/device I haven't found? Yes, this fixturing was built later.  I have re-titled the image of the camera setup as "camera rig" and there is now a video of one of the tests in the z-constrained setup.  The fixturing I designed for that was the centerpiece of the drone that was modified to fit the post in the center to allow it to slide up and down the post while flapping or producing thrust.  I also helped to set up the test rig itself made from a test table and aluminum extrusion. I also helped to setup the optitrack cameras which were postioned around the drone to try to record sensor motion data during flight to potentially try to inform models for flight learning (more controls side of the project that I did not have much influence in.).  I was more of an assistant helping facilitate research in my view. ]

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** Confirmed as sole author/fellow on the SURF 2024 report and presentation — this reads as primarily solo mechanical design and build work under a mentor + grad student advisor, not a larger team project. [FILL IN — confirm role framing: "led all mechanical design" is accurate, but should this also mention electrical/firmware work, since you're clearly the one selecting motors, ESCs, flight controller, and battery too? Yes, I specced out motors and controlers were already selected.]
- **Team size:** You (SURF Fellow) + PI Mory Gharib + graduate student advisor Ioannis Mandralis. Confirmed, small team.
- **Duration:** A SURF (Summer Undergraduate Research Fellowship) — standard length is 10 weeks, and the rotor-flows proposal document explicitly lays out a 10-week work plan. [FILL IN — confirm 10 weeks, and whether you continued past the summer, Yes, it was 10 weeks and continued on and off past the summer until I graduated.]
- **Stack/tags:** CAD (SolidWorks parts + an Onshape screenshot suggest at least some Onshape use too — worth confirming), 3D-printed PLA frame components, laser/machine-cut polycarbonate body, BetaFlight flight controller firmware, brushless motors + 4-in-1 ESC, LiHV battery. [FILL IN — confirm CAD tool(s) OnShape and Solidworks, and what "controls software/language" means beyond I personally did not do any flight tuning besides what awas in Betaflight]
- **Outcome:** Confirmed from the report/deck: achieved basic lift-off/hop tests indoors (not stable controlled flight yet), with total thrust margin comfortably above vehicle mass (~1200g estimated combo lift vs. 375g total mass on the final component set). Multimodal flight (flapping/hovering combined) was a goal for future work, not something achieved within the summer. [FILL IN — did you continue this after SURF 2024 and get further? Any more recent results? Yes, the further progress was the constrained test rig setup.]
- **Links:** [FILL IN — is there a published SURF abstract/poster page, or GALCIT project listing, that's shareable? Unfortunately not.]

---

## 2. Design evolution (this has a great before/after story already — prioritize this)

The presentation deck has real, well-documented iteration — better material than the current page shows.

- **Confirmed lineage:** (1) started as a single flapping wing on a hinge; (2) became "the Flying Carpet" — a square mylar sheet (0.030in thick) with a thruster at each corner; (3) evolved into the current star-shaped foldable flying surface — a 12x12in, later 0.040in-thick polycarbonate body (mylar was dropped because it was "extremely hard to control and ultimately ended up folding in on itself" when motors ran) with a central 3D-printed hub housing the flight controller, 4-in-1 ESC, and battery, and four motor+propeller units at the star's points.
- **Why the star shape specifically:** per your own presentation notes, "the star shape design... allows for decoupling of thruster action and provides natural folding modes for the structure" — this is a good one-sentence explanation of the geometry's purpose that the current page's generic description doesn't capture.
- **Component iteration, with real numbers:** motors went from 1340-size to 1440-size (adding ~400g of thrust headroom), and propellers from 2530 to 3025/3035. The final combo (1404 motor + 3030 tri-blade prop) was estimated at ~1200g of lift against a total vehicle mass of ~375g, a healthy margin deliberately chosen to leave "wiggle room" for controls development. [FILL IN — any hover/thrust test data you actually collected once assembled, vs. just the estimate? Just estimate.]
- **Video idea:** `IMG_6624.mov` and `IMG_5005.mov` are in the source folder — worth checking what they show (early flight/hop tests, assembly?) before deciding what to feature.

---

## 3. Electronics and build details (confirmed, good concrete material)

- **E-hub design:** a dedicated 3D-printed central hub went through its own revision cycle — the presentation explicitly calls out "improved method for mounting battery and electronics," adding battery carriage, wired connections to the flight controller that stay connected while assembled, and dedicated fastening space. This is a good example of iterative mechanical design for a real integration problem (wiring + battery mounting on a moving, flexible structure), not just the propulsion. Would it be helpful to show each individually designed component in Onshape for the project? or is the image of full model enough?
- **Final electronics stack (confirmed):** BetaFlight-based 4-in-1 ESC + flight controller stack, 3S 300mAh LiHV battery, standard RC transmitter (Spektrum DX6e) for manual control — no autonomy/onboard compute mentioned in this material, so if there's a vision system it must be from later/separate work. [No onboard compute, probably confused with M4 here.]
- **Fabrication:** polycarbonate body sheets were waterjetted, sheets made of mylar were lazer cut, motor mounts and the hub were 3D-printed in PLA, assembled with M2 screws.

---

## 4. Testing and results (be honest about where this actually landed)

- Confirmed from the report and deck: initial testing was done indoors on the lab floor — the deck's "Previous flight tests" and "Initial flight test" slides both show the drone on the floor, not in controlled/tethered flight, and the report states the goal of achieving "stable flight in a lab setting" was the main summer goal, with flapping/multimodal flight explicitly deferred to future work.
- Report's stated "Current Results" section is candid about the mylar design failing (folding in on itself under thrust) and that this directly drove the switch to polycarbonate — this is a legitimate design-failure story you already have documented in your own report, worth using directly.
- **Challenges (from your own slide):** "embedding thrusters, electronics, and wiring in a flexible sheet is difficult" and "the system is dynamically unstable and no obvious control methods exist for stabilization" — both good, honest, specific technical challenges to feature rather than vague "it was hard."

---

## 6. A failure/debugging story

- The mylar-folding failure (Section 4) is a strong, already-documented one. [FILL IN — any other hardware failure you personally hit and fixed — e.g. a motor mount breaking, a wiring/connector failure, a specific crash during floor testing? Nothing else for this one.]

---

## Notes / anything else worth mining

- Funding/mentorship detail worth a line for credibility: this was a named SURF Fellowship (Howell N. Tyson, Sr. SURF Fellow) under GALCIT (Caltech's Graduate Aerospace Laboratories) and PI Mory Gharib — recognizable lab context for anyone in aerospace/robotics.
- The jellyfish/bird biomimicry framing (multimodal flight inspired by animals that both swim/fly efficiently using flexible appendages) is a nice hook already in your own report's introduction — the current page's intro doesn't explain *why* biomimicry, just that it is biomimetic. Worth carrying that motivation over.
