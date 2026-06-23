import axios from "axios";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { FaTrash , FaEdit } from "react-icons/fa";
import "../style/StudentList.css";
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";
function StudentList() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/students`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteStudent = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/student/${id}`)
      .then(() => {
        setStudent(student.filter((student) => student.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="student-list-page">
      <div className="student-list-shell">
        <h1 className="student-list-title">Student List</h1>
        <p className="student-list-subtitle">
          All enrolled students with their basic details.
        </p>
        <div className="student-list-grid">
          {student.map((student) => (
            <ListGroup key={student.id} className="student-card my-2">
              <ListGroup.Item className="student-card-item">
                <span className="student-card-label">ID</span>
                <span className="student-card-value">{student.id}</span>
              </ListGroup.Item>
              <ListGroup.Item className="student-card-item">
                <span className="student-card-label">Name</span>
                <span className="student-card-value">{student.name}</span>
              </ListGroup.Item>
              <ListGroup.Item className="student-card-item">
                <span className="student-card-label">Age</span>
                <span className="student-card-value">{student.age}</span>
              </ListGroup.Item>
              <ListGroup.Item className="student-card-item">
                <span className="student-card-label">Course</span>
                <span className="student-card-value">{student.course}</span>
              </ListGroup.Item>
              <ListGroup.Item className="student-card-item">
                <FaTrash
                  onClick={() => {
                    console.log("Clicked", student.id);
                    deleteStudent(student.id);
                  }}
                />
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentList;
