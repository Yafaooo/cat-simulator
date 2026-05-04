// src/data/questions.js

// === 1. BAHASA (50 Soal) ===
// Format: [Pertanyaan, A, B, C, D, E, Kunci]
const bahasaData = [
  ["Sinonim: EVOKASI", "Penilaian", "Penggugah rasa", "Pengungsian", "Izin menetap", "Penyelidikan", 1],
  ["Sinonim: KISI-KISI", "Tabel", "Terali", "Pola", "Perhitungan", "Alat menangkap ikan", 1],
  ["Sinonim: APRIORI", "Kebenaran absolut", "Keputusan sepihak", "Anggapan sebelum tahu keadaan", "Dugaan sementara", "Prediksi akurat", 2],
  ["Sinonim: PARADOKS", "Sejalan", "Berlawanan", "Masa lalu", "Khayalan", "Kemiripan", 1],
  ["Sinonim: ELABORASI", "Penyusutan", "Penjelasan terperinci", "Pemotongan", "Penarikan kesimpulan", "Penyelidikan", 1],
  ["Sinonim: MILITAN", "Pasif", "Agresif/Bersemangat", "Bodoh", "Kasar", "Toleran", 1],
  ["Sinonim: ANOMALI", "Keanehan", "Kewajaran", "Keuntungan", "Kerugian", "Kestabilan", 0],
  ["Sinonim: SINE QUA NON", "Tidak ada", "Harus ada", "Sebagian", "Mungkin", "Pilihan", 1],
  ["Sinonim: TENTATIF", "Pasti", "Sementara", "Berubah-ubah", "Kekal", "Cepat", 1],
  ["Sinonim: VIRTUAL", "Nyata", "Maya", "Palsu", "Asli", "Bayangan", 1],
  ["Sinonim: KOMPREHENSIF", "Sempit", "Mendalam", "Menyeluruh", "Dangkal", "Terpisah", 2],
  ["Sinonim: ADAPTIF", "Kaku", "Mudah menyesuaikan diri", "Keras kepala", "Lemah", "Kuat", 1],
  ["Sinonim: STAGNAN", "Berkembang", "Bergerak", "Maju", "Mandek", "Berubah", 3],
  ["Sinonim: FLUKTUATIF", "Tetap", "Turun naik", "Merata", "Terpusat", "Menyebar", 1],
  ["Sinonim: INTEGRITAS", "Kecurangan", "Kebohongan", "Kejujuran", "Kebaikan", "Keburukan", 2],
  ["Sinonim: KAPASITAS", "Kecil", "Besar", "Daya tampung", "Kekuatan", "Kelemahan", 2],
  ["Sinonim: RELEVAN", "Tidak nyambung", "Bersesuaian", "Bertentangan", "Berbeda", "Sama", 1],
  ["Antonim: PERINTIS", "Pendahulu", "Pewaris", "Penerus", "Pendiri", "Pelopor", 2],
  ["Antonim: NISBI", "Relatif", "Maya", "Mutlak", "Nyata", "Abstrak", 2],
  ["Antonim: SUMBANG", "Serasi", "Kacau", "Derma", "Tepat", "Selaras", 0],
  ["Antonim: KONTEMPORER", "Modern", "Masa kini", "Kuno", "Baru", "Canggih", 2],
  ["Antonim: PROGRESIF", "Maju", "Berkembang", "Regresif", "Stagnan", "Lambat", 3],
  ["Antonim: OPTIMIS", "Yakin", "Percaya diri", "Pesimis", "Ragu", "Takut", 3],
  ["Antonim: EFEKTIF", "Tepat guna", "Berhasil", "Inefektif", "Gagal", "Buruk", 2],
  ["Antonim: EFISIEN", "Hemat", "Cepat", "Boros", "Lambat", "Tepat", 2],
  ["Antonim: DINAMIS", "Bergerak", "Berubah", "Statis", "Tetap", "Kaku", 3],
  ["Antonim: HETEROGEN", "Beragam", "Bermacam-macam", "Homogen", "Seragam", "Sama", 3],
  ["Antonim: MAYORITAS", "Sebagian besar", "Banyak", "Minoritas", "Sedikit", "Sebagian kecil", 3],
  ["Antonim: INTROVERT", "Tertutup", "Pemalu", "Ekstrovert", "Terbuka", "Ramah", 3],
  ["Antonim: SUBJEKTIF", "Pribadi", "Individual", "Objektif", "Faktual", "Nyata", 3],
  ["Antonim: TEORITIS", "Konseptual", "Abstrak", "Praktis", "Nyata", "Faktual", 3],
  ["Antonim: VERBAL", "Lisan", "Kata-kata", "Non-verbal", "Tindakan", "Isyarat", 3],
  ["Antonim: EKSPLISIT", "Tersurat", "Jelas", "Implisit", "Tersirat", "Samar", 3],
  ["Antonim: MAKRO", "Besar", "Luas", "Mikro", "Kecil", "Sempit", 3],
  ["Analogi: BUMI : MATAHARI : REVOLUSI =", "Bulan : Bumi : Rotasi", "Elektron : Inti Atom : Orbit", "Roda : Poros : Bergerak", "Air : Mengalir : Gravitasi", "Bulan : Bumi : Resolusi", 1],
  ["Analogi: GURU : SEKOLAH : MURID =", "Dokter : Rumah Sakit : Pasien", "Hakim : Pengadilan : Jaksa", "Petani : Sawah : Padi", "Sutradara : Film : Aktor", "Koki : Restoran : Dapur", 0],
  ["Analogi: BUKU : BACA : PERPUSTAKAAN =", "Film : Tonton : Bioskop", "Musik : Dengar : Radio", "Makanan : Makan : Restoran", "Pakaian : Pakai : Lemari", "Uang : Simpan : Bank", 0],
  ["Analogi: PENA : TINTA : KERTAS =", "Kuas : Cat : Kanvas", "Pensil : Penghapus : Buku", "Kapur : Papan Tulis : Kelas", "Spidol : Warna : Gambar", "Mouse : Komputer : Meja", 0],
  ["Analogi: MOBIL : BENSIN : JALAN =", "Kereta : Rel : Stasiun", "Pesawat : Avtur : Udara", "Kapal : Laut : Pelabuhan", "Sepeda : Kayuh : Kaki", "Motor : Helm : Kepala", 1],
  ["Analogi: SIANG : MATAHARI : TERANG =", "Malam : Bulan : Gelap", "Pagi : Fajar : Sejuk", "Sore : Senja : Indah", "Hujan : Air : Basah", "Salju : Es : Dingin", 0],
  ["Analogi: RUMAH : ATAP : LINDUNG =", "Payung : Hujan : Kering", "Baju : Kain : Hangat", "Sepatu : Alas : Kaki", "Topi : Kepala : Panas", "Kacamata : Lensa : Mata", 0],
  ["Analogi: BURUNG : TERBANG : SAYAP =", "Ikan : Renang : Sirip", "Ular : Merayap : Perut", "Katak : Lompat : Kaki", "Kuda : Lari : Sepatu", "Monyet : Panjat : Pohon", 0],
  ["Analogi: DOKTER : STETOSKOP : PASIEN =", "Montir : Kunci Pas : Mobil", "Guru : Spidol : Murid", "Polisi : Pistol : Penjahat", "Koki : Pisau : Dapur", "Tukang : Palu : Paku", 0],
  ["Analogi: KAYU : MEJA : DUDUK =", "Besi : Pisau : Potong", "Kain : Baju : Pakai", "Kaca : Jendela : Lihat", "Tanah : Liat : Kendi", "Plastik : Botol : Minum", 1],
  ["Analogi: HUJAN : PAYUNG : KERING =", "Lapar : Makan : Kenyang", "Haus : Minum : Segar", "Lelah : Tidur : Pulas", "Sakit : Obat : Sembuh", "Kotor : Mandi : Bersih", 0],
  ["Analogi: LAPAR : MAKAN : KENYANG =", "Haus : Minum : Segar", "Lelah : Tidur : Pulas", "Sakit : Obat : Sembuh", "Kotor : Mandi : Bersih", "Bodoh : Belajar : Pintar", 4],
  ["Analogi: BODOH : BELAJAR : PINTAR =", "Miskin : Kerja : Kaya", "Lemah : Latihan : Kuat", "Jelek : Dandan : Cantik", "Kotor : Sapu : Bersih", "Lapar : Masak : Kenyang", 0],
  ["Analogi: MISKIN : KERJA : KAYA =", "Lemah : Olahraga : Kuat", "Jelek : Perawatan : Cantik", "Kotor : Mandi : Bersih", "Lapar : Makan : Kenyang", "Bodoh : Sekolah : Pintar", 0],
  ["Analogi: LEMAH : OLAHRAGA : KUAT =", "Sakit : Istirahat : Sembuh", "Kotor : Cuci : Bersih", "Lapar : Suap : Kenyang", "Bodoh : Baca : Pintar", "Miskin : Hemat : Kaya", 1],
  ["Analogi: SAKIT : ISTIRAHAT : SEMBUH =", "Lelah : Tidur : Pulas", "Kotor : Sabun : Bersih", "Lapar : Nasi : Kenyang", "Bodoh : Buku : Pintar", "Miskin : Uang : Kaya", 0]
];

// === 2. HITUNGAN (31 Soal) ===
const hitunganData = [
  ["Deret Angka: 2, 4, 8, 16, 32, ...", "48", "64", "56", "72", "128", 1],
  ["Deret Angka: 1, 3, 6, 10, 15, ...", "18", "20", "21", "25", "28", 2],
  ["Deret Angka: 100, 95, 85, 70, 50, ...", "25", "30", "35", "40", "45", 0],
  ["Deret Angka: 2, 5, 11, 23, 47, ...", "85", "90", "95", "100", "105", 2],
  ["Deret Angka: 3, 9, 27, 81, 243, ...", "729", "648", "512", "810", "999", 0],
  ["Deret Angka: 1, 4, 9, 16, 25, ...", "30", "32", "36", "40", "49", 2],
  ["Deret Angka: 5, 10, 20, 40, 80, ...", "120", "140", "160", "180", "200", 2],
  ["Deret Angka: 10, 20, 15, 30, 25, 50, ...", "40", "45", "50", "55", "60", 1],
  ["Deret Angka: 1, 2, 4, 7, 11, 16, ...", "20", "21", "22", "23", "24", 2],
  ["Deret Angka: 2, 6, 12, 20, 30, ...", "40", "42", "44", "46", "48", 1],
  ["Hitung Cepat: 15% dari 200 adalah...", "15", "20", "25", "30", "35", 3],
  ["Hitung Cepat: 25% dari 400 adalah...", "50", "75", "100", "125", "150", 2],
  ["Hitung Cepat: 40% dari 500 adalah...", "150", "200", "250", "300", "350", 1],
  ["Hitung Cepat: 75% dari 800 adalah...", "400", "500", "600", "700", "800", 2],
  ["Hitung Cepat: 12.5% dari 1000 adalah...", "100", "125", "150", "175", "200", 1],
  ["Hitung Cepat: 33.33% dari 900 adalah...", "200", "300", "400", "500", "600", 1],
  ["Hitung Cepat: 60% dari 1200 adalah...", "600", "720", "840", "960", "1080", 1],
  ["Hitung Cepat: 80% dari 1500 adalah...", "1000", "1100", "1200", "1300", "1400", 2],
  ["Hitung Cepat: 5% dari 5000 adalah...", "100", "150", "200", "250", "300", 3],
  ["Hitung Cepat: 2.5% dari 4000 adalah...", "50", "75", "100", "125", "150", 2],
  ["Matematika Dasar: (25 + 15) * 4 - 10 =", "140", "150", "160", "170", "180", 1],
  ["Matematika Dasar: 100 / 5 + 20 * 3 =", "60", "70", "80", "90", "100", 2],
  ["Matematika Dasar: (50 - 20) / 6 + 15 =", "15", "20", "25", "30", "35", 1],
  ["Matematika Dasar: 12 * 5 - 30 / 2 =", "40", "45", "50", "55", "60", 1],
  ["Matematika Dasar: (45 + 55) / 10 * 8 =", "60", "70", "80", "90", "100", 2],
  ["Matematika Dasar: 200 - 50 * 3 + 40 =", "70", "80", "90", "100", "110", 2],
  ["Matematika Dasar: (120 / 4) + (60 * 2) =", "120", "130", "140", "150", "160", 3],
  ["Matematika Dasar: 5^3 - 10^2 =", "15", "20", "25", "30", "35", 2],
  ["Matematika Dasar: Akar dari 144 + 5^2 =", "27", "37", "47", "57", "67", 1],
  ["Matematika Dasar: (8 * 9) - (7 * 6) =", "20", "30", "40", "50", "60", 1],
  ["Matematika Dasar: 1/2 + 1/4 + 1/8 =", "5/8", "6/8", "7/8", "8/8", "9/8", 2]
];

// === 3. PENGETAHUAN UMUM (40 Soal) ===
const puData = [
  ["Siapakah pencipta lagu kebangsaan Indonesia Raya?", "Ibu Sud", "W.R. Supratman", "C. Simanjuntak", "Kusbini", "L. Manik", 1],
  ["Dasar negara Republik Indonesia adalah...", "UUD 1945", "Pancasila", "Bhinneka Tunggal Ika", "Proklamasi", "GBHN", 1],
  ["Presiden pertama Republik Indonesia adalah...", "Soeharto", "B.J. Habibie", "Ir. Soekarno", "Megawati", "Susilo Bambang Yudhoyono", 2],
  ["Sila ketiga Pancasila berbunyi...", "Ketuhanan Yang Maha Esa", "Kemanusiaan yang Adil dan Beradab", "Persatuan Indonesia", "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan...", "Keadilan Sosial bagi Seluruh Rakyat Indonesia", 2],
  ["Peristiwa Rengasdengklok terjadi pada tanggal...", "15 Agustus 1945", "16 Agustus 1945", "17 Agustus 1945", "18 Agustus 1945", "19 Agustus 1945", 1],
  ["Ibu kota negara Indonesia (saat ini) adalah...", "Surabaya", "Bandung", "Medan", "Jakarta", "Semarang", 3],
  ["Candi Borobudur terletak di provinsi...", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "DI Yogyakarta", "Banten", 1],
  ["Semboyan negara Indonesia adalah...", "Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Pancasila", "Merdeka atau Mati", "Rawe-rawe rantas", 1],
  ["Pahlawan kemerdekaan yang dikenal sebagai Bapak Pendidikan Nasional adalah...", "Ki Hajar Dewantara", "Dr. Soetomo", "Tjipto Mangoenkoesoemo", "Douwes Dekker", "H.O.S. Tjokroaminoto", 0],
  ["Organisasi Budi Utomo didirikan pada tahun...", "1905", "1908", "1912", "1928", "1945", 1],
  ["Teks Proklamasi Kemerdekaan Indonesia diketik oleh...", "Soekarno", "Hatta", "Sayuti Melik", "Sukarni", "Ahmad Soebardjo", 2],
  ["Lambang negara Indonesia adalah...", "Garuda Pancasila", "Bendera Merah Putih", "Pohon Beringin", "Bintang Emas", "Padi dan Kapas", 0],
  ["Provinsi termuda di Indonesia (per 2024) terletak di pulau...", "Sumatera", "Kalimantan", "Sulawesi", "Papua", "Maluku", 3],
  ["Lagu 'Bagimu Negeri' diciptakan oleh...", "Kusbini", "Ibu Sud", "W.R. Supratman", "Ismail Marzuki", "C. Simanjuntak", 0],
  ["Hari Pahlawan diperingati setiap tanggal...", "10 November", "1 Juni", "17 Agustus", "21 April", "2 Mei", 0],
  ["Gunung tertinggi di pulau Jawa adalah...", "Gunung Merapi", "Gunung Semeru", "Gunung Bromo", "Gunung Rinjani", "Gunung Kerinci", 1],
  ["Danau terluas di Indonesia adalah...", "Danau Toba", "Danau Poso", "Danau Singkarak", "Danau Maninjau", "Danau Batur", 0],
  ["Mata uang negara Jepang adalah...", "Won", "Yuan", "Yen", "Baht", "Rupee", 2],
  ["Benua terkecil di dunia adalah...", "Eropa", "Australia", "Antartika", "Amerika Selatan", "Afrika", 1],
  ["Samudra terluas di dunia adalah...", "Samudra Atlantik", "Samudra Hindia", "Samudra Arktik", "Samudra Pasifik", "Samudra Antartika", 3],
  ["Penemu lampu pijar adalah...", "Alexander Graham Bell", "Thomas Alva Edison", "Nikola Tesla", "Albert Einstein", "Isaac Newton", 1],
  ["Planet terbesar dalam tata surya kita adalah...", "Bumi", "Mars", "Jupiter", "Saturnus", "Uranus", 2],
  ["Gas yang paling banyak terdapat di atmosfer bumi adalah...", "Oksigen", "Nitrogen", "Karbon Dioksida", "Hidrogen", "Helium", 1],
  ["Rumus kimia untuk air adalah...", "CO2", "H2O", "O2", "NaCl", "HCl", 1],
  ["Organ tubuh manusia yang berfungsi memompa darah adalah...", "Paru-paru", "Hati", "Ginjal", "Jantung", "Otak", 3],
  ["Vitamin yang banyak terdapat pada buah jeruk adalah...", "Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D", "Vitamin E", 2],
  ["Penyakit demam berdarah ditularkan melalui gigitan nyamuk...", "Anopheles", "Aedes aegypti", "Culex", "Mansonia", "Armigeres", 1],
  ["Zat hijau daun pada tumbuhan disebut...", "Klorofil", "Xilem", "Floem", "Stomata", "Kambium", 0],
  ["Proses tumbuhan membuat makanan sendiri disebut...", "Respirasi", "Transpirasi", "Fotosintesis", "Ekskresi", "Reproduksi", 2],
  ["Alat ukur gempa bumi disebut...", "Barometer", "Termometer", "Seismograf", "Anemometer", "Higrometer", 2],
  ["Sistem pemerintahan Indonesia adalah...", "Monarki", "Oligarki", "Republik", "Federasi", "Komunis", 2],
  ["Lembaga negara yang berwenang mengubah dan menetapkan UUD adalah...", "DPR", "MPR", "DPD", "Presiden", "MA", 1],
  ["Masa jabatan Presiden dan Wakil Presiden Indonesia adalah...", "4 tahun", "5 tahun", "6 tahun", "7 tahun", "8 tahun", 1],
  ["Pemilu pertama di Indonesia dilaksanakan pada tahun...", "1945", "1950", "1955", "1960", "1965", 2],
  ["Organisasi Perserikatan Bangsa-Bangsa (PBB) didirikan pada tahun...", "1940", "1945", "1950", "1955", "1960", 1],
  ["Markas besar PBB terletak di kota...", "London", "Paris", "Washington D.C.", "New York", "Jenewa", 3],
  ["Mata uang negara Malaysia adalah...", "Peso", "Baht", "Ringgit", "Kyat", "Dong", 2],
  ["Ibu kota negara Thailand adalah...", "Hanoi", "Manila", "Bangkok", "Kuala Lumpur", "Singapura", 2],
  ["Sungai terpanjang di dunia adalah...", "Sungai Amazon", "Sungai Nil", "Sungai Yangtze", "Sungai Mississippi", "Sungai Kuning", 1],
  ["Pegunungan Himalaya terletak di benua...", "Eropa", "Afrika", "Amerika Utara", "Amerika Selatan", "Asia", 4]
];

const genPola = () => {
  let res = [];
  
  for (let i = 1; i <= 55; i++) {
    let svgStr = '';
    let text = '';
    let rawOptions = [];
    let correctAnsIndex = 0;

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

    if (i <= 15) {
      // LOGIKA 1: Rotasi Bertahap (Progressive Difficulty)
      const rotStep1 = 45 + (i * 15); // Semakin sulit rotasinya tidak wajar
      const rotStep2 = -90 - (i * 15); // Elemen kedua mutar balik
      
      const drawRotShape = (cx, cy, rot1, rot2) => `
        <g transform="translate(${cx}, ${cy})">
          <polygon points="0,-25 15,15 -15,15" fill="var(--success)" transform="rotate(${rot1})" opacity="0.8"/>
          <circle cx="0" cy="-20" r="5" fill="white" transform="rotate(${rot2})"/>
        </g>`;
        
      svgStr = svgWrapper(`
        ${drawRotShape(60, 60, 0, 0)}
        ${drawRotShape(170, 60, rotStep1, rotStep2)}
        ${drawRotShape(280, 60, rotStep1*2, rotStep2*2)}
      `);
      
      text = `Pola Gambar ${i}: Analisis Rotasi Visual. Segitiga hijau dan titik putih berputar pada poros tengah dengan derajat yang konstan namun arah yang berbeda. Berapakah derajat rotasi yang terbentuk pada kotak ke-4?`;
      rawOptions = [
        `Segitiga hijau berotasi sebesar ${rotStep1*3}° searah putaran jarum, titik putih rotasi ${rotStep2*3}° berlawanan arah.`,
        `Segitiga dan titik putih berotasi bersama-sama ke arah ${rotStep1*4}°.`,
        `Segitiga hijau diam di tempat, sementara titik putih bergeser ${rotStep2*1.5}°.`,
        `Rotasi berhenti pada derajat ${rotStep1*2}° dan elemen mengecil.`,
        `Keduanya berputar 180° membentuk cerminan vertikal sempurna.`
      ];
      correctAnsIndex = 0;

    } else if (i <= 30) {
      // LOGIKA 2: Pencerminan (Mirroring) Analogi A:B :: C:D
      const shapePath = `M -15,-20 L 20,-10 L 10,25 L -25,10 Z`;
      const isHorizontal = i % 2 === 0;
      const t1 = isHorizontal ? `scale(-1, 1)` : `scale(1, -1)`; // A -> B (Cermin)
      
      const drawMirror = (cx, cy, transformStr, color) => `
        <g transform="translate(${cx}, ${cy})">
          <path d="${shapePath}" fill="${color}" transform="${transformStr}"/>
        </g>`;

      svgStr = svgWrapper(`
        ${drawMirror(60, 60, "scale(1,1)", "var(--primary)")}
        ${drawMirror(170, 60, t1, "var(--primary)")}
        ${drawMirror(280, 60, "rotate(90)", "var(--accent)")}
      `);
      
      text = `Pola Gambar ${i}: Analogi Pencerminan. Jika Gambar 1 berubah menjadi Gambar 2 melalui suatu hukum refleksi spasial, gunakan hukum yang sama untuk mengubah Gambar 3 menjadi Gambar 4.`;
      
      rawOptions = [
        `Bangun oranye mengalami refleksi ${isHorizontal ? 'Horizontal (Kiri-Kanan)' : 'Vertikal (Atas-Bawah)'} sempurna.`,
        `Bangun oranye diputar 180 derajat tanpa mengalami pencerminan.`,
        `Bangun oranye mengalami pengecilan skala sebesar 50% dan bergeser ke sudut.`,
        `Sudut-sudut bangun bertambah lancip seiring dengan rotasi 45 derajat.`,
        `Mengalami inversi warna dan diproyeksikan secara diagonal menyilang.`
      ];
      correctAnsIndex = 0;

    } else if (i <= 45) {
      // LOGIKA 3: Aritmatika Visual
      const n = (i % 5) + 1; // start dots (1-5)
      const increment = (i % 3) + 1; // (1-3)
      const isDecrease = i % 2 === 0;
      
      const n1 = isDecrease ? n + increment*2 + (i%2) : n;
      const n2 = isDecrease ? n1 - increment : n + increment;
      const n3 = isDecrease ? n2 - increment : n + increment*2;
      
      const drawDots = (cx, count) => {
        let dots = '';
        for(let d=0; d<count; d++) {
           dots += `<circle cx="${cx - 15 + (d%3)*15}" cy="${45 + Math.floor(d/3)*15}" r="4" fill="white"/>`;
        }
        return dots;
      };

      svgStr = svgWrapper(`
        ${drawDots(60, n1)}
        ${drawDots(170, n2)}
        ${drawDots(280, n3)}
      `);
      
      text = `Pola Gambar ${i}: Aritmatika Objek. Analisis penambahan/pengurangan matriks titik pada deret spasial ini. Logika numerik apa yang menentukan susunan di kotak terakhir?`;
      
      const opWord = isDecrease ? 'berkurang' : 'bertambah';
      
      rawOptions = [
        `Jumlah titik ${opWord} sebanyak ${increment} setiap kotaknya secara sekuensial (Progresi Aritmatika).`,
        `Jumlah titik dikalikan secara eksponensial pada setiap langkah matriks dengan rasio ${increment}:1.`,
        `Titik-titik tersebut membentuk formasi deret Fibonacci yang dimodifikasi pada tahap ke-${n}.`,
        `Titik bertambah sejumlah ${increment + 1} namun menyusut ukurannya pada iterasi genap.`,
        `Terdapat penggabungan susunan baris yang menghasilkan pola bilangan prima artifisial.`
      ];
      correctAnsIndex = 0;

    } else {
      // LOGIKA 4: Pergerakan Elementer (Matrix 3x3)
      const drawMatrix = (cx, cy, squarePos, circlePos) => {
        let grid = `<g transform="translate(${cx}, ${cy})">`;
        for(let k=0; k<=3; k++){
           grid += `<line x1="-30" y1="${-30+k*20}" x2="30" y2="${-30+k*20}" stroke="rgba(255,255,255,0.2)"/>`;
           grid += `<line x1="${-30+k*20}" y1="-30" x2="${-30+k*20}" y2="30" stroke="rgba(255,255,255,0.2)"/>`;
        }
        const sqX = -20 + (squarePos%3)*20;
        const sqY = -20 + Math.floor(squarePos/3)*20;
        grid += `<rect x="${sqX-6}" y="${sqY-6}" width="12" height="12" fill="var(--danger)"/>`;
        
        const cX = -20 + (circlePos%3)*20;
        const cY = -20 + Math.floor(circlePos/3)*20;
        grid += `<circle cx="${cX}" cy="${cY}" r="6" fill="var(--success)"/>`;
        
        grid += `</g>`;
        return grid;
      };

      const sqPath = [0, 1, 2, 5, 8, 7, 6, 3]; 
      const circPath = [8, 7, 6, 3, 0, 1, 2, 5]; 

      // Pergerakan dinamis berdasarkan index soal
      const startIndexSq = i % 8;
      const startIndexCirc = (i + 3) % 8;
      const stepSq = (i % 2 === 0) ? 1 : -1; // 1 searah jarum jam, -1 berlawanan
      const stepCirc = (i % 3 === 0) ? 2 : 1; // jarak langkah lingkarang 1 atau 2
      
      const getPos = (pathArr, start, step, frame) => {
        let idx = (start + step * frame) % 8;
        if (idx < 0) idx += 8;
        return pathArr[idx];
      };

      svgStr = svgWrapper(`
        ${drawMatrix(60, 60, getPos(sqPath, startIndexSq, stepSq, 0), getPos(circPath, startIndexCirc, stepCirc, 0))}
        ${drawMatrix(170, 60, getPos(sqPath, startIndexSq, stepSq, 1), getPos(circPath, startIndexCirc, stepCirc, 1))}
        ${drawMatrix(280, 60, getPos(sqPath, startIndexSq, stepSq, 2), getPos(circPath, startIndexCirc, stepCirc, 2))}
      `);
      
      text = `Pola Gambar ${i}: Translasi Grid Elementer. Persegi merah dan lingkaran hijau bergerak mengitari bingkai 3x3 berdasarkan lintasan khusus. Analisis arah dan kecepatan langkah keduanya.`;
      
      const arahSq = stepSq > 0 ? 'searah jarum jam' : 'berlawanan arah jarum jam';
      const langkahCirc = stepCirc === 1 ? '1 langkah' : '2 langkah sekaligus';
      
      rawOptions = [
        `Persegi merah bergerak ${Math.abs(stepSq)} langkah ${arahSq}, sementara lingkaran hijau bergerak ${langkahCirc} menyusuri tepi.`,
        `Keduanya bergerak lurus memotong area titik pusat secara diagonal secara bersamaan.`,
        `Persegi merah terpantul secara asimetris, sedangkan lingkaran hijau berotasi 180 derajat.`,
        `Keduanya berdiam diri di sudut selama ${i%2 + 1} putaran sebelum melanjutkan rotasi.`,
        `Terjadi tumpang tindih elemen di mana warna merah melebur dengan hijau di pusat koordinat.`
      ];
      correctAnsIndex = 0;
    }

    // Mengacak opsi jawaban agar tidak selalu A
    let finalOptions = [];
    const randomizedCorrectIndex = (i * 7) % 5; 
    let tempRaw = [...rawOptions];
    
    // Pindahkan opsi benar (index 0) ke posisi randomizedCorrectIndex
    const correctStr = tempRaw.splice(0, 1)[0];
    tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

    for (let j = 0; j < 5; j++) {
      const prefix = String.fromCharCode(65 + j);
      finalOptions.push(`${prefix}. ${tempRaw[j]}`);
    }

    res.push({
      id: `4-${i}`, text: text, svg: svgStr, options: finalOptions, answer: randomizedCorrectIndex
    });
  }
  return res;
};

const genRuang = () => {
  let res = [];
  
  // Fungsi Helper Menggambar Kubus 3D Isometrik
  const drawIsometricCube = (cx, cy, color, symTop, symLeft, symRight) => {
    return `
      <g transform="translate(${cx - 100}, ${cy - 100})">
        <!-- Top Face -->
        <polygon points="100,40 50,65 100,90 150,65" fill="${color}" opacity="0.9" stroke="white" stroke-width="2"/>
        <text x="92" y="70" fill="white" font-size="20" font-weight="bold">${symTop}</text>
        
        <!-- Left Face -->
        <polygon points="50,65 100,90 100,150 50,125" fill="${color}" opacity="0.6" stroke="white" stroke-width="2"/>
        <text x="68" y="115" fill="white" font-size="20" font-weight="bold">${symLeft}</text>

        <!-- Right Face -->
        <polygon points="150,65 100,90 100,150 150,125" fill="${color}" opacity="0.3" stroke="white" stroke-width="2"/>
        <text x="118" y="115" fill="white" font-size="20" font-weight="bold">${symRight}</text>
      </g>
    `;
  };

  for (let i = 1; i <= 27; i++) {
    const color = `hsl(${(i * 40 + 100) % 360}, 60%, 45%)`;
    let svgStr = '';
    let text = '';
    let rawOptions = [];
    
    // Simbol Dinamis
    const symbols = ['X', 'O', '★', '▲', '■', '●'];
    const s1 = symbols[i % 6];
    const s2 = symbols[(i+1) % 6];
    const s3 = symbols[(i+2) % 6];

    if (i % 2 !== 0) {
      // LOGIKA 1: Jaring-jaring ke Kubus
      const topWingY = 60 + (i%2)*40;
      
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style="background:#1e293b;border-radius:8px">
        <g stroke="${color}" stroke-width="2" fill="none">
          <rect x="80" y="20" width="40" height="40"/>
          <text x="92" y="45" fill="white" font-size="16">${s1}</text>
          
          <rect x="80" y="60" width="40" height="40"/>
          <text x="92" y="85" fill="white" font-size="16">${s2}</text>
          
          <rect x="80" y="100" width="40" height="40"/>
          <text x="92" y="125" fill="white" font-size="16">${s3}</text>
          
          <rect x="80" y="140" width="40" height="40"/>
          <rect x="40" y="${topWingY}" width="40" height="40"/>
          <rect x="120" y="60" width="40" height="40"/>
        </g>
      </svg>`;
      
      text = `Abstraksi Ruang ${i}: Jika jaring-jaring 2D di atas dilipat untuk membentuk sebuah kubus utuh, manakah pernyataan letak simbol yang BENAR?`;
      
      rawOptions = [
        `Sisi bersimbol '${s1}' akan berhadapan langsung (sejajar) dengan sisi bersimbol '${s3}'.`,
        `Simbol '${s2}' akan selalu menempel sejajar di samping simbol '${s1}'.`,
        `Sisi kosong di sebelah kanan akan menjadi alas jika sisi '${s2}' menjadi atap.`,
        `Ketiga simbol '${s1}', '${s2}', dan '${s3}' akan bertemu di satu titik sudut yang sama.`,
        `Mustahil melipat jaring-jaring ini menjadi kubus karena ada sisi yang tumpang tindih.`
      ];
    } else {
      // LOGIKA 2: Rotasi 3D Kubus
      const rotSteps = (i % 3) + 1;
      
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" style="background:#020617;border-radius:8px">
        ${drawIsometricCube(100, 100, color, s1, s2, s3)}
        
        <text x="200" y="100" fill="white" font-size="20">➡ Rotasi 3D ➡</text>
        
        ${drawIsometricCube(330, 100, 'rgba(255,255,255,0.1)', '?', '?', '?')}
      </svg>`;
      
      text = `Abstraksi Ruang ${i}: Rotasi Spasial. Jika kubus di sebelah kiri diputar ${rotSteps} kali ke kanan (pada sumbu Y) dan 1 kali ke depan (sumbu X), di manakah letak simbol '${s1}' sekarang?`;
      
      rawOptions = [
        `Simbol '${s1}' akan berpindah menjadi sisi belakang (tidak terlihat dari depan).`,
        `Simbol '${s1}' akan tetap berada di sisi atas (atap) kubus.`,
        `Simbol '${s1}' akan bergeser menjadi sisi kanan kubus.`,
        `Simbol '${s1}' akan bergeser menjadi sisi kiri kubus.`,
        `Simbol '${s1}' akan berpindah menjadi sisi alas (bawah) kubus.`
      ];
    }

    // Mengacak opsi jawaban
    let finalOptions = [];
    const randomizedCorrectIndex = (i * 5) % 5; 
    let tempRaw = [...rawOptions];
    
    const correctStr = tempRaw.splice(0, 1)[0];
    tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

    for (let j = 0; j < 5; j++) {
      const prefix = String.fromCharCode(65 + j);
      finalOptions.push(`${prefix}. ${tempRaw[j]}`);
    }

    res.push({
      id: `5-${i}`, text: text, svg: svgStr, options: finalOptions, answer: randomizedCorrectIndex
    });
  }
  return res;
};

const genBentuk = () => {
  let res = [];
  
  for (let i = 1; i <= 25; i++) {
    let svgStr = '';
    let text = '';
    let rawOptions = [];

    if (i % 2 !== 0) {
      // LOGIKA 1: Odd One Out (Mencari yang berbeda subtil)
      // Menggambar 5 objek berjajar
      
      const drawShape = (cx, isOdd) => {
        // isOdd membedakan sedikit ketebalan garis atau rotasi
        const strokeW = isOdd ? 4 : 2;
        const radius = isOdd ? 18 : 20;
        return `
          <g transform="translate(${cx}, 50)">
            <rect x="-20" y="-20" width="40" height="40" fill="none" stroke="white" stroke-width="1"/>
            <polygon points="0,-15 15,10 -15,10" fill="var(--accent)"/>
            <circle cx="0" cy="0" r="${radius}" fill="none" stroke="var(--primary)" stroke-width="${strokeW}"/>
          </g>
        `;
      };

      const oddIndex = i % 5; // Posisi objek yang berbeda
      
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 100" style="background:#0f172a;border-radius:8px">
        <text x="50" y="20" fill="var(--text-muted)" font-size="12">Objek 1</text>
        ${drawShape(65, oddIndex === 0)}
        
        <text x="140" y="20" fill="var(--text-muted)" font-size="12">Objek 2</text>
        ${drawShape(155, oddIndex === 1)}
        
        <text x="230" y="20" fill="var(--text-muted)" font-size="12">Objek 3</text>
        ${drawShape(245, oddIndex === 2)}
        
        <text x="320" y="20" fill="var(--text-muted)" font-size="12">Objek 4</text>
        ${drawShape(335, oddIndex === 3)}
        
        <text x="410" y="20" fill="var(--text-muted)" font-size="12">Objek 5</text>
        ${drawShape(425, oddIndex === 4)}
      </svg>`;
      
      text = `Bentuk ${i}: Odd One Out. Dari kelima objek geometri di atas, terdapat satu objek yang memiliki karakteristik struktural yang sedikit berbeda dari keempat lainnya. Manakah objek tersebut?`;
      
      rawOptions = [
        `Objek ${oddIndex + 1} (Ketebalan cincin dan rasio radius berbeda secara subtil)`,
        `Objek ${(oddIndex + 1) % 5 + 1} (Sudut segitiga tidak simetris)`,
        `Objek ${(oddIndex + 2) % 5 + 1} (Garis tepi kotak lebih memudar)`,
        `Objek ${(oddIndex + 3) % 5 + 1} (Rotasi meleset 2 derajat dari ekuator)`,
        `Tidak ada yang berbeda, kelimanya adalah kloningan identik (Pertanyaan Jebakan)`
      ];

    } else {
      // LOGIKA 2: Shape Completion
      const rot = i * 15;
      
      svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" style="background:#1e293b;border-radius:8px">
        <g transform="translate(100, 75)">
          <!-- Bangun utama yang dipotong -->
          <path d="M-40,-40 L40,-40 L40,40 L-40,40 Z" fill="var(--text-muted)" opacity="0.3"/>
          <path d="M-40,-40 L40,-40 L40,40 L-40,40 Z" fill="var(--primary)" clip-path="url(#cut)"/>
          
          <clipPath id="cut">
             <polygon points="-50,-50 50,-50 50,50 -50,50" />
             <!-- The negative space (cutout) -->
             <polygon points="10,-10 50,20 10,50" transform="rotate(${rot})" />
          </clipPath>
          
          <!-- Indikator potong -->
          <polygon points="10,-10 50,20 10,50" transform="rotate(${rot})" fill="none" stroke="white" stroke-width="2" stroke-dasharray="4,4"/>
        </g>
        
        <text x="230" y="75" fill="white" font-size="20">Mencari Pecahan ➡</text>
      </svg>`;
      
      text = `Bentuk ${i}: Shape Completion. Bangun persegi di sebelah kiri telah dipotong dengan pola asimetris tertentu (garis putus-putus). Analisis sudut potongan tersebut, kepingan seperti apa yang dibutuhkan untuk melengkapinya?`;
      
      rawOptions = [
        `Kepingan berbentuk segitiga sembarang dengan sudut rotasi ${rot}° yang sesuai dengan celah.`,
        `Kepingan berbentuk trapesium dengan sisi sejajar menempel pada dinding kotak.`,
        `Kepingan poligon tak beraturan yang memiliki 4 titik sudut.`,
        `Kepingan segitiga sama kaki dengan orientasi terbalik 180°.`,
        `Bagian tersebut tidak terpotong, melainkan dilipat ke arah dalam (ilusi optik).`
      ];
    }

    // Mengacak opsi jawaban
    let finalOptions = [];
    const randomizedCorrectIndex = (i * 3) % 5; 
    let tempRaw = [...rawOptions];
    
    const correctStr = tempRaw.splice(0, 1)[0];
    tempRaw.splice(randomizedCorrectIndex, 0, correctStr);

    for (let j = 0; j < 5; j++) {
      const prefix = String.fromCharCode(65 + j);
      finalOptions.push(`${prefix}. ${tempRaw[j]}`);
    }

    res.push({
      id: `6-${i}`, text: text, svg: svgStr, options: finalOptions, answer: randomizedCorrectIndex
    });
  }
  return res;
};

// === 7. MANAJEMEN BIDANG (20 Soal, SKOR 1-5) ===
// Kasus spesifik manajerial KDKMP PHTC yang REAL.
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

// Opsi 5 tingkat dari Sangat Buruk (1) hingga Sangat Baik (5) (Urutannya telah diacak oleh sistem)
const genManajemen = () => {
  let res = [];
  
  // 20 set opsi spesifik untuk 20 soal manajemen. 
  // Indeks 0 = 1 Poin (Sangat Buruk), Indeks 4 = 5 Poin (Sangat Baik/Solutif)
  const manajemenOptionsData = [
    // 1. Tim senior meremehkan kebijakan
    ["Meminta HRD memecat mereka segera", "Mendiamkan mereka sampai mereka sadar sendiri", "Mengancam mereka dengan sanksi indisipliner", "Mengadakan rapat formal untuk sekadar membaca ulang visi", "Mengajak diskusi personal 4 mata untuk memahami keberatan mereka dan mencari titik temu"],
    // 2. Gagal target triwulanan
    ["Menyalahkan perubahan regulasi secara emosional", "Menyalahkan tim yang kurang cepat beradaptasi", "Diam dan pasrah menunggu arahan dari direksi", "Meminta maaf dan berjanji akan lebih baik tanpa rencana", "Mempresentasikan analisis dampak regulasi beserta strategi adaptasi riil untuk triwulan depan"],
    // 3. Staf penggelapan dana (baru indikasi lisan)
    ["Langsung memecat staf tersebut di hari yang sama", "Menyebarkan rumor di kantor agar ia merasa malu", "Melaporkan langsung ke pihak berwajib tanpa bukti", "Menegur staf tersebut secara lisan di lorong kantor", "Melakukan audit internal secara diam-diam dan rahasia untuk mengumpulkan bukti tertulis"],
    // 4. Karyawan berselisih saat rapat
    ["Membentak mereka agar diam dan keluar dari ruangan", "Membubarkan rapat seketika dan pergi", "Membiarkan mereka berdebat tak berujung", "Melerai dan meminta mereka menyelesaikan urusannya di luar", "Menengahi dengan tenang, merangkum poin kedua pihak, dan mencari konklusi objektif berbasis data"],
    // 5. Potong anggaran 20% tapi target naik
    ["Protes keras ke manajemen dan mogok kerja", "Memotong gaji/insentif karyawan secara sepihak", "Menyerah pada target dan bekerja seadanya", "Melakukan penghematan pukul rata di semua lini", "Menganalisis skala prioritas, mengeliminasi inefisiensi, dan mengoptimalkan resource yang ada"],
    // 6. Vendor putus kontrak sepihak H-1
    ["Memarahi vendor habis-habisan di media sosial", "Menyalahkan staf pengadaan di depan seluruh tim", "Panik dan membatalkan seluruh rangkaian acara", "Mencari vendor pengganti seadanya tanpa filter kualitas", "Mengerahkan seluruh relasi untuk vendor darurat sambil meninjau opsi penalti kontrak lama"],
    // 7. Rajin/lambat vs Cerdas/mangkir
    ["Memprioritaskan yang cerdas/mangkir tanpa syarat", "Memecat keduanya agar adil", "Memilih berdasarkan kedekatan/kesukaan personal", "Memprioritaskan yang rajin semata-mata karena kasihan", "Melakukan evaluasi performa komprehensif (KPI & Attitude) sebagai dasar keputusan efisiensi"],
    // 8. Ide diklaim manajer lain
    ["Marah dan memaki manajer tersebut di tengah rapat", "Menyindirnya dengan kasar di depan forum", "Diam saja karena tidak enak dan merasa segan", "Langsung memotong bicaranya dengan emosi", "Mengklarifikasi secara elegan dengan menambahkan detail teknis mendalam yang hanya dikuasai tim Anda"],
    // 9. SOP 5 tahun inefisien
    ["Mengabaikan keluhan karena 'sudah tradisi'", "Mengubah SOP sepihak hari itu juga tanpa persetujuan", "Terus mengeluh kepada atasan tanpa bertindak", "Menunggu instruksi perbaikan dari HRD secara pasif", "Menyusun draf SOP baru yang efisien dan mempresentasikannya kepada manajemen tingkat atas"],
    // 10. Proyek mundur dari jadwal
    ["Menutupi kendala sampai hari tenggat waktu tiba", "Mencari kambing hitam dari bawahan Anda", "Membuat alasan palsu yang tidak masuk akal", "Melaporkan kendala secara pasrah tanpa membawa solusi", "Melaporkan kendala sedini mungkin beserta analisis risiko dan proposal penyesuaian timeline"],
    // 11. Keluhan beban kerja tak adil
    ["Mengabaikan keluhannya karena dianggap cengeng", "Menyuruhnya resign jika tidak sanggup", "Memarahi rekan setimnya yang dianggap bersantai", "Menasihatinya untuk banyak bersabar dan ikhlas", "Memetakan ulang pembagian beban kerja secara transparan dan adil sesuai deskripsi tugas (jobdesk)"],
    // 12. Atasan minta manipulasi laporan
    ["Menolak mentah-mentah dengan nada menantang", "Mengikuti arahan manipulasi sepenuhnya karena takut", "Merekam percakapan untuk memeras atasan di kemudian hari", "Memanipulasi sebagian kecil agar terlihat aman", "Menolak dengan profesional dan menyajikan data asli yang dikemas dengan proyeksi strategi perbaikan nyata"],
    // 13. Rumor divisi bubar
    ["Ikut menyebarkan rumor ke departemen lain", "Sibuk mencari pekerjaan baru dan menelantarkan tim", "Memarahi siapapun yang membicarakan rumor tersebut", "Mendiamkan rumor sampai hilang terbawa waktu", "Mengklarifikasi fakta ke dewan direksi, lalu mengadakan townhall meeting untuk menenangkan moral tim"],
    // 14. Pelamar kerabat direktur di bawah rata-rata
    ["Langsung menerimanya untuk menjilat direktur", "Menolaknya dengan kata-kata tidak sopan", "Menerimanya namun menempatkannya di posisi rendahan", "Merekayasa hasil tes pelamar agar terlihat pantas", "Menolaknya secara etis dengan melampirkan hasil tes objektif dan merekomendasikan kandidat yang lebih tepat"],
    // 15. Inovasi butuh biaya besar di awal
    ["Memaksa manajemen menyetujuinya tanpa dasar kuat", "Marah dan mengancam mundur jika ditolak", "Diam-diam menggunakan dana darurat divisi lain", "Hanya menyajikan ide secara lisan/kasar", "Menyusun proposal komprehensif berisi ROI (Return on Investment) dan simulasi penghematan 3 tahun ke depan"],
    // 16. Staf bocorkan rahasia ke medsos
    ["Memviralkan kebodohan staf tersebut", "Melakukan kekerasan fisik atau verbal berlebihan", "Menyita perangkat pribadi (HP) staf tersebut", "Langsung memecatnya hari itu juga tanpa pesangon", "Memberikan Surat Peringatan sesuai PKB dan memperketat protokol keamanan informasi digital divisi"],
    // 17. Krisis komunikasi publik KDKMP
    ["Menghapus seluruh akun media sosial divisi", "Meluapkan amarah kepada tim Public Relation", "Mengabaikan netizen dan mematikan kolom komentar", "Menghapus komentar negatif secara diam-diam", "Merilis pernyataan klarifikasi resmi yang empatik, jujur, dan menjanjikan langkah perbaikan nyata"],
    // 18. Tim inti sering typo/kesalahan kecil
    ["Mempermalukannya di grup chat divisi", "Langsung menurunkan jabatannya saat itu juga", "Membiarkannya karena menganggap itu hal remeh", "Terus-menerus Anda perbaiki sendiri secara diam-diam", "Memberikan feedback konstruktif secara privat dan mengimplementasikan sistem peer-review antar anggota"],
    // 19. Deadline vs Kualitas
    ["Mengerjakan asal-asalan yang penting tepat waktu", "Terlambat berhari-hari tanpa mengabari klien", "Memaksa bawahan lembur non-stop sampai sakit", "Mengerjakan setengah-setengah dengan kualitas rendah", "Melakukan negosiasi perpanjangan waktu logis dengan klien demi menjamin kualitas pekerjaan optimal"],
    // 20. Alokasi bonus tidak cukup
    ["Membaginya rata tanpa memedulikan siapa yang berkinerja", "Mengambil porsi terbesar untuk diri sendiri", "Memberikannya kepada yang paling sering curhat soal uang", "Membagikannya murni berdasarkan senioritas masa kerja", "Mengalokasikan bonus secara proporsional berlandaskan metrik pencapaian KPI individu yang transparan"]
  ];

  for (let i = 0; i < manajemenData.length; i++) {
    // Pengacakan posisi bobot agar 5 poin tidak selalu di posisi E
    const bobotOptions = [
      [1, 2, 3, 4, 5], // 5 poin di E
      [5, 4, 3, 2, 1], // 5 poin di A
      [2, 4, 5, 3, 1], // 5 poin di C
      [3, 1, 2, 5, 4], // 5 poin di D
      [4, 5, 1, 2, 3]  // 5 poin di B
    ];
    let currentBobot = bobotOptions[i % 5];
    let finalOptions = [];
    
    for(let j = 0; j < 5; j++) {
       const targetPoin = currentBobot[j];
       const textIndex = targetPoin - 1; 
       const prefix = String.fromCharCode(65 + j); // A, B, C, D, E
       const rawText = manajemenOptionsData[i][textIndex];
       finalOptions.push(`${prefix}. ${rawText}`);
    }

    res.push({
      id: `7-${i+1}`,
      text: `Studi Kasus Manajemen ${i+1}: ${manajemenData[i]}`,
      options: finalOptions,
      optionScores: currentBobot
    });
  }
  return res;
};

// Builder Function untuk mapping format array ke Object
const buildQuestions = (dataArray, prefix, subtestId) => {
  return dataArray.map((row, idx) => ({
    id: `${subtestId}-${idx+1}`,
    text: `Soal ${prefix} ${idx+1}: ${row[0]}`,
    options: [`A. ${row[1]}`, `B. ${row[2]}`, `C. ${row[3]}`, `D. ${row[4]}`, `E. ${row[5]}`],
    answer: row[6]
  }));
};

// MENGGABUNGKAN SEMUA SUBTES
export const SUBTESTS = [
  {
    id: 1,
    title: "Subtes 1: Kemampuan Bahasa",
    focus: "Sinonim, Antonim, Analogi",
    totalQuestions: 50,
    timeLimit: 7 * 60,
    questions: buildQuestions(bahasaData, "Bahasa", 1)
  },
  {
    id: 2,
    title: "Subtes 2: Kemampuan Hitungan",
    focus: "Deret, Hitung Cepat, Persen",
    totalQuestions: 31,
    timeLimit: 7 * 60,
    questions: buildQuestions(hitunganData, "Hitungan", 2)
  },
  {
    id: 3,
    title: "Subtes 3: Pengetahuan Umum",
    focus: "Wawasan Kebangsaan, Isu Global",
    totalQuestions: 40,
    timeLimit: 7 * 60,
    questions: buildQuestions(puData, "Pengetahuan Umum", 3)
  },
  {
    id: 4,
    title: "Subtes 4: Pola Gambar",
    focus: "Melanjutkan pola, mencari perbedaan",
    totalQuestions: 55,
    timeLimit: 7 * 60,
    questions: genPola()
  },
  {
    id: 5,
    title: "Subtes 5: Abstraksi Ruang",
    focus: "Jaring-jaring bangun ruang",
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
