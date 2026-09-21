# Earthquake Engineering Research Page Rework: Draft to Fill In

Working doc for beefing up `project7.md`. Filled in from `edu/Caltech/Research/SURF2021/`: the final report (17 pp), both interim reports, the SURF proposal and abstract, the NVIDIA proposal, the 26-slide SURF presentation, and screenshots from Caltech Hall testing. This one is well documented. Most of it is confirmed from your own report and slides.

**Corrections the current page needs:**
- It says "10-story building." Your report says **Millikan Library (called "Caltech Hall" in your report) is a 9-story + basement** concrete building with **10 triaxial accelerometers** (one per level).
- It says the research was "developing algorithms to detect real-time changes in structural integrity." What you actually did was **port two compute-heavy functions of an existing structural-health-monitoring pipeline to the GPU and benchmark them against the CPU versions**. The damage-detection algorithms were existing lab software. This is a different (and more defensible) claim.
- It implies GPU parallelization "enabled" alerts. The honest result is that **the GPU version ran about 2x slower than the CPU version** at this data size. The report explains why and your conclusion is still positive. Worth stating plainly.
- "Caltech Earthquake Engineering Lab" is loose. The group is Prof. Monica Kohler's, and the project sits inside the **Community Seismic Network (CSN)**.

**Open flags:**
- The folder is named `SURF2021`, but the screenshots are dated June to August 2022 and the release form says 2022 (the NVIDIA proposal is 2021). The current page says "summer of my freshman year." [FILL IN: which summer was this, 2021 or 2022? Also worth confirming the Research folder's `SURF` copy vs this one are the same project.]
- The GPU (JCUDA) code itself isn't in these files. `werk/CSN_MILIKAN_PROJECT/` contains only the baseline Java cloudlet source (about 5,300 lines: `CSNBuildingDisplay.java`, `FFT.java`, `SpectrogramFromData.java`, etc.) and none of it references JCUDA. [FILL IN: do you have your modified code anywhere (the CSN2 server, a USB drive)? If not, the page should describe the work without linking code.]

---

## 1. At-a-glance bar

- **Role:** Solo SURF fellow porting FFT and numerical-integration functions from CPU (Java) to GPU (JCUDA) inside the CSN building-monitoring cloudlet software, under Prof. Monica Kohler. Thanks in your report to Ethan Williams (ran the roof shaker), Richard Guy, Julian Bunn, and Robert Clayton. [FILL IN: confirm you worked alone on the code.]
- **Duration:** [FILL IN: 10 weeks? Report says nothing explicit.]
- **Stack:** Java, CUDA via JCUDA/JCufft, NVIDIA RTX A6000 GPU (48 GB, 300 W) on a Linux CSN server, Python notebook for filter validation, SAC seismic files.
- **Funding:** Sponsored by NVIDIA Corp. (GPU hardware and proposal), plus Aerospace Corporation grants.
- **Outcome:** Working GPU FFT and double-integration functions, validated for accuracy against the CPU versions; benchmarked on ambient data, the 2019 Ridgecrest M7.1 earthquake record, and a live shaker test on the roof. Result: GPU about 2x slower than CPU at this scale.
- **Links:** [FILL IN: none likely; the abstract and report are PDFs. Could offer the report as a download from the site if you want.]

---

## 2. What you actually built

**The system.** CSN runs a "cloudlet" (small server) that ingests the 10 triaxial accelerometers in Caltech Hall and continuously computes: FFTs and spectrograms (frequency domain), and displacement and inter-story drift by double integration through a recursive low-order low-pass filter (time domain), all shown on a live web page (E/W, N/S, Z displacements per floor, drift, and spectrograms). A change in these values during an event signals a change in the structure, with no building-specific physical model needed.

**Your contribution.**
- Researched CUDA and chose **JCUDA** to bind CUDA into the existing Java codebase (noting there are few Java bindings; most CUDA resources are Python/C).
- Got the base cloudlet working first (interim report: debugging why the HTML page wasn't working came down to server communication between the CSN1 and CSN2 servers).
- Set up JCUDA 11.6.1 on the CSN2 server, then rewrote **the two functions** that matter, FFT (via JCufft) and the recursive low-pass filter, to allocate GPU memory, compute on the GPU, and transfer results back for display.

---

## 3. Validation (a strong section: this is careful engineering)

- **FFT accuracy:** synthetic sine waves at 1 Hz, 3 Hz, and both combined, comparing CPU vs GPU output. Peaks appeared where expected, with the combined wave showing two peaks.
- **Real data:** ran the **2019 M7.1 Ridgecrest earthquake** record (6 of the 10 sensors, via SAC files) through both pipelines. Spectrograms (41 s windows, 2048 samples, 1 s shift, 97% overlap) showed the expected **1.7 Hz N/S** and **1.1 Hz E/W** resonances for Caltech Hall.
- **Unexpected finding:** a small resonance in the **Z (vertical) direction** that isn't well covered in prior literature; flagged in your report for further investigation. (Nice detail: your own observation, not just replication.)
- **Filter constant:** the Java recursive filter had an arbitrary constant. You compared it against **trapezoidal integration** (as ground truth) on band-pass-filtered Ridgecrest data in a Python notebook and determined **0.08** worked best for Caltech Hall.
- **Added feature:** spectrogram **max-amplitude tracking** constrained to ±15% of the expected first-mode frequency per axis, so the tracked peak stays on the fundamental mode instead of jumping across noise. It reproduces the physical effect that resonant frequency drops during strong shaking (expected 40 to 60 s drop, as buildings soften nonlinearly).

---

## 4. Result and the honest story

- **Benchmark:** computation time, CPU vs GPU, per floor (9, 8, 7, 6, 2, basement), on ambient data, Ridgecrest, and the live shaker test. **GPU was about 2x slower**, for both FFT and integration.
- **Why (your explanation):** memory allocation and CPU-to-GPU transfer overhead, which the CPU version doesn't pay. You reduced initializations and used Java parallel streams, which helped but didn't flip the result.
- **Conclusion (from your slides):** "GPU supports FFT calculations, not so much recursive filters"; switching language could go further; "great potential" at larger scale (whole buildings, a city of buildings). Proposed next step: feed data to the GPU as a matrix so it does more computation per transfer.
- **What to say on the page:** you built and validated a working GPU pipeline, measured it honestly, found it slower at this scale, and identified why and what would change that. That reads as good research judgment. [FILL IN: the live shaker results were marked "do not have figures yet" in the report draft; the slides do have shaker plots. Confirm you're comfortable saying the shaker test confirmed the same ~2x result.]

---

## 5. Failure / debugging story (already in your report)

- The JCUDA integration problem: few Java CUDA resources, forcing a choice between fighting Java bindings or rewriting in Python/C. You stayed in Java to fit the existing system.
- The CSN1/CSN2 server communication issue that kept the live display broken until you debugged it across several meetings.
- [FILL IN: any specific moment where the GPU code gave wrong numbers or crashed? The sine-wave test suite suggests you hit some.]

---

## 6. Visuals available

- `Caltech Hall Testing/*.png` (14 screenshots, Aug 2022): live cloudlet displays, e.g. a spectrogram for Station T000002, E-W, Floor 9.
- `Relevant_img_SURF/in1.heic`, `out1.heic`, and a screenshot: the sine-wave input and FFT output test figures.
- The final report PDF contains Figures 1 to 11 (cloudlet display, sine tests, Ridgecrest spectrograms, integration plots, CPU-vs-GPU timing charts). I can extract the timing charts and spectrograms as web figures.
- Existing `images/EARTHQuAKE.jpg` on the site: [FILL IN: check that it's a real figure from this work; the old caption calls it "spectral acceleration response analysis."]
- No video found. [FILL IN: any recording of the shaker test or the live display?]

---

## Notes

- The old draft note about `SURF2024FinalReport.pdf` is stale: that report is the Flying Carpet project, not this one.
- Title suggestion: "GPU-Accelerated Structural Health Monitoring" (matches your report title) instead of "Structural Health Monitoring for Earthquake Engineering."
