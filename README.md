AGROTECH — Frontend + Backend (Starter Project)

IMPORTANT
- Login/signup screens are DEMO UI only. They do not create real accounts or verify passwords/OTP.
- Backend routes currently return test/status responses. Live weather, mandi prices, schemes, database and crop-disease AI are NOT connected yet.
- Internet is needed for the remote agricultural photos used in the frontend.

REQUIREMENTS
Install Node.js LTS (20 or newer) on Windows: https://nodejs.org/

RUN FRONTEND
1. Extract this ZIP.
2. Open the extracted AGROTECH-Frontend-Project folder.
3. Open terminal in agrotech-frontend folder.
4. Run: npm install
5. Run: npm run dev
6. Open the localhost URL shown by Vite (usually http://localhost:5173).

RUN BACKEND (a second terminal)
1. Open terminal in agrotech-backend folder.
2. Run: npm install
3. Copy .env.example to .env (optional; defaults work locally).
4. Run: npm start
5. Test: http://localhost:5000/api/health

API TESTS
- http://localhost:5000/api/health
- http://localhost:5000/api/weather?city=Lucknow
- http://localhost:5000/api/market?crop=wheat
- http://localhost:5000/api/schemes

If npm install fails, send a screenshot of the COMPLETE terminal error. Do not paste markdown backticks into code files.
