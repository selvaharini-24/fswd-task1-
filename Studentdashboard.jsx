import React, { useState } from "react";

function StudentDashboard() {
  const [page, setPage] = useState("students");

  const students = [
    { id: 1, name: "Alice", course: "Computer Science", year: 2 },
    { id: 2, name: "Bob", course: "Information Technology", year: 3 },
    { id: 3, name: "Charlie", course: "Electronics", year: 1 },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <div style={styles.sidebar}>
        <h3>Dashboard</h3>
        <button onClick={() => setPage("students")}>Students</button>
        <button onClick={() => setPage("courses")}>Courses</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {page === "students" && (
          <>
            <h2>Student List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.course}</td>
                    <td>{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {page === "courses" && (
          <>
            <h2>Courses</h2>
            <ul>
              <li>Computer Science</li>
              <li>Information Technology</li>
              <li>Electronics</li>
            </ul>
          </>
        )}

        {page === "profile" && (
          <>
            <h2>Admin Profile</h2>
            <p>Name: Admin</p>
            <p>Role: Student Manager</p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "300px",
    fontFamily: "Arial",
  },
  sidebar: {
    width: "200px",
    borderRight: "1px solid #ccc",
    padding: "10px",
  },
  content: {
    flex: 1,
    padding: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};

export default StudentDashboard;
