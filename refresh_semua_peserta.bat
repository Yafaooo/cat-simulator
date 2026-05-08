@echo off
color 0A
echo ========================================================
echo MENGIRIM SINYAL REFRESH KE SELURUH PESERTA...
echo ========================================================
echo PERINGATAN: Pastikan Anda sudah menunggu minimal 2 MENIT
echo sejak Anda menjalankan file "deploy_paksa.bat" agar
echo Vercel sudah benar-benar selesai memperbarui server!
echo ========================================================
echo.
pause
echo.
node trigger_update.js
echo.
echo ========================================================
echo SELESAI!
echo ========================================================
pause
