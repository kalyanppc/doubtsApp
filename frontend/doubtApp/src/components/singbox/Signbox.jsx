export function Signbox({ changeState }) {
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        style={{
          height: "30px",
          marginBottom: "15px",
          fontSize: "25px",
          display: "block",
        }}
        onChange={(e) => {
          changeState((prevSignup) => ({
            ...prevSignup,
            username: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        placeholder="email"
        style={{
          height: "30px",
          marginBottom: "15px",
          fontSize: "25px",
          display: "block",
        }}
        onChange={(e) => {
          changeState((prevState) => ({
            ...prevState,
            email: e.target.value,
          }));
        }}
      />
      <input
        type="text"
        placeholder="password"
        style={{
          height: "30px",
          marginBottom: "15px",
          fontSize: "25px",
          display: "block",
        }}
        onChange={(e) => {
          changeState((prevSignup) => ({
            ...prevSignup,
            password: e.target.value,
          }));
        }}
      />
    </div>
  );
}
