# SIMONUSA — Lecturer's Teaching Script
## Computational Chemistry and Density Functional Theory
**Language:** English (primary) · **Duration:** 150 minutes per meeting (adaptable to 120–180 minutes) · **Audience:** Undergraduate/early graduate chemistry students

This document is a lecturer-facing script, not a student handout. Use the corresponding SIMONUSA course page as the live lecture board. The browser illustrations are conceptual teaching aids unless explicitly identified as calculated data. Never present illustrative curves, placeholder values, or the simulated Training Terminal output as results of a real quantum-chemical calculation.

## Course map and learning outcomes

By the end of Course 1, students should be able to explain the role of computational chemistry; interpret the time-independent Schrödinger equation and Born probability; connect hydrogenic quantum numbers to orbitals; explain the Hartree–Fock self-consistent-field cycle and electron correlation; select a basis set; distinguish quantum chemistry from force-field molecular simulation; and interpret potential-energy surfaces, stationary points, and vibrational frequencies.

By the end of Course 2, students should be able to explain the Hohenberg–Kohn and Kohn–Sham framework, select and report a density functional and basis set, construct a basic ORCA or Gaussian input, submit and monitor a batch job in a SLURM environment, diagnose common output failures, and interpret a TD-DFT absorption spectrum with appropriate limitations.

### Suggested delivery formats
- **Single 150-minute overview:** use the timetable below. This is a survey; do not attempt every derivation or software exercise.
- **Full semester:** teach Meetings 1–8 and D1–D6 as separate 150-minute sessions. Use the meeting scripts that follow.
- **120 minutes:** shorten group discussion and use only one interactive illustration per section.
- **180 minutes:** add the optional problem-solving and student presentations.

## A. Integrated 150-minute overview lecture

| Time | Topic | Live page / activity | Evidence of learning |
|---|---|---|---|
| 0–10 min | Why computational chemistry? | Dashboard; research question and experiment–simulation relationship | Students state one testable question |
| 10–25 min | Schrödinger equation and probability | Chapter 2; wave packet and particle-in-a-box animations | Interpret ψ and |ψ|² |
| 25–38 min | Hydrogen atom and orbitals | Chapter 3; energy levels and orbital-cloud view | Identify n, l, m and nodes |
| 38–58 min | Hartree–Fock and SCF | Chapter 4; follow density/orbital iteration | Explain the SCF loop |
| 58–70 min | Electron correlation and basis sets | Chapters 5–6; compare scaling and basis quality | Select a reasonable level of theory |
| 70–80 min | Break | — | — |
| 80–95 min | Force fields, MD and Monte Carlo | Chapter 7; Lennard–Jones and MD | Distinguish QM, MM, MD and MC |
| 95–108 min | PES, optimization and frequencies | Chapter 8; minimum vs saddle point | Interpret imaginary frequencies |
| 108–125 min | DFT foundations and functionals | D1–D2; density and Jacob's ladder | Explain exchange–correlation |
| 125–140 min | ORCA/Gaussian and HPC workflow | D3–D5; Input Builder and Training Terminal | Identify input, scheduler and output stages |
| 140–150 min | TD-DFT and synthesis | D6; spectrum and final discussion | State one limitation and validation step |

### Opening script (0–10 min)
**Say:** “Computational chemistry does not replace experiments. It helps us formulate mechanisms, interpret measurements, compare hypotheses, and decide which experiment is most informative. A calculation is a model with assumptions—not an experimental fact.”

Present a concrete research question: “We have many candidate organic dyes. Which candidates should be synthesized first, and what calculations could help us prioritize them?” Ask students to name measurable properties: absorption wavelength, oscillator strength, frontier orbital distribution, excited-state character, solubility, stability, and adsorption geometry.

**Ask:** “What would make a prediction trustworthy?”  
**Expected responses:** method and basis-set choice, convergence, conformational sampling, solvent/environment model, comparison with experiment or higher-level reference data, and transparent reporting.

### Conceptual lecture script (10–108 min)
Move through Chapters 2–8 in the timetable. At each animation, ask students to predict what should happen before moving the control. Do not let the animation replace the equation: ask students to point to the term or assumption responsible for the displayed behavior.

### DFT and workflow script (108–150 min)
**Say:** “DFT changes the central variable from the many-electron wavefunction to the electron density. The practical challenge is that the exact exchange–correlation functional is unknown, so every DFT result carries functional-dependent error.”

Show a simple input, identify charge, multiplicity, method, basis, solvent, task, and resource settings. Explain the workflow:
1. Build and inspect a chemically sensible molecular structure.
2. Choose charge and spin multiplicity.
3. Choose method, basis set, dispersion and solvent model with a scientific reason.
4. Optimize geometry; verify convergence.
5. Run frequencies at the same level to characterize the stationary point.
6. Inspect the output, not just the final energy.
7. For excited states, run TD-DFT and inspect state character and oscillator strengths.
8. Compare with experiment or a suitable reference.

**HPC explanation:** “A login node is for editing, preparing, and monitoring—not for running heavy calculations unless local policy explicitly permits it. A batch script requests resources; sbatch submits it; squeue monitors it; scancel cancels it; scontrol show job inspects details. The exact partition, module names, limits, and policies are cluster-specific.”

**Safety note:** SIMONUSA's browser Training Terminal is a command-practice simulator. It does not connect to BRIN HPC and does not execute ORCA. Students must use their own authorized account and follow institutional policy. Do not place passwords, private keys, tokens, or personal HPC credentials in a public website.

## B. Detailed meeting scripts (150 minutes each)

# Meeting 1 — Introduction to Computational Chemistry

**Learning outcomes:** distinguish prediction, interpretation and screening; describe major method families; explain why simulations need experimental validation.

| Time | Teaching sequence |
|---|---|
| 0–15 | Research problem and motivation |
| 15–35 | What computational chemistry can and cannot answer |
| 35–60 | Method map: molecular mechanics, semiempirical, HF, DFT, post-HF, periodic methods |
| 60–70 | Break |
| 70–95 | Structure–property relationships and simulation–experiment comparison |
| 95–120 | Screening funnel and paper case study |
| 120–140 | Small-group research-design exercise |
| 140–150 | Exit ticket |

**Lecturer script:** “Start with a chemical question, not with software. A calculation is useful only if its output can answer a defined question. Geometry may test a structural hypothesis; a frequency calculation checks whether a structure is a minimum or transition state; TD-DFT may help interpret an absorption band; molecular dynamics may explore time-dependent structural behavior.”

Explain the hierarchy:
- Molecular mechanics: parameterized potential energy; efficient for large systems, but conventional fixed-topology force fields do not describe bond breaking.
- Semiempirical methods: approximate electronic structure at lower cost.
- Hartree–Fock: mean-field wavefunction method; omits dynamic electron correlation.
- DFT: electron-density framework; practical for many molecular and materials problems, but functional dependent.
- Post-HF methods: systematic correlation treatments such as MP2 and coupled cluster; often much more expensive.
- Periodic electronic-structure methods: suitable for crystals, surfaces and extended solids.

**Activity:** Give each group one problem: conformer ranking, dye absorption, adsorption on an oxide, diffusion in a polymer, or reaction barrier. Ask them to choose a method family and identify one validation measurement.

**Discussion prompts:** What is the model's boundary? What environmental effects are missing? Which output is directly comparable to experiment? What would falsify the computational hypothesis?

**Exit ticket:** In three sentences, state a chemical question, a suitable computational observable, and an experimental validation.

# Meeting 2 — The Schrödinger Equation

**Learning outcomes:** interpret the Hamiltonian and eigenvalue equation; distinguish wavefunction from probability density; explain quantization and superposition.

| Time | Teaching sequence |
|---|---|
| 0–15 | Historical motivation and classical limitations |
| 15–35 | Time-independent and time-dependent equations |
| 35–55 | Operators, eigenfunctions, eigenvalues and normalization |
| 55–65 | Break |
| 65–90 | Free-particle wave packet animation |
| 90–115 | Particle in a box and quantized energy |
| 115–135 | Born interpretation and measurement |
| 135–150 | Guided calculation and recap |

**Core equations:**
\[
\hat H\Psi=E\Psi,\qquad
\hat H=-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf r)
\]
\[
i\hbar\frac{\partial\Psi}{\partial t}=\hat H\Psi,\qquad
P(\mathbf r)=|\Psi(\mathbf r,t)|^2,\qquad
\int |\Psi|^2d\tau=1
\]

**Lecturer script:** “The wavefunction is a mathematical description of the quantum state. It is not itself a probability. The probability density is its modulus squared. The Hamiltonian contains kinetic and potential energy. Allowed stationary states satisfy an eigenvalue equation.”

Use the wave-packet illustration. Ask students to predict whether a localized free-particle packet remains narrow. Explain dispersion as a consequence of combining wave components with different wave numbers and frequencies.

For a one-dimensional infinite well:
\[
E_n=\frac{n^2h^2}{8mL^2},\qquad n=1,2,3,\ldots
\]
Emphasize that the ground-state energy is nonzero. Ask why a particle cannot have zero kinetic energy while confined.

**Worked problem:** Calculate the ground-state energy of an electron in a 1.00 nm box. Use SI constants or a checked calculator; require units. Then calculate the 1→2 transition energy and wavelength.

**Common misconception:** “The electron travels along the orbital outline.” Correct this: orbitals describe wavefunctions; |ψ|² gives a spatial probability distribution, not a classical path.

# Meeting 3 — The Hydrogen Atom and Atomic Orbitals

**Learning outcomes:** connect quantum numbers to energy, shape and orientation; count radial and angular nodes; relate transitions to spectral lines.

| Time | Teaching sequence |
|---|---|
| 0–15 | Coulomb potential and separation of variables |
| 15–35 | Quantum numbers n, l and m |
| 35–55 | Orbital shapes and nodes |
| 55–65 | Break |
| 65–90 | Hydrogen energy levels and spectral series |
| 90–115 | Radial probability distributions |
| 115–135 | Orbital-cloud and phase interpretation |
| 135–150 | Problems and recap |

For a hydrogen-like ion:
\[
E_n=-\frac{Z^2R_H}{n^2},\qquad
\frac{1}{\lambda}=R_HZ^2\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)
\]
For a one-electron atom, energy depends on n. The allowed quantum numbers are n=1,2,…; l=0,…,n−1; m_l=−l,…,+l. The number of radial nodes is n−l−1; the number of angular nodes is l; total nodes are n−1.

**Lecturer script:** “The labels s, p, d and f correspond to l=0,1,2,3. The magnetic quantum number identifies an angular component. The colors in an orbital drawing indicate the sign or phase of the wavefunction, not positive and negative electric charge.”

Use the energy-level animation to predict a Balmer transition. Then compare the predicted wavelength with the visible spectral region. Explain that real multi-electron atoms require additional treatment because electron–electron repulsion changes the energy pattern.

**Worked problem:** For hydrogen, calculate the wavelength for n=4 to n=2. Ask students to identify the spectral series and approximate visible color.

# Meeting 4 — Hartree–Fock Theory and the SCF Procedure

**Learning outcomes:** identify the many-electron difficulty; explain antisymmetry and the Slater determinant; describe the Roothaan equations and SCF iteration.

| Time | Teaching sequence |
|---|---|
| 0–20 | Born–Oppenheimer approximation and electronic Hamiltonian |
| 20–40 | Antisymmetry, spin orbitals and Slater determinant |
| 40–60 | Mean-field approximation and Fock operator |
| 60–70 | Break |
| 70–100 | Roothaan–Hall equations and basis representation |
| 100–125 | Interactive SCF cycle |
| 125–140 | Convergence criteria and failure modes |
| 140–150 | Recap |

Electronic Hamiltonian in atomic units:
\[
\hat H_e=-\frac12\sum_i\nabla_i^2-\sum_{iA}\frac{Z_A}{r_{iA}}+
\sum_{i<j}\frac{1}{r_{ij}}
\]
**Say:** “The electron–electron repulsion couples electron coordinates. Hartree–Fock replaces the instantaneous interaction with an average field and uses an antisymmetric Slater determinant to satisfy fermionic antisymmetry.”

The SCF cycle:
1. Choose geometry, basis set, charge and spin.
2. Build an initial density or orbital guess.
3. Construct the Fock matrix.
4. Solve the Roothaan–Hall eigenvalue problem.
5. Occupy orbitals and build a new density.
6. Mix or damp the density if needed.
7. Check energy and density convergence; repeat if necessary.

\[
\mathbf F\mathbf C=\mathbf S\mathbf C\boldsymbol\varepsilon
\]

Use the SCF illustration to show that the density and effective potential are mutually dependent. Explain that convergence is numerical self-consistency, not proof that the chosen chemical model is correct.

**Common failure modes:** poor initial geometry, wrong charge or multiplicity, linear dependence, insufficient memory, unsuitable convergence settings, and difficult electronic states. Students should inspect the full output and not simply increase iteration limits.

# Meeting 5 — Electron Correlation and Post-HF Methods

**Learning outcomes:** define correlation energy; distinguish static and dynamic correlation; compare MP2, CI and coupled-cluster methods and their scaling.

| Time | Teaching sequence |
|---|---|
| 0–20 | HF reference and correlation energy |
| 20–40 | Electron avoidance and pair correlation |
| 40–60 | MP2 perturbation theory |
| 60–70 | Break |
| 70–95 | Configuration interaction |
| 95–115 | Coupled-cluster ansatz |
| 115–135 | Scaling, accuracy and applicability |
| 135–150 | Method-selection exercise |

\[
E_{corr}=E_{exact}-E_{HF}
\]
Explain that HF includes exchange but lacks dynamic correlation. MP2 adds a second-order perturbative correction; it can fail for strong/static correlation. CI expands the wavefunction in excited determinants; truncated CI is not size extensive. Coupled cluster uses an exponential ansatz:
\[
|\Psi_{CC}\rangle=e^{\hat T}|\Phi_0\rangle,\qquad
\hat T=\hat T_1+\hat T_2+\cdots
\]
Discuss common formal scaling estimates: HF/DFT often roughly N³–N⁴ depending on implementation and system; MP2 approximately N⁵; CCSD approximately N⁶; CCSD(T) approximately N⁷. These are asymptotic guides, not guaranteed wall times.

**Activity:** Students choose a method for (a) a small closed-shell molecule, (b) a bond dissociation with strong multireference character, and (c) a large dye molecule. Require justification and a statement about computational feasibility.

# Meeting 6 — Basis Sets

**Learning outcomes:** explain LCAO and Gaussian basis functions; distinguish minimal, split-valence, polarization and diffuse functions; understand basis-set convergence.

| Time | Teaching sequence |
|---|---|
| 0–20 | LCAO and basis representation |
| 20–40 | STO and GTO functions |
| 40–60 | Minimal and split-valence basis sets |
| 60–70 | Break |
| 70–95 | Polarization and diffuse functions |
| 95–120 | Basis convergence and CBS extrapolation |
| 120–140 | Practical basis selection |
| 140–150 | Quiz |

\[
\psi_i(\mathbf r)=\sum_\mu C_{\mu i}\phi_\mu(\mathbf r)
\]
Explain that a larger basis generally provides more flexibility and lowers the variational HF energy, but increases cost. Gaussian-type orbitals are convenient because many molecular integrals can be evaluated analytically.

Discuss STO-3G as minimal and mainly educational; 6-31G(d) or def2-SVP for economical exploratory work; def2-TZVP or cc-pVTZ for more reliable properties; diffuse functions (aug-) for anions, Rydberg states and weak interactions. The appropriate basis depends on the element, property, method and validation target.

**Activity:** Choose basis sets for an organic dye geometry, an anion electron affinity, and a weakly bound complex. Students must explain why diffuse or polarization functions are needed.

# Meeting 7 — Classical Molecular Simulation: Force Fields, MD and Monte Carlo

**Learning outcomes:** identify bonded and nonbonded force-field terms; explain molecular dynamics integration; distinguish MD sampling from Monte Carlo sampling.

| Time | Teaching sequence |
|---|---|
| 0–20 | Classical force-field model |
| 20–40 | Bond, angle, torsion and nonbonded potentials |
| 40–60 | Lennard–Jones potential |
| 60–70 | Break |
| 70–100 | Molecular dynamics and velocity Verlet |
| 100–125 | Monte Carlo and Metropolis acceptance |
| 125–140 | Applications and limitations |
| 140–150 | Method selection |

A typical force-field energy contains bonded terms and nonbonded terms:
\[
E=E_{bond}+E_{angle}+E_{torsion}+E_{vdW}+E_{electrostatic}
\]
\[
V_{LJ}(r)=4\varepsilon\left[\left(\frac{\sigma}{r}\right)^{12}-\left(\frac{\sigma}{r}\right)^6\right]
\]
MD integrates Newton's equations; velocity Verlet is a common integration scheme. Monte Carlo proposes configurations and accepts or rejects them according to an ensemble-specific probability.

**Say:** “Classical fixed-topology force fields are efficient, but they do not normally break and form covalent bonds. Reactive force fields are a different model class and require careful validation.”

Use the MD animation to discuss temperature, kinetic energy, potential energy and conservation. Use the lattice Monte Carlo illustration to introduce adsorption and the Langmuir limit. Explain that a visual lattice model is pedagogical, not a substitute for a validated molecular force field.

**Activity:** Decide whether DFT, MD, GCMC or QM/MM is suitable for a reaction barrier, polymer diffusion, gas adsorption, or a reactive site in solvent.

# Meeting 8 — Potential-Energy Surfaces, Optimization and Frequencies

**Learning outcomes:** distinguish minima and transition states; explain geometry optimization and Hessian eigenvalues; interpret imaginary frequencies and zero-point energy.

| Time | Teaching sequence |
|---|---|
| 0–20 | Born–Oppenheimer PES |
| 20–40 | Gradients, Hessian and stationary points |
| 40–60 | Geometry optimization algorithms |
| 60–70 | Break |
| 70–95 | Harmonic vibrational analysis |
| 95–115 | Imaginary frequencies and reaction paths |
| 115–135 | ZPE and thermochemistry |
| 135–150 | Diagnosis exercise |

\[
\nabla E(\mathbf R)=0,\qquad
H_{ij}=\frac{\partial^2E}{\partial R_i\partial R_j}
\]
At a minimum, all vibrational Hessian eigenvalues are positive (after removing translations and rotations). A first-order transition state has one negative mode, represented as one imaginary frequency. Two or more imaginary frequencies usually indicate a higher-order saddle point or an inadequately optimized structure.

\[
\tilde\nu=\frac{1}{2\pi c}\sqrt{\frac{k}{\mu}},\qquad
E_{ZPE}=\frac12\sum_i h\nu_i
\]
**Important:** a transition-state assignment requires inspecting the imaginary mode and confirming that it corresponds to the intended reaction coordinate. An IRC or other reaction-path verification is often appropriate.

**Activity:** Give students three frequency lists: zero imaginary modes, one imaginary mode, and two imaginary modes. Ask them to classify the stationary point and state the next validation step.

# Course 2 — DFT and practical electronic-structure calculations

## D1 — Hohenberg–Kohn and Kohn–Sham DFT

**Learning outcomes:** explain electron density as the basic variable; state the two Hohenberg–Kohn theorems; describe the Kohn–Sham self-consistent equations.

\[
\rho(\mathbf r)=N\int |\Psi(\mathbf r,\mathbf r_2,\ldots,\mathbf r_N)|^2d\mathbf r_2\cdots d\mathbf r_N
\]
\[
\left[-\frac12\nabla^2+v_{ext}+v_H+v_{xc}\right]\phi_i=\varepsilon_i\phi_i
\]
**Script:** “The first Hohenberg–Kohn theorem establishes that the ground-state density determines the external potential, up to a constant. The second provides a variational principle for the energy. Kohn–Sham theory maps the interacting system onto an auxiliary non-interacting system with the same ground-state density. The unknown exchange–correlation functional is the central approximation.”

150-minute plan: 0–20 recap wavefunction and density; 20–45 HK theorems; 45–70 Kohn–Sham equations; 70–80 break; 80–110 density-based SCF illustration; 110–130 compare HF and KS; 130–145 limitations; 145–150 exit question.

**Check understanding:** Why is DFT not exact in routine practice? What is included in exchange–correlation? Are Kohn–Sham orbital energies always equal to measured ionization energies or optical gaps? (No.)

## D2 — Exchange–Correlation Functionals, Basis Sets and Dispersion

**Learning outcomes:** distinguish LDA, GGA, meta-GGA, hybrid and range-separated hybrid functionals; explain dispersion corrections and functional dependence.

150-minute plan: 0–20 Jacob's ladder; 20–45 exchange enhancement and GGA; 45–65 hybrid exchange; 65–75 break; 75–100 range-separated functionals and charge-transfer excitations; 100–120 dispersion and D3/D4; 120–140 method-selection case studies; 140–150 reporting checklist.

**Script:** “No single functional is universally best. A functional that performs well for equilibrium structures may perform poorly for charge-transfer excitations, reaction barriers, or dispersion-dominated complexes. Benchmark the property you care about.”

Discuss representative starting points, not universal prescriptions: PBE/PBEsol for many solids; PBE0 or B3LYP for molecular properties; range-separated hybrids such as CAM-B3LYP or ωB97X-type functionals for many charge-transfer excitation problems; dispersion corrections where appropriate. Explain that the choice must be justified and validated for the target system.

**Reporting checklist:** functional, basis set, dispersion model, solvent/environment model, charge, multiplicity, software/version, convergence criteria, and any scaling factor.

## D3 — ORCA: Input Construction and HPC Workflow

**Learning outcomes:** identify the components of an ORCA input; create a defensible optimization/frequency calculation; understand batch submission and output checks.

150-minute plan: 0–20 molecular structure and charge/spin; 20–45 input anatomy; 45–70 Input Builder demonstration; 70–80 break; 80–105 optimization and frequency settings; 105–125 SLURM workflow; 125–140 output inspection; 140–150 safety and recap.

**Example input (illustrative starting point; adapt method, basis, charge, multiplicity and resources):**
\`\`\`text
! B3LYP D4 def2-SVP Opt Freq TightSCF
%pal
  nprocs 8
end
%maxcore 3000
* xyz 0 1
O   0.000000   0.000000   0.000000
H   0.000000   0.000000   0.960000
H   0.900000   0.000000  -0.240000
*
\`\`\`
This is a teaching template, not a validated production protocol. Check the geometry, charge, multiplicity, available memory per process, and local ORCA version and license conditions.

**HPC script concepts:** request an approved partition and resource count; load the locally documented ORCA module; run from a job-specific scratch directory; preserve input and output; check the scheduler state and final ORCA termination. Do not copy a partition name or module command from another cluster without checking local documentation.

## D4 — Gaussian: Input, Checkpoint Files and Comparison

**Learning outcomes:** identify route section, title, charge/multiplicity and coordinates; understand checkpoint files; compare equivalent calculations across programs.

150-minute plan: 0–20 Gaussian input anatomy; 20–45 route section; 45–70 checkpoint and formatted checkpoint workflow; 70–80 break; 80–105 build equivalent ORCA/Gaussian tasks; 105–125 compare convergence and output; 125–140 discuss program-dependent defaults; 140–150 recap.

**Example Gaussian input (illustrative):**
\`\`\`text
%chk=water.chk
%mem=8GB
%nprocshared=8
#p B3LYP/6-31G(d) Opt Freq

Water geometry optimization and frequencies

0 1
O   0.000000   0.000000   0.000000
H   0.000000   0.000000   0.960000
H   0.900000   0.000000  -0.240000
\`\`\`
Do not assume identical keywords imply identical defaults or identical numerical results across programs. Compare the physical model, basis, integration grid, convergence, solvent treatment and version.

## D5 — Output Analysis and Troubleshooting

**Learning outcomes:** determine whether a job completed; distinguish SCF, geometry and frequency convergence; extract meaningful observables; diagnose common failures.

150-minute plan: 0–20 output anatomy; 20–45 normal termination and convergence; 45–65 geometry and frequency checks; 65–75 break; 75–100 SCF and resource failures; 100–125 conformer energies and Boltzmann populations; 125–140 troubleshooting case study; 140–150 reproducibility checklist.

**Script:** “A final energy is not sufficient evidence that a calculation is valid. Confirm that the job terminated normally, SCF converged, geometry optimization converged, and the vibrational spectrum is consistent with the intended stationary point.”

For conformers:
\[
p_i=\frac{e^{-G_i/(RT)}}{\sum_j e^{-G_j/(RT)}}
\]
Explain that Boltzmann populations require consistent free energies, a defined temperature, and a conformational ensemble that is sufficiently sampled. Do not compare raw electronic energies as if they were Gibbs free energies.

## D6 — Time-Dependent DFT and UV–Visible Spectra

**Learning outcomes:** explain the purpose of TD-DFT; interpret excitation energies and oscillator strengths; convert energy to wavelength; identify charge-transfer limitations.

150-minute plan: 0–20 absorption and excited states; 20–45 linear-response TD-DFT concept; 45–65 excitation energy and oscillator strength; 65–75 break; 75–100 broadened spectra; 100–120 charge-transfer and functional choice; 120–140 comparison with experiment; 140–150 final assessment.

\[
\lambda(\mathrm{nm})\approx\frac{1239.84}{E(\mathrm{eV})}
\]
**Script:** “A TD-DFT stick spectrum is a set of vertical electronic transitions. A broadened spectrum is a model visualization; the broadening width is not automatically a measured linewidth. Compare peak positions, relative intensities and band shapes with experiment, while considering solvent, aggregation, vibronic structure and conformational effects.”

**Final assessment:** Students submit a concise computational report containing (1) research question, (2) optimized structure, (3) method and basis rationale, (4) convergence evidence, (5) frequency interpretation, (6) HOMO/LUMO or density analysis with cautious interpretation, (7) TD-DFT transitions and spectrum where relevant, and (8) comparison with experimental or reference evidence.

## C. Final 10-minute assessment rubric

| Criterion | Weight |
|---|---:|
| Chemical question and model assumptions | 15% |
| Method, functional and basis-set justification | 20% |
| Input quality and reproducibility | 15% |
| Convergence and stationary-point validation | 20% |
| Correct interpretation of observables | 20% |
| Limitations and experimental comparison | 10% |

## D. Lecturer's final checklist
- State the learning outcome before each module.
- Ask for predictions before starting an animation.
- Distinguish real computed data, literature data, schematic illustrations and simulated terminal output.
- Keep units explicit and check significant figures.
- Do not treat HOMO–LUMO gaps as automatically equal to optical gaps.
- Do not assign a transition state from an imaginary-frequency count alone; inspect the mode.
- Do not treat a converged calculation as automatically chemically correct.
- Require students to report software, version, method, basis, charge, multiplicity, solvent, dispersion and convergence settings.
