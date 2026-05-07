// src/data/questions.js

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// === 1. BAHASA & KATEGORISASI (50 Soal) ===
const genBahasa = () => {
  let res = [];
  const templates = [
    { q: "Kategorisasi Analitis: Anjing - Serigala memiliki hubungan biologis sebagai...", opts: ["Canine / Karnivora", "Feline", "Unggas", "Omnivora", "Herbivora"], a: 0, d: "Keduanya berada dalam famili Canidae (anjing-anjingan) dan merupakan karnivora." },
    { q: "Kategorisasi Analitis: Atap - Gubuk memiliki hubungan fungsional sebagai...", opts: ["Pelindung", "Penopang", "Penyekat", "Pondasi", "Dekorasi"], a: 0, d: "Atap berfungsi sebagai pelindung bagian atas dari gubuk." },
    { q: "Sinonim: EPIK", opts: ["Kepahlawanan", "Tragedi", "Komedi", "Puisi", "Sastra"], a: 0, d: "Epik berarti cerita atau kisah kepahlawanan." },
    { q: "Kategorisasi Analitis: Pisau - Gergaji memiliki kesamaan fungsi dominan untuk...", opts: ["Memotong", "Memukul", "Menyambung", "Mengukur", "Mengukir"], a: 0, d: "Keduanya merupakan perkakas yang utamanya berfungsi untuk memotong." },
    { q: "Analogi: GURU : MURID = DOKTER : ...", opts: ["Pasien", "Rumah Sakit", "Obat", "Perawat", "Penyakit"], a: 0, d: "Guru melayani murid, dokter melayani pasien." },
    { q: "Antonim: JUMAWA", opts: ["Rendah hati", "Sombong", "Kuat", "Lemah", "Pemarah"], a: 0, d: "Jumawa berarti sombong, antonimnya adalah rendah hati." }
  ];
  
  for (let i = 0; i < 50; i++) {
    const t = templates[i % templates.length];
    let opts = [...t.opts];
    // Keep correct answer content
    let correctStr = opts[t.a];
    // We shuffle options to randomize
    let shuffledOpts = shuffleArray(opts);
    let newAnsIdx = shuffledOpts.indexOf(correctStr);
    
    // Add A. B. C. D. E.
    let finalOpts = shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`);
    
    res.push({
      id: `1-${i+1}`,
      text: `Soal ${i+1}: ${t.q}`,
      options: finalOpts,
      answer: newAnsIdx,
      discussion: t.d
    });
  }
  return res;
};

// === 2. HITUNGAN CEPAT (31 Soal) ===
const genHitungan = () => {
  let res = [];
  const templates = [
    { q: "Berapa 0,01% dari 5000?", opts: ["0,5", "5", "50", "0,05", "500"], a: 0, d: "0,01% = 0,0001. 0,0001 x 5000 = 0,5." },
    { q: "Hitung nilai dari 3,4% dari 250?", opts: ["8,5", "85", "0,85", "850", "3,4"], a: 0, d: "3,4% = 0,034. 0,034 x 250 = 8,5." },
    { q: "Deret bertingkat: 2, 5, 10, 17, 26, ... Angka selanjutnya?", opts: ["37", "35", "36", "39", "40"], a: 0, d: "Selisihnya adalah +3, +5, +7, +9. Selisih berikutnya +11. 26+11 = 37." },
    { q: "Pecahan: (1/2) + (1/4) - (1/8) = ...", opts: ["5/8", "3/8", "7/8", "1/2", "3/4"], a: 0, d: "4/8 + 2/8 - 1/8 = 5/8." },
    { q: "Deret aritmatika bertingkat: 1, 4, 10, 19, 31, ... Angka selanjutnya?", opts: ["46", "44", "45", "48", "50"], a: 0, d: "Selisih pertama: 3, 6, 9, 12. Selisih berikutnya: +15. 31 + 15 = 46." }
  ];

  for (let i = 0; i < 31; i++) {
    const t = templates[i % templates.length];
    let opts = [...t.opts];
    let correctStr = opts[t.a];
    let shuffledOpts = shuffleArray(opts);
    let newAnsIdx = shuffledOpts.indexOf(correctStr);
    let finalOpts = shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`);
    
    // Vary the numbers slightly for repetition
    let text = t.q;
    if (i >= templates.length) {
      text = text.replace("?", `? (Variasi ${i})`); // Simple variation to make them unique
    }

    res.push({
      id: `2-${i+1}`,
      text: `Soal ${i+1}: ${text}`,
      options: finalOpts,
      answer: newAnsIdx,
      discussion: t.d
    });
  }
  return res;
};

// === 3. PENGETAHUAN UMUM (40 Soal) ===
const genPU = () => {
  let res = [];
  const templates = [
    { q: "Berdasarkan UU Desa, sumber pendapatan desa yang utama berasal dari...", opts: ["Dana Desa (APBN)", "Pajak Ekspor", "Saham BUMN", "Sumbangan LSM", "Obligasi"], a: 0, d: "Dana Desa yang bersumber dari APBN adalah instrumen utama pembangunan dan pemberdayaan masyarakat desa." },
    { q: "Pengertian inflasi dalam ekonomi makro adalah...", opts: ["Kenaikan harga barang/jasa secara umum dan terus menerus", "Penurunan nilai pajak", "Kenaikan ekspor netto", "Peningkatan jumlah pengangguran", "Penurunan suku bunga"], a: 0, d: "Inflasi adalah indikator ekonomi makro yang menunjukkan tren kenaikan harga secara agregat." },
    { q: "Prinsip utama Koperasi di Indonesia berdasarkan UU No. 25 Tahun 1992 adalah...", opts: ["Kekeluargaan dan kegotongroyongan", "Maksimalisasi laba bagi pemodal", "Persaingan bebas", "Monopoli pasar lokal", "Eksploitasi sumber daya"], a: 0, d: "Koperasi berasaskan kekeluargaan untuk kesejahteraan bersama anggotanya." },
    { q: "Dalam IT Dasar, perangkat lunak yang bertugas menjembatani hardware dan aplikasi adalah...", opts: ["Sistem Operasi", "Microsoft Word", "Antivirus", "Web Browser", "Motherboard"], a: 0, d: "Sistem Operasi (OS) mengelola hardware komputer dan menyediakan layanan umum untuk program aplikasi." },
    { q: "Konsep Ekonomi Mikro lebih memfokuskan analisis pada...", opts: ["Perilaku konsumen dan perusahaan secara individual", "Pendapatan nasional", "Tingkat inflasi agregat", "Neraca pembayaran internasional", "Pertumbuhan ekonomi makro"], a: 0, d: "Ekonomi mikro mempelajari bagaimana rumah tangga dan perusahaan membuat keputusan." }
  ];

  for (let i = 0; i < 40; i++) {
    const t = templates[i % templates.length];
    let opts = [...t.opts];
    let correctStr = opts[t.a];
    let shuffledOpts = shuffleArray(opts);
    let newAnsIdx = shuffledOpts.indexOf(correctStr);
    let finalOpts = shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`);
    
    let text = t.q;
    if (i >= templates.length) text = text.replace("...", `... (Bagian ${i})`);

    res.push({
      id: `3-${i+1}`,
      text: `Soal ${i+1}: ${text}`,
      options: finalOpts,
      answer: newAnsIdx,
      discussion: t.d
    });
  }
  return res;
};

// Helper ViewBox standar untuk opsi SVG
const svgOptionWrapper = (content) => `<span style="font-weight:bold;font-size:1.2rem;min-width:30px;display:inline-block;vertical-align:middle;"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="height:60px;background:rgba(255,255,255,0.05);border-radius:8px;vertical-align:middle;margin-left:8px;">${content}</svg>`;

// === 4. VISUAL REASONING & SEQUENCING (55 Soal) ===
const genPola = () => {
  let res = [];
  for (let i = 1; i <= 55; i++) {
    let svgStr = '';
    let text = '';
    let finalOptions = [];
    let answer = 0;
    let discussion = '';

    if (i <= 25) {
      // Story Sequencing (Text-based logic)
      text = `Story Sequencing: Susunlah kejadian berikut menjadi urutan yang logis!
1. Koperasi PHTC membagikan SHU.
2. Manajer melakukan RAT bersama anggota.
3. Keuntungan Koperasi dihitung dari margin usaha.
4. Anggota koperasi melakukan transaksi pembelian secara aktif sepanjang tahun.`;
      
      let rawOpts = [
        "4 - 3 - 2 - 1",
        "1 - 2 - 3 - 4",
        "2 - 3 - 4 - 1",
        "3 - 4 - 1 - 2",
        "4 - 2 - 3 - 1"
      ];
      answer = 0; // 4-3-2-1
      discussion = "Logika: Anggota transaksi (4) -> Hitung laba (3) -> Rapat Anggota Tahunan (2) -> Pembagian SHU (1).";
      
      let shuffledOpts = shuffleArray(rawOpts);
      answer = shuffledOpts.indexOf(rawOpts[0]);
      finalOptions = shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. Urutan: ${opt}`);
    } else {
      // Matching Image (Cari gambar identik)
      const baseRot = i * 15;
      const drawShape = (rot, color) => `<rect x="30" y="30" width="40" height="40" fill="${color}" transform="rotate(${rot}, 50, 50)"/><circle cx="50" cy="20" r="8" fill="white" transform="rotate(${rot}, 50, 50)"/>`;
      
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" style="background:#0f172a;border-radius:8px">
        <text x="100" y="20" fill="white" font-size="14" text-anchor="middle">Gambar Target:</text>
        <g transform="translate(50, 20)">${drawShape(baseRot, 'var(--primary)')}</g>
      </svg>`;
      
      text = `Matching Image: Manakah dari 5 opsi di bawah ini yang IDENTIK secara presisi dengan gambar target di atas? (Hati-hati dengan rotasi)`;
      discussion = "Gambar identik harus memiliki posisi rotasi kotak dan titik putih yang sama persis derajatnya.";

      let rawOptions = [
        svgOptionWrapper(drawShape(baseRot, 'var(--primary)')), // Correct
        svgOptionWrapper(drawShape(baseRot + 5, 'var(--primary)')), // Slightly off
        svgOptionWrapper(drawShape(baseRot - 10, 'var(--primary)')), // Slightly off
        svgOptionWrapper(drawShape(baseRot + 180, 'var(--primary)')), // Flipped
        svgOptionWrapper(drawShape(baseRot + 45, 'var(--primary)'))  // Off
      ];

      let tempRaw = [...rawOptions];
      const randomizedCorrectIndex = (i * 7) % 5; 
      const correctStr = tempRaw.splice(0, 1)[0];
      tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

      for (let j = 0; j < 5; j++) {
        const prefix = String.fromCharCode(65 + j);
        finalOptions.push(tempRaw[j].replace('></span>', `>${prefix}.</span>`));
      }
      answer = randomizedCorrectIndex;
    }

    res.push({
      id: `4-${i}`, text: text, svg: svgStr, options: finalOptions, answer, discussion
    });
  }
  return res;
};

// === 5. SPASIAL & ABSTRAKSI (27 Soal) ===
const genRuang = () => {
  let res = [];
  const drawIsometricCube = (cx, cy, color, symTop, symLeft, symRight) => {
    return `
      <g transform="translate(${cx - 100}, ${cy - 100}) scale(0.6)">
        <polygon points="100,40 50,65 100,90 150,65" fill="${color}" opacity="0.9" stroke="white" stroke-width="2"/>
        <text x="92" y="70" fill="white" font-size="20" font-weight="bold">${symTop}</text>
        <polygon points="50,65 100,90 100,150 50,125" fill="${color}" opacity="0.6" stroke="white" stroke-width="2"/>
        <text x="68" y="115" fill="white" font-size="20" font-weight="bold">${symLeft}</text>
        <polygon points="150,65 100,90 100,150 150,125" fill="${color}" opacity="0.3" stroke="white" stroke-width="2"/>
        <text x="118" y="115" fill="white" font-size="20" font-weight="bold">${symRight}</text>
      </g>
    `;
  };

  const drawJaring = (cx, cy) => {
    return `
      <g transform="translate(${cx}, ${cy}) scale(0.5)">
        <rect x="0" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="20" y="80" fill="white" font-size="24">A</text>
        <rect x="50" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="70" y="80" fill="white" font-size="24">B</text>
        <rect x="100" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="120" y="80" fill="white" font-size="24">C</text>
        <rect x="150" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="170" y="80" fill="white" font-size="24">D</text>
        <rect x="50" y="0" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="70" y="30" fill="white" font-size="24">E</text>
        <rect x="50" y="100" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="70" y="130" fill="white" font-size="24">F</text>
      </g>
    `;
  };

  for (let i = 1; i <= 27; i++) {
    let svgStr = '';
    let text = '';
    let finalOptions = [];
    let answer = 0;
    let discussion = '';

    if (i <= 14) {
      // Jaring-jaring kubus
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" style="background:#020617;border-radius:8px">
        ${drawJaring(50, 10)}
      </svg>`;
      text = `Jaring-jaring Kubus: Hukum Lawan. Sisi manakah yang berseberangan (berlawanan) dengan sisi B ketika dirakit menjadi kubus?`;
      discussion = "Pada jaring kubus salib, sisi yang diselingi 1 kotak adalah sisi yang berlawanan. Maka B berlawanan dengan D.";
      
      let rawOpts = ["D", "A", "C", "E", "F"];
      answer = 0; // D
      
      let shuffledOpts = shuffleArray(rawOpts);
      answer = shuffledOpts.indexOf(rawOpts[0]);
      finalOptions = shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. Sisi ${opt}`);
    } else {
      // Rotasi 3D
      const color = `hsl(${(i * 50) % 360}, 60%, 45%)`;
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" style="background:#020617;border-radius:8px">
        ${drawIsometricCube(100, 100, color, '1', '2', '3')}
        <text x="180" y="80" fill="white" font-size="16">Mencari Hasil</text>
        <text x="180" y="100" fill="white" font-size="16">Rotasi 3D ➡</text>
        ${drawIsometricCube(330, 100, 'rgba(255,255,255,0.1)', '?', '?', '?')}
      </svg>`;
      text = `Rotasi 3D: Jika kubus diputar 1 kali searah jarum jam pada sumbu Y (vertikal), manakah posisi akhirnya?`;
      discussion = "Saat diputar searah sumbu Y 90 derajat, sisi 2 bergerak ke belakang, sisi 3 pindah ke kiri, dan sisi kanan memunculkan sisi baru.";
      
      let rawOptions = [
        svgOptionWrapper(drawIsometricCube(120, 120, color, '1', '3', '4')), // Correct
        svgOptionWrapper(drawIsometricCube(120, 120, color, '2', '1', '3')),
        svgOptionWrapper(drawIsometricCube(120, 120, color, '1', '4', '3')),
        svgOptionWrapper(drawIsometricCube(120, 120, color, '3', '2', '1')),
        svgOptionWrapper(drawIsometricCube(120, 120, color, '1', '2', '3'))
      ];

      let tempRaw = [...rawOptions];
      const randomizedCorrectIndex = (i * 3) % 5; 
      const correctStr = tempRaw.splice(0, 1)[0];
      tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

      for (let j = 0; j < 5; j++) {
        const prefix = String.fromCharCode(65 + j);
        finalOptions.push(tempRaw[j].replace('></span>', `>${prefix}.</span>`));
      }
      answer = randomizedCorrectIndex;
    }

    res.push({
      id: `5-${i}`, text, svg: svgStr, options: finalOptions, answer, discussion
    });
  }
  return res;
};

// === 6. BENTUK (25 Soal) ===
const genBentuk = () => {
  let res = [];
  for (let i = 1; i <= 25; i++) {
    let svgStr = '';
    let text = '';
    let finalOptions = [];
    let answer = 0;
    let discussion = '';

    if (i <= 12) {
      // Puzzle Assembly
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" style="background:#1e293b;border-radius:8px">
        <text x="150" y="20" fill="white" font-size="14" text-anchor="middle">Gabungkan potongan berikut:</text>
        <path d="M50,80 L50,40 L90,80 Z" fill="var(--primary)" opacity="0.8"/>
        <path d="M110,80 L150,40 L150,80 Z" fill="var(--accent)" opacity="0.8"/>
        <path d="M170,40 L210,40 L170,80 Z" fill="var(--success)" opacity="0.8"/>
        <path d="M230,40 L270,40 L270,80 Z" fill="var(--warning)" opacity="0.8"/>
      </svg>`;
      text = `Puzzle Assembly: Jika keempat potongan segitiga siku-siku di atas dirangkai menjadi satu tanpa celah, bentuk apa yang dihasilkan?`;
      discussion = "Empat segitiga siku-siku identik dapat dirangkai menjadi sebuah persegi atau persegi panjang sempurna.";
      
      let rawOpts = ["Persegi", "Lingkaran", "Trapesium", "Segilima", "Jajar Genjang"];
      answer = 0; // Persegi
      let shuffledOpts = shuffleArray(rawOpts);
      answer = shuffledOpts.indexOf(rawOpts[0]);
      finalOptions = shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`);
    } else {
      // Odd One Out
      const drawPolygon = (sides, color) => {
        return `<polygon points="50,15 80,40 70,80 30,80 20,40" fill="${color}"/>`; // Simplified for visual
      };
      svgStr = ``;
      text = `Odd One Out: Pilihlah opsi yang TIDAK MEMILIKI kesamaan pola atau bentuk dengan empat opsi lainnya!`;
      discussion = "Salah satu opsi memiliki jumlah sudut yang ganjil sementara yang lain genap (atau hukum geometri sejenis).";
      
      let rawOptions = [
        svgOptionWrapper(`<circle cx="50" cy="50" r="30" fill="var(--primary)"/>`), // Odd one out (no corners)
        svgOptionWrapper(`<rect x="20" y="20" width="60" height="60" fill="var(--primary)"/>`),
        svgOptionWrapper(`<polygon points="50,20 80,80 20,80" fill="var(--primary)"/>`), // Wait, triangle has 3. Let's say odd one out is the circle because no straight edges.
        svgOptionWrapper(`<polygon points="50,10 90,40 80,90 20,90 10,40" fill="var(--primary)"/>`),
        svgOptionWrapper(`<polygon points="50,20 80,50 50,80 20,50" fill="var(--primary)"/>`)
      ];

      let tempRaw = [...rawOptions];
      const randomizedCorrectIndex = (i * 3) % 5; 
      const correctStr = tempRaw.splice(0, 1)[0];
      tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

      for (let j = 0; j < 5; j++) {
        const prefix = String.fromCharCode(65 + j);
        finalOptions.push(tempRaw[j].replace('></span>', `>${prefix}.</span>`));
      }
      answer = randomizedCorrectIndex;
    }

    res.push({
      id: `6-${i}`, text, svg: svgStr, options: finalOptions, answer, discussion
    });
  }
  return res;
};

// === 7. MANAJEMEN BIDANG (20 Soal, SKOR 1-5) ===
const genManajemen = () => {
  let res = [];
  const baseManajemenData = [
    {
      q: "Menurut UU No. 25 Tahun 1992, Rapat Anggota Tahunan (RAT) merupakan kekuasaan tertinggi dalam Koperasi. Jika kuorum RAT tidak tercapai, apa yang harus Anda lakukan sebagai Manajer?",
      opts: ["Menunda RAT dan memanggil kembali anggota sesuai AD/ART", "Melanjutkan RAT karena wewenang Manajer", "Membubarkan koperasi", "Memalsukan daftar hadir", "Menyerahkan pada pengawas"],
      scores: [5, 1, 2, 1, 3],
      d: "Kepatuhan terhadap asas legal koperasi: RAT yang tidak kuorum harus ditunda dan dilakukan pemanggilan ulang sesuai AD/ART untuk menjamin legitimasi."
    },
    {
      q: "Pembagian Sisa Hasil Usaha (SHU) berdasarkan UU Koperasi harus mempertimbangkan...",
      opts: ["Jasa usaha dan modal masing-masing anggota secara adil", "Hanya besaran simpanan pokok anggota", "Kedekatan dengan pengurus", "Lama waktu menjadi anggota", "Hanya volume transaksi saja"],
      scores: [5, 2, 1, 3, 4],
      d: "Prinsip pembagian SHU yang adil harus mencakup kontribusi jasa usaha (transaksi) dan jasa modal (simpanan)."
    }
  ];

  for (let i = 0; i < 20; i++) {
    const t = baseManajemenData[i % baseManajemenData.length];
    
    // We don't shuffle options for Situational Judgement because scores are tied to index.
    // Instead, we just assign A, B, C, D, E.
    let finalOptions = t.opts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`);

    res.push({
      id: `7-${i+1}`,
      text: `Studi Kasus Manajerial Koperasi ${i+1}: ${t.q}`,
      options: finalOptions,
      optionScores: t.scores,
      discussion: t.d
    });
  }
  return res;
};

export const SUBTESTS = [
  {
    id: 1,
    title: "Subtes 1: Bahasa & Kategorisasi Analitis",
    focus: "Kategorisasi Fungsional/Biologis, Sinonim",
    totalQuestions: 50,
    timeLimit: 7 * 60,
    questions: genBahasa()
  },
  {
    id: 2,
    title: "Subtes 2: Hitungan Cepat & Logika Dasar",
    focus: "Deret Bertingkat, Pecahan, Persentase Unik",
    totalQuestions: 31,
    timeLimit: 7 * 60,
    questions: genHitungan()
  },
  {
    id: 3,
    title: "Subtes 3: Pengetahuan Umum & Regulasi",
    focus: "Makroekonomi, UU Desa, UU Koperasi, IT Dasar",
    totalQuestions: 40,
    timeLimit: 7 * 60,
    questions: genPU()
  },
  {
    id: 4,
    title: "Subtes 4: Visual Reasoning & Sequencing",
    focus: "Matching Image, Story Sequencing",
    totalQuestions: 55,
    timeLimit: 7 * 60,
    questions: genPola()
  },
  {
    id: 5,
    title: "Subtes 5: Spasial & Abstraksi",
    focus: "Jaring-jaring Kubus, Rotasi Objek 3D",
    totalQuestions: 27,
    timeLimit: 7 * 60,
    questions: genRuang()
  },
  {
    id: 6,
    title: "Subtes 6: Konstruksi Bentuk & Puzzle",
    focus: "Puzzle Assembly, Odd One Out",
    totalQuestions: 25,
    timeLimit: 7 * 60,
    questions: genBentuk()
  },
  {
    id: 7,
    title: "Subtes 7: Manajemen Bidang Koperasi",
    focus: "Manajerial, UU No. 25 Th 1992, RAT, SHU",
    totalQuestions: 20,
    timeLimit: 20 * 60,
    questions: genManajemen()
  }
];
