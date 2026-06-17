import axios from "axios";
import { useState } from "react";

function AddStudent () {

    const [name,setName]= useState("");
    const[age,setAge] = useState("");
    const[course , setCourse] = useState("");

    const addStudent = () =>{
        axios.post(
            "http://127.0.0.1:8000/students",
            {
                name:name,
                age:Number(age),
                course : course
            }
        )
        .then((response)=>{
            alert("Student Addes Sccesfully");
            setName("");
            setAge("");
            setCourse("");
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error)
        })
        return (
            <div>
                <h2>Add Student</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <br></br>
                <input
                    type="number"
                    placeholder="age"
                    value={name}
                    onChange={(e)=>setAge(e.target.value)}
                />
                <br></br>

                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e)=>setCourse(e.target.value)}
                />
                <br></br>
                    
            </div>
        )
    }
}