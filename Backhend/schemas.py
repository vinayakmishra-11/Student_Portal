from pydantic import BaseModel , field_validator , EmailStr
from typing import Optional


class StudentCreate(BaseModel):
    name: str
    age: int
    course: str

    @field_validator("name", "course")
    @classmethod
    def validate_string(cls, value):
        if not value.strip():
            raise ValueError("Field cannot be empty")
        return value

    @field_validator("age")
    @classmethod
    def validate_age(cls, value):
        if value <= 0:
            raise ValueError("Age must be greater than 0")
        return value


class StudentUpdate(BaseModel):

    name: Optional[str] = None
    age: Optional[int] = None
    course: Optional[str] = None


class UserCreate(BaseModel):
    username :str
    email : EmailStr
    password : str
