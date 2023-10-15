from fastapi import APIRouter

from model.main import get_db_others


router = APIRouter()


@router.get("/")
async def get_others():
    # Interact with model application here
    return get_db_others()


# Define other routes related to other management
