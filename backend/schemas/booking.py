from pydantic import BaseModel
from datetime import datetime

class BookingBase(BaseModel):
    user_name: str
    monastery_id: int
    booking_date: datetime

class BookingCreate(BookingBase):
    pass

class Booking(BookingBase):
    id: int

    class Config:
        orm_mode = True
