import React, { useState } from "react";

function UserProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const validateAndSave = () => {
    if (!name || !email || !age) {
      setError("All fields are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (age <= 0) {
      setError("Age must be greater than 0");
      return;
    }

    setError("");
    alert(
      "Profile Updated Successfully!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Age: " + age
    );
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Edit User Profile</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />

      <button onClick={validateAndSave}>Save Profile</button>
    </div>
  );
}

export default UserProfile;
