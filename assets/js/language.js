(()=> {
  const pageText = {
    id: {},
    en: {
      "Koneksi backend":"Backend connection",
      "URL ":"URL ",
      "Token ":"Token ",
      "Simpan & tes":"Save & test",
      "Terhubung. Backend: ":"Connected. Backend: ",
      "Gagal: ":"Failed: ",
      "Default: local-agent di http://127.0.0.1:8765. Tersimpan hanya di browser Anda.":"Default: local-agent at http://127.0.0.1:8765. Stored only in your browser.",
      "Modul interaktif DFT dan computational chemistry.":"Interactive DFT and computational chemistry modules.",
      "SMILES → 2D → 3D.":"SMILES → 2D → 3D.",
      "Input ORCA dan Gaussian dari struktur builder.":"Generate ORCA and Gaussian inputs from the molecular builder.",
      "Geometri, frekuensi, HOMO-LUMO, TD-DFT dari output ORCA/Gaussian.":"Analyze geometry, frequencies, HOMO–LUMO, and TD-DFT from ORCA/Gaussian outputs.",
      "Kirim job ke Docker lokal (MacBook) atau SLURM BRIN, lihat hasil.":"Submit jobs to local Docker (MacBook) or BRIN SLURM and inspect the results.",
      "Molecular library · PubChem / ChEMBL / ZINC":"Molecular library · PubChem / ChEMBL / ZINC",
      "Nama/kata kunci ":"Name / keyword ",
      "Search library":"Search library",
      "Show local library":"Show local library",
      "Visual editor (gambar manual)":"Visual editor (draw a molecule)",
      "Editor → SMILES":"Editor → SMILES",
      "SMILES → editor":"SMILES → editor",
      "SMILES → 2D molecule":"SMILES → 2D molecule",
      "Build":"Build",
      "Copy canonical SMILES":"Copy canonical SMILES",
      "Export descriptors CSV":"Export descriptors CSV",
      "Design substituent series":"Design a substituent series",
      "Gunakan tepat satu ":"Use exactly one ",
      " pada scaffold; satu substituen SMILES per baris.":" in the scaffold; enter one substituent SMILES per line.",
      "Core scaffold SMILES ":"Core scaffold SMILES ",
      "Enumerate candidates":"Enumerate candidates",
      "Download CSV":"Download CSV",
      "Molecular descriptors":"Molecular descriptors",
      "Descriptor struktur (RDKit), bukan hasil DFT.":"Molecular-structure descriptors (RDKit), not DFT results.",
      "Export JSON":"Export JSON",
      "3D structure preview":"3D structure preview",
      "Generate 3D + pre-optimize":"Generate 3D + pre-optimize",
      "Download XYZ":"Download XYZ",
      "Download SDF":"Download SDF",
      "Lanjut ke Input Builder →":"Continue to Input Builder →",
      "Klik Build, lalu Generate 3D.":"Click Build, then Generate 3D.",
      "Urutan: konformer 3D PubChem jika molekul ada; jika tidak, pre-optimize kasar di browser (pegas ikatan/sudut/planaritas sp2; stereokimia tidak dijamin). Untuk kualitas produksi gunakan RDKit ETKDG+MMFF atau xtb sebelum DFT.":"Workflow: use a PubChem 3D conformer when available; otherwise generate a rough browser-side geometry (bond, angle, and sp²-planarity restraints; stereochemistry is not guaranteed). For production-quality structures, use RDKit ETKDG+MMFF or xTB before DFT.",
      "D1 · Dasar Teori DFT: Hohenberg–Kohn dan Kohn–Sham":"D1 · DFT foundations: Hohenberg–Kohn and Kohn–Sham",
      "D1.1 Gagasan: kerapatan elektron sebagai variabel dasar":"D1.1 Core idea: electron density as the fundamental variable",
      "Fungsi gelombang ":"The wavefunction ",
      " punya ":" has ",
      " dimensi (Bab 2–4), sedangkan kerapatan ":" dimensions (Chapters 2–4), whereas the electron density ",
      " selalu 3 dimensi, dengan ":" is always three-dimensional, with ",
      "Teorema HK-1 (1964): ":"HK theorem 1 (1964): ",
      " keadaan dasar menentukan secara unik potensial eksternal ":" uniquely determines the external potential ",
      " (sampai konstanta), sehingga seluruh sifat sistem: ":" (up to a constant), and therefore all properties of the system: ",
      "Teorema HK-2: ":"HK theorem 2: ",
      " untuk ":" for ",
      " uji yang valid, ":" valid trial densities, ",
      " (prinsip variasional): ":" (variational principle): ",
      " dicari dengan meminimalkan ":" is found by minimizing ",
      "Teorema ini hanya menjamin ":"These theorems only establish the ",
      "fungsional; bentuk eksaknya tidak diketahui.":"existence of a functional; its exact form is unknown.",
      "D1.2 Persamaan Kohn–Sham (1965)":"D1.2 Kohn–Sham equations (1965)",
      "Sama seperti HF, potensial efektif bergantung pada ":"As in HF, the effective potential depends on ",
      " yang berasal dari orbital, sehingga diselesaikan dengan ":" obtained from the orbitals, so the equations are solved self-consistently using ",
      "SCF":"SCF",
      ". Bedanya: HF memakai pertukaran eksak dan tanpa korelasi; KS memakai ":" . The difference is that HF uses exact exchange without correlation, whereas KS uses ",
      " yang memuat ":", which contains ",
      "keduanya":"both",
      " (fungsional hibrida mencampur sebagian pertukaran HF).":" (hybrid functionals mix in a fraction of HF exchange).",
      "D1.3 SCF pada kerapatan: pembentukan ikatan H₂":"D1.3 Density-based SCF: formation of the H₂ bond",
      "Animasi memakai SCF H₂ nyata dari Bab 4 (R=1,4 bohr), dilihat sebagai kerapatan sepanjang sumbu ikatan. Garis abu-abu = penjumlahan dua atom H yang belum berinteraksi; garis biru = kerapatan molekul pada iterasi berjalan; kurva bawah = selisih (kerapatan menumpuk di antara inti = ikatan kovalen). Ini struktur yang sama dengan siklus KS: ρ → potensial → orbital → ρ baru.":"The animation uses an actual H₂ SCF calculation from Chapter 4 (R = 1.4 bohr), showing the density along the bond axis. The grey line is the sum of two non-interacting H atoms; the blue line is the molecular density at the current iteration; the lower curve is their difference (density accumulation between the nuclei indicates a covalent bond). This follows the KS cycle: ρ → potential → orbitals → new ρ.",
      "Rotatable 3D view · H₂ potential-energy curve":"Rotatable 3D view · H₂ potential-energy curve",
      "Drag the plot to rotate; use the scroll wheel or trackpad to zoom. The second axis is a visual extrusion of the one-dimensional bond-distance curve, not an additional physical coordinate.":"Drag to rotate; use the scroll wheel or trackpad to zoom. The second axis is a visual extrusion of the one-dimensional bond-distance curve, not an additional physical coordinate.",
      "D1.4 Konsekuensi praktis":"D1.4 Practical consequences",
      "Orbital KS bukan orbital \"fisik\", tetapi bentuknya sangat mirip orbital HF dan umum dipakai untuk analisis HOMO/LUMO.":"KS orbitals are not directly observable 'physical' orbitals, but their shapes often resemble HF orbitals and are widely used for HOMO/LUMO analysis.",
      "Biaya DFT murni/GGA ~N³ (lebih rendah dari HF), sehingga cocok untuk ratusan atom.":"The cost of conventional DFT/GGA scales approximately as N³ (typically lower than HF), making it practical for systems containing hundreds of atoms.",
      "Seluruh kualitas hasil ditentukan oleh ":"The quality of the results depends strongly on ",
      "Kerapatan keadaan dasar saja tidak memberi eksitasi; untuk itu dipakai TD-DFT (bab D6).":"Ground-state density alone does not provide excitation energies; TD-DFT is used for this purpose (Chapter D6).",
      "D2 · Fungsional, Basis, dan Koreksi Dispersi":"D2 · Functionals, basis sets, and dispersion corrections",
      "D2.1 Tangga Jacob":"D2.1 Jacob's ladder",
      "Anak tangga":"Rung",
      "Bergantung pada":"Depends on",
      "Catatan":"Notes",
      "ikatan terlalu kuat; jarang dipakai molekul":"often overbinds; less common for molecules",
      "cepat; baik untuk geometri dan padatan; celah HOMO–LUMO cenderung kecil":"fast; useful for geometries and solids; often underestimates HOMO–LUMO gaps",
      "sedikit lebih akurat":"often improves accuracy",
      "standar kimia molekul; lebih mahal":"common for molecular chemistry; more expensive",
      "eksitasi transfer muatan":"charge-transfer excitations",
      "akurat; paling mahal":"accurate; most expensive",
      "D2.2 Apa arti GGA? Faktor peningkatan pertukaran":"D2.2 What does GGA mean? Exchange enhancement factor",
      "Anda":"User-selected",
      "batas Lieb–Oxford 1.804":"Lieb–Oxford bound 1.804",
      "memenuhi":"satisfies",
      "melanggar batas Lieb–Oxford":"violates the Lieb–Oxford bound",
      "D2.3 Dispersi: mengapa DFT perlu koreksi":"D2.3 Dispersion: why DFT needs a correction",
      "Gaya dispersi (London) berasal dari korelasi jangka panjang yang tidak tertangkap fungsional lokal. Koreksi D3 menambah suku empiris dengan peredam Becke–Johnson agar tidak divergen pada jarak dekat:":"London dispersion arises from long-range correlation that is not captured by local functionals. D3 adds an empirical term with Becke–Johnson damping to avoid divergence at short distances:",
      "Rotatable 3D view · dispersion energy vs intermolecular distance":"Rotatable 3D view · dispersion energy vs intermolecular distance",
      "Drag to rotate the curve and zoom with the scroll wheel. The curve shows the damped radial dispersion contribution.":"Drag to rotate the curve and use the scroll wheel to zoom. The curve shows the damped radial dispersion contribution.",
      "Ilustrasi bentuk fungsi (satuan sembarang, R₀=1). Parameter nyata bergantung fungsional, di ORCA ":"Illustrative functional form (arbitrary units, R₀ = 1). Actual parameters depend on the functional. In ORCA use ",
      ", di Gaussian ":"; in Gaussian use ",
      "D2.4 Panduan memilih (titik awal, bukan aturan)":"D2.4 Choosing a method (starting points, not rules)",
      "Tujuan":"Purpose",
      "Pilihan umum":"Common choices",
      "Geometri molekul organik":"Organic molecular geometries",
      "Termokimia, barrier, non-kovalen":"Thermochemistry, barriers, non-covalent interactions",
      "Eksitasi TD-DFT (π→π*)":"TD-DFT excitations (π→π*)",
      "Padatan/permukaan":"Solids/surfaces",
      "Logam transisi":"Transition metals",
      "Peringatan:":"Caution:",
      "kesalahan delokalisasi/self-interaction membuat fungsional murni meremehkan celah dan barrier. Selalu validasi pilihan terhadap data eksperimen atau referensi tingkat tinggi untuk sistem Anda dan laporkan fungsional, basis, dispersi, dan pelarut.":"delocalization and self-interaction errors can cause pure functionals to underestimate gaps and barriers. Validate the method against experimental or higher-level reference data for your system, and report the functional, basis set, dispersion treatment, and solvent model."
    }
  };
  const nav = {
    "Dashboard":{id:"Dashboard",en:"Dashboard"},
    "Course":{id:"Perkuliahan",en:"Courses"},
    "Molecular Builder":{id:"Pembangun Molekul",en:"Molecular Builder"},
    "Input Builder":{id:"Pembuat Input",en:"Input Builder"},
    "Results":{id:"Analisis Hasil",en:"Results"},
    "ORCA Docker":{id:"ORCA Docker",en:"ORCA Docker"}
  };
  let lang=localStorage.getItem("simonusa-lang")||"id";
  const originalText=new WeakMap(), originalNav=new WeakMap();
  function translateTextNodes(){
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      if(!originalText.has(node)) originalText.set(node,node.nodeValue);
      const raw=originalText.get(node), key=raw.trim();
      const translated=pageText.en[key];
      if(lang==="en" && translated!==undefined) node.nodeValue=raw.replace(key,translated);
      else node.nodeValue=raw;
    }
  }
  function apply(){
    document.documentElement.lang=lang;
    document.querySelectorAll("[data-id][data-en]").forEach(el=>{el.innerHTML=el.dataset[lang]});
    translateTextNodes();
    document.querySelectorAll("nav a").forEach(a=>{
      if(!originalNav.has(a)) originalNav.set(a,a.textContent.trim());
      const key=originalNav.get(a);
      if(nav[key]) a.textContent=nav[key][lang];
    });
    const b=document.getElementById("langToggle");
    if(b){b.textContent=lang==="id"?"EN":"ID";b.setAttribute("aria-label",lang==="id"?"Switch to English":"Ganti ke Bahasa Indonesia");b.title=b.getAttribute("aria-label")}
    document.title=lang==="en"?(document.title.replace("Apa itu Computational Chemistry?","What Is Computational Chemistry?").replace("Dasar Teori DFT","DFT Foundations").replace("Fungsional, Basis, dan Koreksi Dispersi","Functionals, Basis Sets, and Dispersion Corrections").replace("Molecular Builder | CompChem Lab","Molecular Builder | SIMONUSA")):document.title;
    if(window.MathJax?.typesetPromise) window.MathJax.typesetPromise();
    document.dispatchEvent(new CustomEvent("simonusa:languagechange",{detail:{language:lang}}));
  }
  function init(){
    if(!document.getElementById("langToggle")){
      const b=document.createElement("button");b.id="langToggle";b.type="button";b.className="language-toggle";
      b.addEventListener("click",()=>{lang=lang==="id"?"en":"id";localStorage.setItem("simonusa-lang",lang);apply()});
      document.body.appendChild(b);
    }
    apply();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init,{once:true}); else init();
  window.SIMONUSA_LANG={get:()=>lang,apply};
})();