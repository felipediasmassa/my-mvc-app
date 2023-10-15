from pydantic import BaseModel


class Other(BaseModel):
    id: int
    user_id: int
    value: float
