# monastery360 - monorepo

## Frontend
cd frontend
npm install
npm run dev   # http://localhost:3000

## Backend
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m uvicorn main:app --reload --port 8000   # http://localhost:8000
