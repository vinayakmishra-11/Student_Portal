import axios from "axios";
import { useState } from "react";
import '../style/StudentSerch.css';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

function StudentSerch() {
    const[StudentId, setStudentId] = useState("")
    const[student,setStudent] = useState(null);
     const [error, setError] = useState("");
    const serchStudent = () =>{
        setError("");
        setStudent(null);
          axios
         .get(`${API_BASE_URL}/students/${StudentId}`)
         .then((response) => {
             setStudent(response.data);
         })
         .catch((error) => {
             if (error.response && error.response.status === 404) {
                 setError(`No student exist with ID ${StudentId}`);
             } else {
                 setError('An error occurred while searching.');
             }
            // keep console for debugging
             console.log(error);
         });
};
    return(
       <>
        <section className="student-search">
            <h2 className="student-search-title">Search Student</h2>
            <div className="student-search-controls">
                <input
                    className="student-search-input"
                    type="number"
                    placeholder="Enter Student Id"
                    value={StudentId}
                    onChange={(e)=> setStudentId(e.target.value)}
                />

                <button className="student-search-button" onClick={serchStudent}>Search</button>
            </div>

               {error && (
                <p className="student-search-error">
                    {error}
                </p>
            )}
            
                {student && (
                    <div className="student-search-result">
                        <h3 className="student-search-name">{student.name}</h3>
                        <div className="student-search-details">
                            <div><strong>Age:</strong> {student.age}</div>
                            <div><strong>Course:</strong> {student.course}</div>
                        </div>
                    </div>
                )}
        </section>
       
       </>
    )
}

export default StudentSerch;