import { useState } from "react";
import { Signbox } from "./Signbox";

export function AdminRoute() {
      const [signupAdmin,setSignupAdmin] = useState({username:"",email:"",password:""})
      console.log(signupAdmin);
      const admin = async (req,res)=>{
          await fetch("http://localhost:3000/admin/signup",{
            method: 'POST',
            headers:{
              'content-type': 'application-json'
            },
            body:JSON.stringify(signupAdmin)
          })
      }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                  <Signbox changeState={setSignupAdmin} />
                  <p>username: {signupAdmin.username}</p>
                  <p>email: {signupAdmin.email}</p>
                  <p>password: {signupAdmin.password}</p>
                  <button onClick={admin}>signup</button>
            </div>
  );
}
