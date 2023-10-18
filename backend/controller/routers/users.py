from fastapi import APIRouter

import requests
from typing import List

from config import MODEL_BASE_URL, MODEL_TIMEOUT


router = APIRouter()


@router.get("")
async def get_users() -> List:
    # Interact with model application here
    response = requests.get(f"{MODEL_BASE_URL}/users", timeout=MODEL_TIMEOUT)
    return response.json()


@router.get("/business-rule")
async def get_users_with_value_sum() -> List:
    # Interact with model application here
    response = requests.get(f"{MODEL_BASE_URL}/users/sum-value", timeout=MODEL_TIMEOUT)
    return response.json()


# Define other routes related to user management
