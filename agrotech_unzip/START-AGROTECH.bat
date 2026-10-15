@echo off
set ROOT=%~dp0
start "AGROTECH Backend" cmd /k "cd /d "%ROOT%agrotech-backend" && npm install && npm start"
start "AGROTECH Frontend" cmd /k "cd /d "%ROOT%agrotech-frontend" && npm install && npm run dev"
echo Two terminal windows have been opened. Wait for each install to finish.
echo Open the frontend URL printed in the frontend terminal, usually http://localhost:5173
pause
