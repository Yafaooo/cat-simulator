@echo off
color 0C
echo ========================================================
echo MENGIRIM PAKSA UPDATE TERBARU KE VERCEL...
echo ========================================================
git add .
git commit -m "Force Push Update Vercel %random%"
git push origin main --force
echo.
echo ========================================================
echo PENGIRIMAN PAKSA SELESAI!
echo Tunggu sekitar 2 menit, lalu REFRESH website Vercel Anda!
echo ========================================================
pause
