import { useState } from "react";

export function AdminRoute() {
      const [username,setUsername] = useState('');
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState("");
      let obj = {
            username,
            email,
            password
          }
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <br />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <br />
      <button
        onClick={async () =>
          await fetch("http://localhost:3000/admin/signup", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
          })
        }
      >
        signup
      </button>
    </div>
  );
}
