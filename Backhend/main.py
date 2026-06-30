from fastapi import FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from Database import engine, SessionLocal
from model import Base, Student

from schemas import StudentCreate,StudentUpdate ,UserCreate

from Usermodel import User
app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/students")
def create_student(student :StudentCreate):

    db: Session = SessionLocal()

    student = Student(
        name=student.name,
        age=student.age,
        course=student.course,
    )

    db.add(student)

    db.commit()

    db.refresh(student)

    return {
        "message": "Student Added"
    }


@app.get("/students")
def get_students():

    db: Session = SessionLocal()

    students = (
        db.query(Student)
        .order_by(Student.id)
        .all()
    )

    return students

@app.put('/students/{student_id}')
def update(student_id:int ,updated_student:StudentUpdate):
    db : Session = SessionLocal()

    student = db.query(Student).filter(
        Student.id==student_id
    ).first()

    if not student:
        raise HTTPException(status_code=404, detail='Student Not Found')
    if updated_student.name is not None:
         student.name = updated_student.name
    if updated_student.age is not None:
        student.age=updated_student.age
    if updated_student.course is not None:
        student.course = updated_student.course
    db.commit()
    db.refresh(student)
    return student

@app.delete('/student/{student_id}')
def delete(student_id:int):
    db : Session=SessionLocal()
    student = db.query(Student).filter(
        Student.id==student_id
    ).first()
    if not student:
        raise HTTPException(status_code=404, detail='No Such Student exist')
    db.delete(student)
    db.commit()
    return{
        'message':'Delet succesfull',
        'Now data is': student
    }
@app.get('/students/{student_id}')
def specific_student(student_id:int):
    db : Session=SessionLocal()
    student =db.query(Student).filter(
        Student.id==student_id
    ).first()
    if not student:
        raise HTTPException(status_code=404, detail='No Such Student exist')
    return  student
        
@app.post('/signup')
def signup(user:UserCreate):
    
    db:Session = SessionLocal()

    existing_user = db.query(User).filter(
        User.email==user.email
    ).first()

    if existing_user:
        return{
            "Message":"Email Already Exist"
        }
    new_user=User(
        username=user.username,
        email=user.email,
        password = user.password

    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return{
        "Message":"New User Added"
    }
