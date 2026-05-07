// src/data/questions.js

const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// === 1. BAHASA & KATEGORISASI (50 Soal Unik) ===
const genBahasa = () => {
  const bank = [
    { q: "Sinonim: EVOKASI", o: ["Penggugah rasa","Penilaian","Provokasi","Perubahan","Pengungsian"], a: 0, d: "Evokasi = daya penggugah rasa/emosi." },
    { q: "Sinonim: ELABORASI", o: ["Penjelasan terperinci","Ringkasan","Penyusutan","Perdebatan","Pembatalan"], a: 0, d: "Elaborasi = penggarapan secara terperinci." },
    { q: "Sinonim: KONSISTENSI", o: ["Keteguhan/keajegan","Kebingungan","Kemunduran","Kebebasan","Keacakan"], a: 0, d: "Konsistensi = keajegan, keteguhan pendirian." },
    { q: "Sinonim: EFISIENSI", o: ["Tepat guna","Boros","Lamban","Acak","Tidak teratur"], a: 0, d: "Efisiensi = penggunaan sumber daya secara tepat guna." },
    { q: "Sinonim: KOMPREHENSIF", o: ["Menyeluruh","Sempit","Parsial","Dangkal","Kabur"], a: 0, d: "Komprehensif = mencakup banyak hal / menyeluruh." },
    { q: "Sinonim: DEDIKASI", o: ["Pengabdian","Pengkhianatan","Kemalasan","Kemunduran","Penolakan"], a: 0, d: "Dedikasi = pengabdian/kesetiaan penuh." },
    { q: "Sinonim: INISIATIF", o: ["Prakarsa","Menunggu","Penolakan","Keacuhan","Keraguan"], a: 0, d: "Inisiatif = prakarsa / langkah pertama tanpa menunggu perintah." },
    { q: "Sinonim: INOVATIF", o: ["Kreatif pembaruan","Meniru","Statis","Kuno","Konservatif"], a: 0, d: "Inovatif = memperkenalkan hal baru / kreatif dalam pembaruan." },
    { q: "Sinonim: ARGUMENTASI", o: ["Alasan/pendapat","Kebisuan","Kebingungan","Keacuhan","Persetujuan buta"], a: 0, d: "Argumentasi = alasan yang dikemukakan untuk mendukung pendapat." },
    { q: "Sinonim: KOORDINASI", o: ["Pengaturan kerja sama","Persaingan","Kekacauan","Pemisahan","Penolakan"], a: 0, d: "Koordinasi = pengaturan agar berbagai kegiatan berjalan selaras." },
    { q: "Antonim: PROMINEN", o: ["Biasa","Terkemuka","Penting","Elit","Menonjol"], a: 0, d: "Prominen = menonjol. Antonimnya = biasa/tidak menonjol." },
    { q: "Antonim: APATIS", o: ["Peduli","Acuh","Pasif","Dingin","Tidak peduli"], a: 0, d: "Apatis = tidak peduli. Antonimnya = peduli." },
    { q: "Antonim: KONVEKS", o: ["Cekung","Cembung","Datar","Melengkung","Padat"], a: 0, d: "Konveks = cembung. Antonimnya = konkaf/cekung." },
    { q: "Antonim: ABSTRAK", o: ["Konkret","Khayalan","Imajinatif","Samar","Tidak nyata"], a: 0, d: "Abstrak = tidak berwujud. Antonimnya = konkret/nyata." },
    { q: "Antonim: EKSPLISIT", o: ["Tersirat","Gamblang","Jelas","Nyata","Terang"], a: 0, d: "Eksplisit = tersurat/jelas. Antonimnya = implisit/tersirat." },
    { q: "Antonim: OPTIMIS", o: ["Pesimis","Bersemangat","Penuh harap","Percaya diri","Yakin"], a: 0, d: "Optimis = berpandangan positif. Antonimnya = pesimis." },
    { q: "Antonim: STATIS", o: ["Dinamis","Diam","Tidak berubah","Tetap","Kaku"], a: 0, d: "Statis = tidak bergerak/tidak berubah. Antonimnya = dinamis." },
    { q: "Antonim: HARMONIS", o: ["Kacau","Selaras","Indah","Serasi","Senada"], a: 0, d: "Harmonis = selaras/serasi. Antonimnya = kacau/tidak serasi." },
    { q: "Antonim: DOMINAN", o: ["Subordinat","Berkuasa","Menguasai","Terkuat","Utama"], a: 0, d: "Dominan = menguasai. Antonimnya = subordinat/dibawahi." },
    { q: "Antonim: PRODUKTIF", o: ["Mandul/tidak menghasilkan","Kreatif","Efektif","Aktif","Berbuah"], a: 0, d: "Produktif = menghasilkan banyak. Antonimnya = tidak produktif/mandul." },
    { q: "Analogi: MOBIL : BENSIN = PELARI : ...", o: ["Makanan","Sepatu","Lintasan","Kaos","Medali"], a: 0, d: "Bensin = bahan bakar mobil. Makanan = bahan bakar tubuh pelari." },
    { q: "Analogi: GURU : MURID = DOKTER : ...", o: ["Pasien","Rumah sakit","Obat","Perawat","Resep"], a: 0, d: "Guru mendidik murid. Dokter mengobati pasien." },
    { q: "Analogi: PENA : MENULIS = PISAU : ...", o: ["Memotong","Besi","Tajam","Dapur","Melukai"], a: 0, d: "Pena alat untuk menulis. Pisau alat untuk memotong." },
    { q: "Analogi: BUKU : PERPUSTAKAAN = LUKISAN : ...", o: ["Museum","Seniman","Kanvas","Galeri seni","Cat"], a: 0, d: "Buku disimpan di perpustakaan. Lukisan dipajang di museum/galeri." },
    { q: "Analogi: DINGIN : SELIMUT = HUJAN : ...", o: ["Payung","Air","Awan","Basah","Petir"], a: 0, d: "Selimut melindungi dari dingin. Payung melindungi dari hujan." },
    { q: "Analogi: NELAYAN : JALA = PETANI : ...", o: ["Cangkul","Sawah","Padi","Pupuk","Air"], a: 0, d: "Nelayan menggunakan jala. Petani menggunakan cangkul." },
    { q: "Analogi: API : PANAS = ES : ...", o: ["Dingin","Air","Beku","Mencair","Putih"], a: 0, d: "Api menghasilkan panas. Es menghasilkan/memberikan rasa dingin." },
    { q: "Analogi: KOMPOSER : MUSIK = ARSITEK : ...", o: ["Bangunan","Gambar","Ruang","Bata","Semen"], a: 0, d: "Komposer menciptakan musik. Arsitek merancang bangunan." },
    { q: "Analogi: AYAM : TELUR = SAPI : ...", o: ["Susu","Daging","Kandang","Rumput","Tanduk"], a: 0, d: "Ayam menghasilkan telur. Sapi menghasilkan susu." },
    { q: "Analogi: KUNCI : PINTU = SANDI : ...", o: ["Komputer/akun","Besi","Gembok","Tangan","Dinding"], a: 0, d: "Kunci membuka pintu. Sandi membuka komputer/akun." },
    { q: "Kategorisasi: Mana yang TIDAK termasuk alat musik tiup?", o: ["Gitar","Seruling","Terompet","Klarinet","Harmonika"], a: 0, d: "Gitar adalah alat musik petik, bukan tiup." },
    { q: "Kategorisasi: Mana yang TIDAK termasuk planet dalam Tata Surya?", o: ["Pluto","Mars","Venus","Saturnus","Yupiter"], a: 0, d: "Pluto telah direklasifikasi sebagai planet kerdil oleh IAU sejak 2006." },
    { q: "Kategorisasi: Mana yang termasuk cabang ilmu Eksakta?", o: ["Matematika","Sejarah","Ekonomi","Hukum","Sosiologi"], a: 0, d: "Matematika termasuk ilmu eksakta. Lainnya termasuk ilmu sosial/humaniora." },
    { q: "Kategorisasi: Padi - Jagung - Gandum termasuk kategori...", o: ["Serealia/Biji-bijian","Umbi-umbian","Buah-buahan","Kacang-kacangan","Sayuran"], a: 0, d: "Padi, jagung, gandum adalah tanaman serealia (penghasil biji yang dimakan)." },
    { q: "Kategorisasi: Anjing - Serigala - Rubah termasuk famili...", o: ["Canidae (anjing-anjingan)","Felidae (kucing-kucingan)","Ursidae (beruang)","Bovidae (sapi)","Rodentia (pengerat)"], a: 0, d: "Anjing, serigala, dan rubah semuanya termasuk famili Canidae." },
    { q: "Kategorisasi: Mana yang BUKAN termasuk organ pernapasan?", o: ["Hati","Paru-paru","Hidung","Tenggorokan","Bronkus"], a: 0, d: "Hati adalah organ pencernaan/detoksifikasi, bukan organ pernapasan." },
    { q: "Kategorisasi: Dewan Rakyat - Senat - Parlemen termasuk kategori...", o: ["Lembaga legislatif","Lembaga eksekutif","Lembaga yudikatif","Lembaga militer","Lembaga pajak"], a: 0, d: "Dewan Rakyat, Senat, dan Parlemen semuanya adalah lembaga legislatif pembuat UU." },
    { q: "Kategorisasi: Mana yang BUKAN termasuk jenis ikatan kimia?", o: ["Ikatan Darwinis","Ikatan ionik","Ikatan kovalen","Ikatan logam","Ikatan hidrogen"], a: 0, d: "Ikatan Darwinis tidak ada dalam kimia. Darwin terkait evolusi biologi." },
    { q: "Kategorisasi: Siapa yang BUKAN termasuk tokoh Proklamasi Indonesia?", o: ["Tan Malaka","Ir. Soekarno","Drs. Mohammad Hatta","Ahmad Soebardjo","Fatmawati"], a: 0, d: "Tan Malaka adalah tokoh pergerakan, namun bukan bagian dari peristiwa proklamasi 17 Agustus 1945." },
    { q: "Kategorisasi: Bahan mana yang termasuk konduktor listrik yang baik?", o: ["Tembaga","Plastik","Karet","Kayu","Kaca"], a: 0, d: "Tembaga adalah konduktor listrik terbaik. Lainnya adalah isolator." },
    { q: "Sinonim: AKUNTABEL", o: ["Dapat dipertanggungjawabkan","Tersembunyi","Otoriter","Acak-acakan","Tidak jelas"], a: 0, d: "Akuntabel = dapat dipertanggungjawabkan kepada publik." },
    { q: "Sinonim: SINERGI", o: ["Kerja sama menghasilkan hasil lebih besar","Persaingan","Konflik","Pemisahan","Kompetisi"], a: 0, d: "Sinergi = kerja sama yang menghasilkan efek lebih besar dari jumlah bagian." },
    { q: "Antonim: VERBAL", o: ["Nonverbal","Lisan","Ucapan","Kata-kata","Bahasa"], a: 0, d: "Verbal = menggunakan kata-kata/lisan. Antonimnya = nonverbal." },
    { q: "Antonim: KUANTITAS", o: ["Kualitas","Jumlah","Banyak","Ukuran","Angka"], a: 0, d: "Kuantitas = jumlah. Antonimnya = kualitas (mutu)." },
    { q: "Analogi: KEPALA SEKOLAH : SEKOLAH = DIREKTUR : ...", o: ["Perusahaan","Pegawai","Kantor","Pabrik","Rapat"], a: 0, d: "Kepala sekolah memimpin sekolah. Direktur memimpin perusahaan." },
    { q: "Analogi: LAPAR : MAKAN = HAUS : ...", o: ["Minum","Air","Dahaga","Segar","Tenggorokan"], a: 0, d: "Lapar diatasi dengan makan. Haus diatasi dengan minum." },
    { q: "Analogi: HAKIM : PENGADILAN = DOKTER : ...", o: ["Rumah sakit","Palu","Obat","Pasien","Stetoskop"], a: 0, d: "Hakim bekerja di pengadilan. Dokter bekerja di rumah sakit." },
    { q: "Kategorisasi: Mana yang TIDAK termasuk jenis laporan keuangan?", o: ["Laporan kecurangan","Neraca","Laporan laba rugi","Laporan arus kas","Laporan perubahan modal"], a: 0, d: "Laporan kecurangan bukan jenis laporan keuangan standar akuntansi." },
    { q: "Sinonim: TRANSPARAN", o: ["Terbuka/tembus pandang","Tertutup","Rahasia","Gelap","Misterius"], a: 0, d: "Transparan = keterbukaan, dapat dilihat/diketahui semua pihak." },
    { q: "Antonim: SENTRALISASI", o: ["Desentralisasi","Pemusatan","Terpusat","Otoriter","Terkonsentrasi"], a: 0, d: "Sentralisasi = pemusatan kekuasaan. Antonimnya = desentralisasi." },
    { q: "Sinonim: INTEGRITAS", o: ["Kejujuran/moralitas tinggi","Ketidakjujuran","Keserakahan","Kemunafikan","Penipuan"], a: 0, d: "Integritas = kualitas jujur dan memiliki prinsip moral yang kuat." }
  ];

  return bank.map((t, i) => {
    const opts = [...t.o];
    const correctStr = opts[t.a];
    const shuffledOpts = shuffleArray(opts);
    const newAnsIdx = shuffledOpts.indexOf(correctStr);
    return {
      id: `1-${i+1}`,
      text: `Soal ${i+1}: ${t.q}`,
      options: shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`),
      answer: newAnsIdx,
      discussion: t.d
    };
  });
};

// === 2. HITUNGAN CEPAT (31 Soal) ===
const genHitungan = () => {
  let res = [];
  for (let i = 0; i < 31; i++) {
    let type = i % 3;
    let qText, ansValue, dText;
    let rawOpts = [];

    if (type === 0) {
      // Persentase Unik
      let pct = (Math.floor(Math.random() * 9) + 1) / 100; // 0.01 to 0.09
      let base = (Math.floor(Math.random() * 50) + 10) * 1000; // 10000 to 60000
      ansValue = pct * base;
      qText = `Berapa ${pct * 100}% dari ${base}?`;
      dText = `${pct * 100}% = ${pct}. ${pct} x ${base} = ${ansValue}.`;
      
      rawOpts = [ansValue, ansValue * 10, ansValue / 10, ansValue + 5, ansValue - 5].map(v => v.toString().replace('.', ','));
    } else if (type === 1) {
      // Pecahan
      let num1 = Math.floor(Math.random() * 5) + 1;
      let den1 = Math.floor(Math.random() * 5) + 2;
      let num2 = Math.floor(Math.random() * 5) + 1;
      let den2 = Math.floor(Math.random() * 5) + 2;
      
      let commonDen = den1 * den2;
      let top = (num1 * den2) + (num2 * den1);
      
      qText = `Hasil dari (${num1}/${den1}) + (${num2}/${den2}) = ...`;
      ansValue = `${top}/${commonDen}`;
      dText = `Samakan penyebut: (${num1*den2}/${commonDen}) + (${num2*den1}/${commonDen}) = ${top}/${commonDen}.`;
      
      rawOpts = [ansValue, `${top-1}/${commonDen}`, `${top+1}/${commonDen}`, `${top}/${commonDen+1}`, `${top+2}/${commonDen}`];
    } else {
      // Deret Bertingkat
      let start = Math.floor(Math.random() * 10) + 1;
      let diff = Math.floor(Math.random() * 5) + 1;
      let step = Math.floor(Math.random() * 3) + 1;
      
      let arr = [start];
      let currentDiff = diff;
      for (let j = 0; j < 4; j++) {
        arr.push(arr[arr.length - 1] + currentDiff);
        currentDiff += step;
      }
      ansValue = arr[arr.length - 1] + currentDiff;
      
      qText = `Lanjutkan deret berikut: ${arr.join(', ')}, ...`;
      dText = `Ini adalah deret bertingkat dengan selisih yang bertambah konstan +${step}. Angka selanjutnya adalah ${arr[arr.length-1]} + ${currentDiff} = ${ansValue}.`;
      
      rawOpts = [ansValue, ansValue - step, ansValue + step, ansValue + currentDiff, ansValue - 1].map(String);
    }

    let correctStr = rawOpts[0];
    let uniqueOpts = Array.from(new Set(rawOpts));
    while(uniqueOpts.length < 5) {
      uniqueOpts.push((Math.random() * 100).toFixed(1).replace('.', ','));
    }
    uniqueOpts = uniqueOpts.slice(0,5);
    
    let shuffledOpts = shuffleArray(uniqueOpts);
    let newAnsIdx = shuffledOpts.indexOf(correctStr);

    res.push({
      id: `2-${i+1}`,
      text: `Soal ${i+1}: ${qText}`,
      options: shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`),
      answer: newAnsIdx,
      discussion: dText
    });
  }
  return res;
};

// === 3. PENGETAHUAN UMUM (40 Soal) ===
const genPU = () => {
  const bank = [
    { q: "Siapakah pemegang kekuasaan tertinggi dalam koperasi menurut UU No. 25 Tahun 1992?", o: ["Rapat Anggota", "Pengurus", "Pengawas", "Manajer", "Dinas Koperasi"], a: 0, d: "Rapat Anggota merupakan kekuasaan tertinggi dalam koperasi (Pasal 22)." },
    { q: "Menurut UU No. 25 Tahun 1992, koperasi berasaskan...", o: ["Kekeluargaan", "Keadilan sosial", "Demokrasi ekonomi", "Gotong royong", "Kemandirian"], a: 0, d: "Koperasi Indonesia berasaskan kekeluargaan (Pasal 2)." },
    { q: "Landasan idiil koperasi Indonesia adalah...", o: ["Pancasila", "UUD 1945", "Kekeluargaan", "Tap MPR", "Bhinneka Tunggal Ika"], a: 0, d: "Landasan idiil koperasi adalah Pancasila (Pasal 2)." },
    { q: "Landasan struktural koperasi Indonesia adalah...", o: ["UUD 1945", "Pancasila", "Setia Kawan", "Kemandirian", "Keadilan"], a: 0, d: "Landasan struktural koperasi adalah UUD 1945 Pasal 33 ayat (1)." },
    { q: "Berikut ini yang BUKAN merupakan perangkat organisasi koperasi adalah...", o: ["Dinas Koperasi", "Rapat Anggota", "Pengurus", "Pengawas", "Semua salah"], a: 0, d: "Perangkat organisasi koperasi adalah Rapat Anggota, Pengurus, dan Pengawas." },
    { q: "Modal dasar koperasi terdiri dari, kecuali...", o: ["Simpanan sukarela", "Simpanan pokok", "Simpanan wajib", "Dana cadangan", "Hibah"], a: 0, d: "Simpanan sukarela bukan merupakan bagian dari modal dasar/modal sendiri koperasi." },
    { q: "Simpanan yang wajib dibayar anggota saat mendaftar dan tidak dapat diambil kembali selama menjadi anggota disebut...", o: ["Simpanan pokok", "Simpanan wajib", "Simpanan sukarela", "Dana cadangan", "Simpanan khusus"], a: 0, d: "Simpanan pokok dibayar sekali saat mendaftar dan tidak bisa ditarik selama masih menjadi anggota." },
    { q: "Pembagian Sisa Hasil Usaha (SHU) dilakukan secara adil sebanding dengan...", o: ["Besarnya jasa usaha masing-masing anggota", "Besarnya simpanan masing-masing anggota", "Jabatan anggota dalam koperasi", "Lama keanggotaan", "Kebutuhan anggota"], a: 0, d: "Prinsip koperasi: pembagian SHU dilakukan secara adil sebanding dengan besarnya jasa usaha masing-masing anggota." },
    { q: "Koperasi sekunder didirikan oleh sekurang-kurangnya...", o: ["3 koperasi", "5 koperasi", "10 orang", "20 orang", "50 orang"], a: 0, d: "Koperasi sekunder didirikan oleh sekurang-kurangnya 3 (tiga) koperasi." },
    { q: "Koperasi primer dibentuk oleh sekurang-kurangnya...", o: ["20 orang", "10 orang", "3 koperasi", "5 koperasi", "50 orang"], a: 0, d: "Sesuai UU 25/1992, koperasi primer didirikan sekurang-kurangnya 20 orang." },
    { q: "Apa kepanjangan dari APBN?", o: ["Anggaran Pendapatan dan Belanja Negara", "Alokasi Pendapatan dan Belanja Nasional", "Anggaran Pengeluaran dan Biaya Negara", "Asosiasi Pendapatan dan Belanja Negara", "Anggaran Pendapatan dan Biaya Nasional"], a: 0, d: "APBN adalah Anggaran Pendapatan dan Belanja Negara." },
    { q: "Inflasi yang sangat tinggi dan tidak terkendali disebut...", o: ["Hiperinflasi", "Deflasi", "Stagflasi", "Devaluasi", "Revaluasi"], a: 0, d: "Hiperinflasi adalah kondisi inflasi yang sangat tinggi dan cepat." },
    { q: "Penurunan nilai mata uang domestik terhadap mata uang asing akibat kebijakan pemerintah disebut...", o: ["Devaluasi", "Depresiasi", "Apresiasi", "Revaluasi", "Inflasi"], a: 0, d: "Devaluasi adalah kebijakan menurunkan nilai mata uang terhadap mata uang asing." },
    { q: "Kebijakan pemerintah di bidang pendapatan dan pengeluaran negara disebut...", o: ["Kebijakan fiskal", "Kebijakan moneter", "Kebijakan riil", "Kebijakan harga", "Kebijakan upah"], a: 0, d: "Kebijakan fiskal berkaitan dengan pendapatan (pajak) dan pengeluaran negara (APBN)." },
    { q: "Bank Sentral di Indonesia adalah...", o: ["Bank Indonesia", "Bank Mandiri", "Bank Negara Indonesia", "Bank Rakyat Indonesia", "Otoritas Jasa Keuangan"], a: 0, d: "Bank Indonesia (BI) bertindak sebagai bank sentral di Indonesia." },
    { q: "Kemampuan suatu negara menghasilkan barang/jasa lebih efisien dari negara lain disebut keunggulan...", o: ["Absolut", "Komparatif", "Kompetitif", "Relatif", "Spesifik"], a: 0, d: "Keunggulan absolut (mutlak) terjadi ketika suatu negara bisa memproduksi lebih efisien dari negara lain." },
    { q: "Pendapatan nasional dihitung dengan menjumlahkan seluruh pengeluaran konsumsi, investasi, belanja pemerintah, dan ekspor neto merupakan pendekatan...", o: ["Pengeluaran", "Pendapatan", "Produksi", "Nilai tambah", "Sektoral"], a: 0, d: "Ini adalah perhitungan PDB dengan pendekatan pengeluaran (Y = C + I + G + (X-M))." },
    { q: "Pajak Pertambahan Nilai (PPN) saat ini secara umum tarifnya adalah...", o: ["11%", "10%", "12%", "15%", "5%"], a: 0, d: "Tarif PPN di Indonesia per April 2022 naik menjadi 11%." },
    { q: "Surat berharga yang menunjukkan bagian kepemilikan atas suatu perusahaan disebut...", o: ["Saham", "Obligasi", "Reksadana", "Deposito", "Cek"], a: 0, d: "Saham adalah bukti kepemilikan bagian modal suatu perseroan terbatas." },
    { q: "Badan yang mengawasi seluruh kegiatan lembaga jasa keuangan di Indonesia adalah...", o: ["OJK", "BI", "LPS", "Bapepam", "Kemenkeu"], a: 0, d: "Otoritas Jasa Keuangan (OJK) bertugas mengawasi industri jasa keuangan." },
    { q: "Sidang pertama BPUPKI yang membahas tentang dasar negara dilaksanakan pada tanggal...", o: ["29 Mei - 1 Juni 1945", "10 - 16 Juli 1945", "18 Agustus 1945", "22 Juni 1945", "1 Maret 1945"], a: 0, d: "Sidang pertama BPUPKI (29 Mei - 1 Juni 1945) membahas perumusan dasar negara." },
    { q: "Ketua Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia (BPUPKI) adalah...", o: ["Dr. Radjiman Wedyodiningrat", "Ir. Soekarno", "Drs. Mohammad Hatta", "Prof. Dr. Soepomo", "Mohammad Yamin"], a: 0, d: "BPUPKI diketuai oleh Dr. K.R.T. Radjiman Wedyodiningrat." },
    { q: "Panitia Sembilan bertugas merumuskan dasar negara dan menghasilkan dokumen historis yang disebut...", o: ["Piagam Jakarta", "Dasasila Bandung", "Tritura", "Supersemar", "Deklarasi Djuanda"], a: 0, d: "Panitia Sembilan merumuskan Piagam Jakarta (Jakarta Charter) pada 22 Juni 1945." },
    { q: "Pasal 29 ayat (2) UUD 1945 menjamin kemerdekaan tiap-tiap penduduk untuk...", o: ["Memeluk agama dan beribadat menurut agama dan kepercayaannya", "Menyatakan pendapat di muka umum", "Mendapatkan pendidikan yang layak", "Mendapatkan pekerjaan dan penghidupan yang layak", "Membentuk partai politik"], a: 0, d: "Pasal 29 ayat (2) UUD 1945 mengatur kebebasan beragama." },
    { q: "Lembaga negara yang berwenang memberhentikan Presiden dan/atau Wakil Presiden dalam masa jabatannya menurut UUD 1945 adalah...", o: ["MPR", "DPR", "Mahkamah Konstitusi", "Mahkamah Agung", "Komisi Yudisial"], a: 0, d: "Berdasarkan Pasal 3 ayat (3) UUD 1945, MPR berwenang memberhentikan Presiden dan/atau Wakil Presiden." },
    { q: "Menurut UUD 1945, pemegang kekuasaan membentuk undang-undang adalah...", o: ["DPR", "Presiden", "MPR", "DPD", "Mahkamah Konstitusi"], a: 0, d: "Pasal 20 ayat (1) UUD 1945 menegaskan DPR memegang kekuasaan membentuk undang-undang." },
    { q: "ASEAN didirikan pada tanggal 8 Agustus 1967 melalui deklarasi yang dikenal dengan...", o: ["Deklarasi Bangkok", "Deklarasi Djuanda", "Perjanjian Linggarjati", "Perjanjian Roem-Royen", "Konferensi Asia Afrika"], a: 0, d: "ASEAN dibentuk berdasarkan Deklarasi Bangkok." },
    { q: "Tokoh dari Indonesia yang ikut menandatangani Deklarasi Bangkok sebagai tanda berdirinya ASEAN adalah...", o: ["Adam Malik", "Ali Sastroamidjojo", "Mohammad Hatta", "Sutan Syahrir", "Mochtar Kusumaatmadja"], a: 0, d: "Menteri Luar Negeri Indonesia saat itu, Adam Malik, adalah salah satu pendiri ASEAN." },
    { q: "Badan khusus PBB yang menangani masalah pendidikan, keilmuan, dan kebudayaan adalah...", o: ["UNESCO", "UNICEF", "WHO", "ILO", "FAO"], a: 0, d: "UNESCO (United Nations Educational, Scientific and Cultural Organization) menangani pendidikan dan kebudayaan." },
    { q: "Sistem pemerintahan di mana para menteri bertanggung jawab kepada parlemen disebut...", o: ["Sistem Parlementer", "Sistem Presidensial", "Sistem Monarki", "Sistem Oligarki", "Sistem Demokrasi Terpimpin"], a: 0, d: "Dalam sistem parlementer, eksekutif (kabinet/menteri) bertanggung jawab kepada legislatif (parlemen)." },
    { q: "Sumbangan dana dari pemerintah pusat untuk desa yang bersumber dari APBN disebut...", o: ["Dana Desa", "Alokasi Dana Desa (ADD)", "Bagi Hasil Pajak", "Pendapatan Asli Desa", "Hibah"], a: 0, d: "Dana Desa bersumber dari APBN, sedangkan ADD dari APBD Kabupaten/Kota." },
    { q: "Masa jabatan Kepala Desa berdasarkan UU No. 6 Tahun 2014 sebelum direvisi adalah...", o: ["6 tahun", "5 tahun", "8 tahun", "4 tahun", "10 tahun"], a: 0, d: "Masa jabatan Kades awalnya 6 tahun per periode." },
    { q: "Badan Permusyawaratan Desa (BPD) berkedudukan sebagai...", o: ["Unsur penyelenggara pemerintahan desa", "Kepala wilayah", "Organisasi masyarakat", "Lembaga eksekutif desa", "Lembaga yudikatif desa"], a: 0, d: "BPD merupakan lembaga yang melaksanakan fungsi pemerintahan yang anggotanya wakil penduduk desa." },
    { q: "Peraturan Desa ditetapkan oleh Kepala Desa setelah dibahas dan disepakati bersama...", o: ["BPD", "Camat", "Bupati", "Sekretaris Desa", "Tokoh Adat"], a: 0, d: "Peraturan Desa disepakati bersama antara Kepala Desa dan Badan Permusyawaratan Desa (BPD)." },
    { q: "Kekuatan yang menggerakkan perekonomian desa yang dimiliki dan dikelola oleh desa disebut...", o: ["BUMDes", "Koperasi Desa", "Karang Taruna", "LMD", "PKK"], a: 0, d: "BUMDes (Badan Usaha Milik Desa) dibentuk untuk mendayagunakan potensi desa." },
    { q: "Pancasila disahkan sebagai dasar negara pada tanggal...", o: ["18 Agustus 1945", "1 Juni 1945", "17 Agustus 1945", "22 Juni 1945", "1 Oktober 1965"], a: 0, d: "Pancasila disahkan oleh PPKI pada tanggal 18 Agustus 1945." },
    { q: "Semboyan Bhinneka Tunggal Ika diambil dari kitab...", o: ["Sutasoma", "Negarakertagama", "Arjuna Wiwaha", "Pararaton", "Ramayana"], a: 0, d: "Bhinneka Tunggal Ika terdapat dalam kitab Sutasoma karangan Mpu Tantular." },
    { q: "Siapakah pencipta lagu kebangsaan Indonesia Raya?", o: ["W.R. Supratman", "Ibu Sud", "Kusbini", "C. Simanjuntak", "Ismail Marzuki"], a: 0, d: "Indonesia Raya diciptakan oleh Wage Rudolf Supratman." },
    { q: "Ibukota negara Indonesia yang baru (IKN) bernama...", o: ["Nusantara", "Palapa", "Dwipantara", "Kutai", "Mahakam"], a: 0, d: "Ibukota baru di Kalimantan Timur dinamakan Nusantara." },
    { q: "Gunung tertinggi di Indonesia adalah...", o: ["Puncak Jaya", "Kerinci", "Rinjani", "Semeru", "Gede"], a: 0, d: "Puncak Jaya atau Cartensz Pyramid di Papua adalah gunung tertinggi di Indonesia." }
  ];

  let res = [];
  for (let i = 0; i < bank.length; i++) {
    let t = bank[i];
    let opts = [...t.o];
    let correctStr = opts[t.a];
    let shuffledOpts = shuffleArray(opts);
    let newAnsIdx = shuffledOpts.indexOf(correctStr);
    
    res.push({
      id: `3-${i+1}`,
      text: `Soal ${i+1}: ${t.q}`,
      options: shuffledOpts.map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`),
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
  
  const drawComplexSVG = (type, color, rot, scale) => {
    let inner = '';
    if (type === 0) inner = `<rect x="20" y="20" width="60" height="60" fill="${color}"/><circle cx="50" cy="50" r="10" fill="white"/>`;
    else if (type === 1) inner = `<polygon points="50,10 90,90 10,90" fill="${color}"/><rect x="40" y="60" width="20" height="20" fill="white"/>`;
    else if (type === 2) inner = `<circle cx="50" cy="50" r="40" fill="${color}"/><polygon points="50,20 70,70 30,70" fill="white"/>`;
    else if (type === 3) inner = `<polygon points="50,20 90,50 50,80 10,50" fill="${color}"/><circle cx="50" cy="50" r="15" fill="white"/>`;
    else inner = `<rect x="10" y="30" width="80" height="40" fill="${color}" rx="10"/><circle cx="30" cy="50" r="10" fill="white"/><circle cx="70" cy="50" r="10" fill="white"/>`;
    return `<g transform="rotate(${rot}, 50, 50) scale(${scale}) translate(${50 * (1/scale - 1)}, ${50 * (1/scale - 1)})">${inner}</g>`;
  };

  for (let i = 0; i < 55; i++) {
    if (i < 25) {
      // Sequence Logic
      let baseType = Math.floor(Math.random() * 5);
      let baseColor = `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`;
      let startRot = Math.floor(Math.random() * 8) * 45;
      let rotStep = (Math.floor(Math.random() * 3) + 1) * 45; // 45, 90, or 135
      
      let seqHTML = '';
      for (let j = 0; j < 3; j++) {
        let currentRot = startRot + (j * rotStep);
        let svg = `<div style="width:80px;height:80px;background:#1e293b;border-radius:8px"><svg viewBox="0 0 100 100">${drawComplexSVG(baseType, baseColor, currentRot, 0.8)}</svg></div>`;
        seqHTML += svg;
      }
      seqHTML += `<div style="width:80px;height:80px;background:rgba(255,255,255,0.05);border:2px dashed #475569;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#94a3b8;font-weight:bold;font-size:24px;">?</div>`;
      
      let svgStr = `<div style="display:flex;gap:16px;justify-content:center;margin:1rem 0;">${seqHTML}</div>`;
      
      let correctRot = startRot + (3 * rotStep);
      let correctOpt = svgOptionWrapper(drawComplexSVG(baseType, baseColor, correctRot, 0.8));
      
      let rawOpts = [correctOpt];
      while(rawOpts.length < 5) {
        let wRot = startRot + (Math.floor(Math.random() * 8) * 45);
        let wType = baseType;
        if (Math.random() > 0.7) wType = (baseType + 1) % 5;
        let wOpt = svgOptionWrapper(drawComplexSVG(wType, baseColor, wRot, 0.8));
        if (!rawOpts.includes(wOpt) && wRot !== correctRot) rawOpts.push(wOpt);
      }
      
      let shuffled = shuffleArray(rawOpts);
      let ans = shuffled.indexOf(correctOpt);
      
      res.push({
        id: `4-${i+1}`,
        text: `Deret Visual: Perhatikan pola rotasi gambar di atas. Gambar manakah yang tepat untuk mengisi kotak kosong ("?")?`,
        svg: svgStr,
        options: shuffled.map((o, idx) => o.replace('></span>', `>${String.fromCharCode(65+idx)}.</span>`)),
        answer: ans,
        discussion: `Pola rotasi berputar sebesar ${rotStep} derajat secara konstan setiap langkah.`
      });
      
    } else {
      // Matching Image
      let targetType = Math.floor(Math.random() * 5);
      let color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
      let rotation = Math.floor(Math.random() * 360);
      
      let svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" style="background:#0f172a;border-radius:8px">
        <text x="100" y="20" fill="white" font-size="14" text-anchor="middle">Gambar Target:</text>
        <g transform="translate(50, 20)">${drawComplexSVG(targetType, color, rotation, 0.8)}</g>
      </svg>`;
      
      let correctSvg = svgOptionWrapper(drawComplexSVG(targetType, color, rotation, 0.8));
      
      let rawOpts = [correctSvg];
      while(rawOpts.length < 5) {
        let wRot = Math.floor(Math.random() * 360);
        let wColor = color;
        if (Math.random() > 0.5) wColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
        let wOpt = svgOptionWrapper(drawComplexSVG(targetType, wColor, wRot, 0.8));
        if (Math.random() > 0.7) {
            let wType = (targetType + 1) % 5;
            wOpt = svgOptionWrapper(drawComplexSVG(wType, wColor, wRot, 0.8));
        }
        if (!rawOpts.includes(wOpt) && wOpt !== correctSvg) rawOpts.push(wOpt);
      }
      
      let shuffled = shuffleArray(rawOpts);
      let ans = shuffled.indexOf(correctSvg);

      res.push({
        id: `4-${i+1}`,
        text: `Matching Image: Manakah dari 5 opsi di bawah ini yang IDENTIK secara presisi dengan gambar target di atas?`,
        svg: svgStr,
        options: shuffled.map((o, idx) => o.replace('></span>', `>${String.fromCharCode(65+idx)}.</span>`)),
        answer: ans,
        discussion: "Perhatikan presisi derajat rotasi, bentuk dalam, dan warna gambar utama."
      });
    }
  }
  return res;
};

// === 5. SPASIAL & ABSTRAKSI (30 Soal) ===
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

  const drawJaring = (cx, cy, arr) => {
    return `
      <g transform="translate(${cx}, ${cy}) scale(0.5)">
        <rect x="0" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="20" y="80" fill="white" font-size="24">${arr[0]}</text>
        <rect x="50" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="70" y="80" fill="white" font-size="24">${arr[1]}</text>
        <rect x="100" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="120" y="80" fill="white" font-size="24">${arr[2]}</text>
        <rect x="150" y="50" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="170" y="80" fill="white" font-size="24">${arr[3]}</text>
        <rect x="50" y="0" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="70" y="30" fill="white" font-size="24">${arr[4]}</text>
        <rect x="50" y="100" width="50" height="50" fill="none" stroke="white" stroke-width="2"/>
        <text x="70" y="130" fill="white" font-size="24">${arr[5]}</text>
      </g>
    `;
  };

  const drawComplexShape = (color, type, rot, scale, innerColor) => {
     let inner = '';
     if (type === 0) {
         inner = `<rect x="20" y="20" width="60" height="60" fill="${color}" stroke="white" stroke-width="3"/><circle cx="50" cy="50" r="15" fill="${innerColor}"/>`;
     } else if (type === 1) {
         inner = `<polygon points="50,10 90,90 10,90" fill="${color}" stroke="white" stroke-width="3"/><rect x="40" y="40" width="20" height="20" fill="${innerColor}"/>`;
     } else if (type === 2) {
         inner = `<circle cx="50" cy="50" r="40" fill="${color}" stroke="white" stroke-width="3"/><polygon points="50,20 70,70 30,70" fill="${innerColor}"/>`;
     } else if (type === 3) {
         inner = `<polygon points="50,10 90,50 50,90 10,50" fill="${color}" stroke="white" stroke-width="3"/><circle cx="50" cy="50" r="15" fill="${innerColor}"/>`;
     } else {
         inner = `<rect x="10" y="30" width="80" height="40" fill="${color}" stroke="white" stroke-width="3" rx="10"/><circle cx="30" cy="50" r="10" fill="${innerColor}"/><circle cx="70" cy="50" r="10" fill="${innerColor}"/>`;
     }
     return `<g transform="rotate(${rot}, 50, 50) scale(${scale}) translate(${50 * (1/scale - 1)}, ${50 * (1/scale - 1)})">${inner}</g>`;
  };

  for (let i = 0; i < 30; i++) {
    if (i < 10) {
      // Persamaan Bentuk
      let targetColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
      let targetInnerColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 20%)`;
      let targetType = Math.floor(Math.random() * 5);
      let targetRot = Math.floor(Math.random() * 4) * 90;
      
      let targetShapeStr = drawComplexShape(targetColor, targetType, targetRot, 0.8, targetInnerColor);
      let correctOpt = svgOptionWrapper(targetShapeStr);
      
      let rawOpts = [correctOpt];
      while(rawOpts.length < 5) {
          let wColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
          let wInnerColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 20%)`;
          let wType = Math.floor(Math.random() * 5);
          let wRot = Math.floor(Math.random() * 360);
          let wShapeStr = drawComplexShape(wColor, wType, wRot, 0.8, wInnerColor);
          let wOpt = svgOptionWrapper(wShapeStr);
          if (!rawOpts.includes(wOpt) && wShapeStr !== targetShapeStr) {
              rawOpts.push(wOpt);
          }
      }
      
      let shuffled = shuffleArray(rawOpts);
      let ans = shuffled.indexOf(correctOpt);
      
      let svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" style="background:#0f172a;border-radius:8px">
        <text x="100" y="20" fill="white" font-size="14" text-anchor="middle">Contoh Bentuk:</text>
        <g transform="translate(50, 20)">${targetShapeStr}</g>
      </svg>`;

      res.push({
        id: `5-${i+1}`,
        text: `Persamaan Bentuk: Carilah gambar pada opsi (A-E) yang MEMILIKI PERSAMAAN BENTUK (identik) dengan gambar contoh di atas!`,
        svg: svgStr,
        options: shuffled.map((o, idx) => o.replace('></span>', `>${String.fromCharCode(65+idx)}.</span>`)),
        answer: ans,
        discussion: "Perhatikan detail bentuk luar, bentuk dalam, warna, dan proporsi secara teliti. Hanya ada 1 opsi yang identik sempurna."
      });

    } else if (i < 20) {
      // Jaring-jaring
      let letters = shuffleArray(['A','B','C','D','E','F']);
      let targetIdx = Math.floor(Math.random() * 6);
      let oppositeIdx;
      if (targetIdx === 0) oppositeIdx = 2;
      if (targetIdx === 2) oppositeIdx = 0;
      if (targetIdx === 1) oppositeIdx = 3;
      if (targetIdx === 3) oppositeIdx = 1;
      if (targetIdx === 4) oppositeIdx = 5;
      if (targetIdx === 5) oppositeIdx = 4;
      
      let targetLetter = letters[targetIdx];
      let correctLetter = letters[oppositeIdx];

      let svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 120" style="background:#020617;border-radius:8px">
        ${drawJaring(50, 10, letters)}
      </svg>`;
      
      let rawOpts = [correctLetter];
      letters.forEach(l => {
        if (l !== correctLetter && rawOpts.length < 5) rawOpts.push(l);
      });
      
      let shuffled = shuffleArray(rawOpts);
      let ans = shuffled.indexOf(correctLetter);

      res.push({
        id: `5-${i+1}`,
        text: `Jaring-jaring Kubus: Berdasarkan jaring-jaring di atas, sisi manakah yang BERLAWANAN (berseberangan) dengan sisi ${targetLetter}?`,
        svg: svgStr,
        options: shuffled.map((o, idx) => `${String.fromCharCode(65+idx)}. Sisi ${o}`),
        answer: ans,
        discussion: "Pada pola salib, sisi yang diselingi 1 kotak adalah sisi yang berlawanan."
      });
    } else {
      // Rotasi 3D
      let color = `hsl(${Math.random() * 360}, 60%, 45%)`;
      let syms = shuffleArray(['1','2','3','4','5','6']);
      let top = syms[0], left = syms[1], right = syms[2];
      
      let svgStr = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" style="background:#020617;border-radius:8px">
        ${drawIsometricCube(100, 100, color, top, left, right)}
        <text x="180" y="80" fill="white" font-size="16">Rotasi Sumbu Y ➡</text>
        ${drawIsometricCube(330, 100, 'rgba(255,255,255,0.1)', '?', '?', '?')}
      </svg>`;
      
      let correctTop = top;
      let correctLeft = right;
      let correctRight = syms[3]; // some new face
      
      let correctSvg = svgOptionWrapper(drawIsometricCube(120, 120, color, correctTop, correctLeft, correctRight));
      let w1 = svgOptionWrapper(drawIsometricCube(120, 120, color, correctLeft, correctTop, correctRight));
      let w2 = svgOptionWrapper(drawIsometricCube(120, 120, color, correctTop, correctRight, correctLeft));
      let w3 = svgOptionWrapper(drawIsometricCube(120, 120, color, syms[4], correctLeft, correctRight));
      let w4 = svgOptionWrapper(drawIsometricCube(120, 120, color, correctTop, syms[5], left));
      
      let rawOpts = [correctSvg, w1, w2, w3, w4];
      let shuffled = shuffleArray(rawOpts);
      let ans = shuffled.indexOf(correctSvg);

      res.push({
        id: `5-${i+1}`,
        text: `Rotasi 3D: Jika kubus diputar 90 derajat searah jarum jam pada sumbu Y (vertikal), manakah posisi yang benar?`,
        svg: svgStr,
        options: shuffled.map((o, idx) => o.replace('></span>', `>${String.fromCharCode(65+idx)}.</span>`)),
        answer: ans,
        discussion: "Sisi atas tetap, sisi kanan pindah ke kiri, dan muncul sisi baru di sebelah kanan."
      });
    }
  }
  return res;
};

// === 6. BENTUK (25 Soal) ===
const genBentuk = () => {
  let res = [];
  
  const generatePolygons = (sides, color) => {
    let points = [];
    for (let i = 0; i < sides; i++) {
        let angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
        points.push(`${50 + 40 * Math.cos(angle)},${50 + 40 * Math.sin(angle)}`);
    }
    return `<polygon points="${points.join(' ')}" fill="${color}" stroke="white" stroke-width="2"/>`;
  };

  const drawGridPuzzle = (c1, c2, c3, c4) => {
    return `<rect x="10" y="10" width="40" height="40" fill="${c1}"/><rect x="50" y="10" width="40" height="40" fill="${c2}"/><rect x="10" y="50" width="40" height="40" fill="${c3}"/><rect x="50" y="50" width="40" height="40" fill="${c4}"/>`;
  };

  for (let i = 0; i < 25; i++) {
    if (i < 13) {
      // Odd One Out
      let commonSides = Math.random() > 0.5 ? 4 : 6;
      let oddSides = commonSides === 4 ? 5 : 3;
      let baseColor = `hsl(${Math.floor(Math.random() * 360)}, 60%, 50%)`;
      
      let rawOpts = [];
      // 4 common
      for(let j=0; j<4; j++) {
        let rot = Math.floor(Math.random() * 360);
        rawOpts.push(svgOptionWrapper(`<g transform="rotate(${rot}, 50, 50)">${generatePolygons(commonSides, baseColor)}</g>`));
      }
      // 1 odd
      let oddRot = Math.floor(Math.random() * 360);
      let oddOpt = svgOptionWrapper(`<g transform="rotate(${oddRot}, 50, 50)">${generatePolygons(oddSides, baseColor)}</g>`);
      rawOpts.push(oddOpt);
      
      let shuffled = shuffleArray(rawOpts);
      let ans = shuffled.indexOf(oddOpt);
      
      res.push({
        id: `6-${i+1}`,
        text: `Odd One Out: Pilihlah opsi yang TIDAK MEMILIKI kesamaan bentuk dengan empat opsi lainnya!`,
        options: shuffled.map((o, idx) => o.replace('></span>', `>${String.fromCharCode(65+idx)}.</span>`)),
        answer: ans,
        discussion: `Satu-satunya bangun yang memiliki ${oddSides} sisi, sedangkan yang lain memiliki ${commonSides} sisi.`
      });
    } else {
      // Puzzle Assembly (Procedural Grid)
      let colors = [`hsl(${Math.floor(Math.random()*360)}, 70%, 50%)`, `hsl(${Math.floor(Math.random()*360)}, 70%, 50%)`, `hsl(${Math.floor(Math.random()*360)}, 70%, 50%)`, `hsl(${Math.floor(Math.random()*360)}, 70%, 50%)`];
      let order = shuffleArray([0, 1, 2, 3]);
      
      let targetShapeHtml = `<div style="text-align:center;margin-bottom:1rem;">
        <div style="font-size:14px;color:white;margin-bottom:8px;">Gambar Target:</div>
        <svg width="80" height="80" viewBox="0 0 100 100" style="background:#0f172a;border-radius:8px;">
          ${drawGridPuzzle(colors[0], colors[1], colors[2], colors[3])}
        </svg>
      </div>`;

      let panelsHtml = order.map((sliceIdx, renderIdx) => {
        let rectHtml = `<rect x="10" y="10" width="80" height="80" fill="${colors[sliceIdx]}"/>`;
        return `<div style="text-align:center;">
          <svg width="50" height="50" viewBox="0 0 100 100" style="background:#334155;border-radius:4px;border:1px solid #475569;">
            ${rectHtml}
          </svg>
          <div style="margin-top:8px;font-weight:bold;font-size:1.2rem;color:var(--text-main);">${renderIdx + 1}</div>
        </div>`;
      }).join('');

      let svgStr = `<div style="display:flex;flex-direction:column;align-items:center;background:rgba(255,255,255,0.02);padding:1.5rem;border-radius:12px;margin:1rem 0;">
        ${targetShapeHtml}
        <div style="display:flex;gap:12px;justify-content:center;">${panelsHtml}</div>
      </div>`;
      
      let correctSeqArr = [
        order.indexOf(0) + 1,
        order.indexOf(1) + 1,
        order.indexOf(2) + 1,
        order.indexOf(3) + 1
      ];
      let correctSeq = correctSeqArr.join(' - ');

      let rawOpts = [correctSeq];
      while(rawOpts.length < 5) {
        let fakeOrder = shuffleArray([1,2,3,4]).join(' - ');
        if (!rawOpts.includes(fakeOrder)) rawOpts.push(fakeOrder);
      }
      
      let finalShuffled = shuffleArray(rawOpts);
      let answer = finalShuffled.indexOf(correctSeq);
      
      res.push({
        id: `6-${i+1}`,
        text: `Puzzle Assembly Sequencing:\nCari urutan nomor potongan kotak (Kiri Atas - Kanan Atas - Kiri Bawah - Kanan Bawah) agar dapat disusun kembali membentuk "Gambar Target"!`,
        svg: svgStr,
        options: finalShuffled.map((o, idx) => `${String.fromCharCode(65+idx)}. Urutan ${o}`),
        answer: answer,
        discussion: "Menyusun berdasarkan urutan warna yang tepat untuk membentuk grid 2x2 pada gambar target."
      });
    }
  }
  return res;
};

// === 7. MANAJEMEN BIDANG (20 Soal, SKOR 1-5) ===
const genManajemen = () => {
  let res = [];
  const baseManajemenData = [
    {
      q: "Sebagai manajer koperasi, Anda menemukan bahwa staf keuangan melakukan kesalahan fatal dalam pencatatan laporan neraca yang berpotensi merugikan koperasi hingga ratusan juta rupiah. Apa yang Anda lakukan?",
      opts: ["Meminta klarifikasi, mengaudit ulang bersama pengawas, lalu menjatuhkan sanksi jika terbukti lalai", "Memecat staf keuangan secara langsung tanpa pesangon", "Memperbaiki laporan tersebut secara diam-diam agar tidak ada yang tahu", "Melaporkan kejadian ini langsung ke pihak berwajib tanpa internal review", "Mengurangi gaji staf tersebut untuk menutupi kerugian"],
      scores: [5, 2, 1, 3, 2]
    },
    {
      q: "Anggota komplain karena pelayanan kasir koperasi simpan pinjam dianggap terlalu lambat. Anda menyadari kasir tersebut sering bermain handphone saat bekerja. Tindakan Anda?",
      opts: ["Memanggil kasir secara privat, memberikan teguran lisan, dan menetapkan aturan penggunaan HP", "Memarahi kasir di depan anggota agar anggota puas", "Membiarkan saja karena kasir tersebut anak dari ketua pengurus", "Memotong gaji kasir langsung", "Memindahkan kasir ke bagian kebersihan"],
      scores: [5, 1, 1, 2, 2]
    },
    {
      q: "Menjelang RAT (Rapat Anggota Tahunan), beberapa dokumen penting hilang akibat kelalaian staf administrasi. Waktu RAT tinggal 3 hari lagi. Sikap Anda?",
      opts: ["Segera membentuk tim kecil untuk bekerja lembur memulihkan dokumen dan mengevaluasi sistem pengarsipan", "Menunda RAT hingga bulan depan", "Menyalahkan staf administrasi dan menyuruhnya mencari sendiri", "Memalsukan dokumen yang hilang agar RAT bisa berjalan lancar", "Meminta pengurus menutupi masalah ini dari anggota"],
      scores: [5, 2, 2, 1, 1]
    },
    {
      q: "Koperasi mendapat tawaran investasi bodong dari pihak eksternal dengan janji return 30% per bulan. Beberapa pengurus tergiur dan mendesak Anda sebagai manajer untuk menyetujuinya. Langkah Anda?",
      opts: ["Menolak dengan tegas, memberikan edukasi risiko, dan berpegang pada SOP investasi koperasi", "Mengikuti saran pengurus karena mereka atasan Anda", "Mencoba investasi dengan nominal kecil dulu", "Mundur dari jabatan manajer karena takut disalahkan", "Menerima tawaran tersebut demi keuntungan besar"],
      scores: [5, 1, 3, 2, 1]
    },
    {
      q: "Saat memimpin rapat divisi, ada dua staf yang terus berdebat dengan nada tinggi hingga mengganggu jalannya rapat. Apa yang Anda lakukan?",
      opts: ["Menghentikan perdebatan, memberikan jeda 5 menit, lalu meminta keduanya bicara secara bergantian dan objektif", "Membiarkan mereka berdebat sampai salah satu menyerah", "Mengusir keduanya dari ruang rapat", "Membatalkan rapat saat itu juga", "Membela staf yang lebih senior"],
      scores: [5, 2, 2, 1, 1]
    },
    {
      q: "Anda menemukan bahwa pesaing koperasi di desa Anda menawarkan bunga pinjaman jauh lebih rendah. Beberapa anggota mulai pindah ke sana. Strategi Anda?",
      opts: ["Melakukan riset kepuasan anggota, memperbaiki kualitas pelayanan, dan mengevaluasi efisiensi operasional", "Menurunkan bunga pinjaman secara ekstrem meskipun koperasi merugi", "Meminta anggota untuk tetap setia dengan paksaan", "Menyebarkan isu buruk tentang pesaing tersebut", "Menyerah dan menutup unit simpan pinjam"],
      scores: [5, 2, 1, 1, 2]
    },
    {
      q: "Seorang anggota lama yang sangat berpengaruh meminta pinjaman besar tanpa agunan dan di luar prosedur standar koperasi. Bagaimana Anda merespon?",
      opts: ["Menolak secara halus namun tegas, serta menjelaskan bahwa aturan berlaku adil untuk semua anggota", "Memberikan pinjaman tersebut karena dia orang berpengaruh", "Meminta komisi jika pinjaman disetujui", "Mengabaikan permintaannya dan menghindar", "Membiarkan staf yang menolaknya agar Anda tidak dibenci"],
      scores: [5, 1, 1, 2, 2]
    },
    {
      q: "Koperasi berencana membuka cabang baru, namun modal yang ada sangat mepet. Pengurus menyerahkan keputusan ekspansi kepada Anda. Keputusan Anda?",
      opts: ["Menganalisis kelayakan bisnis secara mendalam terlebih dahulu, jika berisiko tinggi lebih baik ditunda", "Langsung membuka cabang karena itu prestise koperasi", "Mengambil pinjaman bank berbunga tinggi untuk mendanai cabang", "Membatalkan ide tanpa analisis karena takut gagal", "Menggunakan seluruh dana cadangan koperasi tanpa sisa"],
      scores: [5, 1, 2, 2, 1]
    },
    {
      q: "Dalam proses rekrutmen karyawan baru, seorang pelamar adalah kerabat dekat Anda namun kualifikasinya jauh di bawah standar. Apa tindakan Anda?",
      opts: ["Tetap objektif, menilai sesuai standar kompetensi, dan tidak menerimanya jika tidak memenuhi syarat", "Menerimanya karena kasihan dan ikatan keluarga", "Meloloskannya namun memberikan gaji lebih rendah", "Menyerahkan tes kepada orang lain dan meminta agar diloloskan", "Mengubah standar kualifikasi agar ia bisa masuk"],
      scores: [5, 1, 2, 1, 1]
    },
    {
      q: "Salah satu unit bisnis koperasi mengalami kerugian berturut-turut selama 3 bulan. Sebagai manajer, langkah pertama yang tepat adalah?",
      opts: ["Melakukan audit menyeluruh untuk menemukan akar masalah kerugian dan menyusun rencana perbaikan", "Langsung menutup unit bisnis tersebut", "Memotong gaji seluruh karyawan di unit tersebut", "Mencari kambing hitam untuk disalahkan", "Meminta dana talangan dari unit lain tanpa evaluasi"],
      scores: [5, 2, 1, 1, 2]
    },
    {
      q: "Banyak anggota koperasi yang tidak aktif dan tidak pernah berbelanja di waserda (warung serba ada) koperasi. Upaya Anda?",
      opts: ["Mencari tahu kebutuhan anggota, memperbaiki variasi produk, dan memberikan promo khusus anggota", "Membiarkan saja karena itu hak mereka", "Memaksa anggota belanja dengan memotong simpanan mereka", "Menutup waserda dan fokus simpan pinjam", "Mengirimkan surat peringatan ke anggota yang tidak belanja"],
      scores: [5, 2, 1, 2, 1]
    },
    {
      q: "Anda baru saja diangkat menjadi manajer koperasi. Staf lama tampak tidak suka dan sering tidak menjalankan instruksi Anda. Apa pendekatan Anda?",
      opts: ["Mengajak mereka berdiskusi empat mata untuk menyamakan visi, mendengarkan masukan, dan membangun komunikasi", "Langsung memecat staf yang membangkang", "Memarahi mereka setiap kali ada kesalahan", "Melaporkan mereka ke pengurus", "Membiarkan mereka bekerja semaunya"],
      scores: [5, 2, 1, 3, 1]
    },
    {
      q: "Sebuah program CSR (Corporate Social Responsibility) koperasi dikritik masyarakat karena dianggap tidak tepat sasaran. Respon Anda?",
      opts: ["Menerima kritik tersebut, melakukan evaluasi program, dan melibatkan tokoh masyarakat dalam perencanaan ke depan", "Mengabaikan kritik karena koperasi sudah berbuat baik", "Menarik kembali semua bantuan yang sudah diberikan", "Menyalahkan staf pelaksana CSR di depan publik", "Berdebat dengan masyarakat di media sosial"],
      scores: [5, 1, 1, 2, 1]
    },
    {
      q: "Koperasi mendapat bantuan hibah komputer dari pemerintah, namun spesifikasinya sangat rendah dan sering rusak. Bagaimana Anda memanfaatkannya?",
      opts: ["Memaksimalkan penggunaannya untuk tugas-tugas ringan atau pelatihan dasar, serta merawatnya dengan baik", "Menjual komputer tersebut dan membeli yang baru", "Menyimpannya di gudang agar tidak repot", "Mengembalikannya ke pemerintah", "Membuangnya karena tidak berguna"],
      scores: [5, 2, 1, 3, 1]
    },
    {
      q: "Terjadi perdebatan sengit antara Pengurus dan Pengawas mengenai pembagian SHU. Suasana menjadi tidak kondusif. Sikap Anda sebagai manajer profesional?",
      opts: ["Memberikan data historis dan landasan UU Koperasi yang relevan agar keputusan didasarkan pada objektivitas, bukan emosi", "Mendukung pendapat Pengurus karena mereka atasan langsung Anda", "Mendukung pendapat Pengawas karena takut diaudit", "Meninggalkan ruangan karena bukan urusan Anda", "Menyela perdebatan dan memaksakan pendapat Anda"],
      scores: [5, 2, 2, 1, 1]
    },
    {
      q: "Tingkat kredit macet (NPL) koperasi meningkat drastis akibat krisis ekonomi lokal (misal: gagal panen). Langkah penyehatan yang tepat?",
      opts: ["Melakukan restrukturisasi pinjaman (penjadwalan ulang) bagi anggota yang benar-benar terdampak dan kooperatif", "Menyita agunan tanpa peringatan", "Menghapusbukukan semua pinjaman secara otomatis", "Terus meneror anggota dengan debt collector", "Membekukan semua operasi simpan pinjam"],
      scores: [5, 1, 1, 1, 2]
    },
    {
      q: "Anda menemukan celah dalam SOP yang memungkinkan staf memanipulasi absensi. Belum ada yang memanfaatkan celah ini. Apa yang Anda lakukan?",
      opts: ["Segera memperbaiki SOP dan sistem absensi tersebut sebelum celah itu dimanfaatkan", "Membiarkan saja selama belum ada yang ketahuan", "Memanfaatkan celah itu untuk diri sendiri terlebih dahulu", "Menunggu ada staf yang melakukan lalu memecatnya", "Hanya memberi tahu staf tertentu saja"],
      scores: [5, 1, 1, 2, 1]
    },
    {
      q: "Dalam sebuah proyek pengadaan barang koperasi, salah satu vendor menjanjikan Anda komisi pribadi 10% jika memilih perusahaannya. Respon Anda?",
      opts: ["Menolak tegas tawaran tersebut dan tetap memilih vendor berdasarkan kualitas dan harga yang paling menguntungkan koperasi", "Menerima tawaran tersebut karena tidak merugikan koperasi secara langsung", "Menerima dan membaginya dengan pengurus lain", "Menolak namun tetap memilih vendor tersebut karena merasa berhutang budi", "Meminta komisi lebih tinggi, misal 20%"],
      scores: [5, 1, 1, 2, 1]
    },
    {
      q: "Beberapa anggota mengusulkan agar koperasi membagikan seluruh keuntungan sebagai SHU tanpa menyisihkan Dana Cadangan. Tindakan Anda?",
      opts: ["Memberikan edukasi bahwa Dana Cadangan diwajibkan oleh UU untuk memperkuat permodalan dan keamanan koperasi", "Menyetujui usulan anggota agar mereka senang", "Menyembunyikan sebagian keuntungan agar tidak dituntut anggota", "Menyuruh pengawas yang menjelaskan karena Anda malas", "Mengancam akan keluar jika usulan disetujui"],
      scores: [5, 1, 1, 3, 2]
    },
    {
      q: "Ada inovasi teknologi baru berupa aplikasi mobile koperasi yang mahal namun bisa meningkatkan efisiensi jangka panjang. Anda akan?",
      opts: ["Menyusun studi kelayakan dan mempresentasikannya di RAT agar mendapat persetujuan anggota", "Langsung membeli aplikasi tersebut menggunakan uang kas", "Menolak inovasi tersebut karena mahal", "Membajak aplikasi serupa agar murah", "Menyuruh staf membuat aplikasi sendiri walau mereka tidak ahli"],
      scores: [5, 2, 2, 1, 1]
    }
  ];

  for (let i = 0; i < baseManajemenData.length; i++) {
    const t = baseManajemenData[i];
    
    // Shuffle the options and align the scores accordingly
    const indices = [0, 1, 2, 3, 4];
    const shuffledIndices = shuffleArray(indices);
    
    const finalOptions = shuffledIndices.map(idx => `${String.fromCharCode(65 + shuffledIndices.indexOf(idx))}. ${t.opts[idx]}`);
    const finalScores = shuffledIndices.map(idx => t.scores[idx]);

    res.push({
      id: `7-${i+1}`,
      text: `Studi Kasus Manajerial Koperasi ${i+1}: ${t.q}`,
      options: finalOptions,
      optionScores: finalScores,
      discussion: "Penilaian berdasarkan prinsip integritas, profesionalisme, kepatuhan regulasi koperasi, dan pengambilan keputusan berbasis risiko."
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
    focus: "Persamaan Bentuk, Jaring-jaring Kubus, Rotasi Objek 3D",
    totalQuestions: 30,
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
