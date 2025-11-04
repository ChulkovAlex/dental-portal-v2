from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class SendConfirmationsIn(BaseModel):
    date: str
    doctor_ids: List[int]

@router.post("/send")
def send_confirmations(req: SendConfirmationsIn):
    # TODO: send to Telegram
    return {"sent_to": req.doctor_ids, "date": req.date}
