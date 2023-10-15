"""FastAPI application for Controller"""


from fastapi import FastAPI

from controller.routers import user, other


app = FastAPI()

app.include_router(user.router, prefix="/users", tags=["users"])
app.include_router(other.router, prefix="/others", tags=["others"])
