from pydantic import BaseModel
from datetime import date

class EventBase(BaseModel):
    name: str
    date: date
    location: str

class EventCreate(EventBase):
    pass

class Event(EventBase):
    id: int

    class Config:
        orm_mode = True
