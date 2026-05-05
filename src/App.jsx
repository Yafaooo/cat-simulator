import React, { useState, useEffect } from 'react';
import { SUBTESTS } from './data/questions';
import { ref, get, set } from 'firebase/database';
import { db } from './firebase';

const VALID_ACCESS_CODES = [
  'PHTC-X9B2', 'PHTC-Y8C3', 'PHTC-Z7D4', 'PHTC-W6E5', 'PHTC-V5F6',
  'PHTC-U4G7', 'PHTC-T3H8', 'PHTC-S2I9', 'PHTC-R1J0', 'PHTC-Q0K1',
  'PHTC-P9L2', 'PHTC-O8M3', 'PHTC-N7N4', 'PHTC-M6O5', 'PHTC-L5P6',
  'PHTC-K4Q7', 'PHTC-J3R8', 'PHTC-I2S9', 'PHTC-H1T0', 'PHTC-G0U1'
];

function App() {
  const [appState, setAppState] = useState('locked'); // locked, intro, test, result
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const [deviceId] = useState(() => {
    let id = localStorage.getItem('phtc_device_id');
    if (!id) {
      id = 'device-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
      localStorage.setItem('phtc_device_id', id);
    }
    return id;
  });
  const [candidateName, setCandidateName] = useState('');
  const [currentSubtestIndex, setCurrentSubtestIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState({}); // { "1-1": 2, "1-2": 1, ... }
  
  const currentSubtest = SUBTESTS[currentSubtestIndex];
  const currentQuestion = currentSubtest?.questions[currentQuestionIndex];
  
  // Check local storage for existing session
  useEffect(() => {
    const savedCode = localStorage.getItem('phtc_access_code');
    if (savedCode && VALID_ACCESS_CODES.includes(savedCode)) {
      setAppState('intro');
    }
  }, []);
  
  const verifyAccessCode = async (code) => {
    if (!VALID_ACCESS_CODES.includes(code)) {
      setAccessError('Kode akses salah!');
      return;
    }

    setAccessError('Memeriksa kode...');

    try {
      const codeRef = ref(db, `codes/${code}`);
      const snapshot = await get(codeRef);
      
      if (snapshot.exists()) {
        const data = snapshot.val();
        if (data.deviceId === deviceId) {
          // Code belongs to this device, allow access
          localStorage.setItem('phtc_access_code', code);
          setAppState('intro');
        } else {
          // Code belongs to another device
          setAccessError('Kode sudah digunakan di perangkat lain!');
        }
      } else {
        // Code is brand new, claim it for this device
        await set(codeRef, {
          used: true,
          deviceId: deviceId,
          claimedAt: new Date().toISOString()
        });
        localStorage.setItem('phtc_access_code', code);
        setAppState('intro');
      }
    } catch (error) {
      console.error(error);
      setAccessError('Gagal terhubung ke server. Pastikan internet stabil.');
    }
  };
  
  // Start the test
  const startTest = () => {
    setAppState('test');
    setCurrentSubtestIndex(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(SUBTESTS[0].timeLimit);
    setAnswers({});
  };

  const timeoutRef = React.useRef(null);

  // Timer Logic
  useEffect(() => {
    let timer;
    if (appState === 'test' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (appState === 'test' && timeLeft === 0) {
      handleNextSubtest();
    }
    return () => clearInterval(timer);
  }, [appState, timeLeft]);

  // Handle Next Subtest / Finish
  const handleNextSubtest = () => {
    setCurrentSubtestIndex(prev => {
      if (prev < SUBTESTS.length - 1) {
        const nextIdx = prev + 1;
        setTimeLeft(SUBTESTS[nextIdx].timeLimit);
        setCurrentQuestionIndex(0);
        return nextIdx;
      } else {
        setAppState('result');
        return prev;
      }
    });
  };

  // Handle Question Navigation
  const handleNextQuestion = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (currentQuestionIndex < currentSubtest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleNextSubtest();
    }
  };

  const handlePrevQuestion = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  // Handle Answer Selection
  const handleSelectAnswer = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    timeoutRef.current = setTimeout(() => {
      handleNextQuestion();
    }, 400);
  };

  // Format Time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Calculate Results
  const calculateResults = () => {
    let tpkScore = 0; // Sub 1-6
    let manajerialScore = 0; // Sub 7
    let subtestDetails = [];

    SUBTESTS.forEach((subtest, index) => {
      let correct = 0;
      let wrong = 0;
      let unanswered = 0;
      let subtestScore = 0;

      subtest.questions.forEach(q => {
        const userAnswer = answers[q.id];
        if (userAnswer === undefined) {
          unanswered++;
        } else {
          if (index < 6) {
            // Subtes 1-6 (TPK) bernilai 1 poin jika benar
            if (userAnswer === q.answer) {
              correct++;
              tpkScore += 1;
              subtestScore += 1;
            } else {
              wrong++;
            }
          } else {
            // Subtes 7 (Manajemen Bidang) bernilai 1-5 poin
            const points = q.optionScores[userAnswer];
            manajerialScore += points;
            subtestScore += points;
            correct++; // Tidak ada "salah" di manajemen, hanya perbedaan bobot
          }
        }
      });

      subtestDetails.push({ 
        title: subtest.title, 
        correct, 
        wrong: index < 6 ? wrong : '-', 
        unanswered, 
        total: subtest.questions.length,
        score: subtestScore
      });
    });

    return { tpkScore, manajerialScore, subtestDetails };
  };

  return (
    <div className="app-container">
      {appState === 'locked' && (
        <div className="glass-panel animate-fade-in locked-screen-layout">
          
          <div className="locked-left">
            {/* Logo Kopdes Merah Putih */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/kopdes.jpg" 
                alt="Logo Kopdes Merah Putih" 
                style={{ 
                  height: '110px', 
                  objectFit: 'contain',
                  background: '#fff', 
                  padding: '10px 20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                  transition: 'transform 0.3s ease'
                }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            <h1 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2.2rem', textShadow: '0 2px 10px rgba(59, 130, 246, 0.3)' }}>
              AKSES TERKUNCI
            </h1>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem', maxWidth: '350px', lineHeight: '1.6' }}>
              Platform Simulasi CAT Premium. Menguji kemampuan kognitif, spasial visual, dan manajerial Anda secara presisi layaknya ujian seleksi sungguhan.
            </p>
          </div>
          
          <div className="locked-right">
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid var(--glass-border)' }}>
              <p style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 'bold' }}>
                Dapatkan Kode Akses Simulasi
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                Untuk mendapatkan kode akses, silakan lakukan pembayaran sebesar <strong style={{ color: 'var(--accent)' }}>Rp 10.000</strong> ke nomor DANA: <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>082272463816</strong>. Setelah itu, kirimkan bukti transfernya melalui WhatsApp di bawah ini.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.5rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "Cukup bayar sekali (lebih murah dari seblak!), kode akses ini bisa dipakai seumur hidup sampai jari Anda keriting! Tenang saja, soal-soalnya di-update otomatis tiap 3 jam sekali biar otak Anda tidak sempat bernapas. 🤯🔥"
              </p>
              <a 
                href="https://wa.me/6282272463816?text=Halo%20Admin,%20saya%20ingin%20mengirimkan%20bukti%20pembayaran%20untuk%20mendapatkan%20kode%20akses%20Simulasi%20CAT." 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '1rem', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)', width: 'fit-content' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Kirim Bukti Pembayaran
              </a>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'left' }}>
              Sudah punya kode akses? Masukkan di bawah ini:
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <input 
                type="password" 
                placeholder="Masukkan Kode Akses..." 
                value={accessCode}
                onChange={(e) => {
                  setAccessCode(e.target.value);
                  setAccessError('');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    verifyAccessCode(accessCode.trim());
                  }
                }}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '8px',
                  border: `1px solid ${accessError && accessError !== 'Memeriksa kode...' ? 'var(--danger)' : 'var(--primary)'}`,
                  background: 'rgba(255,255,255,0.1)',
                  color: 'var(--text-main)',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  outline: 'none'
                }}
              />
              {accessError && accessError !== 'Memeriksa kode...' && <div style={{ color: 'var(--danger)', marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'left' }}>{accessError}</div>}
              {accessError === 'Memeriksa kode...' && <div style={{ color: 'var(--primary)', marginTop: '0.5rem', fontSize: '0.9rem', textAlign: 'left' }}>Sedang memverifikasi ke database...</div>}
            </div>
            <button 
              className="btn"
              style={{ padding: '16px 48px', fontSize: '1.2rem', width: '100%', opacity: accessError === 'Memeriksa kode...' ? 0.7 : 1 }} 
              disabled={accessError === 'Memeriksa kode...'}
              onClick={() => {
                verifyAccessCode(accessCode.trim());
              }}
            >
              {accessError === 'Memeriksa kode...' ? 'MEMERIKSA...' : 'BUKA AKSES'}
            </button>
          </div>
        </div>
      )}

      {appState === 'intro' && (
        <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
          <h1 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2rem' }}>
            SIMULASI CAT SELEKSI MANAJER
          </h1>
          <h2 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>KDKMP PHTC 2026</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <input 
              type="text" 
              placeholder="Masukkan Nama Anda untuk Memulai..." 
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              style={{
                width: '100%',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid var(--primary)',
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--text-main)',
                fontSize: '1.2rem',
                textAlign: 'center',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', textAlign: 'left' }}>
            <p><strong>Nama Kandidat :</strong> {candidateName || "Belum Diisi"}</p>
            <p><strong>Posisi :</strong> Manajer KDKMP PHTC 2026</p>
            <hr style={{ borderColor: 'var(--glass-border)', margin: '1rem 0' }} />
            <p style={{ marginBottom: '0.5rem' }}><strong>Sistem Ujian Terdiri dari 7 Subtes (Total 248 Soal):</strong></p>
            <ul style={{ marginLeft: '1.5rem', color: 'var(--text-muted)' }}>
              <li>Subtes 1-6: Tes Potensi Kognitif (TPK) - 228 Soal (Ambang batas: 110 poin)</li>
              <li>Subtes 7: Manajemen Bidang - 20 Soal (Bobot 1-5 Poin per Soal)</li>
            </ul>
            <p style={{ marginTop: '1rem', color: 'var(--danger)', fontSize: '0.9rem' }}>
              * Peringatan: Waktu akan berjalan otomatis. Jika waktu habis, sistem akan melanjutkan ke subtes berikutnya.
            </p>
          </div>
          
          <button 
            className="btn btn-success" 
            style={{ padding: '16px 48px', fontSize: '1.2rem', opacity: candidateName.trim() === '' ? 0.5 : 1 }} 
            onClick={startTest}
            disabled={candidateName.trim() === ''}
          >
            MULAI SIMULASI
          </button>

          {/* Visitor Counter */}
          <div style={{ marginTop: '3rem', opacity: 0.8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Statistik Akses Portal PHTC:</p>
            <img 
              src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FYafaooo%2Fcat-simulator&label=TOTAL%20PESERTA&countColor=%233b82f6" 
              alt="Visitor Count" 
              style={{ borderRadius: '4px', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            />
          </div>
        </div>
      )}

      {appState === 'test' && currentSubtest && (
        <div className="animate-fade-in">
          {/* Header */}
          <div className="glass-panel header-nav">
            <div>
              <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{candidateName || "Kandidat"}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{currentSubtest.title}</div>
            </div>
            <div className={`timer ${timeLeft <= 60 ? 'warning' : ''}`}>
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Question Card */}
          <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            <div className="subtest-info">
              <h2>{currentSubtest.title}</h2>
              <p style={{ color: 'var(--text-muted)' }}>Fokus: {currentSubtest.focus}</p>
              
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentQuestionIndex + 1) / currentSubtest.questions.length) * 100}%` }}
                ></div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Soal {currentQuestionIndex + 1} dari {currentSubtest.questions.length}
              </div>
            </div>

            <div style={{ fontSize: '1.2rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              {currentQuestion.text}
            </div>

            {/* Menampilkan Gambar Jika Ada */}
            {currentQuestion.image && (
              <div style={{ textAlign: 'center', margin: '1rem 0 2rem 0' }}>
                <img 
                  src={currentQuestion.image} 
                  alt="Ilustrasi Soal" 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '200px', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)' 
                  }} 
                />
              </div>
            )}

            {/* Menampilkan Inline SVG Dinamis Jika Ada */}
            {currentQuestion.svg && (
              <div style={{ textAlign: 'center', margin: '1rem 0 2rem 0' }}>
                <div 
                  dangerouslySetInnerHTML={{ __html: currentQuestion.svg }} 
                  style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}
                />
              </div>
            )}

            <div style={{ flex: 1 }}>
              {currentQuestion.options.map((opt, idx) => {
                const isSvg = typeof opt === 'string' && opt.includes('<svg');
                return (
                  <button 
                    key={idx} 
                    className={`option-btn ${answers[currentQuestion.id] === idx ? 'selected' : ''}`}
                    onClick={() => handleSelectAnswer(idx)}
                    style={isSvg ? { padding: '10px', display: 'flex', alignItems: 'center' } : {}}
                  >
                    {isSvg ? (
                      <div dangerouslySetInnerHTML={{ __html: opt }} style={{ pointerEvents: 'none', display: 'flex', width: '100%', alignItems: 'center' }} />
                    ) : (
                      opt
                    )}
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
              <button 
                className="btn btn-secondary" 
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
              >
                ← Sebelumnya
              </button>
              
              <button 
                className="btn" 
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex === currentSubtest.questions.length - 1 ? 'Selesai Subtes →' : 'Selanjutnya →'}
              </button>
            </div>
          </div>
        </div>
      )}

      {appState === 'result' && (() => {
        const results = calculateResults();
        const passedTPK = results.tpkScore >= 110;
        
        return (
          <div className="glass-panel animate-fade-in" style={{ padding: '3rem' }}>
            {/* Support / DANA Banner Paling Atas */}
            <div style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Support Sistem Ini Secara Ikhlas via DANA</p>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent)', letterSpacing: '2px' }}>
                082272463816
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Terima kasih atas apresiasi dan dukungan Anda!</p>
            </div>

            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Hasil Akhir Simulasi CAT ({candidateName || "Kandidat"})</h1>
            
            {/* Pesan Motivasi Kelulusan */}
            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1rem', borderRadius: '8px', background: passedTPK ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)' }}>
              <h2 style={{ color: passedTPK ? 'var(--success)' : 'var(--danger)', margin: 0 }}>
                {passedTPK ? 'Luar Biasa! Tingkatkan terus simulasinya!' : 'Tetap Semangat! Jangan menyerah dan coba lagi.'}
              </h2>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                {passedTPK ? 'Persiapkan diri Anda menuju seleksi Manajer sesungguhnya.' : 'Evaluasi kelemahan Anda di tabel bawah dan coba kembali.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: passedTPK ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
                <h3>Skor TPK (Subtes 1-6)</h3>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: passedTPK ? 'var(--success)' : 'var(--danger)' }}>
                  {results.tpkScore} <span style={{ fontSize: '1.2rem' }}>/ 228</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ambang Batas: 110 Poin</div>
                <div style={{ marginTop: '1rem', fontWeight: 'bold', color: passedTPK ? 'var(--success)' : 'var(--danger)' }}>
                  {passedTPK ? 'MEMENUHI SYARAT (LULUS TPK)' : 'TIDAK MEMENUHI SYARAT'}
                </div>
              </div>
              
              <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)' }}>
                <h3>Skor Manajemen (Subtes 7)</h3>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                  {results.manajerialScore} <span style={{ fontSize: '1.2rem' }}>/ 100</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Maksimal 5 Poin per Soal (20 Soal)</div>
              </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Rincian per Subtes</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '12px' }}>Subtes</th>
                  <th style={{ padding: '12px' }}>Benar/Terjawab</th>
                  <th style={{ padding: '12px' }}>Salah</th>
                  <th style={{ padding: '12px' }}>Kosong</th>
                  <th style={{ padding: '12px' }}>Poin Didapat</th>
                </tr>
              </thead>
              <tbody>
                {results.subtestDetails.map((detail, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '12px' }}>{detail.title}</td>
                    <td style={{ padding: '12px', color: 'var(--success)' }}>{detail.correct}</td>
                    <td style={{ padding: '12px', color: 'var(--danger)' }}>{detail.wrong}</td>
                    <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{detail.unanswered}</td>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{detail.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <button className="btn" onClick={() => window.location.reload()}>Ulangi Simulasi</button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default App;
