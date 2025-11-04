from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from ..deps import get_db

router = APIRouter()

@router.get("")
def list_appointments(date: str | None = Query(None), db: Session = Depends(get_db)):
    # TODO: return appointments by date
    return {"items": [], "date": date}
