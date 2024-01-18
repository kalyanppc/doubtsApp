import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signbox } from "./singbox/Signbox";

export function AdminRoute() {
  const navigate = useNavigate();
  const [signupAdmin, setSignupAdmin] = useState({
    username: "",
    email: "",
    password: "",
  });
  const adminChecker = async (req, res) => {
    await fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signupAdmin),
    });
  };
  function signin(){
    navigate('/admin/signin');
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
      <Signbox changeState={setSignupAdmin} />
      <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <button onClick={adminChecker}>signup button</button>
        <button onClick={signin}>signin button</button>
      </div>
    </div>
  );
}
