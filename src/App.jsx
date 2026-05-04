import React, { useState, useEffect } from 'react';
import { SUBTESTS } from './data/questions';

function App() {
  const [appState, setAppState] = useState('intro'); // intro, test, result
  const [candidateName, setCandidateName] = useState('');
  const [currentSubtestIndex, setCurrentSubtestIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState({}); // { "1-1": 2, "1-2": 1, ... }
  
  const currentSubtest = SUBTESTS[currentSubtestIndex];
  const currentQuestion = currentSubtest?.questions[currentQuestionIndex];
  
  // Start the test
  const startTest = () => {
    setAppState('test');
    setCurrentSubtestIndex(0);
    setCurrentQuestionIndex(0);
    setTimeLeft(SUBTESTS[0].timeLimit);
    setAnswers({});
  };

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
    if (currentSubtestIndex < SUBTESTS.length - 1) {
      setCurrentSubtestIndex(prev => prev + 1);
      setCurrentQuestionIndex(0);
      setTimeLeft(SUBTESTS[currentSubtestIndex + 1].timeLimit);
    } else {
      setAppState('result');
    }
  };

  // Handle Question Navigation
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentSubtest.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleNextSubtest();
    }
  };

  const handlePrevQuestion = () => {
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
    
    // Auto-next after a short delay for better UX
    setTimeout(() => {
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
              {currentQuestion.options.map((opt, idx) => (
                <button 
                  key={idx} 
                  className={`option-btn ${answers[currentQuestion.id] === idx ? 'selected' : ''}`}
                  onClick={() => handleSelectAnswer(idx)}
                >
                  {opt}
                </button>
              ))}
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
