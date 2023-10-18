from fastapi import APIRouter

from typing import List

from database import Engine

from models.user import User, UserWithValueSum

from routers.others import get_db_others


router = APIRouter()


@router.get("")
async def get_db_users() -> List[User]:
    """Vanilla get to table `users`"""

    # Interact with database here
    raw_users = Engine.users

    # Apply model to data here
    users = [User(**user_data) for user_data in raw_users]

    return users


@router.get("/sum-value")
async def get_db_users_with_value_sum() -> List[UserWithValueSum]:
    """Applying custom business rule (summing 'value' column based on 'user_id')"""

    users = await get_db_users()
    others = await get_db_others()

    users_with_value_sum = []
    for user in users:
        value_others_in_user = [
            other.value for other in others if other.user_id == user.id
        ]
        sum_others_in_user = sum(value_others_in_user)
        users_with_value_sum.append(
            UserWithValueSum(sum=sum_others_in_user, **vars(user))
        )

    return users_with_value_sum
