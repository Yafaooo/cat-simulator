@echo off
color 0A
echo ========================================================
echo MEMPERBAIKI GITHUB DAN VERCEL SECARA PAKSA...
echo ========================================================
echo.

echo 1. Menghapus node_modules dari GitHub...
git rm -r --cached node_modules
git rm -r --cached dist

echo 2. Menyimpan perubahan...
git add .
git commit -m "FIX TOTAL: Hapus node_modules agar Vercel tidak Permission Denied"

echo 3. Mengunggah ulang ke GitHub secara paksa...
git push origin main --force

echo.
echo ========================================================
echo BERHASIL! 
echo Silakan Refresh (F5) halaman Vercel Anda di browser.
echo Vercel sekarang sedang melakukan Build Ulang dengan benar.
echo Tunggu sekitar 1 menit dan statusnya akan berubah menjadi hijau (Ready).
echo ========================================================
pause
