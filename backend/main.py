from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = FastAPI(title=os.getenv("APP_NAME", "Monastery360 API"))

# Get CORS origins from .env (default to localhost:3000)
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in cors_origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.get("/api/hello")
def hello():
    return {"message": f"Hello from {os.getenv('APP_NAME', 'Monastery360 API')}"}
