from fastapi import APIRouter
router = APIRouter()

@router.get("")
def list_doctors():
    return [{"id":1,"name":"Иванов И.И."},{"id":2,"name":"Петров П.П."}]
