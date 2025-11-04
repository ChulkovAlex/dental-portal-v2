from fastapi import APIRouter
router = APIRouter()

@router.get("")
def list_procedures():
    return [{"id":1,"code":"A01","name":"Консультация"},{"id":2,"code":"B10","name":"Чистка"}]
