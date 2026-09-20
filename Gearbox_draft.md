# Mechanical Transmission & Mechatronic Toy Page Rework — Draft to Fill In

Working doc for beefing up `project6.md`. Filled in from `edu/Caltech/SophYr/SP23/ME14/` — your Individual Contribution Statement, Final Contribution Statement, both handwritten design notebooks, the transmission MATLAB toolkit, and the cat toy's actual Arduino code. This folder is unusually rich in primary-source evidence (your own contribution statements spell out exactly what you did on each project), so most of this is confirmed rather than guessed.

---

## 1. At-a-glance bar

- **Role, confirmed from your own contribution statements:**
  - **Transmission project:** brainstorming, BOM creation, component selection (specifically bearing choice — you compared McMaster vs. SDP/SI vs. VEX bearings on price/tolerance/stock availability and picked SDP/SI), and in the shop: machined the gearbox walls, made bearing holes, cut shafts to size, made keys from keystock, and made sure the gears were broached, then helped with initial assembly.
  - **Mechatronic toy project:** you owned getting the linear actuators (which move the toy's feathers) working in tandem with a microwave motion sensor — full-stack, from PDR/CDR planning (power/voltage calcs, actuator/sensor architecture, BOM formatting) through fabrication (laser-cut the enclosure's top/bottom plates and larger side-wall holes, helped mill the outer wall) to wiring the Arduino, sensor, power supply, actuators, and motor drivers together, and writing the trigger code yourself.
- **Team, confirmed:** Transmission team included a teammate named Isabela (Bela), who led scheduling/initiative and spent the most shop time. Mechatronic toy team included Isabela, Katy, Mia, and Sofia — split into two sub-teams (shooting mechanism vs. enclosure/feathers); you were the through-line connecting the electronics side of both.
- **Duration:** [FILL IN — both within Spring 2023, but exact week counts per project would help]
- **Stack:** SolidWorks (per current page), manual lathe/mill/gear-cutting/broaching for the transmission; SolidWorks, laser cutter, Arduino (C/C++), H-bridge motor drivers, a microwave motion sensor for the toy.
- **Outcome:** [FILL IN — did the gearbox meet its target ratio/spec when tested? Anything from CDR feedback worth mentioning for either project?]
- **Links:** [FILL IN — any report or CAD files you're able to share]

---

## 2. Transmission/gearbox project — now well-supported by real numbers

**Correction to the current page's framing:** this wasn't a generic design exercise — the MATLAB toolkit you used is literally named for and built around the "ME14 Transmission Contest" (a multi-year course tool, originally written for ME71 in 2012 and updated for ME14 through 2018). The actual competition: a motor powers your transmission, which drives a bicycle wheel; a computer records wheel speed over a 180-second run, and your score is the wheel's max RPM divided by the time it takes to reach 250 RPM. That's a genuine competitive benchmark, worth naming explicitly rather than leaving it as "a staple of Caltech ME."

- **Budget, confirmed:** $200 total.
- **Design decision process, confirmed from your handwritten notebook:** you built an explicit function/attribute design tree (functions: meet speed requirement, don't break; attributes: cheap, small footprint, easy to machine) and evaluated gear train vs. belt vs. chain-and-sprocket as the reduction mechanism before settling on a gear train. Within gear train options, you considered a 3-stage reduction and rejected it ("too much," per your own notes) in favor of a 2-stage spur gear setup, balancing gear-ratio flexibility against machining time and part count.
- **Bearing selection, confirmed:** you evaluated McMaster (~$8, familiar/expensive shipping) against SDP/SI (~$8, better dimensional tolerances, confirmed in-stock) and ruled out VEX bearings entirely as unusable for the design. This is a good concrete "why this vendor" story if you want one line of real component-selection reasoning on the page.
- **What you personally machined, confirmed:** gearbox walls, bearing holes, shaft cutting to length, keys cut from keystock, and confirming the gears were properly broached.
- **The MATLAB toolkit itself** (in `ME14_Transmission_Matlab/Analysis/`) models both a CVT-based and a fixed-ratio transmission (`CVTSolve.m`, `FixedSolve.m`, `CVT_Transmission_optimization.m`, `Fixed_Transmission_Optimization.m`, plus Mathematica notebooks for CVT cone inertia and symmetric CVT gear ratio) — this was course-provided analysis tooling used to simulate and pick a gear ratio before committing to fabrication, not something you wrote from scratch. [FILL IN — did your team actually run both CVT and fixed-ratio simulations before deciding on the fixed 2-stage spur design, or did you go straight to the fixed design? Worth being accurate about whether the CVT analysis directly informed your choice or was more of an side exploration.]
- **What made this hard, still open:** [FILL IN — any specific tolerance stack-up, broaching issue, or assembly problem you personally hit? Your contribution statement doesn't mention a specific failure, so this would come from memory.]
- **Video confirmed:** `ME14_Transmission_FINALDEMO.MOV`, 16 seconds — the assembled gearbox running. Ready to compress and use directly.

---

## 3. Mechatronic pet toy project — needs one correction and has real code to show

**Correction to the current page:** the sensor is a **microwave motion sensor**, not IR as currently stated — confirmed both in your contribution statement and your design notebook ("Sensor → doing microwave ✓"). Also, "ball launcher mechanism" needs a caveat: your design notebook's initial brainstorm did consider a ball launcher/catapult/shooter concept, and the team did build a "shooting mechanism" (for treats, per your notebook), but that subsystem was owned by your teammates Katy and Mia, not you — your part was the feathers (via linear actuators) and the sensor/control integration. Worth being precise about which part is yours.

- **Confirmed sense-decide-act logic, straight from your actual Arduino code (`cattoyLinActCode.ino`):** the microwave sensor is read as a simple digital HIGH/LOW signal. When it goes HIGH, three independently wired linear actuators (driven through H-bridge motor drivers) each fire with a randomized PWM speed (100–225 out of 255) and a randomized on-time/direction-reversal delay (0–1000ms), all three values re-randomized on every trigger. This was a deliberate design choice, not incidental: your design notebook has an explicit "Random?" planning note working through exactly this — using randomized speed and delay per actuator so the feather motion feels erratic and cat-engaging rather than a robotic repeated motion.
- **Fabrication, confirmed:** you laser-cut the enclosure's top and bottom plates and the larger side-wall holes, and helped mill the outer wall of the acrylic enclosure with Isabela.
- **A real difficulty, confirmed from your contribution statement:** the enclosure came out too small for the shooting mechanism your teammates built, requiring a fix mid-project — a legitimate integration problem between the two sub-teams' work, even though the fix itself was owned by Katy and Mia rather than you. Also worth a mention: a teammate (Sofia) got COVID mid-project and had to contribute remotely on calculations, which you can frame as a real example of the team adapting its workflow under a real constraint.
- **Video/image idea:** [FILL IN — do you have footage of the finished toy triggering? I didn't find an obvious final-demo video in this folder the way the transmission project has one — only design-phase screenshots (`cat toy/Screenshot...png`). Let me know if there's footage elsewhere, otherwise the existing `PET_TOY.png` CAD/prototype image may be the only visual.]

---

## 4. A failure/debugging story

- **Mechatronic toy — confirmed, real, and yours:** per your own Final Contribution Statement, getting the system running required real troubleshooting: "After some troubleshooting and some test code I was able to get the system running." This is honest and usable as-is, though a little generic — [FILL IN if you remember what specifically was going wrong before it worked, e.g. a wiring issue, a driver not responding, the sensor triggering falsely]
- **Transmission — still open:** [FILL IN — nothing specific surfaced in the source material]

---

## 5. Video placement

- Transmission: `ME14_Transmission_FINALDEMO.MOV` (16s) — ready to use, place after the transmission section.
- Mechatronic toy: no confirmed final-demo footage found yet — see the open question in Section 3.

---

## Notes / anything else worth mining

- The transmission project's scoring metric (max wheel RPM ÷ time-to-250-RPM) is a nice, concrete, competition-style detail that's currently entirely absent from the page — it reframes "transmission design project" as "we designed and fabricated a gearbox to win a real scored contest," which reads much stronger on a portfolio page.
- Your design notebook is genuinely well-organized dated engineering documentation (dated entries, a function/attribute design tree, a real bearing trade study) — if you want, a single cropped image of the design tree or the bearing trade-off notes could work as a supporting figure, similar to how the ShuttleBot and Flying Carpet pages used your own diagrams.
