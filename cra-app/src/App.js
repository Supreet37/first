import React from "react"
import StudentDetails from "./components/StudentDetails"
import ClassComponent from "./components/ClassComponent";

const  App = () => {
  return(
  <div>
    <h1>App</h1>
    <h1>First Component</h1>
    <StudentDetails />
    <ClassComponent/>
  </div>
  )
}

export default App;