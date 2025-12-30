import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState("login");

  const handleLogin = () => {
    if (!username || !password || !role) {
      alert("Please fill all fields");
      return;
    }

    // simple validation (demo purpose)
    if (password !== "1234") {
      alert("Invalid password");
      return;
    }

    if (role === "Admin") setPage("admin");
    if (role === "User") setPage("user");
    if (role === "Guest") setPage("guest");
  };

  if (page === "admin") {
    return <h2>Welcome Admin Dashboard</h2>;
  }

  if (page === "user") {
    return <h2>Welcome User Dashboard</h2>;
  }

  if (page === "guest") {
    return <h2>Welcome Guest Page</h2>;
  }

  return (
    <div style={{ maxWidth: "350px" }}>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Guest">Guest</option>
      </select>
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
