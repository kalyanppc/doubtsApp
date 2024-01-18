import { useState } from "react"
import { Signbox } from "./singbox/Signbox"
export function AdminSignin(){
      const [adminSignin,setAdminSignin] = useState({username:"",email:"",password:""})
      const adminSigninChecker = async (req,res)=>{
            await fetch('http://localhost:3000/admin/signin',{
                  method: 'POST',
                  headers:{'Content-type': 'application/json'},
                  body:JSON.stringify(adminSignin)
            })
      }
      return(
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                  <Signbox changeState={setAdminSignin} />
                  <button onClick={adminSigninChecker}>signin</button>
            </div>
      )
}