import React, { useState } from "react";

function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [level, setLevel] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (!name || !email || !workshop || !level) {
      setError("Please fill all required fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }

    setError("");
    alert(
      "Registration Successful!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Workshop: " + workshop + "\n" +
      "Level: " + level + "\n" +
      "Message: " + message
    );
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      
      {/* Form Section */}
      <div style={{ maxWidth: "400px" }}>
        <h2>Workshop Registration</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          placeholder="Full Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <select
          value={workshop}
          onChange={(e) => setWorkshop(e.target.value)}
        >
          <option value="">Select Workshop *</option>
          <option value="React Basics">React Basics</option>
          <option value="Advanced JavaScript">Advanced JavaScript</option>
          <option value="Full Stack Development">Full Stack Development</option>
        </select>
        <br /><br />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Experience Level *</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <br /><br />

        <textarea
          placeholder="Message (optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br /><br />

        <button onClick={submitForm}>Register</button>
      </div>

      {/* Live Preview Section */}
      <div style={{ maxWidth: "300px", border: "1px solid #ccc", padding: "15px" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {name || "-"}</p>
        <p><strong>Email:</strong> {email || "-"}</p>
        <p><strong>Workshop:</strong> {workshop || "-"}</p>
        <p><strong>Level:</strong> {level || "-"}</p>
        <p><strong>Message:</strong> {message || "-"}</p>
      </div>

    </div>
  );
}

export default WorkshopRegistration;
