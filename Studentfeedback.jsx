import React, { useState } from "react";

function StudentFeedback() {
  const [studentName, setStudentName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");

  const submitFeedback = () => {
    if (!studentName || !rating) {
      setError("Student name and rating are required");
      return;
    }

    setError("");
    alert(
      "Feedback Submitted Successfully!\n\n" +
      "Student: " + studentName + "\n" +
      "Rating: " + rating + "/5\n" +
      "Comments: " + (comments || "No comments")
    );

    // Reset form
    setStudentName("");
    setRating("");
    setComments("");
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Student Feedback</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <br /><br />

      <label>Rating:</label><br />
      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="">Select Rating</option>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>
      <br /><br />

      <textarea
        placeholder="Comments (optional)"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <br /><br />

      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}

export default StudentFeedback;
