"""FastAPI application for Model"""


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import users, others


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000", "localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/model/users", tags=["users"])
app.include_router(others.router, prefix="/model/others", tags=["others"])
