"""FastAPI application for Controller"""


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import users, others


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/api/users", tags=["users"])
app.include_router(others.router, prefix="/api/others", tags=["others"])
