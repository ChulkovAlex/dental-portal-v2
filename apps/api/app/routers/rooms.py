from fastapi import APIRouter
router = APIRouter()

@router.get("")
def list_rooms():
    return [{"id":1,"code":"C1","name":"Кабинет 1"},{"id":2,"code":"C2","name":"Кабинет 2"},{"id":3,"code":"C3","name":"Кабинет 3"}]
