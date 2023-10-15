from fastapi import APIRouter

from model.main import get_db_users, get_db_users_with_value_sum


router = APIRouter()


@router.get("/")
async def get_users():
    # Interact with model application here
    return get_db_users()


@router.get("/sum-value")
async def get_users_with_value_sum():
    # Interact with model application here
    return get_db_users_with_value_sum()


# Define other routes related to user management
