from fastapi import FastAPI
from routes import monasteries, events, booking, search, ocr
from utils.database import Base, engine

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize app
app = FastAPI(title="Monastery360 API")

# Root route
@app.get("/")
def root():
    return {"message": "Monastery360 API is running 🚀"}

# Health check
@app.get("/health")
def health_check():
    return {"status": "ok"}

# Register routes
app.include_router(monasteries.router, prefix="/api/monasteries", tags=["Monasteries"])
app.include_router(events.router, prefix="/api/events", tags=["Events"])
app.include_router(booking.router, prefix="/api/book", tags=["Bookings"])
app.include_router(search.router, prefix="/api/search", tags=["Search"])
app.include_router(ocr.router, prefix="/api/ocr", tags=["OCR"])
