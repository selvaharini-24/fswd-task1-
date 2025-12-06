import React, { useState } from "react";
import bgImage from "../../assets/bg.jpg"; // ✅ fix path if needed

export default function GymRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    address: "",
    contact: "",
    emergency: "",
    dob: "",
    gender: "",
    membership: "",
    medical: "",
    agree: false,
    file: null
  });

  // Change handler
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
    alert("Registration Submitted!");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏋️‍♂️ Gym Membership Registration</h2>

      <form onSubmit={handleSubmit} style={styles.form}>

        {/* Name */}
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Password */}
        <label style={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Contact number */}
        <label style={styles.label}>Contact Number</label>
        <input
          type="tel"
          name="contact"
          placeholder="Enter contact number"
          value={formData.contact}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Emergency contact */}
        <label style={styles.label}>Emergency Contact</label>
        <input
          type="tel"
          name="emergency"
          placeholder="Emergency contact number"
          value={formData.emergency}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Date of birth */}
        <label style={styles.label}>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          style={styles.input}
        />

        {/* Address */}
        <label style={styles.label}>Address</label>
        <textarea
          name="address"
          placeholder="Enter address"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* Gender */}
        <label style={styles.label}>Gender</label>
        <div style={styles.radioGroup}>
          <label><input type="radio" name="gender" value="male" onChange={handleChange} /> Male</label>
          <label><input type="radio" name="gender" value="female" onChange={handleChange} /> Female</label>
          <label><input type="radio" name="gender" value="other" onChange={handleChange} /> Other</label>
        </div>

        {/* Medical Condition */}
        <label style={styles.label}>Medical Conditions</label>
        <textarea
          name="medical"
          placeholder="Mention if any medical issues, injuries, allergy etc."
          rows="2"
          value={formData.medical}
          onChange={handleChange}
          style={styles.textarea}
        />

        {/* File upload */}
        <label style={styles.label}>Upload ID Proof</label>
        <input
          type="file"
          name="file"
          accept=".jpg,.png,.pdf"
          onChange={handleChange}
          style={styles.file}
        />

        {/* Membership type */}
        <label style={styles.label}>Membership Type</label>
        <select
          name="membership"
          value={formData.membership}
          onChange={handleChange}
          style={styles.input}
        >
          <option value="">-- Select Plan --</option>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="pro">Pro</option>
        </select>

        {/* T&C */}
        <label style={styles.checkbox}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          &nbsp; I agree to the Terms & Conditions
        </label>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

/* -------------------------------------------------------
   STYLES
------------------------------------------------------- */
const styles = {
  container: {
    width: "450px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    color: "#fff",

    /** 🔥 DARK OVERLAY + IMAGE */
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ), url(${bgImage})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",

    boxShadow: "0px 0px 15px rgba(0,0,0,0.6)"
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "22px",
    letterSpacing: "1px"
  },

  form: {
    display: "flex",
    flexDirection: "column"
  },

  label: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#fff"
  },

  input: {
    padding: "8px",
    fontSize: "15px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #bbb",
    backgroundColor: "rgba(255,255,255,0.85)",
    color: "#000"
  },

  textarea: {
    padding: "8px",
    fontSize: "15px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #bbb",
    backgroundColor: "rgba(255,255,255,0.85)",
    color: "#000"
  },

  radioGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "5px"
  },

  checkbox: {
    marginTop: "15px",
    fontSize: "14px"
  },

  file: {
    marginTop: "10px",
    color: "#fff"
  },

  button: {
    marginTop: "20px",
    padding: "10px",
    cursor: "pointer",
    fontSize: "16px",
    backgroundColor: "#ff5722",
    border: "none",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bold"
  }
};

