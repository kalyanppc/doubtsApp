import { useState } from "react";  

export function StudentRoute(){
      const [username,setUsername] = useState('');
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const content = {
            username,
            email,
            password
      }
      const student = async (req,res)=>{
           await fetch("http://localhost:3000/student/signup",{
            method: 'POST',
            headers: {
                  "Content-type": "application/json"
            },
            body: JSON.stringify(content)
           })
      }
      return(
            <div>
                  <input type="text" placeholder="username" value={username} onChange={(e)=>{
                        setUsername(e.target.value);
                  }} />
                  <br />
                  <input type="text" placeholder="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value);
                  }} />
                  <br />
                  <input type="text" placeholder="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value);
                  }}/>
                  <br />
                  <button onClick={student}>signup button</button>
            </div>
      )
}