from fastapi import APIRouter, Query
router = APIRouter()

@router.get("")
def search_patients(query: str | None = Query(None)):
    # TODO: search from DB
    return {"items":[{"id":1,"name":"Сидорова А.А.","phone":"+79990001122"}], "query": query}
