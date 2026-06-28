import axios from "axios";
import { useState } from "react";
import "../style/AddStudent.css";
import { useNavigate, useParams } from "react-router-dom";
function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [error, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const addStudent = () => {
    axios
      .post("http://127.0.0.1:8000/students", {
        name: name,
        age: Number(age),
        course: course,
      })
      .then((response) => {
        setName("");
        setAge("");
        setCourse("");
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data.detail[0].msg);
        } else {
          setErrorMessage("Something went wrong");
        }
      });
  };

  return (
    <section className="add-student">
      <div className="add-student__card">
        <h2 className="add-student__title">Add Student</h2>
        <p className="add-student__subtitle">
          Create a new student record and save it to the database.
        </p>
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
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            className="add-student__input"
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <button className="add-student__button" onClick={addStudent}>
            Add Student
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default AddStudent;
