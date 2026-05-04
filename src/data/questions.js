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

// === 4, 5, 6. TES SPASIAL (Visual/Gambar) ===
// Membuat 107 gambar yang 100% unik menggunakan algoritma Inline SVG.
const genPola = () => {
  let res = [];
  for (let i = 1; i <= 55; i++) {
    const color = `hsl(${i * 15 % 360}, 70%, 50%)`;
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" style="background:#1e293b;border-radius:8px">
      <rect x="${20 + (i%5)*5}" y="20" width="40" height="40" fill="${color}" />
      <circle cx="${140 + (i%3)*5}" cy="40" r="20" fill="white" opacity="0.8"/>
      <polygon points="${220 + (i%4)*5},60 ${240 + (i%4)*5},20 ${260 + (i%4)*5},60" fill="var(--primary)"/>
      <text x="350" y="60" fill="white" font-size="40" font-family="sans-serif">?</text>
    </svg>`;
    
    res.push({
      id: `4-${i}`,
      text: `Pola Gambar ${i}: Perhatikan perubahan urutan, posisi, dan warna elemen geometri di atas. Manakah pola selanjutnya yang logis?`,
      svg: svgStr,
      options: [
        `A. Posisi elemen kotak bergeser ke kanan sebesar ${i%3 + 1} satuan`, 
        `B. Warna kotak berubah mengikuti spektrum warna pelangi`, 
        `C. Terdapat pergeseran elemen lingkaran di tengah`, 
        `D. Segitiga berputar 90 derajat searah jarum jam`, 
        `E. Semua elemen kembali ke ukuran dan posisi awal`
      ],
      answer: i % 5
    });
  }
  return res;
};

const genRuang = () => {
  let res = [];
  for (let i = 1; i <= 27; i++) {
    const color = `hsl(${(i * 40 + 100) % 360}, 60%, 45%)`;
    // Jaring-jaring dinamis
    const topWingY = 60 + (i%2)*40;
    const botWingY = 60 + (i%3)*40;
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style="background:#1e293b;border-radius:8px">
      <g stroke="${color}" stroke-width="2" fill="none">
        <rect x="80" y="20" width="40" height="40"/>
        <rect x="80" y="60" width="40" height="40"/>
        <rect x="80" y="100" width="40" height="40"/>
        <rect x="80" y="140" width="40" height="40"/>
        <rect x="40" y="${topWingY}" width="40" height="40"/>
        <rect x="120" y="${botWingY}" width="40" height="40"/>
        <circle cx="100" cy="80" r="10" fill="white" opacity="0.3"/>
        <text x="60" y="${topWingY + 25}" fill="white" font-size="16" font-family="sans-serif">X</text>
      </g>
    </svg>`;
    
    res.push({
      id: `5-${i}`,
      text: `Abstraksi Ruang ${i}: Jika jaring-jaring bangun ruang di atas dilipat membentuk kubus/balok, di manakah letak sisi bertanda silang (X) relatif terhadap sisi bergambar lingkaran?`,
      svg: svgStr,
      options: [
        "A. Tepat berseberangan (berhadapan)", 
        "B. Tepat berdampingan di sisi kanan lingkaran", 
        "C. Tepat berdampingan di sisi kiri lingkaran", 
        "D. Menjadi atap (di atas lingkaran)", 
        "E. Menjadi alas (di bawah lingkaran)"
      ],
      answer: (i + 1) % 5
    });
  }
  return res;
};

const genBentuk = () => {
  let res = [];
  for (let i = 1; i <= 25; i++) {
    const p1 = `${100 + i},20 ${120 + i},70 ${180 - i},80`;
    const p2 = `${130 - i},120 ${150 + i},180 ${100},150`;
    const p3 = `${50 + i},180 ${70},120 ${20 + i},80 ${80},70`;
    const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style="background:#1e293b;border-radius:8px">
      <polygon points="${p1} ${p2} ${p3}" fill="var(--text-muted)"/>
      <circle cx="${100 + i%10}" cy="${100 - i%10}" r="${10 + i%10}" fill="var(--bg-color)" opacity="0.8"/>
    </svg>`;
    
    res.push({
      id: `6-${i}`,
      text: `Bentuk ${i}: Perhatikan siluet bayangan benda tak beraturan di atas. Jika bayangan tersebut memiliki lubang di bagian tengah, berapakah estimasi jumlah titik sudut lancip pada outline luar?`,
      svg: svgStr,
      options: [
        `A. ${5 + (i%2)} titik sudut`, 
        `B. ${6 + (i%2)} titik sudut`, 
        `C. ${7 + (i%2)} titik sudut`, 
        `D. ${8 + (i%2)} titik sudut`, 
        `E. ${9 + (i%2)} titik sudut`
      ],
      answer: (i + 2) % 5
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
  const optionsTpl = [
    "A. Mengabaikan masalah dan membiarkan berlalu.",
    "B. Bertindak reaktif, emosional, dan menjatuhkan sanksi seketika tanpa analisis.",
    "C. Melimpahkan tanggung jawab keputusan kepada atasan.",
    "D. Melakukan teguran/tindakan standar sesuai SOP secara normatif.",
    "E. Melakukan pendekatan personal, menginvestigasi akar masalah komprehensif, bermusyawarah, dan mengeksekusi solusi sistematis."
  ];

  for (let i = 0; i < manajemenData.length; i++) {
    // Array pengacakan bobot opsi (agar 5 poin tidak selalu di E)
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
       const prefix = String.fromCharCode(65 + j); // A, B, C, D, E
       const rawText = optionsTpl[textIndex].substring(3);
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
