
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import React, { useEffect, useState } from 'react'
 const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
export default function UpdateStudent() {
   const navigate = useNavigate();
    const {id} = useParams();
    const [name,setName] = useState("")
    const[age,setage] = useState("")
    const[course,setCourse] = useState("")
    const[error,setError] = useState("")
    useEffect(()=>{
        axios.get(
            `${API_BASE_URL}/students/${id}`
        )
        .then((response)=>{
            setName(response.data.name);
            setage(response.data.age);
            setCourse(response.data.course);
        })
        .catch((error)=>{
            setError("Failed To Set")
            console.log(error);
        })
    },[id])

    const EditStudent = () =>{
        axios.put(
            `${API_BASE_URL}/students/${id}`,
            {
                name,
                age:Number(age),
                course
            }
        )
        .then((response)=>{
            navigate("/");
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div>
         <div className="add-student__form">
          <input
            className="add-student__input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="add-student__input"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setage(e.target.value)}
          />

          <input
            className="add-student__input"
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <button className="add-student__button" onClick={EditStudent}>
            Edit Student
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    
  )
}
