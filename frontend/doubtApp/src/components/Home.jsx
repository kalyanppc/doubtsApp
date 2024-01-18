import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  function adminPage() {
    navigate("/admin");
  }
  function studentPage() {
    navigate("/student");
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
      <button
        style={{
          height: "45px",
          display: "block",
          marginBottom: "20px",
          fontSize: "40px",
          backgroundColor: "black",
          border:'none',
          borderRadius: '20px',
          color: "white",
        }}
        onClick={adminPage}
      >
        admin page
      </button>
      <button
        style={{
          height: "45px",
          display: "block",
          marginBottom: "20px",
          fontSize: "40px",
          backgroundColor: "black",
          border:'none',
          borderRadius:'20px',
          color: "white",
        }}
        onClick={studentPage}
      >
        student page
      </button>
    </div>
  );
}
