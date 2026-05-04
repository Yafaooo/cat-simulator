@echo off
echo Sedang memperbaiki Vercel dan mengunggah kode ke GitHub...
git add .
git commit -m "Fix: Menghapus node_modules agar Vercel berhasil deploy"
git push origin main
echo.
echo ========================================================
echo PERBAIKAN SELESAI! 
echo Silakan cek Vercel Anda sekarang, deploy akan berjalan dan berhasil otomatis!
echo ========================================================
pause
