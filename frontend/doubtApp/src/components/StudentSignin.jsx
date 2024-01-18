import { useState } from "react"
import { Signbox } from "./singbox/Signbox"
export function StudentSignin(){
      const [studentSignin,setStudentSignin] = useState({username:"",email:"",password:""})
      const signinChecker = async (req,res)=>{
            await fetch("http://localhost:3000/student/signin",{
                  method:'POST',
                  headers:{'Content-type': 'application/json' },
                  body:JSON.stringify(studentSignin)
            },)
      }
      return(
            <div style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",minHeight: "100vh"}}>
                  <Signbox changeState={setStudentSignin} />
                  <button onClick={signinChecker}>signin</button>
            </div>
      )
}