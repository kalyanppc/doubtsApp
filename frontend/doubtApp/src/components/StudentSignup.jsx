import { useState } from "react";
import { Signbox } from "./singbox/Signbox";
import { useNavigate } from "react-router-dom";

export function StudentRoute() {
  const [signupStudent, setSignupStudent] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const student = async (req, res) => {
    await fetch("http://localhost:3000/student/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(signupStudent)
    });
  };
  const studentSignin = ()=>{
      navigate('/student/signin');
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Signbox changeState={setSignupStudent} />
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button onClick={student}>signup button</button>
        <button onClick={studentSignin}>signin button</button>
      </div>
    </div>
  );
}
