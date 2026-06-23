import axios from "axios";
import { useState } from "react";

function DeleteStudent () {
    const [studentId, setStudentId] = useState("");

    const deleteStudent = () =>{
        axios.delete(
            `http://127.0.0.1:8000/students/${studentId}`
        )
        .then((response)=>{
            alert("Student Delete Succesfully");
            console.log(response.data);
            setStudentId("")
        })
        .catch((error)=>{
            console.log(error);
            alert("Student Not Found");
        })
    }
}