import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from "./Pages/Home"
import AddStudent from "./Pages/AddStudent";
import StudentSerch from "./Pages/StudentSerch";
import Navbar from "./Components/NavBar";

function App(){

  return (
    
    <div>
     
    
      <BrowserRouter>
      {/* <Navbar/> */}
       <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
          <Route
          path="/add-student"
          element={<AddStudent />}
        />

         <Route
          path="/search-student"
          element={<StudentSerch  />}
        />
      </Routes>
             
    
    </BrowserRouter>
    </div>
  )
}
export default App;