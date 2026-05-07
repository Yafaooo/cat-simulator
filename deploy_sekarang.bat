@echo off
color 0B
echo ========================================================
echo MENDORONG UPDATE TERBARU KE VERCEL...
echo ========================================================
git add .
git commit -m "Force update Vercel %random%"
git push origin main
echo.
echo ========================================================
echo SELESAI! Perubahan sudah dikirim ke server.
echo Tunggu sekitar 2 menit, lalu REFRESH website Vercel Anda!
echo ========================================================
pause
