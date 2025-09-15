from sqlalchemy import Column, Integer, String, Float
from .base import Base

class Monastery(Base):
    __tablename__ = "monasteries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    tour360 = Column(String, nullable=True)
