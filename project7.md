---
layout: page
title: Earthquake Engineering Research
permalink: /projects/earthquake/
---

<div style="max-width: 760px; margin: 40px auto; font-family: inherit; line-height: 1.7; padding: 0 15px;">
  <h2 style="font-size: 2rem; margin-bottom: 8px;">GPU-Accelerated Structural Health Monitoring</h2>
  <h3 style="font-size: 1.1rem; color: #666; font-weight: normal; margin-top: 0; margin-bottom: 20px;">Caltech SURF, Community Seismic Network, Prof. Monica Kohler</h3>

  <div style="background: var(--primary-highlight-color); border-radius: 8px; padding: 18px 22px; margin-bottom: 30px; font-size: 0.95rem;">
    <div style="display: grid; grid-template-columns: 110px 1fr; row-gap: 6px;">
      <strong>Role</strong><span>Ported the FFT and numerical-integration functions of a building-monitoring system from CPU to GPU, with a partner</span>
      <strong>Team</strong><span>Two SURF fellows, mentored by Prof. Monica Kohler</span>
      <strong>Duration</strong><span>Summer 2022</span>
      <strong>Sponsors</strong><span>NVIDIA and the Aerospace Corporation</span>
      <strong>Stack</strong><span>Java, CUDA through JCUDA, NVIDIA RTX A6000, Linux server, Python for validation</span>
      <strong>Outcome</strong><span>Working, validated GPU versions of both functions, benchmarked against the CPU code on ambient, recorded, and live shaker data</span>
    </div>
  </div>

  <p>
    My first SURF was a project with a partner in Professor Monica Kohler's group, part of the Community Seismic Network (CSN), and it was my introduction to software and programming. After an earthquake, it is hard to say quickly and reliably whether a building has been damaged. CSN approaches this by continuously processing data from accelerometers inside buildings, where a change in quantities like resonant frequency or inter-story drift signals that something in the structure has changed. Our job was to test whether moving the heaviest of those computations onto a GPU could make the system faster and scale to many buildings at once.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The System</h3>
  <p>
    The testbed was Millikan Library, a nine-story concrete building with a basement and ten triaxial accelerometers, roughly one per level. A small on-site server called a cloudlet ingests that data and continuously computes frequency-domain products (FFTs and spectrograms) and time-domain products (displacement and inter-story drift, through a recursive low-pass filter that double-integrates acceleration). Everything is shown on a live web page.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/EQ_CLOUDLET_DASHBOARD.png" alt="CSN cloudlet live building motion display" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); background: white;">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 1: The cloudlet's live display, with per-floor displacements, inter-story drift, and a spectrogram.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Moving the Math to the GPU</h3>
  <p>
    The existing software was written in Java, while CUDA is built around C, and there are far fewer Java bindings for it than Python or C ones. We stayed in Java to fit the system as it was and used JCUDA to call CUDA from it. After getting the base cloudlet running, which took several rounds of debugging communication between two of the lab's servers, we set up JCUDA on a Linux machine with an NVIDIA RTX A6000 and rewrote the two functions that do the heavy lifting, the FFT and the recursive filter, so they allocate GPU memory, compute there, and return results to the display.
  </p>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">Checking That It Was Right</h3>
  <p>
    Before comparing speed, we needed to know the GPU code gave the same answers. We tested the FFT on synthetic 1 Hz and 3 Hz sine waves, then ran the 2019 Ridgecrest M7.1 earthquake record through both versions. The spectrograms showed the building's known resonances, about 1.7 Hz north-south and 1.1 Hz east-west, and picked up a small vertical resonance that isn't well covered in prior literature and that we flagged for follow-up. For the integration, the filter had an arbitrary constant, so we compared it against standard trapezoidal integration on filtered Ridgecrest data and settled on 0.08 as the value that matched best for this building. I also added tracking of the peak spectral amplitude, limited to within 15% of each axis's expected first-mode frequency so it stays on the building's fundamental resonance instead of jumping around in noise. It reproduces the physical effect you would hope to see, with resonant frequency dropping during strong shaking as the structure softens.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/EQ_SPECTROGRAM_NS.png" alt="Ridgecrest earthquake spectrogram, north-south axis, with tracked resonance" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); background: white;">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 2: Spectrogram of the Ridgecrest record on the north-south axis. The black line tracks the resonance near 1.7 Hz, which dips during the strongest shaking.</figcaption>
  </figure>

  <h3 style="font-size: 1.3rem; margin-top: 40px;">The Result</h3>
  <p>
    On computation time, the GPU versions were about two times slower than the CPU versions, for both the FFT and the integration, across ambient data, the Ridgecrest record, and a live shaker test run on the building's roof. That makes sense in hindsight. At this data size, the time spent allocating GPU memory and moving data between the CPU and GPU outweighs the computation itself, a cost the CPU version never pays. Reducing repeated FFT initializations and using Java parallel streams helped but did not change the outcome. Our conclusion was that the GPU handled the FFT reasonably well but not the recursive filter, that a different language would likely have gone further, and that batching data into matrices so the GPU does more work per transfer is the natural next step. The real payoff should come at larger scale, with many buildings or a whole city's worth of sensors processed in parallel, which is the setting the approach was aimed at.
  </p>

  <figure style="margin: 35px 0; text-align: center;">
    <img src="https://diego-0303.github.io/images/EQ_CPU_VS_GPU.png" alt="CPU versus GPU FFT computation time across stations and axes" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); background: white;">
    <figcaption style="margin-top: 10px; font-size: 0.9rem; color: #666; font-style: italic;">Figure 3: FFT computation time over the Ridgecrest record for several floors and all three axes. CPU in blue, GPU in orange.</figcaption>
  </figure>

  <p>
    The work was sponsored by NVIDIA, which provided the GPU, and by the Aerospace Corporation. I'm grateful to Ethan Williams for running the shaker on the roof, and to Richard Guy, Julian Bunn, and Robert Clayton for their time and guidance. A negative benchmark is still a useful result, since it gave the group a tested setup and a clear picture of what would have to change for the GPU approach to win.
  </p>
</div>
