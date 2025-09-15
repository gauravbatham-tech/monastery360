from sqlalchemy import Column, Integer, String, DateTime
from .base import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String, nullable=False)
    monastery_id = Column(Integer, nullable=False)
    booking_date = Column(DateTime, nullable=False)
