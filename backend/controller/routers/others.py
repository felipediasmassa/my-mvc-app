from fastapi import APIRouter

import requests
from typing import List

from config import MODEL_BASE_URL, MODEL_TIMEOUT


router = APIRouter()


@router.get("")
async def get_others() -> List:
    # Interact with model application here
    return requests.get(f"{MODEL_BASE_URL}/others", timeout=MODEL_TIMEOUT).json()


# Define other routes related to other management
