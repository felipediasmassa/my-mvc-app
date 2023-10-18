from fastapi import APIRouter

from typing import List

from database import Engine

from models.other import Other


router = APIRouter()


@router.get("")
async def get_db_others() -> List[Other]:
    """Vanilla get to table `others`"""

    # Interact with database here
    raw_others = Engine.others

    # Apply model to data here
    others = [Other(**other_data) for other_data in raw_others]

    return others
