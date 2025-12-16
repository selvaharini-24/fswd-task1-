import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!name) formErrors.name = "Name is required";

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Minimum 6 characters required";
    }

    if (!confirmPass) {
      formErrors.confirmPass = "Confirm password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>✨ Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            style={styles.input}
            type="text"
            placeholder="👤 Name"
            onChange={(e) => setName(e.target.value)}
          />
          <span style={styles.error}>{errors.name}</span>

          <input
            style={styles.input}
            type="text"
            placeholder="📧 Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span style={styles.error}>{errors.email}</span>

          <input
            style={styles.input}
            type="text"
            placeholder="📱 Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <span style={styles.error}>{errors.phone}</span>

          <input
            style={styles.input}
            type="password"
            placeholder="🔒 Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span style={styles.error}>{errors.password}</span>

          <input
            style={styles.input}
            type="password"
            placeholder="🔑 Confirm Password"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <span style={styles.error}>{errors.confirmPass}</span>

          <button style={styles.button} type="submit">
            🚀 Submit
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4a4a4a",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "5px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "10px",
    display: "block",
  },
  button: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Form;





