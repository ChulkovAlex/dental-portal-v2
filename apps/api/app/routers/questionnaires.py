from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from ..deps import get_db
import secrets
from datetime import datetime, timedelta

router = APIRouter()

class GenerateLinkIn(BaseModel):
    patient_id: int | None = None
    phone: str | None = None

@router.post("/generate_link")
def generate_link(payload: GenerateLinkIn, db: Session = Depends(get_db)):
    token = secrets.token_urlsafe(24)
    expires_at = datetime.utcnow() + timedelta(days=7)
    return {"url": f"http://localhost:3000/questionnaire/{token}", "expires_at": expires_at.isoformat()}
