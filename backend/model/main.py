"""FastAPI application for Model"""


from fastapi import FastAPI

from model.database import FakeDbEngine

from model.models.user import User, UserWithValueSum
from model.models.other import Other


app = FastAPI()


# Initialize the database here
Engine = FakeDbEngine()


def get_db_users():
    # Interact with database here
    raw_users = Engine.users

    # Apply model to data here
    users = [User(**user_data) for user_data in raw_users]

    return users


def get_db_users_with_value_sum():
    """Applying custom business rule (summing 'value' column based on 'user_id')"""
    users = get_db_users()
    others = get_db_others()

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


def get_db_others():
    # Interact with database here
    raw_others = Engine.others

    # Apply model to data here
    others = [Other(**other_data) for other_data in raw_others]

    return others
