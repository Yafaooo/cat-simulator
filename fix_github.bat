@echo off
color 0A
echo ========================================================
echo MEMPERBAIKI GITHUB DAN VERCEL SECARA PAKSA...
echo ========================================================
echo.

echo 1. Menghapus file cache dan lock yang mengganggu Vercel...
if exist "package-lock.json" del "package-lock.json"
git rm -r --cached node_modules
git rm -r --cached dist

echo 2. Menyimpan seluruh perubahan soal terbaru...
git add .
git commit -m "UPDATE MASSAL: Soal baru, opsi SVG, hapus package-lock"

echo 3. Mengunggah ulang ke GitHub secara paksa...
git push origin main --force

echo.
echo ========================================================
echo BERHASIL DIKIRIM KE VERCEL! 
echo ========================================================
echo Vercel sekarang sedang memproses (Build) soal-soal Anda.
echo TUNGGU 2 MENIT PENUH, lalu buka website Anda dan lakukan Refresh!
echo ========================================================
pause
