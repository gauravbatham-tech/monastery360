from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from utils.database import get_db
from models.monastery import Monastery
from schemas.monastery import MonasteryCreate, Monastery

router = APIRouter()

@router.get("/", response_model=list[Monastery])
def list_monasteries(db: Session = Depends(get_db)):
    return db.query(Monastery).all()

@router.post("/", response_model=Monastery)
def create_monastery(monastery: MonasteryCreate, db: Session = Depends(get_db)):
    new_m = Monastery(**monastery.dict())
    db.add(new_m)
    db.commit()
    db.refresh(new_m)
    return new_m
