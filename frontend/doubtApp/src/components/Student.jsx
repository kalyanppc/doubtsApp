import { useState } from "react";  
import { Signbox } from "./Signbox";

export function StudentRoute(){
      const [signupStudent,setSignupStudent] = useState({username:"",email:"",password:""})
      const student = async (req,res)=>{
           await fetch("http://localhost:3000/student/signup",{
            method: 'POST',
            headers: {
                  "Content-type": "application/json"
            },
            body: JSON.stringify(signupStudent)
           })
      }
      return(
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                  <Signbox changeState={setSignupStudent} />
                  <p>username: {signupStudent.username}</p>
                  <p>email: {signupStudent.email}</p>
                  <p>password: {signupStudent.password}</p>
                  <button onClick={student}>signup button</button>
            </div>
      )
}