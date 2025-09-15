from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from utils.database import get_db
from models.monastery import Monastery
from models.event import Event
from typing import List

router = APIRouter()

@router.get("/monasteries", response_model=List[dict])
def search_monasteries(q: str, db: Session = Depends(get_db)):
    results = db.query(Monastery).filter(Monastery.name.ilike(f"%{q}%")).all()
    return [{"id": m.id, "name": m.name, "lat": m.lat, "lng": m.lng} for m in results]

@router.get("/events", response_model=List[dict])
def search_events(q: str, db: Session = Depends(get_db)):
    results = db.query(Event).filter(Event.name.ilike(f"%{q}%")).all()
    return [{"id": e.id, "name": e.name, "date": e.date.isoformat()} for e in results]
