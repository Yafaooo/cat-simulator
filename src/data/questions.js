// src/data/questions.js

// === 1. BAHASA (50 Soal) ===
const bahasaData = [
  ["Sinonim: ABRASI", "Penyumbatan", "Pengikisan", "Pengendapan", "Penyerapan", "Pembekuan", 1],
  ["Sinonim: BONAFIDE", "Tegas", "Dapat dipercaya", "Palsu", "Berkuasa", "Kaya", 1],
  ["Sinonim: DEHIDRASI", "Kelebihan air", "Kekurangan kalori", "Kehilangan cairan", "Kehausan", "Kekeringan", 2],
  ["Sinonim: EPIK", "Puisi", "Kepahlawanan", "Drama", "Tragedi", "Komedi", 1],
  ["Sinonim: FRIKSI", "Perpecahan", "Perdamaian", "Pergesekan", "Gabungan", "Tarikan", 2],
  ["Sinonim: GALAT", "Benar", "Tepat", "Keliru", "Mutlak", "Akurat", 2],
  ["Sinonim: HETEROGEN", "Beraneka ragam", "Sejenis", "Tunggal", "Campuran", "Terpisah", 0],
  ["Sinonim: IMPLISIT", "Terbuka", "Jelas", "Tersirat", "Tersurat", "Pasti", 2],
  ["Sinonim: JARGON", "Bahasa gaul", "Sandi", "Istilah khusus", "Kata serapan", "Slogan", 2],
  ["Sinonim: KLARIFIKASI", "Penyembunyian", "Penjelasan", "Pemeriksaan", "Penilaian", "Penyelidikan", 1],
  ["Sinonim: LATEN", "Tampak", "Tersembunyi", "Aktif", "Pasif", "Cepat", 1],
  ["Sinonim: MUTAKHIR", "Kuno", "Modern", "Terbaru", "Terlama", "Canggih", 2],
  ["Sinonim: NARATIF", "Deskriptif", "Bercerita", "Informatif", "Persuasif", "Argumentatif", 1],
  ["Sinonim: OTENTIK", "Palsu", "Asli", "Tiruan", "Biasa", "Langka", 1],
  ["Sinonim: PARADIGMA", "Kerangka berpikir", "Aturan", "Hukum", "Kepercayaan", "Kebiasaan", 0],
  ["Sinonim: RELATIF", "Mutlak", "Pasti", "Nisbi", "Tetap", "Berubah", 2],
  ["Sinonim: SIGNIFIKAN", "Biasa", "Kecil", "Penting", "Abaikan", "Rutin", 2],
  ["Antonim: ABSOLUT", "Mutlak", "Nisbi", "Pasti", "Tetap", "Nyata", 1],
  ["Antonim: BERSIMPATI", "Peduli", "Membenci", "Acuh", "Mendukung", "Menghargai", 2],
  ["Antonim: CURAM", "Terjal", "Landai", "Tinggi", "Dalam", "Rata", 1],
  ["Antonim: DEDUKSI", "Induksi", "Reduksi", "Konklusi", "Asumsi", "Premis", 0],
  ["Antonim: EKSKLUSIF", "Khusus", "Terbuka", "Inklusif", "Tertutup", "Terbatas", 2],
  ["Antonim: FANA", "Kekal", "Sementara", "Rusak", "Abadi", "Nyata", 0],
  ["Antonim: GERSANG", "Kering", "Tandus", "Subur", "Mati", "Basah", 2],
  ["Antonim: HOMOGEN", "Sejenis", "Seragam", "Heterogen", "Berbeda", "Sama", 2],
  ["Antonim: IDENTIK", "Sama", "Mirip", "Berbeda", "Khas", "Unik", 2],
  ["Antonim: JUMAWA", "Sombong", "Rendah hati", "Angkuh", "Sabar", "Ikhlas", 1],
  ["Antonim: KOLEKTIF", "Bersama", "Individual", "Kelompok", "Massal", "Umum", 1],
  ["Antonim: LEGAL", "Sah", "Resmi", "Ilegal", "Hukum", "Bebas", 2],
  ["Antonim: MAYOR", "Besar", "Utama", "Minor", "Kecil", "Rendah", 2],
  ["Antonim: NOMADEN", "Berpindah", "Menetap", "Jelajah", "Kelana", "Diam", 1],
  ["Antonim: PROLOG", "Epilog", "Monolog", "Dialog", "Pendahuluan", "Penutup", 0],
  ["Antonim: SPORADIS", "Jarang", "Sering", "Teratur", "Kacau", "Tiba-tiba", 2],
  ["Analogi: GURU : MURID = DOKTER : ...", "Rumah Sakit", "Obat", "Pasien", "Suster", "Penyakit", 2],
  ["Analogi: BUKU : HALAMAN = RUMAH : ...", "Atap", "Pintu", "Kamar", "Halaman", "Jendela", 2],
  ["Analogi: BERUANG : GUA = BURUNG : ...", "Udara", "Pohon", "Sarang", "Langit", "Sayap", 2],
  ["Analogi: GEMBIRA : TERTAWA = SEDIH : ...", "Menangis", "Meratap", "Kecewa", "Marah", "Diam", 0],
  ["Analogi: MATAHARI : SIANG = BULAN : ...", "Bintang", "Malam", "Gelap", "Terang", "Langit", 1],
  ["Analogi: ES : DINGIN = API : ...", "Asap", "Abu", "Panas", "Membakar", "Merah", 2],
  ["Analogi: SEPEDA : KAYUH = PERAHU : ...", "Layar", "Mesin", "Dayung", "Air", "Kemudi", 2],
  ["Analogi: KERTAS : PENSIL = PAPAN TULIS : ...", "Spidol", "Penghapus", "Kapur", "Guru", "Kelas", 2],
  ["Analogi: BERAS : NASI = GANDUM : ...", "Tepung", "Roti", "Kue", "Sereal", "Bubur", 1],
  ["Analogi: SAKIT : DOKTER = HUKUM : ...", "Hakim", "Polisi", "Pengacara", "Penjara", "Pengadilan", 2],
  ["Analogi: LAPAR : MAKAN = HAUS : ...", "Air", "Gelas", "Minum", "Tenggorokan", "Segar", 2],
  ["Analogi: KAYU : POHON = EMAS : ...", "Tambang", "Cincin", "Perhiasan", "Logam", "Mahal", 0],
  ["Analogi: BULAN : BUMI = BUMI : ...", "Matahari", "Bintang", "Tata Surya", "Galaksi", "Alam Semesta", 0],
  ["Analogi: JARUM : BENANG = KUAS : ...", "Kanvas", "Cat", "Lukisan", "Pelukis", "Warna", 1],
  ["Analogi: PISAU : MEMOTONG = SAPU : ...", "Membersihkan", "Menyapu", "Lantai", "Kotoran", "Debu", 1],
  ["Analogi: MOBIL : BENSIN = MANUSIA : ...", "Udara", "Air", "Makanan", "Energi", "Istirahat", 2],
  ["Analogi: KUCING : MENGEONG = ANJING : ...", "Menggigit", "Menyalak", "Berlari", "Menjaga", "Tulang", 1]
];

// === 2. HITUNGAN (31 Soal) ===
const hitunganData = [
  ["Berapa 12% dari 500?", "50", "60", "70", "80", "90", 1],
  ["Jika 3x + 5 = 20, maka nilai x adalah...", "3", "4", "5", "6", "7", 2],
  ["Deret: 3, 6, 12, 24, ... Angka selanjutnya adalah?", "30", "36", "42", "48", "54", 3],
  ["Hasil dari (15 - 3) x 4 + 8 / 2 adalah...", "44", "48", "52", "56", "60", 2],
  ["Harga barang Rp200.000 diskon 15%. Harga bayarnya?", "Rp160.000", "Rp170.000", "Rp180.000", "Rp190.000", "Rp200.000", 1],
  ["Berapa akar kuadrat dari 225?", "13", "14", "15", "16", "17", 2],
  ["Deret: 1, 4, 9, 16, 25, ... Angka selanjutnya?", "30", "32", "36", "40", "49", 2],
  ["Jika sebuah kereta melaju 80 km/jam, jarak tempuh dalam 2.5 jam?", "160 km", "180 km", "200 km", "220 km", "240 km", 2],
  ["Berapa KPK dari 12 dan 18?", "24", "36", "48", "60", "72", 1],
  ["Berapa FPB dari 24 dan 36?", "6", "8", "12", "18", "24", 2],
  ["Hasil dari 5^3 - 4^3 adalah...", "61", "81", "101", "121", "141", 0],
  ["Deret: 2, 5, 10, 17, 26, ... Angka selanjutnya?", "35", "37", "39", "41", "43", 1],
  ["Sebuah persegi panjang P=10, L=6. Kelilingnya?", "24", "32", "36", "40", "60", 1],
  ["Jika y = 2x - 3 dan x = 5, berapa nilai y?", "5", "6", "7", "8", "9", 2],
  ["Berapa 3/4 dari 120?", "60", "75", "90", "105", "120", 2],
  ["Rata-rata dari 5, 8, 12, 15 adalah...", "10", "11", "12", "13", "14", 0],
  ["Jika 5 pekerja butuh 10 hari. Berapa hari jika 10 pekerja?", "3 hari", "4 hari", "5 hari", "6 hari", "7 hari", 2],
  ["Hasil dari 0.25 + 1/2 + 3/4 adalah...", "1.25", "1.5", "1.75", "2", "2.25", 1],
  ["Deret: 100, 90, 70, 40, ... Angka selanjutnya?", "0", "10", "20", "30", "-10", 0],
  ["Berapa 25% dari 1/4?", "1/8", "1/16", "1/32", "1/4", "1/2", 1],
  ["Harga beli Rp50.000, jual Rp60.000. Persen untung?", "10%", "15%", "20%", "25%", "30%", 2],
  ["Luas segitiga alas=8, tinggi=12 adalah...", "40", "48", "56", "64", "96", 1],
  ["Jika a=3, b=-2. Nilai a^2 - b^3 adalah...", "1", "5", "13", "17", "21", 3],
  ["Berapa peluang muncul mata dadu 5?", "1/6", "2/6", "3/6", "4/6", "5/6", 0],
  ["Deret: 1, 1, 2, 3, 5, 8, ... Angka selanjutnya?", "11", "12", "13", "14", "15", 2],
  ["Berapa 0.5 x 0.8?", "0.04", "0.4", "4", "40", "400", 1],
  ["Uang Ali Rp10.000, Budi Rp15.000. Rasio uang Ali:Budi?", "1:2", "2:3", "3:4", "4:5", "5:6", 1],
  ["Kecepatan 60 km/jam, jarak 150 km. Waktu tempuh?", "2 jam", "2.5 jam", "3 jam", "3.5 jam", "4 jam", 1],
  ["Volume kubus sisi=5 adalah...", "25", "75", "100", "125", "150", 3],
  ["Sudut siku-siku besarnya...", "45", "60", "90", "120", "180", 2],
  ["1 abad + 2 dasawarsa + 5 windu = ... tahun", "140", "150", "160", "170", "180", 2]
];

// === 3. PENGETAHUAN UMUM (40 Soal) ===
const puData = [
  ["Ibukota negara Australia adalah...", "Sydney", "Melbourne", "Canberra", "Brisbane", "Perth", 2],
  ["Penemu mesin uap adalah...", "Thomas Edison", "James Watt", "Alexander Bell", "Nikola Tesla", "Albert Einstein", 1],
  ["Benua terluas di dunia adalah...", "Eropa", "Afrika", "Amerika Utara", "Asia", "Antartika", 3],
  ["Lagu kebangsaan Indonesia Raya diciptakan pada tahun...", "1920", "1924", "1928", "1932", "1945", 2],
  ["Hari Lahir Pancasila diperingati setiap tanggal...", "1 Juni", "17 Agustus", "1 Oktober", "10 November", "28 Oktober", 0],
  ["Mata uang negara Inggris adalah...", "Euro", "Poundsterling", "Dollar", "Yen", "Franc", 1],
  ["Gunung tertinggi di dunia adalah...", "Kilimanjaro", "Elbrus", "Everest", "Aconcagua", "Denali", 2],
  ["Semboyan Bhinneka Tunggal Ika terdapat dalam kitab...", "Negarakertagama", "Sutasoma", "Pararaton", "Arjuna Wiwaha", "Ramayana", 1],
  ["Tahun berdirinya ASEAN adalah...", "1965", "1966", "1967", "1968", "1969", 2],
  ["Penemu benua Amerika adalah...", "James Cook", "Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo", 2],
  ["Planet terdekat dengan Matahari adalah...", "Venus", "Bumi", "Mars", "Merkurius", "Jupiter", 3],
  ["Ibukota provinsi Jawa Timur adalah...", "Semarang", "Bandung", "Surabaya", "Malang", "Yogyakarta", 2],
  ["Presiden ke-3 Republik Indonesia adalah...", "Soekarno", "Soeharto", "B.J. Habibie", "Abdurrahman Wahid", "Megawati", 2],
  ["Organisasi kesehatan dunia di bawah PBB adalah...", "UNICEF", "UNESCO", "WHO", "FAO", "ILO", 2],
  ["Tari Kecak berasal dari daerah...", "Sumatera Barat", "Jawa Tengah", "Bali", "Kalimantan Timur", "Papua", 2],
  ["Candi Prambanan merupakan candi bercorak...", "Buddha", "Hindu", "Konghucu", "Animisme", "Dinamisme", 1],
  ["Batas wilayah laut Indonesia yang ditarik 200 mil dari garis dasar disebut...", "Batas Teritorial", "Batas Landas Kontinen", "Zona Ekonomi Eksklusif (ZEE)", "Batas Laut Bebas", "Batas ZOPFAN", 2],
  ["UUD 1945 telah diamandemen sebanyak...", "1 kali", "2 kali", "3 kali", "4 kali", "5 kali", 3],
  ["Menteri Keuangan Indonesia (tahun 2024) adalah...", "Sri Mulyani", "Retno Marsudi", "Prabowo Subianto", "Erick Thohir", "Nadiem Makarim", 0],
  ["Simbol unsur Kimia untuk Besi adalah...", "Be", "Fe", "Au", "Ag", "Cu", 1],
  ["Hewan tercepat di dunia di darat adalah...", "Singa", "Kuda", "Cheetah", "Harimau", "Rusa", 2],
  ["Siapakah penulis novel Laskar Pelangi?", "Andrea Hirata", "Habiburrahman El Shirazy", "Tere Liye", "Pramoedya Ananta Toer", "Raditya Dika", 0],
  ["Alat untuk mengukur tekanan udara adalah...", "Termometer", "Barometer", "Seismograf", "Anemometer", "Higrometer", 1],
  ["Samudra terdalam di dunia adalah...", "Atlantik", "Hindia", "Arktik", "Pasifik", "Antartika", 3],
  ["Berapa jumlah provinsi di Indonesia per tahun 2024?", "34", "35", "37", "38", "39", 3],
  ["Danau terdalam di dunia adalah...", "Danau Toba", "Danau Baikal", "Danau Superior", "Danau Victoria", "Danau Kaspia", 1],
  ["Siapakah pelukis Mona Lisa?", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet", "Rembrandt", 2],
  ["Mata uang negara Korea Selatan adalah...", "Yen", "Yuan", "Won", "Ringgit", "Baht", 2],
  ["Ibukota negara Kanada adalah...", "Toronto", "Vancouver", "Montreal", "Ottawa", "Quebec", 3],
  ["PBB didirikan di kota...", "New York", "Washington", "San Francisco", "London", "Paris", 2],
  ["Bentuk pemerintahan negara Jepang adalah...", "Republik", "Kekaisaran", "Kerajaan Mutlak", "Serikat", "Oligarki", 1],
  ["Bapak Koperasi Indonesia adalah...", "Ki Hajar Dewantara", "Mohammad Hatta", "Soekarno", "Soedirman", "Ahmad Yani", 1],
  ["Senjata tradisional Kujang berasal dari daerah...", "Jawa Tengah", "Jawa Timur", "Jawa Barat", "Bali", "Aceh", 2],
  ["Pembuat Bendera Pusaka Merah Putih adalah...", "Cut Nyak Dien", "Fatmawati", "Kartini", "Dewi Sartika", "Megawati", 1],
  ["Pulau terbesar di Indonesia adalah...", "Sumatera", "Kalimantan", "Papua", "Sulawesi", "Jawa", 2],
  ["Alat pernapasan pada ikan adalah...", "Paru-paru", "Insang", "Trakea", "Kulit", "Stomata", 1],
  ["Sila kedua Pancasila dilambangkan dengan...", "Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng", "Padi dan Kapas", 1],
  ["Benua yang mendapat julukan Benua Hitam adalah...", "Asia", "Eropa", "Amerika", "Afrika", "Australia", 3],
  ["Penemu telepon adalah...", "Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi", "Galileo Galilei", 1],
  ["Berapa jumlah warna pada pelangi?", "5", "6", "7", "8", "9", 2]
];

// Helper ViewBox standar untuk opsi SVG
const svgOptionWrapper = (content) => `<span style="font-weight:bold;font-size:1.2rem;min-width:30px;display:inline-block"></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="height:60px;background:none">${content}</svg>`;

// === 4. POLA GAMBAR (55 Soal) ===
const genPola = () => {
  let res = [];
  
  for (let i = 1; i <= 55; i++) {
    let svgStr = '';
    let text = '';
    let rawOptions = [];

    // ViewBox standar untuk deret 4 panel
    const svgWrapper = (content) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" style="background:#0f172a;border-radius:8px">
      <!-- Bingkai Panel -->
      <rect x="20" y="20" width="80" height="80" fill="none" stroke="var(--glass-border)" stroke-width="2"/>
      <rect x="130" y="20" width="80" height="80" fill="none" stroke="var(--glass-border)" stroke-width="2"/>
      <rect x="240" y="20" width="80" height="80" fill="none" stroke="var(--glass-border)" stroke-width="2"/>
      <rect x="350" y="20" width="80" height="80" fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="5,5"/>
      <text x="380" y="68" fill="var(--primary)" font-size="28" font-weight="bold">?</text>
      <!-- Panah -->
      <path d="M 105 60 L 125 60 M 120 55 L 125 60 L 120 65" fill="none" stroke="white" stroke-width="2"/>
      <path d="M 215 60 L 235 60 M 230 55 L 235 60 L 230 65" fill="none" stroke="white" stroke-width="2"/>
      <path d="M 325 60 L 345 60 M 340 55 L 345 60 L 340 65" fill="none" stroke="white" stroke-width="2"/>
      ${content}
    </svg>`;

    if (i <= 20) {
      // LOGIKA 1: Rotasi Bentuk Geometri (Setiap soal beda derajat dan bentuk)
      const rStep = 30 + (i * 15);
      const isSquare = i % 2 === 0;
      
      const drawShape = (cx, cy, rot) => {
        if(isSquare) return `<rect x="${cx-20}" y="${cy-20}" width="40" height="40" fill="var(--success)" transform="rotate(${rot}, ${cx}, ${cy})"/>`;
        return `<polygon points="${cx},${cy-25} ${cx+20},${cy+15} ${cx-20},${cy+15}" fill="var(--accent)" transform="rotate(${rot}, ${cx}, ${cy})"/>`;
      };
      
      svgStr = svgWrapper(`
        ${drawShape(60, 60, 0)}
        ${drawShape(170, 60, rStep)}
        ${drawShape(280, 60, rStep*2)}
      `);
      
      text = \`Pola Gambar \${i}: Analisis pola perubahan rotasi dari gambar pertama hingga ketiga, lalu temukan gambar keempat yang tepat.\`;
      
      // Generate 5 SVG options
      rawOptions = [];
      const correctRot = rStep * 3;
      for (let j = 0; j < 5; j++) {
        const optionRot = correctRot + (j * 45); // Fake options have different rotations
        // For option SVG, cx=50, cy=50
        const optShape = isSquare 
            ? \`<rect x="30" y="30" width="40" height="40" fill="var(--success)" transform="rotate(\${optionRot}, 50, 50)" />\`
            : \`<polygon points="50,25 70,65 30,65" fill="var(--accent)" transform="rotate(\${optionRot}, 50, 50)" />\`;
        rawOptions.push(svgOptionWrapper(optShape));
      }

    } else if (i <= 40) {
      // LOGIKA 2: Penambahan Titik Dinamis
      const startDots = (i % 3) + 1;
      const stepDots = (i % 2) + 1;
      
      const drawDots = (cx, cy, count) => {
        let dots = '';
        for(let d=0; d<count; d++) {
            dots += \`<circle cx="\${cx - 15 + (d%3)*15}" cy="\${cy - 15 + Math.floor(d/3)*15}" r="4" fill="white"/>\`;
        }
        return dots;
      };

      svgStr = svgWrapper(`
        ${drawDots(60, 60, startDots)}
        ${drawDots(170, 60, startDots + stepDots)}
        ${drawDots(280, 60, startDots + stepDots*2)}
      `);
      
      text = \`Pola Gambar \${i}: Amati penambahan elemen pada kotak secara progresif, berapakah konfigurasi elemen di kotak keempat?\`;
      
      rawOptions = [];
      const correctCount = startDots + stepDots * 3;
      for(let j=0; j<5; j++) {
        // Vary the count slightly for options
        const optCount = correctCount + j - 1 > 0 ? correctCount + j - 1 : correctCount + j + 4;
        rawOptions.push(svgOptionWrapper(drawDots(50, 50, optCount)));
      }

    } else {
      // LOGIKA 3: Refleksi/Cermin
      const isHoriz = i % 2 === 0;
      const t1 = isHoriz ? \`scale(-1, 1) translate(-120, 0)\` : \`scale(1, -1) translate(0, -120)\`;
      
      const drawTriangle = (cx, cy, trans) => {
         return \`<polygon points="\${cx},\${cy-20} \${cx+25},\${cy+15} \${cx-10},\${cy+5}" fill="var(--primary)" transform="\${trans}"/>\`;
      }

      svgStr = svgWrapper(`
        ${drawTriangle(60, 60, "")}
        ${drawTriangle(60, 60, isHoriz ? \`scale(-1, 1) translate(-230, 0)\` : \`scale(1, -1) translate(0, -120)\`)}
        ${drawTriangle(280, 60, "rotate(90, 280, 60)")}
      `);
      
      text = \`Pola Gambar \${i}: Jika Kotak 1 berubah menjadi Kotak 2 dengan sebuah hukum pencerminan, terapkan hukum yang sama dari Kotak 3 ke Kotak 4.\`;

      rawOptions = [];
      const correctTransform = isHoriz ? \`scale(-1, 1) translate(-100, 0) rotate(-90, 50, 50)\` : \`scale(1, -1) translate(0, -100) rotate(90, 50, 50)\`;
      
      rawOptions.push(svgOptionWrapper(\`<polygon points="50,30 75,65 40,55" fill="var(--primary)" transform="\${correctTransform}"/>\`));
      rawOptions.push(svgOptionWrapper(\`<polygon points="50,30 75,65 40,55" fill="var(--primary)" transform="rotate(45, 50, 50)"/>\`));
      rawOptions.push(svgOptionWrapper(\`<polygon points="50,30 75,65 40,55" fill="var(--primary)" transform="rotate(135, 50, 50)"/>\`));
      rawOptions.push(svgOptionWrapper(\`<polygon points="50,30 75,65 40,55" fill="var(--primary)" transform="rotate(180, 50, 50)"/>\`));
      rawOptions.push(svgOptionWrapper(\`<polygon points="50,30 75,65 40,55" fill="var(--primary)" transform="rotate(-45, 50, 50)"/>\`));
    }

    // Mengacak opsi jawaban
    let finalOptions = [];
    const randomizedCorrectIndex = (i * 7) % 5; 
    let tempRaw = [...rawOptions];
    
    // Pindahkan opsi benar (index 0) ke posisi randomizedCorrectIndex
    const correctStr = tempRaw.splice(0, 1)[0];
    tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

    for (let j = 0; j < 5; j++) {
      // We inject A. B. C. D. E. into the svg wrapper
      const prefix = String.fromCharCode(65 + j);
      finalOptions.push(tempRaw[j].replace('></span>', `>${prefix}.</span>`));
    }

    res.push({
      id: \`4-\${i}\`, text: text, svg: svgStr, options: finalOptions, answer: randomizedCorrectIndex
    });
  }
  return res;
};

// === 5. ABSTRAKSI RUANG (27 Soal) ===
const genRuang = () => {
  let res = [];
  
  const drawIsometricCube = (cx, cy, color, symTop, symLeft, symRight) => {
    return \`
      <g transform="translate(\${cx - 100}, \${cy - 100}) scale(0.6)">
        <polygon points="100,40 50,65 100,90 150,65" fill="\${color}" opacity="0.9" stroke="white" stroke-width="2"/>
        <text x="92" y="70" fill="white" font-size="20" font-weight="bold">\${symTop}</text>
        <polygon points="50,65 100,90 100,150 50,125" fill="\${color}" opacity="0.6" stroke="white" stroke-width="2"/>
        <text x="68" y="115" fill="white" font-size="20" font-weight="bold">\${symLeft}</text>
        <polygon points="150,65 100,90 100,150 150,125" fill="\${color}" opacity="0.3" stroke="white" stroke-width="2"/>
        <text x="118" y="115" fill="white" font-size="20" font-weight="bold">\${symRight}</text>
      </g>
    \`;
  };

  for (let i = 1; i <= 27; i++) {
    const color = \`hsl(\${(i * 40 + 100) % 360}, 60%, 45%)\`;
    let svgStr = '';
    let text = '';
    let rawOptions = [];
    
    const symbols = ['1', '2', '3', '4', '5', '6'];
    const s1 = symbols[i % 6];
    const s2 = symbols[(i+1) % 6];
    const s3 = symbols[(i+2) % 6];

    // LOGIKA: Rotasi Kubus
    const rotSteps = (i % 3) + 1;
    
    svgStr = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" style="background:#020617;border-radius:8px">
      \${drawIsometricCube(100, 100, color, s1, s2, s3)}
      <text x="180" y="80" fill="white" font-size="16">Mencari Hasil</text>
      <text x="180" y="100" fill="white" font-size="16">Rotasi 3D ➡</text>
      \${drawIsometricCube(330, 100, 'rgba(255,255,255,0.1)', '?', '?', '?')}
    </svg>\`;
    
    text = \`Abstraksi Ruang \${i}: Jika kubus di atas diputar \${rotSteps} kali searah jarum jam, manakah gambar kubus yang benar?\`;
    
    rawOptions = [];
    // Correct Option
    rawOptions.push(svgOptionWrapper(drawIsometricCube(120, 120, color, s2, s3, s1)));
    // Fake Options
    rawOptions.push(svgOptionWrapper(drawIsometricCube(120, 120, color, s3, s1, s2)));
    rawOptions.push(svgOptionWrapper(drawIsometricCube(120, 120, color, s1, s3, s2)));
    rawOptions.push(svgOptionWrapper(drawIsometricCube(120, 120, color, s2, s1, s3)));
    rawOptions.push(svgOptionWrapper(drawIsometricCube(120, 120, color, s3, s2, s1)));

    let finalOptions = [];
    const randomizedCorrectIndex = (i * 5) % 5; 
    let tempRaw = [...rawOptions];
    
    const correctStr = tempRaw.splice(0, 1)[0];
    tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

    for (let j = 0; j < 5; j++) {
      const prefix = String.fromCharCode(65 + j);
      finalOptions.push(tempRaw[j].replace('></span>', \`>\${prefix}.</span>\`));
    }

    res.push({
      id: \`5-\${i}\`, text: text, svg: svgStr, options: finalOptions, answer: randomizedCorrectIndex
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
    let rawOptions = [];

    const rot = i * 20;
    
    svgStr = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" style="background:#1e293b;border-radius:8px">
      <g transform="translate(100, 75)">
        <path d="M-40,-40 L40,-40 L40,40 L-40,40 Z" fill="var(--text-muted)" opacity="0.3"/>
        <path d="M-40,-40 L40,-40 L40,40 L-40,40 Z" fill="var(--primary)" clip-path="url(#cut\${i})"/>
        
        <clipPath id="cut\${i}">
            <polygon points="-50,-50 50,-50 50,50 -50,50" />
            <polygon points="10,-10 50,20 10,50" transform="rotate(\${rot})" />
        </clipPath>
        <polygon points="10,-10 50,20 10,50" transform="rotate(\${rot})" fill="none" stroke="white" stroke-width="2" stroke-dasharray="4,4"/>
      </g>
      <text x="230" y="75" fill="white" font-size="20">Kepingan? ➡</text>
    </svg>\`;
    
    text = \`Bentuk \${i}: Shape Completion. Temukan kepingan yang tepat untuk melengkapi bagian kosong dari persegi tersebut!\`;
    
    const drawPiece = (trans) => \`<polygon points="40,30 80,60 40,90" fill="var(--primary)" transform="\${trans}"/>\`;
    
    rawOptions = [];
    rawOptions.push(svgOptionWrapper(drawPiece(\`rotate(\${rot}, 50, 50) translate(-10, -30)\`)));
    rawOptions.push(svgOptionWrapper(drawPiece(\`rotate(\${rot+45}, 50, 50) translate(-10, -30)\`)));
    rawOptions.push(svgOptionWrapper(drawPiece(\`rotate(\${rot+90}, 50, 50) translate(-10, -30)\`)));
    rawOptions.push(svgOptionWrapper(drawPiece(\`rotate(\${rot+180}, 50, 50) translate(-10, -30)\`)));
    rawOptions.push(svgOptionWrapper(drawPiece(\`rotate(\${rot-45}, 50, 50) translate(-10, -30)\`)));

    let finalOptions = [];
    const randomizedCorrectIndex = (i * 3) % 5; 
    let tempRaw = [...rawOptions];
    
    const correctStr = tempRaw.splice(0, 1)[0];
    tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

    for (let j = 0; j < 5; j++) {
      const prefix = String.fromCharCode(65 + j);
      finalOptions.push(tempRaw[j].replace('></span>', \`>\${prefix}.</span>\`));
    }

    res.push({
      id: \`6-\${i}\`, text: text, svg: svgStr, options: finalOptions, answer: randomizedCorrectIndex
    });
  }
  return res;
};

// === 7. MANAJEMEN BIDANG (20 Soal, SKOR 1-5) ===
const manajemenData = [
  "Anda baru saja diangkat menjadi Manajer di divisi KDKMP PHTC. Beberapa anggota tim senior terlihat meremehkan kebijakan baru yang Anda buat. Tindakan Anda?",
  "Tim Anda gagal memenuhi target triwulanan yang sudah ditetapkan direksi karena perubahan regulasi mendadak. Apa respons Anda di rapat evaluasi?",
  "Anda menerima laporan bahwa salah satu staf administrasi menggelapkan sebagian kecil dana operasional, namun buktinya baru berupa indikasi lisan. Tindakan Anda?",
  "Dua karyawan terbaik Anda berselisih paham secara terbuka di tengah rapat divisi mengenai arah strategi proyek, menyebabkan suasana sangat tegang. Bagaimana Anda mengatasinya?",
  "Perusahaan menginstruksikan pemotongan anggaran KDKMP sebesar 20% untuk kuartal depan, padahal target kinerja justru dinaikkan. Apa strategi Anda?",
  "Sebuah vendor mitra KDKMP PHTC mendadak memutus kontrak sepihak satu hari sebelum acara besar dimulai. Apa tindakan darurat Anda?",
  "Anda memiliki anggota tim yang sangat rajin namun kompetensinya lambat berkembang, dan anggota tim lain yang cerdas namun sering mangkir. Siapa yang Anda prioritaskan untuk dipertahankan jika ada efisiensi?",
  "Dalam rapat lintas departemen, ide brilian tim Anda justru diakui oleh Manajer dari departemen lain sebagai ide mereka. Apa reaksi Anda?",
  "Anda menemukan bahwa prosedur standar (SOP) yang sudah berjalan selama 5 tahun ternyata menyebabkan banyak inefisiensi waktu. Bagaimana Anda mengubahnya?",
  "Salah satu proyek prioritas KDKMP mengalami kendala teknis berat dan dipastikan mundur dari jadwal awal. Bagaimana Anda mengkomunikasikan ini kepada atasan?",
  "Seorang bawahan mengeluhkan beban kerjanya yang dirasa tidak adil dibandingkan rekan setimnya. Setelah dicek, keluhan itu terbukti benar. Apa langkah Anda?",
  "Anda diminta atasan langsung untuk memanipulasi sebagian kecil data laporan kinerja agar divisi Anda terlihat lebih baik di mata dewan direksi. Bagaimana sikap Anda?",
  "Ada rumor kuat yang beredar di kantor bahwa divisi KDKMP akan dibubarkan tahun depan, membuat moral tim anjlok. Bagaimana Anda menanganinya?",
  "Seorang pelamar untuk posisi krusial di tim Anda adalah kerabat dekat dari salah satu direktur, namun hasil tesnya berada di bawah rata-rata kandidat lain. Apa keputusan Anda?",
  "Tim Anda mengusulkan inovasi digitalisasi yang membutuhkan investasi awal besar, namun diproyeksikan menghemat biaya miliaran dalam 3 tahun ke depan. Bagaimana Anda meyakinkan manajemen puncak?",
  "Anda memergoki staf Anda membocorkan informasi rahasia proyek PHTC kepada pihak eksternal secara tidak sengaja di media sosial. Tindakan Anda?",
  "Terjadi krisis komunikasi publik di mana nama KDKMP PHTC menjadi viral karena kesalahpahaman informasi dari salah satu layanan Anda. Langkah mitigasi pertama Anda?",
  "Anggota tim inti Anda sering melakukan kesalahan-kesalahan kecil (typo, lupa *attachment*, dll) yang berdampak pada profesionalisme tim di mata klien. Bagaimana Anda menegurnya?",
  "Anda harus memilih antara mengejar tenggat waktu (deadline) dengan kualitas kerja seadanya, atau terlambat 2 hari namun dengan kualitas kerja maksimal. Opsi mana yang Anda ambil dan bagaimana mitigasinya?",
  "Di akhir tahun, Anda mendapatkan kuota bonus/insentif terbatas yang tidak cukup untuk seluruh anggota tim. Bagaimana kriteria Anda dalam membagikannya?"
];

const genManajemen = () => {
  let res = [];
  const manajemenOptionsData = [
    ["Meminta HRD memecat mereka segera", "Mendiamkan mereka sampai mereka sadar sendiri", "Mengancam mereka dengan sanksi indisipliner", "Mengadakan rapat formal untuk sekadar membaca ulang visi", "Mengajak diskusi personal 4 mata untuk memahami keberatan mereka dan mencari titik temu"],
    ["Menyalahkan perubahan regulasi secara emosional", "Menyalahkan tim yang kurang cepat beradaptasi", "Diam dan pasrah menunggu arahan dari direksi", "Meminta maaf dan berjanji akan lebih baik tanpa rencana", "Mempresentasikan analisis dampak regulasi beserta strategi adaptasi riil untuk triwulan depan"],
    ["Langsung memecat staf tersebut di hari yang sama", "Menyebarkan rumor di kantor agar ia merasa malu", "Melaporkan langsung ke pihak berwajib tanpa bukti", "Menegur staf tersebut secara lisan di lorong kantor", "Melakukan audit internal secara diam-diam dan rahasia untuk mengumpulkan bukti tertulis"],
    ["Membentak mereka agar diam dan keluar dari ruangan", "Membubarkan rapat seketika dan pergi", "Membiarkan mereka berdebat tak berujung", "Melerai dan meminta mereka menyelesaikan urusannya di luar", "Menengahi dengan tenang, merangkum poin kedua pihak, dan mencari konklusi objektif berbasis data"],
    ["Protes keras ke manajemen dan mogok kerja", "Memotong gaji/insentif karyawan secara sepihak", "Menyerah pada target dan bekerja seadanya", "Melakukan penghematan pukul rata di semua lini", "Menganalisis skala prioritas, mengeliminasi inefisiensi, dan mengoptimalkan resource yang ada"],
    ["Memarahi vendor habis-habisan di media sosial", "Menyalahkan staf pengadaan di depan seluruh tim", "Panik dan membatalkan seluruh rangkaian acara", "Mencari vendor pengganti seadanya tanpa filter kualitas", "Mengerahkan seluruh relasi untuk vendor darurat sambil meninjau opsi penalti kontrak lama"],
    ["Memprioritaskan yang cerdas/mangkir tanpa syarat", "Memecat keduanya agar adil", "Memilih berdasarkan kedekatan/kesukaan personal", "Memprioritaskan yang rajin semata-mata karena kasihan", "Melakukan evaluasi performa komprehensif (KPI & Attitude) sebagai dasar keputusan efisiensi"],
    ["Marah dan memaki manajer tersebut di tengah rapat", "Menyindirnya dengan kasar di depan forum", "Diam saja karena tidak enak dan merasa segan", "Langsung memotong bicaranya dengan emosi", "Mengklarifikasi secara elegan dengan menambahkan detail teknis mendalam yang hanya dikuasai tim Anda"],
    ["Mengabaikan keluhan karena 'sudah tradisi'", "Mengubah SOP sepihak hari itu juga tanpa persetujuan", "Terus mengeluh kepada atasan tanpa bertindak", "Menunggu instruksi perbaikan dari HRD secara pasif", "Menyusun draf SOP baru yang efisien dan mempresentasikannya kepada manajemen tingkat atas"],
    ["Menutupi kendala sampai hari tenggat waktu tiba", "Mencari kambing hitam dari bawahan Anda", "Membuat alasan palsu yang tidak masuk akal", "Melaporkan kendala secara pasrah tanpa membawa solusi", "Melaporkan kendala sedini mungkin beserta analisis risiko dan proposal penyesuaian timeline"],
    ["Mengabaikan keluhannya karena dianggap cengeng", "Menyuruhnya resign jika tidak sanggup", "Memarahi rekan setimnya yang dianggap bersantai", "Menasihatinya untuk banyak bersabar dan ikhlas", "Memetakan ulang pembagian beban kerja secara transparan dan adil sesuai deskripsi tugas (jobdesk)"],
    ["Menolak mentah-mentah dengan nada menantang", "Mengikuti arahan manipulasi sepenuhnya karena takut", "Merekam percakapan untuk memeras atasan di kemudian hari", "Memanipulasi sebagian kecil agar terlihat aman", "Menolak dengan profesional dan menyajikan data asli yang dikemas dengan proyeksi strategi perbaikan nyata"],
    ["Ikut menyebarkan rumor ke departemen lain", "Sibuk mencari pekerjaan baru dan menelantarkan tim", "Memarahi siapapun yang membicarakan rumor tersebut", "Mendiamkan rumor sampai hilang terbawa waktu", "Mengklarifikasi fakta ke dewan direksi, lalu mengadakan townhall meeting untuk menenangkan moral tim"],
    ["Langsung menerimanya untuk menjilat direktur", "Menolaknya dengan kata-kata tidak sopan", "Menerimanya namun menempatkannya di posisi rendahan", "Merekayasa hasil tes pelamar agar terlihat pantas", "Menolaknya secara etis dengan melampirkan hasil tes objektif dan merekomendasikan kandidat yang lebih tepat"],
    ["Memaksa manajemen menyetujuinya tanpa dasar kuat", "Marah dan mengancam mundur jika ditolak", "Diam-diam menggunakan dana darurat divisi lain", "Hanya menyajikan ide secara lisan/kasar", "Menyusun proposal komprehensif berisi ROI (Return on Investment) dan simulasi penghematan 3 tahun ke depan"],
    ["Memviralkan kebodohan staf tersebut", "Melakukan kekerasan fisik atau verbal berlebihan", "Menyita perangkat pribadi (HP) staf tersebut", "Langsung memecatnya hari itu juga tanpa pesangon", "Memberikan Surat Peringatan sesuai PKB dan memperketat protokol keamanan informasi digital divisi"],
    ["Menghapus seluruh akun media sosial divisi", "Meluapkan amarah kepada tim Public Relation", "Mengabaikan netizen dan mematikan kolom komentar", "Menghapus komentar negatif secara diam-diam", "Merilis pernyataan klarifikasi resmi yang empatik, jujur, dan menjanjikan langkah perbaikan nyata"],
    ["Mempermalukannya di grup chat divisi", "Langsung menurunkan jabatannya saat itu juga", "Membiarkannya karena menganggap itu hal remeh", "Terus-menerus Anda perbaiki sendiri secara diam-diam", "Memberikan feedback konstruktif secara privat dan mengimplementasikan sistem peer-review antar anggota"],
    ["Mengerjakan asal-asalan yang penting tepat waktu", "Terlambat berhari-hari tanpa mengabari klien", "Memaksa bawahan lembur non-stop sampai sakit", "Mengerjakan setengah-setengah dengan kualitas rendah", "Melakukan negosiasi perpanjangan waktu logis dengan klien demi menjamin kualitas pekerjaan optimal"],
    ["Membaginya rata tanpa memedulikan siapa yang berkinerja", "Mengambil porsi terbesar untuk diri sendiri", "Memberikannya kepada yang paling sering curhat soal uang", "Membagikannya murni berdasarkan senioritas masa kerja", "Mengalokasikan bonus secara proporsional berlandaskan metrik pencapaian KPI individu yang transparan"]
  ];

  for (let i = 0; i < manajemenData.length; i++) {
    const bobotOptions = [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
      [2, 4, 5, 3, 1],
      [3, 1, 2, 5, 4],
      [4, 5, 1, 2, 3] 
    ];
    let currentBobot = bobotOptions[i % 5];
    let finalOptions = [];
    
    for(let j = 0; j < 5; j++) {
       const targetPoin = currentBobot[j];
       const textIndex = targetPoin - 1; 
       const prefix = String.fromCharCode(65 + j);
       const rawText = manajemenOptionsData[i][textIndex];
       finalOptions.push(\`\${prefix}. \${rawText}\`);
    }

    res.push({
      id: \`7-\${i+1}\`,
      text: \`Studi Kasus Manajemen \${i+1}: \${manajemenData[i]}\`,
      options: finalOptions,
      optionScores: currentBobot
    });
  }
  return res;
};

const buildQuestions = (dataArray, prefix, subtestId) => {
  return dataArray.map((row, idx) => ({
    id: \`\${subtestId}-\${idx+1}\`,
    text: \`Soal \${prefix} \${idx+1}: \${row[0]}\`,
    options: [\`A. \${row[1]}\`, \`B. \${row[2]}\`, \`C. \${row[3]}\`, \`D. \${row[4]}\`, \`E. \${row[5]}\`],
    answer: row[6]
  }));
};

export const SUBTESTS = [
  {
    id: 1,
    title: "Subtes 1: Kemampuan Bahasa (TERBARU)",
    focus: "Sinonim, Antonim, Analogi",
    totalQuestions: 50,
    timeLimit: 7 * 60,
    questions: buildQuestions(bahasaData, "Bahasa", 1)
  },
  {
    id: 2,
    title: "Subtes 2: Kemampuan Hitungan (TERBARU)",
    focus: "Deret, Hitung Cepat, Persen",
    totalQuestions: 31,
    timeLimit: 7 * 60,
    questions: buildQuestions(hitunganData, "Hitungan", 2)
  },
  {
    id: 3,
    title: "Subtes 3: Pengetahuan Umum (TERBARU)",
    focus: "Wawasan Kebangsaan, Isu Global",
    totalQuestions: 40,
    timeLimit: 7 * 60,
    questions: buildQuestions(puData, "Pengetahuan Umum", 3)
  },
  {
    id: 4,
    title: "Subtes 4: Pola Gambar",
    focus: "Melanjutkan pola visual",
    totalQuestions: 55,
    timeLimit: 7 * 60,
    questions: genPola()
  },
  {
    id: 5,
    title: "Subtes 5: Abstraksi Ruang",
    focus: "Rotasi 3D & Jaring kubus",
    totalQuestions: 27,
    timeLimit: 7 * 60,
    questions: genRuang()
  },
  {
    id: 6,
    title: "Subtes 6: Bentuk",
    focus: "Identifikasi siluet dan bentuk",
    totalQuestions: 25,
    timeLimit: 7 * 60,
    questions: genBentuk()
  },
  {
    id: 7,
    title: "Subtes 7: Manajemen Bidang",
    focus: "Studi kasus manajerial PHTC",
    totalQuestions: 20,
    timeLimit: 20 * 60,
    questions: genManajemen()
  }
];
