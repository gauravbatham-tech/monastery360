from pydantic import BaseModel

class MonasteryBase(BaseModel):
    name: str
    lat: float
    lng: float
    tour360: str | None = None

class MonasteryCreate(MonasteryBase):
    pass

class Monastery(MonasteryBase):
    id: int

    class Config:
        orm_mode = True
