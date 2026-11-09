# SIMONUSA — Naskah Pengajaran Dosen
## Kimia Komputasi dan Teori Fungsional Kerapatan (DFT)
**Bahasa:** Indonesia · **Durasi:** 150 menit per pertemuan (dapat disesuaikan menjadi 120–180 menit) · **Peserta:** Mahasiswa kimia tingkat sarjana/awal pascasarjana

Dokumen ini merupakan naskah untuk dosen, bukan handout mahasiswa. Gunakan halaman course SIMONUSA yang sesuai sebagai papan kuliah interaktif. Ilustrasi browser adalah alat bantu konseptual, kecuali secara eksplisit dinyatakan sebagai data hasil perhitungan. Jangan menyajikan kurva ilustratif, nilai placeholder, atau keluaran Training Terminal simulasi sebagai hasil perhitungan kimia kuantum nyata.

## Peta mata kuliah dan capaian pembelajaran

Pada akhir Course 1, mahasiswa diharapkan mampu menjelaskan peran kimia komputasi; menafsirkan persamaan Schrödinger dan probabilitas Born; menghubungkan bilangan kuantum atom hidrogen dengan orbital; menjelaskan siklus self-consistent field Hartree–Fock dan korelasi elektron; memilih basis set; membedakan kimia kuantum dari simulasi molekuler berbasis force field; serta menafsirkan permukaan energi potensial, titik stasioner, dan frekuensi vibrasi.

Pada akhir Course 2, mahasiswa diharapkan mampu menjelaskan kerangka Hohenberg–Kohn dan Kohn–Sham; memilih dan melaporkan fungsional DFT serta basis set; menyusun input dasar ORCA atau Gaussian; mengirim dan memantau batch job pada lingkungan SLURM; mendiagnosis kegagalan umum pada output; serta menafsirkan spektrum absorpsi TD-DFT beserta keterbatasannya.

### Format pelaksanaan
- **Kuliah pengantar 150 menit:** gunakan jadwal terintegrasi di bawah. Ini merupakan tinjauan umum; jangan memaksakan semua derivasi dan latihan perangkat lunak.
- **Perkuliahan penuh:** ajarkan Pertemuan 1–8 dan D1–D6 sebagai pertemuan terpisah, masing-masing 150 menit.
- **120 menit:** kurangi diskusi kelompok dan gunakan satu ilustrasi interaktif per bagian.
- **180 menit:** tambahkan latihan pemecahan masalah dan presentasi mahasiswa.

## A. Kuliah pengantar terintegrasi 150 menit

| Waktu | Topik | Halaman/aktivitas | Bukti pemahaman |
|---|---|---|---|
| 0–10 menit | Mengapa kimia komputasi? | Dashboard; hubungan pertanyaan riset dan eksperimen–simulasi | Mahasiswa menyebutkan satu pertanyaan yang dapat diuji |
| 10–25 menit | Persamaan Schrödinger dan probabilitas | Bab 2; animasi paket gelombang dan partikel dalam kotak | Menafsirkan ψ dan |ψ|² |
| 25–38 menit | Atom hidrogen dan orbital | Bab 3; tingkat energi dan awan orbital | Mengidentifikasi n, l, m dan node |
| 38–58 menit | Hartree–Fock dan SCF | Bab 4; mengikuti iterasi kerapatan/orbital | Menjelaskan siklus SCF |
| 58–70 menit | Korelasi elektron dan basis set | Bab 5–6; skala komputasi dan kualitas basis | Memilih level teori yang wajar |
| 70–80 menit | Istirahat | — | — |
| 80–95 menit | Force field, MD dan Monte Carlo | Bab 7; Lennard–Jones dan MD | Membedakan QM, MM, MD dan MC |
| 95–108 menit | PES, optimasi dan frekuensi | Bab 8; minimum dan titik pelana | Menafsirkan frekuensi imajiner |
| 108–125 menit | Dasar DFT dan fungsional | D1–D2; kerapatan dan tangga Jacob | Menjelaskan exchange–correlation |
| 125–140 menit | ORCA/Gaussian dan alur HPC | D3–D5; Input Builder dan Training Terminal | Mengidentifikasi tahap input, scheduler dan output |
| 140–150 menit | TD-DFT dan sintesis | D6; spektrum dan diskusi akhir | Menyebutkan satu keterbatasan dan langkah validasi |

### Naskah pembukaan (0–10 menit)
**Sampaikan:** “Kimia komputasi tidak menggantikan eksperimen. Metode ini membantu kita merumuskan mekanisme, menafsirkan pengukuran, membandingkan hipotesis, dan menentukan eksperimen yang paling informatif. Perhitungan merupakan model dengan asumsi, bukan fakta eksperimen.”

Ajukan pertanyaan riset konkret: “Kita memiliki banyak kandidat zat warna organik. Kandidat mana yang sebaiknya disintesis terlebih dahulu, dan perhitungan apa yang dapat membantu menentukan prioritas?” Minta mahasiswa menyebutkan sifat yang dapat diukur: panjang gelombang absorpsi, oscillator strength, distribusi orbital frontier, karakter keadaan tereksitasi, kelarutan, stabilitas, dan geometri adsorpsi.

**Tanyakan:** “Apa yang membuat prediksi komputasi dapat dipercaya?”  
**Jawaban yang diharapkan:** pemilihan metode dan basis set, konvergensi, sampling konformer, model pelarut/lingkungan, perbandingan dengan eksperimen atau data referensi tingkat lebih tinggi, serta pelaporan yang transparan.

### Naskah kuliah konseptual (10–108 menit)
Ikuti Bab 2–8 sesuai jadwal. Pada setiap animasi, minta mahasiswa memprediksi perubahan sebelum menggerakkan kontrol. Jangan biarkan animasi menggantikan persamaan: minta mahasiswa menunjukkan suku atau asumsi yang menyebabkan perilaku yang ditampilkan.

### Naskah DFT dan alur kerja (108–150 menit)
**Sampaikan:** “DFT mengubah variabel utama dari fungsi gelombang banyak-elektron menjadi kerapatan elektron. Tantangan praktisnya adalah bentuk eksak fungsional exchange–correlation tidak diketahui, sehingga setiap hasil DFT memiliki galat yang bergantung pada fungsional.”

Tampilkan input sederhana dan identifikasi muatan, multiplisitas, metode, basis set, pelarut, jenis perhitungan, dan pengaturan sumber daya. Jelaskan alurnya:
1. Bangun dan periksa struktur molekul yang masuk akal secara kimia.
2. Tentukan muatan dan multiplisitas spin.
3. Pilih metode, basis set, dispersi, dan model pelarut dengan alasan ilmiah.
4. Optimasi geometri dan verifikasi konvergensi.
5. Jalankan perhitungan frekuensi pada level teori yang sama untuk mengkarakterisasi titik stasioner.
6. Periksa seluruh output, bukan hanya energi akhir.
7. Untuk keadaan tereksitasi, jalankan TD-DFT dan periksa karakter keadaan serta oscillator strength.
8. Bandingkan dengan eksperimen atau data referensi yang sesuai.

**Penjelasan HPC:** “Login node digunakan untuk mengedit, menyiapkan, dan memantau pekerjaan—bukan untuk menjalankan perhitungan berat kecuali kebijakan lokal secara eksplisit mengizinkan. Batch script meminta sumber daya; sbatch mengirimkannya; squeue memantau antrean; scancel membatalkan job; scontrol show job menampilkan detail. Nama partition, modul, batas sumber daya, dan kebijakan berbeda pada setiap cluster.”

**Catatan keamanan:** Training Terminal browser SIMONUSA adalah simulator latihan perintah. Terminal ini tidak terhubung ke HPC BRIN dan tidak menjalankan ORCA. Mahasiswa harus menggunakan akun resmi milik masing-masing dan mengikuti kebijakan institusi. Jangan menaruh password, private key, token, atau kredensial HPC pribadi pada website publik.

## B. Naskah pertemuan terperinci (masing-masing 150 menit)

# Pertemuan 1 — Pengantar Kimia Komputasi

**Capaian pembelajaran:** membedakan prediksi, interpretasi dan screening; menjelaskan keluarga metode utama; menerangkan mengapa simulasi memerlukan validasi eksperimen.

| Waktu | Urutan pengajaran |
|---|---|
| 0–15 menit | Masalah riset dan motivasi |
| 15–35 menit | Hal yang dapat dan tidak dapat dijawab oleh kimia komputasi |
| 35–60 menit | Peta metode: mekanika molekuler, semiempiris, HF, DFT, post-HF, metode periodik |
| 60–70 menit | Istirahat |
| 70–95 menit | Hubungan struktur–sifat dan perbandingan simulasi–eksperimen |
| 95–120 menit | Alur screening dan studi kasus artikel |
| 120–140 menit | Latihan desain riset kelompok |
| 140–150 menit | Refleksi singkat |

**Naskah dosen:** “Mulailah dari pertanyaan kimia, bukan dari perangkat lunak. Perhitungan berguna jika keluarannya dapat menjawab pertanyaan yang jelas. Geometri dapat menguji hipotesis struktur; perhitungan frekuensi memeriksa apakah struktur merupakan minimum atau keadaan transisi; TD-DFT dapat membantu menafsirkan pita absorpsi; dinamika molekuler dapat mengeksplorasi perilaku struktur terhadap waktu.”

Jelaskan hierarki metode:
- Mekanika molekuler: energi potensial berparameter; efisien untuk sistem besar, tetapi force field dengan topologi tetap tidak menggambarkan pemutusan ikatan.
- Metode semiempiris: struktur elektronik hampiran dengan biaya lebih rendah.
- Hartree–Fock: metode fungsi gelombang medan rata-rata; tidak memasukkan korelasi elektron dinamis.
- DFT: kerangka berbasis kerapatan elektron; praktis untuk banyak masalah molekul dan material, tetapi bergantung pada fungsional.
- Metode post-HF: perlakuan korelasi sistematis seperti MP2 dan coupled cluster; umumnya jauh lebih mahal.
- Metode struktur elektronik periodik: sesuai untuk kristal, permukaan, dan padatan.

**Aktivitas:** Berikan setiap kelompok satu masalah: pemeringkatan konformer, absorpsi zat warna, adsorpsi pada oksida, difusi dalam polimer, atau barrier reaksi. Minta mereka memilih keluarga metode dan satu pengukuran eksperimen untuk validasi.

**Pertanyaan diskusi:** Apa batas modelnya? Efek lingkungan apa yang belum dimasukkan? Keluaran mana yang dapat dibandingkan langsung dengan eksperimen? Bukti apa yang dapat membantah hipotesis komputasi?

**Refleksi:** Dalam tiga kalimat, tuliskan pertanyaan kimia, besaran komputasi yang sesuai, dan validasi eksperimen.

# Pertemuan 2 — Persamaan Schrödinger

**Capaian pembelajaran:** menafsirkan Hamiltonian dan persamaan eigenvalue; membedakan fungsi gelombang dari kerapatan probabilitas; menjelaskan kuantisasi dan superposisi.

| Waktu | Urutan pengajaran |
|---|---|
| 0–15 menit | Motivasi historis dan keterbatasan fisika klasik |
| 15–35 menit | Persamaan bergantung waktu dan tidak bergantung waktu |
| 35–55 menit | Operator, fungsi eigen, nilai eigen dan normalisasi |
| 55–65 menit | Istirahat |
| 65–90 menit | Animasi paket gelombang bebas |
| 90–115 menit | Partikel dalam kotak dan energi terkuantisasi |
| 115–135 menit | Interpretasi Born dan pengukuran |
| 135–150 menit | Perhitungan terbimbing dan rangkuman |

**Persamaan utama:**
\[
\hat H\Psi=E\Psi,\qquad
\hat H=-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf r)
\]
\[
i\hbar\frac{\partial\Psi}{\partial t}=\hat H\Psi,\qquad
P(\mathbf r)=|\Psi(\mathbf r,t)|^2,\qquad
\int |\Psi|^2d\tau=1
\]

**Naskah dosen:** “Fungsi gelombang merupakan deskripsi matematis keadaan kuantum. Fungsi gelombang itu sendiri bukan probabilitas. Kerapatan probabilitas diperoleh dari modulus kuadratnya. Hamiltonian memuat energi kinetik dan potensial. Keadaan stasioner yang diizinkan memenuhi persamaan eigenvalue.”

Gunakan ilustrasi paket gelombang. Minta mahasiswa memprediksi apakah paket partikel bebas yang terlokalisasi akan tetap sempit. Jelaskan dispersi sebagai konsekuensi gabungan komponen gelombang dengan bilangan gelombang dan frekuensi berbeda.

Untuk kotak potensial tak hingga satu dimensi:
\[
E_n=\frac{n^2h^2}{8mL^2},\qquad n=1,2,3,\ldots
\]
Tekankan bahwa energi keadaan dasar tidak nol. Tanyakan mengapa partikel tidak dapat memiliki energi kinetik nol ketika terkurung.

**Contoh soal:** Hitung energi keadaan dasar elektron dalam kotak 1,00 nm. Gunakan konstanta SI atau kalkulator yang telah diperiksa; satuan wajib dicantumkan. Selanjutnya hitung energi dan panjang gelombang transisi 1→2.

**Kesalahpahaman umum:** “Elektron bergerak mengikuti garis tepi orbital.” Koreksi: orbital mendeskripsikan fungsi gelombang; |ψ|² memberikan distribusi probabilitas ruang, bukan lintasan klasik.

# Pertemuan 3 — Atom Hidrogen dan Orbital Atom

**Capaian pembelajaran:** menghubungkan bilangan kuantum dengan energi, bentuk dan orientasi; menghitung node radial dan angular; menghubungkan transisi dengan garis spektrum.

| Waktu | Urutan pengajaran |
|---|---|
| 0–15 menit | Potensial Coulomb dan pemisahan variabel |
| 15–35 menit | Bilangan kuantum n, l dan m |
| 35–55 menit | Bentuk orbital dan node |
| 55–65 menit | Istirahat |
| 65–90 menit | Tingkat energi hidrogen dan deret spektrum |
| 90–115 menit | Distribusi probabilitas radial |
| 115–135 menit | Interpretasi awan orbital dan fase |
| 135–150 menit | Latihan dan rangkuman |

Untuk ion hidrogenik:
\[
E_n=-\frac{Z^2R_H}{n^2},\qquad
\frac{1}{\lambda}=R_HZ^2\left(\frac{1}{n_f^2}-\frac{1}{n_i^2}\right)
\]
Pada atom satu elektron, energi hanya bergantung pada n. Bilangan kuantum yang diizinkan adalah n=1,2,…; l=0,…,n−1; m_l=−l,…,+l. Jumlah node radial adalah n−l−1; jumlah node angular adalah l; jumlah node total adalah n−1.

**Naskah dosen:** “Label s, p, d, dan f masing-masing berkaitan dengan l=0,1,2,3. Bilangan kuantum magnetik menunjukkan komponen angular. Warna pada gambar orbital menunjukkan tanda atau fase fungsi gelombang, bukan muatan listrik positif dan negatif.”

Gunakan animasi tingkat energi untuk memprediksi transisi Balmer. Bandingkan panjang gelombang yang diprediksi dengan wilayah spektrum tampak. Jelaskan bahwa atom banyak-elektron memerlukan perlakuan tambahan karena tolakan antar-elektron mengubah pola energi.

**Contoh soal:** Untuk hidrogen, hitung panjang gelombang transisi n=4 ke n=2. Minta mahasiswa mengidentifikasi deret spektrum dan perkiraan warna tampaknya.

# Pertemuan 4 — Teori Hartree–Fock dan Prosedur SCF

**Capaian pembelajaran:** mengidentifikasi kesulitan sistem banyak-elektron; menjelaskan antisimetri dan determinan Slater; mendeskripsikan persamaan Roothaan dan iterasi SCF.

| Waktu | Urutan pengajaran |
|---|---|
| 0–20 menit | Pendekatan Born–Oppenheimer dan Hamiltonian elektronik |
| 20–40 menit | Antisimetri, spin orbital dan determinan Slater |
| 40–60 menit | Pendekatan medan rata-rata dan operator Fock |
| 60–70 menit | Istirahat |
| 70–100 menit | Persamaan Roothaan–Hall dan representasi basis |
| 100–125 menit | Ilustrasi siklus SCF |
| 125–140 menit | Kriteria konvergensi dan sumber kegagalan |
| 140–150 menit | Rangkuman |

Hamiltonian elektronik dalam satuan atom:
\[
\hat H_e=-\frac12\sum_i\nabla_i^2-\sum_{iA}\frac{Z_A}{r_{iA}}+
\sum_{i<j}\frac{1}{r_{ij}}
\]
**Sampaikan:** “Suku tolakan elektron–elektron menghubungkan koordinat semua elektron. Hartree–Fock mengganti interaksi sesaat ini dengan medan rata-rata dan menggunakan determinan Slater antisimetri untuk memenuhi sifat antisimetri fermion.”

Siklus SCF:
1. Tentukan geometri, basis set, muatan dan spin.
2. Bangun tebakan awal kerapatan atau orbital.
3. Bentuk matriks Fock.
4. Selesaikan masalah eigenvalue Roothaan–Hall.
5. Isi orbital dan bangun kerapatan baru.
6. Campur atau redam kerapatan jika diperlukan.
7. Periksa konvergensi energi dan kerapatan; ulangi jika belum konvergen.

\[
\mathbf F\mathbf C=\mathbf S\mathbf C\boldsymbol\varepsilon
\]

Gunakan ilustrasi SCF untuk menunjukkan bahwa kerapatan dan potensial efektif saling bergantung. Jelaskan bahwa konvergensi adalah konsistensi numerik, bukan bukti bahwa model kimia yang dipilih sudah benar.

**Sumber kegagalan umum:** geometri awal buruk, muatan atau multiplisitas salah, linear dependence, memori tidak cukup, pengaturan konvergensi tidak sesuai, dan keadaan elektronik yang sulit. Mahasiswa harus memeriksa seluruh output, bukan sekadar menaikkan batas iterasi.

# Pertemuan 5 — Korelasi Elektron dan Metode Post-HF

**Capaian pembelajaran:** mendefinisikan energi korelasi; membedakan korelasi statik dan dinamik; membandingkan MP2, CI dan coupled cluster beserta skala biayanya.

| Waktu | Urutan pengajaran |
|---|---|
| 0–20 menit | Referensi HF dan energi korelasi |
| 20–40 menit | Penghindaran elektron dan korelasi pasangan |
| 40–60 menit | Teori perturbasi MP2 |
| 60–70 menit | Istirahat |
| 70–95 menit | Configuration interaction |
| 95–115 menit | Ansätze coupled cluster |
| 115–135 menit | Skala komputasi, akurasi dan penerapan |
| 135–150 menit | Latihan pemilihan metode |

\[
E_{corr}=E_{exact}-E_{HF}
\]
Jelaskan bahwa HF memasukkan exchange tetapi tidak memiliki korelasi dinamik. MP2 menambahkan koreksi perturbasi orde kedua; metode ini dapat gagal pada korelasi kuat/statik. CI memperluas fungsi gelombang dengan determinan tereksitasi; CI terpotong tidak size extensive. Coupled cluster menggunakan ansatz eksponensial:
\[
|\Psi_{CC}\rangle=e^{\hat T}|\Phi_0\rangle,\qquad
\hat T=\hat T_1+\hat T_2+\cdots
\]
Bahas perkiraan skala formal yang umum: HF/DFT sering sekitar N³–N⁴ bergantung implementasi dan sistem; MP2 sekitar N⁵; CCSD sekitar N⁶; CCSD(T) sekitar N⁷. Ini panduan asimtotik, bukan prediksi waktu komputasi yang pasti.

**Aktivitas:** Mahasiswa memilih metode untuk (a) molekul kecil closed-shell, (b) disosiasi ikatan dengan karakter multireferensi kuat, dan (c) molekul zat warna besar. Minta alasan dan pernyataan kelayakan komputasi.

# Pertemuan 6 — Basis Set

**Capaian pembelajaran:** menjelaskan LCAO dan fungsi basis Gaussian; membedakan basis minimal, split-valence, polarisasi dan difus; memahami konvergensi basis.

| Waktu | Urutan pengajaran |
|---|---|
| 0–20 menit | LCAO dan representasi basis |
| 20–40 menit | Fungsi STO dan GTO |
| 40–60 menit | Basis minimal dan split-valence |
| 60–70 menit | Istirahat |
| 70–95 menit | Fungsi polarisasi dan difus |
| 95–120 menit | Konvergensi basis dan ekstrapolasi CBS |
| 120–140 menit | Pemilihan basis praktis |
| 140–150 menit | Kuis |

\[
\psi_i(\mathbf r)=\sum_\mu C_{\mu i}\phi_\mu(\mathbf r)
\]
Jelaskan bahwa basis yang lebih besar umumnya memberi fleksibilitas lebih tinggi dan menurunkan energi HF secara variational, tetapi meningkatkan biaya. Gaussian-type orbitals praktis karena banyak integral molekuler dapat dihitung secara analitik.

Bahas STO-3G sebagai basis minimal yang terutama berguna untuk edukasi; 6-31G(d) atau def2-SVP untuk pekerjaan eksplorasi ekonomis; def2-TZVP atau cc-pVTZ untuk sifat yang lebih andal; fungsi difus (aug-) untuk anion, keadaan Rydberg dan interaksi lemah. Basis yang sesuai bergantung pada unsur, sifat yang diteliti, metode, dan target validasi.

**Aktivitas:** Pilih basis set untuk geometri zat warna organik, afinitas elektron anion, dan kompleks berikatan lemah. Mahasiswa harus menjelaskan alasan perlunya fungsi difus atau polarisasi.

# Pertemuan 7 — Simulasi Molekuler Klasik: Force Field, MD dan Monte Carlo

**Capaian pembelajaran:** mengidentifikasi suku force field terikat dan tak terikat; menjelaskan integrasi dinamika molekuler; membedakan sampling MD dan Monte Carlo.

| Waktu | Urutan pengajaran |
|---|---|
| 0–20 menit | Model force field klasik |
| 20–40 menit | Potensial ikatan, sudut, torsi dan nonbonded |
| 40–60 menit | Potensial Lennard–Jones |
| 60–70 menit | Istirahat |
| 70–100 menit | Dinamika molekuler dan velocity Verlet |
| 100–125 menit | Monte Carlo dan penerimaan Metropolis |
| 125–140 menit | Penerapan dan keterbatasan |
| 140–150 menit | Pemilihan metode |

Energi force field umumnya terdiri dari suku terikat dan tak terikat:
\[
E=E_{bond}+E_{angle}+E_{torsion}+E_{vdW}+E_{electrostatic}
\]
\[
V_{LJ}(r)=4\varepsilon\left[\left(\frac{\sigma}{r}\right)^{12}-\left(\frac{\sigma}{r}\right)^6\right]
\]
MD mengintegrasikan persamaan Newton; velocity Verlet merupakan skema integrasi yang umum. Monte Carlo mengusulkan konfigurasi dan menerima atau menolaknya berdasarkan probabilitas yang sesuai dengan ensemble.

**Sampaikan:** “Force field klasik dengan topologi tetap umumnya efisien, tetapi tidak dapat memutus dan membentuk ikatan kovalen. Reactive force field merupakan kelas model yang berbeda dan memerlukan validasi cermat.”

Gunakan animasi MD untuk membahas temperatur, energi kinetik, energi potensial dan konservasi energi. Gunakan ilustrasi kisi Monte Carlo untuk memperkenalkan adsorpsi dan limit Langmuir. Jelaskan bahwa model kisi visual bersifat pedagogis, bukan pengganti force field molekuler yang tervalidasi.

**Aktivitas:** Tentukan apakah DFT, MD, GCMC atau QM/MM sesuai untuk barrier reaksi, difusi polimer, adsorpsi gas, atau situs reaktif dalam pelarut.

# Pertemuan 8 — Permukaan Energi Potensial, Optimasi dan Frekuensi

**Capaian pembelajaran:** membedakan minimum dan keadaan transisi; menjelaskan optimasi geometri dan eigenvalue Hessian; menafsirkan frekuensi imajiner dan energi titik nol.

| Waktu | Urutan pengajaran |
|---|---|
| 0–20 menit | PES Born–Oppenheimer |
| 20–40 menit | Gradien, Hessian dan titik stasioner |
| 40–60 menit | Algoritma optimasi geometri |
| 60–70 menit | Istirahat |
| 70–95 menit | Analisis vibrasi harmonik |
| 95–115 menit | Frekuensi imajiner dan lintasan reaksi |
| 115–135 menit | ZPE dan termokimia |
| 135–150 menit | Latihan diagnosis |

\[
\nabla E(\mathbf R)=0,\qquad
H_{ij}=\frac{\partial^2E}{\partial R_i\partial R_j}
\]
Pada minimum, seluruh eigenvalue Hessian vibrasi bernilai positif setelah translasi dan rotasi dihilangkan. Keadaan transisi orde pertama memiliki satu mode negatif, yang direpresentasikan sebagai satu frekuensi imajiner. Dua atau lebih frekuensi imajiner biasanya menunjukkan titik pelana orde lebih tinggi atau struktur yang belum dioptimasi dengan baik.

\[
\tilde\nu=\frac{1}{2\pi c}\sqrt{\frac{k}{\mu}},\qquad
E_{ZPE}=\frac12\sum_i h\nu_i
\]
**Penting:** penetapan keadaan transisi memerlukan pemeriksaan mode imajiner dan konfirmasi bahwa mode tersebut sesuai dengan koordinat reaksi yang dimaksud. IRC atau verifikasi lintasan reaksi lainnya sering diperlukan.

**Aktivitas:** Berikan tiga daftar frekuensi kepada mahasiswa: nol mode imajiner, satu mode imajiner, dan dua mode imajiner. Minta mereka mengklasifikasikan titik stasioner dan menyebutkan langkah validasi berikutnya.

# Course 2 — DFT dan Perhitungan Struktur Elektronik Praktis

## D1 — Hohenberg–Kohn dan DFT Kohn–Sham

**Capaian pembelajaran:** menjelaskan kerapatan elektron sebagai variabel dasar; menyatakan dua teorema Hohenberg–Kohn; mendeskripsikan persamaan self-consistent Kohn–Sham.

\[
\rho(\mathbf r)=N\int |\Psi(\mathbf r,\mathbf r_2,\ldots,\mathbf r_N)|^2d\mathbf r_2\cdots d\mathbf r_N
\]
\[
\left[-\frac12\nabla^2+v_{ext}+v_H+v_{xc}\right]\phi_i=\varepsilon_i\phi_i
\]
**Naskah:** “Teorema Hohenberg–Kohn pertama menyatakan bahwa kerapatan keadaan dasar menentukan potensial eksternal, hingga suatu konstanta. Teorema kedua memberikan prinsip variasional untuk energi. Teori Kohn–Sham memetakan sistem berinteraksi ke sistem bantu non-interacting yang memiliki kerapatan keadaan dasar sama. Fungsional exchange–correlation yang tidak diketahui merupakan pendekatan utama.”

Rencana 150 menit: 0–20 mengulang fungsi gelombang dan kerapatan; 20–45 teorema HK; 45–70 persamaan Kohn–Sham; 70–80 istirahat; 80–110 ilustrasi SCF berbasis kerapatan; 110–130 membandingkan HF dan KS; 130–145 keterbatasan; 145–150 pertanyaan refleksi.

**Uji pemahaman:** Mengapa DFT praktik tidak eksak? Apa yang dimuat dalam exchange–correlation? Apakah energi orbital Kohn–Sham selalu sama dengan energi ionisasi eksperimen atau celah optik? (Tidak.)

## D2 — Fungsional Exchange–Correlation, Basis Set dan Dispersi

**Capaian pembelajaran:** membedakan fungsional LDA, GGA, meta-GGA, hybrid dan range-separated hybrid; menjelaskan koreksi dispersi dan ketergantungan pada fungsional.

Rencana 150 menit: 0–20 tangga Jacob; 20–45 peningkatan exchange dan GGA; 45–65 hybrid exchange; 65–75 istirahat; 75–100 fungsional range-separated dan eksitasi transfer muatan; 100–120 dispersi dan D3/D4; 120–140 studi kasus pemilihan metode; 140–150 daftar periksa pelaporan.

**Naskah:** “Tidak ada satu fungsional yang selalu terbaik. Fungsional yang baik untuk struktur kesetimbangan dapat memberikan hasil kurang baik untuk eksitasi transfer muatan, barrier reaksi, atau kompleks yang didominasi dispersi. Lakukan benchmark terhadap sifat yang menjadi fokus penelitian.”

Bahas contoh titik awal, bukan resep universal: PBE/PBEsol untuk banyak padatan; PBE0 atau B3LYP untuk sifat molekuler; hybrid range-separated seperti CAM-B3LYP atau keluarga ωB97X untuk banyak masalah eksitasi transfer muatan; koreksi dispersi bila sesuai. Pilihan harus dijustifikasi dan divalidasi untuk sistem target.

**Daftar pelaporan:** fungsional, basis set, model dispersi, model pelarut/lingkungan, muatan, multiplisitas, perangkat lunak/versi, kriteria konvergensi, dan faktor skala jika digunakan.

## D3 — ORCA: Penyusunan Input dan Alur HPC

**Capaian pembelajaran:** mengidentifikasi komponen input ORCA; membuat perhitungan optimasi/frekuensi yang dapat dipertanggungjawabkan; memahami pengiriman batch job dan pemeriksaan output.

Rencana 150 menit: 0–20 struktur molekul dan muatan/spin; 20–45 anatomi input; 45–70 demonstrasi Input Builder; 70–80 istirahat; 80–105 pengaturan optimasi dan frekuensi; 105–125 alur SLURM; 125–140 pemeriksaan output; 140–150 keamanan dan rangkuman.

**Contoh input (template awal ilustratif; sesuaikan metode, basis, muatan, multiplisitas dan sumber daya):**
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
Ini merupakan template pengajaran, bukan protokol produksi yang telah tervalidasi. Periksa geometri, muatan, multiplisitas, memori per proses, versi ORCA lokal, dan ketentuan lisensinya.

**Konsep skrip HPC:** minta partition dan jumlah sumber daya yang disetujui; muat modul ORCA sesuai dokumentasi lokal; jalankan dari direktori scratch khusus job; simpan input dan output; periksa status scheduler dan pesan akhir ORCA. Jangan menyalin nama partition atau perintah modul dari cluster lain tanpa memeriksa dokumentasi lokal.

## D4 — Gaussian: Input, Checkpoint dan Perbandingan

**Capaian pembelajaran:** mengidentifikasi route section, judul, muatan/multiplisitas dan koordinat; memahami checkpoint; membandingkan perhitungan setara lintas perangkat lunak.

Rencana 150 menit: 0–20 anatomi input Gaussian; 20–45 route section; 45–70 alur checkpoint dan formatted checkpoint; 70–80 istirahat; 80–105 membangun tugas ORCA/Gaussian setara; 105–125 membandingkan konvergensi dan output; 125–140 membahas default program; 140–150 rangkuman.

**Contoh input Gaussian (ilustratif):**
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
Jangan mengasumsikan keyword yang tampak sama selalu memiliki default atau hasil numerik identik pada program berbeda. Bandingkan model fisik, basis, grid integrasi, konvergensi, perlakuan pelarut dan versi program.

## D5 — Analisis Output dan Troubleshooting

**Capaian pembelajaran:** menentukan apakah job selesai; membedakan konvergensi SCF, geometri dan frekuensi; mengekstrak besaran bermakna; mendiagnosis kegagalan umum.

Rencana 150 menit: 0–20 anatomi output; 20–45 normal termination dan konvergensi; 45–65 pemeriksaan geometri dan frekuensi; 65–75 istirahat; 75–100 kegagalan SCF dan sumber daya; 100–125 energi konformer dan populasi Boltzmann; 125–140 studi kasus troubleshooting; 140–150 daftar periksa reproduksibilitas.

**Naskah:** “Energi akhir saja tidak cukup untuk membuktikan perhitungan valid. Pastikan job berakhir normal, SCF konvergen, optimasi geometri konvergen, dan spektrum vibrasi sesuai dengan titik stasioner yang dimaksud.”

Untuk konformer:
\[
p_i=\frac{e^{-G_i/(RT)}}{\sum_j e^{-G_j/(RT)}}
\]
Jelaskan bahwa populasi Boltzmann memerlukan energi bebas yang konsisten, temperatur yang ditentukan, dan ensemble konformer yang cukup tersampling. Jangan membandingkan energi elektronik mentah seolah-olah merupakan energi bebas Gibbs.

## D6 — TD-DFT dan Spektrum UV–Vis

**Capaian pembelajaran:** menjelaskan tujuan TD-DFT; menafsirkan energi eksitasi dan oscillator strength; mengonversi energi ke panjang gelombang; mengidentifikasi keterbatasan transfer muatan.

Rencana 150 menit: 0–20 absorpsi dan keadaan tereksitasi; 20–45 konsep TD-DFT linear-response; 45–65 energi eksitasi dan oscillator strength; 65–75 istirahat; 75–100 spektrum dengan broadening; 100–120 transfer muatan dan pemilihan fungsional; 120–140 perbandingan eksperimen; 140–150 penilaian akhir.

\[
\lambda(\mathrm{nm})\approx\frac{1239.84}{E(\mathrm{eV})}
\]
**Naskah:** “Spektrum stick TD-DFT merupakan kumpulan transisi elektronik vertikal. Spektrum yang diperlebar merupakan visualisasi model; lebar broadening tidak otomatis sama dengan linewidth eksperimen. Bandingkan posisi puncak, intensitas relatif dan bentuk pita dengan eksperimen, dengan mempertimbangkan pelarut, agregasi, struktur vibronik dan efek konformasi.”

**Penilaian akhir:** Mahasiswa menyerahkan laporan komputasi ringkas berisi (1) pertanyaan riset, (2) struktur teroptimasi, (3) alasan pemilihan metode dan basis, (4) bukti konvergensi, (5) interpretasi frekuensi, (6) analisis HOMO/LUMO atau kerapatan dengan interpretasi hati-hati, (7) transisi dan spektrum TD-DFT jika relevan, serta (8) perbandingan dengan bukti eksperimen atau referensi.

## C. Rubrik penilaian akhir 10 menit

| Kriteria | Bobot |
|---|---:|
| Pertanyaan kimia dan asumsi model | 15% |
| Justifikasi metode, fungsional dan basis set | 20% |
| Kualitas input dan reproduksibilitas | 15% |
| Validasi konvergensi dan titik stasioner | 20% |
| Interpretasi besaran yang benar | 20% |
| Keterbatasan dan perbandingan eksperimen | 10% |

## D. Daftar periksa akhir dosen
- Sampaikan capaian pembelajaran sebelum setiap modul.
- Minta mahasiswa memprediksi sebelum memulai animasi.
- Bedakan data komputasi nyata, data literatur, ilustrasi skematik dan keluaran terminal simulasi.
- Cantumkan satuan secara eksplisit dan periksa angka penting.
- Jangan menganggap celah HOMO–LUMO otomatis sama dengan celah optik.
- Jangan menetapkan keadaan transisi hanya dari jumlah frekuensi imajiner; periksa modenya.
- Jangan menganggap perhitungan konvergen otomatis benar secara kimia.
- Wajibkan pelaporan perangkat lunak, versi, metode, basis, muatan, multiplisitas, pelarut, dispersi dan pengaturan konvergensi.
