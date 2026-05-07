import React, { useState, useEffect } from 'react';
import { SUBTESTS } from './data/questions';
import { ref, get, set } from 'firebase/database';
import { db } from './firebase';

// ============================================================
// 🔒 PROTEKSI KODE - ANTI INSPECT & ANTI PLAGIAT
// ============================================================
(function() {
  // 1. Blokir klik kanan
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // 2. Blokir shortcut keyboard DevTools & Select All
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.key === 'F12') { e.preventDefault(); return false; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
    if (e.ctrlKey && e.shiftKey && ['I','i','J','j','C','c'].includes(e.key)) { e.preventDefault(); return false; }
    // Ctrl+U (View Source)
    if (e.ctrlKey && ['U','u'].includes(e.key)) { e.preventDefault(); return false; }
    // Ctrl+A (Select All)
    if (e.ctrlKey && ['A','a'].includes(e.key)) { e.preventDefault(); return false; }
    // Ctrl+S (Save)
    if (e.ctrlKey && ['S','s'].includes(e.key)) { e.preventDefault(); return false; }
    // Ctrl+P (Print)
    if (e.ctrlKey && ['P','p'].includes(e.key)) { e.preventDefault(); return false; }
  });

  // 3. Deteksi DevTools terbuka via ukuran window
  const _devToolsCheck = () => {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0b1120;flex-direction:column;gap:20px"><p style="color:#ef4444;font-size:2rem;font-family:sans-serif;font-weight:bold">🔒 AKSES DITOLAK</p><p style="color:#94a3b8;font-size:1rem;font-family:sans-serif">Tutup Developer Tools untuk melanjutkan.</p></div>';
    }
  };
  setInterval(_devToolsCheck, 1000);

  // 4. Deteksi via console timing trick
  let _devOpen = false;
  const _img = new Image();
  Object.defineProperty(_img, 'id', {
    get: function() {
      _devOpen = true;
    }
  });
  setInterval(() => {
    _devOpen = false;
    console.log('%c', _img);
    if (_devOpen) {
      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0b1120;flex-direction:column;gap:20px"><p style="color:#ef4444;font-size:2rem;font-family:sans-serif;font-weight:bold">🔒 AKSES DITOLAK</p><p style="color:#94a3b8;font-size:1rem;font-family:sans-serif">Tutup Developer Tools untuk melanjutkan.</p></div>';
    }
  }, 1500);
})();
// ============================================================

const VALID_ACCESS_CODES = [
  // 20 Kode Lama (Pertama)
  'PHTC-A1X9', 'PHTC-B2Y8', 'PHTC-C3Z7', 'PHTC-D4W6', 'PHTC-E5V5',
  'PHTC-F6U4', 'PHTC-G7T3', 'PHTC-H8S2', 'PHTC-I9R1', 'PHTC-J0Q0',
  'PHTC-K1P9', 'PHTC-L2O8', 'PHTC-M3N7', 'PHTC-N4M6', 'PHTC-O5L5',
  'PHTC-P6K4', 'PHTC-Q7J3', 'PHTC-R8I2', 'PHTC-S9H1', 'PHTC-T0G0',
  // 20 Kode Baru (Kedua)
  'PHTC-X9B2', 'PHTC-Y8C3', 'PHTC-Z7D4', 'PHTC-W6E5', 'PHTC-V5F6',
  'PHTC-U4G7', 'PHTC-T3H8', 'PHTC-S2I9', 'PHTC-R1J0', 'PHTC-Q0K1',
  'PHTC-P9L2', 'PHTC-O8M3', 'PHTC-N7N4', 'PHTC-M6O5', 'PHTC-L5P6',
  'PHTC-K4Q7', 'PHTC-J3R8', 'PHTC-I2S9', 'PHTC-H1T0', 'PHTC-G0U1',
  // 50 Kode Baru (Ketiga)
  'PHTC-V1A1', 'PHTC-V1A2', 'PHTC-V1A3', 'PHTC-K8M2', 'PHTC-D4X9',
  'PHTC-L7Q1', 'PHTC-T2P8', 'PHTC-Z9W4', 'PHTC-N3V6', 'PHTC-H5F7',
  'PHTC-C1R3', 'PHTC-J8Y5', 'PHTC-M2B9', 'PHTC-G6K4', 'PHTC-P3D8',
  'PHTC-S7L1', 'PHTC-X4T2', 'PHTC-W9Z5', 'PHTC-V1N3', 'PHTC-F8H7',
  'PHTC-R2C6', 'PHTC-Y5J1', 'PHTC-B9M4', 'PHTC-K3G8', 'PHTC-D7P2',
  'PHTC-L4S9', 'PHTC-T1X5', 'PHTC-Z6W3', 'PHTC-N8V7', 'PHTC-H2F4',
  'PHTC-C9R1', 'PHTC-J5Y8', 'PHTC-M7B2', 'PHTC-G1K6', 'PHTC-P8D3',
  'PHTC-S4L7', 'PHTC-X9T1', 'PHTC-W2Z8', 'PHTC-V6N5', 'PHTC-F3H9',
  'PHTC-R7C2', 'PHTC-Y1J6', 'PHTC-B5M8', 'PHTC-K9G2', 'PHTC-D5P7',
  'PHTC-L1S4', 'PHTC-T8X9', 'PHTC-Z3W6', 'PHTC-N4V2', 'PHTC-H7F1'
];

const VALID_VVIP_CODES = [
  'VVIP-L9K4', 'VVIP-M2Q8', 'VVIP-X7N1', 'VVIP-W4Z5', 'VVIP-P3V6',
  'VVIP-C8T2', 'VVIP-R5F9', 'VVIP-J1H7', 'VVIP-B6D3', 'VVIP-Y9G4',
  'VVIP-N2S8', 'VVIP-K5M1', 'VVIP-T8Q4', 'VVIP-F3Z9', 'VVIP-V7P2',
  'VVIP-D1X6', 'VVIP-G9H5', 'VVIP-S4C8', 'VVIP-L6W3', 'VVIP-M1R7',
  'VVIP-X5F2', 'VVIP-P8N9', 'VVIP-C3V4', 'VVIP-R7T1', 'VVIP-J4D6',
  'VVIP-B2Y8', 'VVIP-W9K5', 'VVIP-H6Q3', 'VVIP-Y1Z7', 'VVIP-N5P4',
  'VVIP-K8X2', 'VVIP-T3G9', 'VVIP-F7C5', 'VVIP-V2S1', 'VVIP-D6M8',
  'VVIP-G4L3', 'VVIP-S9W7', 'VVIP-M5H2', 'VVIP-X1R6', 'VVIP-P7F4',
  'VVIP-C2N9', 'VVIP-R8V5', 'VVIP-J6T3', 'VVIP-B4D1', 'VVIP-W7Y6',
  'VVIP-H3K8', 'VVIP-Y5Q2', 'VVIP-N1Z9', 'VVIP-K9P5', 'VVIP-T4X7'
];

function App() {
  const [appState, setAppState] = useState('locked'); // locked, intro, test, transition, result
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('premium'); // 'premium' | 'vvip'
  const [accessCode, setAccessCode] = useState('');
  const [accessError, setAccessError] = useState('');
  const [typedAdminText, setTypedAdminText] = useState('');
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
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState({}); // { "1-1": 2, "1-2": 1, ... }
  const [timeStats, setTimeStats] = useState({}); // { 0: 300, 1: 400 ... } -> time spent in seconds per subtest

  const QUESTIONS_PER_BLOCK = 5;
  const currentSubtest = SUBTESTS[currentSubtestIndex];
  
  const currentQuestions = currentSubtest ? currentSubtest.questions.slice(
    currentBlockIndex * QUESTIONS_PER_BLOCK,
    (currentBlockIndex + 1) * QUESTIONS_PER_BLOCK
  ) : [];

  const totalBlocks = currentSubtest ? Math.ceil(currentSubtest.questions.length / QUESTIONS_PER_BLOCK) : 0;

  useEffect(() => {
    const savedCode = localStorage.getItem('phtc_access_code');
    const savedType = localStorage.getItem('phtc_package_type');
    if (savedCode && savedType === 'premium' && VALID_ACCESS_CODES.includes(savedCode)) {
      setAppState('intro');
    }
    // VVIP tidak perlu setAppState karena redirect ke URL lain
  }, []);

  useEffect(() => {
    if (appState === 'locked') {
      const fullText = "Halo! 👋 Segera amankan kode aksesmu. Sistem ini dilengkapi Timer Realtime, Sistem Blok Soal, dan Analitik Akurasi persis seperti ujian aslinya!";
      let i = 0;
      setTypedAdminText('');
      const interval = setInterval(() => {
        setTypedAdminText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 35);
      return () => clearInterval(interval);
    }
  }, [appState]);

  const verifyAccessCode = async (code, packageType = 'premium') => {
    // Cek apakah kode sesuai dengan tipe paket yang dipilih
    const isPremiumCode = VALID_ACCESS_CODES.includes(code);
    const isVVIPCode = VALID_VVIP_CODES.includes(code);

    if (packageType === 'vvip' && !isVVIPCode) {
      setAccessError('❌ Kode ini bukan kode VVIP!');
      return;
    }
    if (packageType === 'premium' && !isPremiumCode) {
      // Cek jika orang nyoba pakai kode VVIP di tombol Premium
      if (isVVIPCode) {
        setAccessError('❌ Kode VVIP tidak bisa dipakai di tombol Premium!');
      } else {
        setAccessError('❌ Kode akses Premium salah!');
      }
      return;
    }
    // Proteksi ganda: kode Premium tidak boleh tembus ke VVIP dan sebaliknya
    if (packageType === 'vvip' && isPremiumCode && !isVVIPCode) {
      setAccessError('❌ Kode Premium tidak bisa akses VVIP!');
      return;
    }

    setAccessError('Memeriksa kode...');
    try {
      const codeRef = ref(db, `codes/${code}`);
      const snapshot = await get(codeRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        
        // Proteksi KUAT: gunakan daftar lokal sebagai hakim utama
        // Kode premium tidak bisa masuk VVIP, kode VVIP tidak bisa masuk Premium
        // Ini berlaku untuk semua kode (lama maupun baru) tanpa bergantung data Firebase
        if (packageType === 'vvip' && !isVVIPCode) {
          setAccessError('❌ Kode ini bukan kode VVIP!');
          return;
        }
        if (packageType === 'premium' && !isPremiumCode) {
          setAccessError('❌ Kode ini bukan kode Premium!');
          return;
        }

        if (data.deviceId === deviceId) {
          localStorage.setItem('phtc_access_code', code);
          localStorage.setItem('phtc_package_type', packageType);
          if (packageType === 'vvip') {
             window.location.href = 'https://catreal.vercel.app/';
          } else {
             setAppState('intro');
          }
        } else {
          setAccessError('Kode sudah digunakan di perangkat lain!');
        }
      } else {
        // Pertama kali dipakai - simpan tipe paket ke Firebase
        await set(codeRef, {
          used: true,
          deviceId: deviceId,
          packageType: packageType,
          claimedAt: new Date().toISOString()
        });
        localStorage.setItem('phtc_access_code', code);
        localStorage.setItem('phtc_package_type', packageType);
        if (packageType === 'vvip') {
           window.location.href = 'https://catreal.vercel.app/';
        } else {
           setAppState('intro');
        }
      }
    } catch (error) {
      console.error(error);
      setAccessError('Gagal terhubung ke server. Pastikan internet stabil.');
    }
  };

  const startTest = () => {
    setAppState('test');
    setCurrentSubtestIndex(0);
    setCurrentBlockIndex(0);
    setTimeLeft(SUBTESTS[0].timeLimit);
    setAnswers({});
    setTimeStats({});
  };

  useEffect(() => {
    let timer;
    if (appState === 'test' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (appState === 'test' && timeLeft === 0) {
      handleSubtestComplete();
    }
    return () => clearInterval(timer);
  }, [appState, timeLeft]);

  const handleSubtestComplete = () => {
    // Record time spent
    const timeSpent = currentSubtest.timeLimit - timeLeft;
    setTimeStats(prev => ({
      ...prev,
      [currentSubtestIndex]: timeSpent
    }));

    if (currentSubtestIndex < SUBTESTS.length - 1) {
      setAppState('transition');
    } else {
      setAppState('result');
    }
  };

  const nextSubtestFromTransition = () => {
    const nextIdx = currentSubtestIndex + 1;
    setCurrentSubtestIndex(nextIdx);
    setCurrentBlockIndex(0);
    setTimeLeft(SUBTESTS[nextIdx].timeLimit);
    setAppState('test');
  };

  const handleNextBlock = () => {
    if (currentBlockIndex < totalBlocks - 1) {
      setCurrentBlockIndex(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubtestComplete();
    }
  };

  const handlePrevBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSelectAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')} menit ${s.toString().padStart(2, '0')} detik`;
  };
  
  const formatTimeDigital = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const getDifficultyBadge = (globalIndex, totalQs) => {
    // Progressive Difficulty logic based on index within subtest
    if (globalIndex < totalQs / 3) {
      return { text: "Mudah - Target: 5s", color: "var(--success)" };
    } else if (globalIndex < (totalQs / 3) * 2) {
      return { text: "Menengah - Target: 10s", color: "var(--warning)" };
    } else {
      return { text: "Sulit - Target: 15s", color: "var(--danger)" };
    }
  };

  const calculateResults = () => {
    let tpkScore = 0; // Sub 1-6
    let manajerialScore = 0; // Sub 7
    let subtestDetails = [];
    let wrongAnswersData = [];

    SUBTESTS.forEach((subtest, index) => {
      let correct = 0;
      let wrong = 0;
      let unanswered = 0;
      let subtestScore = 0;

      subtest.questions.forEach(q => {
        const userAnswer = answers[q.id];
        if (userAnswer === undefined) {
          unanswered++;
          if (index < 6) { // TPK only for wrong details
             wrongAnswersData.push({
               question: q,
               userAnswerText: "Tidak Terjawab",
               correctAnswerText: q.options[q.answer],
               subtestTitle: subtest.title
             });
          }
        } else {
          if (index < 6) {
            if (userAnswer === q.answer) {
              correct++;
              tpkScore += 1;
              subtestScore += 1;
            } else {
              wrong++;
              wrongAnswersData.push({
                question: q,
                userAnswerText: q.options[userAnswer],
                correctAnswerText: q.options[q.answer],
                subtestTitle: subtest.title
              });
            }
          } else {
            const points = q.optionScores[userAnswer];
            manajerialScore += points;
            subtestScore += points;
            correct++;
          }
        }
      });

      const timeSpent = timeStats[index] || subtest.timeLimit;
      const avgTimePerQ = timeSpent / subtest.questions.length;
      let speedAnalysis = "";
      
      // Target is 8.4 seconds for 50q/7m, etc.
      const targetAvg = subtest.timeLimit / subtest.questions.length;
      
      if (avgTimePerQ <= targetAvg) {
        speedAnalysis = `Cepat (${avgTimePerQ.toFixed(1)}s/soal)`;
      } else {
        speedAnalysis = `Lambat (${avgTimePerQ.toFixed(1)}s/soal) - Target: ${targetAvg.toFixed(1)}s`;
      }

      if(index === 6) {
          speedAnalysis = `Normal (${avgTimePerQ.toFixed(1)}s/soal)`; // Subtest 7 has plenty of time (20 min for 20 Q)
      }

      subtestDetails.push({
        title: subtest.title,
        correct,
        wrong: index < 6 ? wrong : '-',
        unanswered,
        total: subtest.questions.length,
        score: subtestScore,
        speedAnalysis
      });
    });

    return { tpkScore, manajerialScore, subtestDetails, wrongAnswersData };
  };

  return (
    <div className="app-container">
      {appState === 'locked' && (
        <>
        <div className="glass-panel animate-fade-in locked-screen-layout">
          <div className="locked-left" style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
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
            <h1 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2.2rem', textShadow: '0 2px 10px rgba(59, 130, 246, 0.3)', position: 'relative', zIndex: 2 }}>
              AKSES TERKUNCI
            </h1>
            
            {/* Admin Virtual Assistant Inline */}
            <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '16px', marginBottom: '1.5rem', position: 'relative', zIndex: 2, boxShadow: '0 8px 32px rgba(0,0,0,0.3)', maxWidth: '380px' }}>
              <div style={{ position: 'relative', width: '55px', height: '55px', flexShrink: 0, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', border: '2px solid rgba(59, 130, 246, 0.5)' }}>
                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif" alt="Admin Kece" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.15)' }} />
                <span className="online-dot" style={{ position: 'absolute', bottom: '0', right: '0', width: '14px', height: '14px', background: 'var(--success)', borderRadius: '50%', border: '2px solid #0f172a', animation: 'pulseDot 2s infinite' }}></span>
              </div>
              <div style={{ flex: 1 }}>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', marginBottom: '6px', fontSize: '1rem' }}>
                  Admin Kece <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--primary)"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/></svg>
                </strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--accent)', lineHeight: '1.5', minHeight: '60px' }}>
                  {typedAdminText}<span className="cursor-blink">|</span>
                </p>
              </div>
            </div>

            {/* Background Watermark Icon */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '380px', height: '380px', opacity: 0.04, pointerEvents: 'none', zIndex: 0 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="animate-float">
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                <path d="M6.002 6.5A3 3 0 0 1 5.603 5.125"></path>
                <path d="M11.8 12a1 1 0 0 0-1.15.22L8 15"></path>
                <path d="M12.2 12a1 1 0 0 1 1.15.22l2.65 2.78"></path>
                <path d="M12 21v-3"></path>
              </svg>
            </div>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem', maxWidth: '350px', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>
              Platform Simulasi CAT Premium. Menguji kemampuan kognitif, spasial visual, dan manajerial Anda secara presisi layaknya ujian seleksi sungguhan.
            </p>
            <div style={{ marginTop: '1rem', width: '100%', maxWidth: '350px', position: 'relative', zIndex: 2 }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'left' }}>
                Sudah punya kode akses? Masukkan di bawah ini:
              </p>
              <div style={{ marginBottom: '1rem' }}>
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
                      verifyAccessCode(accessCode.trim(), 'premium');
                    }
                  }}
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    border: `1px solid ${accessError && accessError !== 'Memeriksa kode...' ? 'var(--danger)' : 'rgba(255,255,255,0.1)'}`,
                    background: 'rgba(0,0,0,0.2)',
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    outline: 'none',
                    transition: 'border 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.border = '1px solid var(--primary)'}
                  onBlur={(e) => e.target.style.border = `1px solid ${accessError && accessError !== 'Memeriksa kode...' ? 'var(--danger)' : 'rgba(255,255,255,0.1)'}`}
                />
                {accessError && accessError !== 'Memeriksa kode...' && <div style={{ color: 'var(--danger)', marginTop: '0.8rem', fontSize: '0.9rem', textAlign: 'center' }}>{accessError}</div>}
                {accessError === 'Memeriksa kode...' && <div style={{ color: 'var(--primary)', marginTop: '0.8rem', fontSize: '0.9rem', textAlign: 'left' }}>Sedang memverifikasi ke database...</div>}
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  className="btn"
                  style={{ padding: '12px', fontSize: '1.05rem', flex: 1, opacity: accessError === 'Memeriksa kode...' ? 0.7 : 1 }}
                  disabled={accessError === 'Memeriksa kode...'}
                  onClick={() => verifyAccessCode(accessCode.trim(), 'premium')}
                >
                  {accessError === 'Memeriksa kode...' ? 'MEMERIKSA...' : 'BUKA PREMIUM'}
                </button>
                <button
                  className="btn"
                  style={{ padding: '12px', fontSize: '1.05rem', flex: 1, background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#fff', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)', opacity: accessError === 'Memeriksa kode...' ? 0.7 : 1 }}
                  disabled={accessError === 'Memeriksa kode...'}
                  onClick={() => verifyAccessCode(accessCode.trim(), 'vvip')}
                >
                  {accessError === 'Memeriksa kode...' ? 'MEMERIKSA...' : 'BUKA VVIP'}
                </button>
              </div>
            </div>
          </div>
          <div className="locked-right">
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid var(--glass-border)' }}>
              
              {/* Tabs for Package Selection */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '6px', borderRadius: '12px' }}>
                <button 
                  onClick={() => setSelectedPackage('premium')}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: selectedPackage === 'premium' ? 'var(--primary)' : 'transparent', color: selectedPackage === 'premium' ? '#fff' : 'var(--text-muted)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: selectedPackage === 'premium' ? '0 4px 15px var(--primary-glow)' : 'none' }}
                >
                  Premium (Rp 10k)
                </button>
                <button 
                  onClick={() => setSelectedPackage('vvip')}
                  style={{ flex: 1, padding: '10px', borderRadius: '8px', border: 'none', background: selectedPackage === 'vvip' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent', color: selectedPackage === 'vvip' ? '#fff' : 'var(--text-muted)', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: selectedPackage === 'vvip' ? '0 4px 15px rgba(245, 158, 11, 0.4)' : 'none' }}
                >
                  VVIP (Rp 35k)
                </button>
              </div>

              {selectedPackage === 'premium' ? (
                <>
                  <p style={{ color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 'bold' }}>
                    Dapatkan Kode Akses Simulasi Premium
                  </p>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Untuk mendapatkan kode akses, silakan lakukan pembayaran sebesar <strong style={{ color: 'var(--accent)' }}>Rp 10.000</strong> ke nomor DANA: <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>082272463816</strong> atau Scan QRIS. Setelah itu, kirimkan bukti transfernya melalui WhatsApp di bawah ini.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 'bold' }}>
                    Dapatkan Kode Akses Simulasi VVIP
                  </p>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    Investasi <strong style={{ color: 'var(--accent)' }}>Rp 35.000</strong> (seharga nongkrong di kafe) untuk masa depan yang cerah! 90% soal mirip aslinya, super lengkap dengan kunci jawaban dan pembahasan biar kamu nggak overthinking tengah malam. Dijamin otak auto-encer dan siap tempur! 🚀😎
                  </p>
                </>
              )}
              
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem', width: '100%' }}>
                <div 
                  onClick={() => setSelectedPayment('dana')}
                  style={{ 
                    flex: '1', minWidth: '180px', 
                    background: selectedPayment === 'dana' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(0,0,0,0.2)', 
                    padding: '1.5rem 1rem', borderRadius: '16px', 
                    border: selectedPayment === 'dana' ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)', 
                    textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: selectedPayment === 'dana' ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: selectedPayment === 'dana' ? '0 10px 25px rgba(59, 130, 246, 0.25)' : 'none'
                  }}
                >
                  <p style={{ color: selectedPayment === 'dana' ? 'var(--primary)' : 'var(--text-main)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem', transition: 'color 0.3s ease' }}>Transfer DANA</p>
                  {selectedPayment === 'dana' ? (
                    <div className="animate-fade-in" style={{ marginTop: '0.5rem' }}>
                      <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '0.5rem', textShadow: '0 2px 10px rgba(245, 158, 11, 0.4)' }}>
                        082272463816
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#fff', background: 'var(--primary)', display: 'inline-block', padding: '4px 16px', borderRadius: '20px', fontWeight: '600' }}>a.n Yxxxxmxxx Lxxxxx</p>
                    </div>
                  ) : (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Klik untuk melihat nomor</p>
                  )}
                </div>
                <div 
                  onClick={() => setSelectedPayment('qris')}
                  style={{ 
                    flex: '1', minWidth: '180px', 
                    background: selectedPayment === 'qris' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(0,0,0,0.2)',
                    padding: '1.5rem 1rem', borderRadius: '16px', 
                    border: selectedPayment === 'qris' ? '2px solid var(--success)' : '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: selectedPayment === 'qris' ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: selectedPayment === 'qris' ? '0 10px 25px rgba(16, 185, 129, 0.25)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                    <p style={{ color: selectedPayment === 'qris' ? 'var(--success)' : 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem', margin: 0, transition: 'color 0.3s ease' }}>Scan QRIS</p>
                  </div>
                  {selectedPayment !== 'qris' && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Klik untuk membesarkan QR</p>
                  )}
                </div>
              </div>
              {selectedPayment === 'qris' && (
                <div className="animate-fade-in" style={{ marginBottom: '1.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ background: '#fff', padding: '16px', borderRadius: '20px', border: '4px solid var(--success)' }}>
                    <img src="/qris.jpeg" alt="QRIS Payment" style={{ width: '240px', height: 'auto', borderRadius: '12px', display: 'block' }} />
                  </div>
                  <p style={{ color: '#fff', fontSize: '0.95rem', marginTop: '1.2rem', fontWeight: 'bold', letterSpacing: '1.5px', background: 'var(--success)', padding: '8px 20px', borderRadius: '24px' }}>SCAN UNTUK MEMBAYAR</p>
                </div>
              )}
              
              {selectedPackage === 'premium' && (
                <p style={{ fontSize: '0.95rem', color: 'var(--text-main)', marginTop: '0.5rem', fontStyle: 'italic', marginBottom: '1.5rem', textAlign: 'center' }}>
                  "Cukup bayar sekali (lebih murah dari seblak!), kode akses ini bisa dipakai seumur hidup sampai jari Anda keriting! Tenang saja, soal-soalnya di-update otomatis tiap 3 jam sekali biar otak Anda tidak sempat bernapas. 🤯🔥"
                </p>
              )}

              <a 
                href={`https://wa.me/6282272463816?text=Halo%20Admin,%20saya%20ingin%20mengirimkan%20bukti%20pembayaran%20untuk%20mendapatkan%20kode%20akses%20Simulasi%20CAT%20${selectedPackage.toUpperCase()}.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px 28px', fontSize: '1.1rem', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', color: '#fff', textDecoration: 'none', borderRadius: '12px', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)', transition: 'all 0.3s ease', width: '100%', textTransform: 'uppercase', letterSpacing: '1px' }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(236, 72, 153, 0.6)'; }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)'; }}
              >
                Kirim Bukti Pembayaran
              </a>
            </div>
          </div>
        </div>
        </>
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
              style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid var(--primary)', background: 'rgba(255,255,255,0.1)', color: 'var(--text-main)', fontSize: '1.2rem', textAlign: 'center', outline: 'none' }}
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
            <p style={{ marginTop: '0.5rem', color: 'var(--warning)', fontSize: '0.9rem' }}>
              * Fitur Baru: Soal akan ditampilkan per blok (5 soal). Anda dapat menavigasi blok dengan tombol "Selanjutnya".
            </p>
          </div>
          <button className="btn btn-success" style={{ padding: '16px 48px', fontSize: '1.2rem', opacity: candidateName.trim() === '' ? 0.5 : 1 }} onClick={startTest} disabled={candidateName.trim() === ''}>
            MULAI SIMULASI
          </button>
        </div>
      )}

      {appState === 'transition' && (
        <div className="glass-panel animate-fade-in" style={{ padding: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '2rem' }}>
            Subtes Selesai
          </h2>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
              Anda telah menyelesaikan <strong>{currentSubtest.title}</strong>
            </p>
            <p style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>
              Waktu yang Anda gunakan: <strong>{formatTime(timeStats[currentSubtestIndex])}</strong>
            </p>
          </div>
          <button className="btn" style={{ padding: '16px 48px', fontSize: '1.2rem' }} onClick={nextSubtestFromTransition}>
            Mulai Subtes {currentSubtestIndex + 2} →
          </button>
        </div>
      )}

      {appState === 'test' && currentSubtest && (
        <div className="animate-fade-in">
          <div className="glass-panel header-nav">
            <div>
              <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{candidateName || "Kandidat"}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{currentSubtest.title} (Blok {currentBlockIndex + 1} / {totalBlocks})</div>
            </div>
            <div className={`timer ${timeLeft <= 60 ? 'warning' : ''}`}>
              {formatTimeDigital(timeLeft)}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            <div className="subtest-info" style={{ marginBottom: '2rem' }}>
              <h2>{currentSubtest.title}</h2>
              <p style={{ color: 'var(--text-muted)' }}>Fokus: {currentSubtest.focus}</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${((currentBlockIndex + 1) / totalBlocks) * 100}%` }}></div>
              </div>
            </div>

            {/* Block rendering of up to 5 questions */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              {currentQuestions.map((q, idx) => {
                const globalIndex = currentBlockIndex * QUESTIONS_PER_BLOCK + idx;
                const badge = getDifficultyBadge(globalIndex, currentSubtest.questions.length);

                return (
                  <div key={q.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Soal No. {globalIndex + 1}</span>
                      <span style={{ fontSize: '0.8rem', padding: '4px 8px', borderRadius: '4px', background: 'rgba(0,0,0,0.3)', color: badge.color, border: `1px solid ${badge.color}` }}>
                        {badge.text}
                      </span>
                    </div>

                    <div style={{ fontSize: '1.1rem', marginBottom: '1rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                      {q.text}
                    </div>

                    {q.image && (
                      <div style={{ textAlign: 'center', margin: '1rem 0 2rem 0' }}>
                        <img src={q.image} alt="Ilustrasi Soal" style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
                      </div>
                    )}

                    {q.svg && (
                      <div style={{ textAlign: 'center', margin: '1rem 0 2rem 0' }}>
                        <div dangerouslySetInnerHTML={{ __html: q.svg }} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center' }} />
                      </div>
                    )}

                    <div>
                      {q.options.map((opt, oIdx) => {
                        const isSvg = typeof opt === 'string' && opt.includes('<svg');
                        return (
                          <button
                            key={oIdx}
                            className={`option-btn ${answers[q.id] === oIdx ? 'selected' : ''}`}
                            onClick={() => handleSelectAnswer(q.id, oIdx)}
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
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', paddingTop: '1rem' }}>
              <button className="btn btn-secondary" onClick={handlePrevBlock} disabled={currentBlockIndex === 0}>
                ← Blok Sebelumnya
              </button>
              <button className="btn" onClick={handleNextBlock}>
                {currentBlockIndex === totalBlocks - 1 ? 'Selesai Subtes →' : 'Blok Selanjutnya →'}
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
            <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Laporan Analitik Akhir Simulasi CAT</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>Kandidat: {candidateName}</p>

            <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1rem', borderRadius: '8px', background: passedTPK ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)' }}>
              <h2 style={{ color: passedTPK ? 'var(--success)' : 'var(--danger)', margin: 0 }}>
                {passedTPK ? 'Luar Biasa! Anda Direkomendasikan (Lulus TPK)' : 'Tidak Lulus Ambang Batas (110 Poin).'}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
              <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: passedTPK ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
                <h3>Total Skor TPK</h3>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: passedTPK ? 'var(--success)' : 'var(--danger)' }}>
                  {results.tpkScore} <span style={{ fontSize: '1.2rem' }}>/ 228</span>
                </div>
              </div>
              <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)' }}>
                <h3>Skor Manajemen (Subtes 7)</h3>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                  {results.manajerialScore} <span style={{ fontSize: '1.2rem' }}>/ 100</span>
                </div>
              </div>
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Analisis Kecepatan & Akurasi per Subtes</h3>
            <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                    <th style={{ padding: '12px' }}>Subtes</th>
                    <th style={{ padding: '12px' }}>Benar</th>
                    <th style={{ padding: '12px' }}>Salah</th>
                    <th style={{ padding: '12px' }}>Kosong</th>
                    <th style={{ padding: '12px' }}>Poin</th>
                    <th style={{ padding: '12px' }}>Analisis Kecepatan</th>
                  </tr>
                </thead>
                <tbody>
                  {results.subtestDetails.map((detail, idx) => {
                    const isSlow = detail.speedAnalysis.includes('Lambat');
                    return (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '12px' }}>{detail.title}</td>
                        <td style={{ padding: '12px', color: 'var(--success)', fontWeight: 'bold' }}>{detail.correct}</td>
                        <td style={{ padding: '12px', color: 'var(--danger)' }}>{detail.wrong}</td>
                        <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{detail.unanswered}</td>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>{detail.score}</td>
                        <td style={{ padding: '12px', color: isSlow ? 'var(--warning)' : 'var(--success)' }}>{detail.speedAnalysis}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {results.wrongAnswersData.length > 0 && (
              <div style={{ marginTop: '3rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--warning)' }}>Kunci Jawaban & Pembahasan (Soal TPK yang Salah / Kosong)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {results.wrongAnswersData.map((item, idx) => {
                    const isSvgCorrect = item.correctAnswerText.includes('<svg');
                    const isSvgUser = item.userAnswerText.includes('<svg');
                    
                    return (
                      <div key={idx} className="glass-panel" style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item.subtestTitle}</div>
                        <div style={{ fontSize: '1.05rem', marginBottom: '1rem', whiteSpace: 'pre-line' }}>{item.question.text}</div>
                        
                        {item.question.svg && (
                          <div dangerouslySetInnerHTML={{ __html: item.question.svg }} style={{ maxWidth: '400px', marginBottom: '1rem' }} />
                        )}

                        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                          <div style={{ flex: 1, minWidth: '200px' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--danger)', marginBottom: '0.2rem' }}>Jawaban Anda:</div>
                            {isSvgUser ? (
                               <div dangerouslySetInnerHTML={{ __html: item.userAnswerText }} style={{ transform: 'scale(0.8)', transformOrigin: 'left top' }}/>
                            ) : (
                               <div style={{ color: 'var(--text-main)', opacity: 0.8 }}>{item.userAnswerText}</div>
                            )}
                          </div>
                          <div style={{ flex: 1, minWidth: '200px' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--success)', marginBottom: '0.2rem' }}>Jawaban Benar:</div>
                            {isSvgCorrect ? (
                               <div dangerouslySetInnerHTML={{ __html: item.correctAnswerText }} style={{ transform: 'scale(0.8)', transformOrigin: 'left top' }}/>
                            ) : (
                               <div style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>{item.correctAnswerText}</div>
                            )}
                          </div>
                        </div>

                        <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                          <div style={{ fontSize: '0.85rem', color: 'var(--primary)', marginBottom: '0.3rem', fontWeight: 'bold' }}>Pembahasan Singkat:</div>
                          <div style={{ fontSize: '0.95rem' }}>{item.question.discussion || "Tidak ada pembahasan spesifik."}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <button className="btn" onClick={() => window.location.reload()}>Selesai & Kembali ke Awal</button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default App;
