# Earthquake Engineering Research Page Rework — Draft to Fill In

Working doc for beefing up `project7.md`. This is your shortest, thinnest project page (one paragraph, one image) — it needs the most expansion of all of them. Fill in from your research notes, any code you wrote, and whatever your final deliverable to the lab was.

---

## 1. At-a-glance bar (new — goes at top of page)

- **Role:** [FILL IN — solo research, or part of a lab group? Confirm this was a SURF or similar program]
- **Duration:** [FILL IN — how many weeks over the summer]
- **Stack/tags:** [FILL IN — language (Python/MATLAB?), any specific libraries for signal processing, CPU/GPU frameworks used]
- **Outcome:** [FILL IN — did you produce a working pipeline, a performance benchmark, a report, a presentation to the lab?]
- **Links:** [FILL IN — SURF report if you have one — I noticed `SURF2024FinalReport.pdf` was removed from the repo as unused; if this research is what that report covered, it should probably be linked from this page instead of just sitting as a dead file]

---

## 2. What algorithm/method you actually built (most under-specified part — prioritize this)

Current text says "developing algorithms to detect real-time changes in structural integrity" — completely unspecified.

- What signal processing method did you use to detect structural changes (modal analysis, spectral matrix comparison, something else)? [FILL IN]
- What physically indicates a "change in structural integrity" in the accelerometer data — a shift in natural frequency, damping change, something else? [FILL IN]
- What did "real-time" mean in practice — what latency were you targeting, and did you hit it? [FILL IN]
- Did you validate your detection method against known/labeled seismic events? What was the accuracy or false-positive rate? [FILL IN]

---

## 3. The CPU vs. GPU parallelization work (also under-specified)

- What specific computation was being parallelized (the spectral matrix computation is mentioned — what math operation exactly, e.g. FFT, eigendecomposition)? [FILL IN]
- What frameworks did you use for GPU computation (CUDA, something higher-level)? [FILL IN]
- What was the actual speedup you measured, GPU vs. CPU? [FILL IN]
- What was the hardware setup (what GPU/CPU)? [FILL IN]

---

## 4. The building/data itself

- What building on campus was instrumented — how many sensors, what type? [FILL IN]
- What historical earthquake datasets did you use for comparison/validation? [FILL IN]
- Did you personally work with real earthquake data, or synthetic/simulated data, or both? [FILL IN]

---

## 5. A failure/debugging story

- What's a specific technical obstacle you hit (noisy sensor data, GPU memory constraints, an algorithm that didn't generalize)? [FILL IN]
- How did you diagnose and resolve it? [FILL IN]

---

## 6. Research outcome / what happened after

- Did this work feed into a publication, a continuing lab project, or a presentation? [FILL IN]
- What feedback did Prof. Kohler or the lab give on your results? [FILL IN]

---

## 7. Video/visual placement

- This page likely needs a plot or chart more than a video — e.g. a spectral response plot, or a CPU-vs-GPU timing comparison chart. Do you have any saved figures from your report? [FILL IN]
- If you do have a SURF report, pulling 1-2 of its figures directly would fix most of this page's thinness in one move. [FILL IN]

---

## Notes / anything else from your SURF report worth mining

[FILL IN]
