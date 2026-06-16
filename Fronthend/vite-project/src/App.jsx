import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios"
import StudentList from './Components/StudentList'
import StudentSerch from './Components/StudentSerch'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/students")
    .then((Response)=>{
      console.log(Response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])

  return (
    <>
    <StudentSerch/>
      <StudentList/>
    </>
  )
}

export default App
