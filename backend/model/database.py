"""Mocking database operations, using json data"""


import os
import json


DUMMY_DB_DIR = os.path.join("model", "dummy_db")


class FakeDbEngine:
    def __init__(self):
        # Fake reading data from database (to be replaced with library Engine class, no need to
        # create a custom engine)
        with open(os.path.join(DUMMY_DB_DIR, "users.json"), encoding="utf-8") as f:
            self.users = json.load(f)
        with open(os.path.join(DUMMY_DB_DIR, "others.json"), encoding="utf-8") as f:
            self.others = json.load(f)
