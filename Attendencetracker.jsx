import React, { useState } from "react";

const studentsData = [
  { id: 1, name: "Anitha" },
  { id: 2, name: "Kavya" },
  { id: 3, name: "Priya" },
  { id: 4, name: "Meena" }
];

function AttendanceTracker() {
  const today = new Date().toISOString().split("T")[0];

  const [attendance, setAttendance] = useState({});
  const [date, setDate] = useState(today);

  const markAttendance = (studentId, status) => {
    setAttendance((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        [studentId]: status
      }
    }));
  };

  return (
    <div style={styles.container}>
      <h2>📅 Attendance Tracker</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={styles.date}
      />

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Mark</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {studentsData.map((student) => {
            const status = attendance[date]?.[student.id];

            return (
              <tr key={student.id}>
                <td>{student.name}</td>

                <td>
                  <button
                    style={styles.present}
                    onClick={() => markAttendance(student.id, "Present")}
                  >
                    Present
                  </button>

                  <button
                    style={styles.absent}
                    onClick={() => markAttendance(student.id, "Absent")}
                  >
                    Absent
                  </button>
                </td>

                <td>
                  {status ? (
                    <span
                      style={{
                        color: status === "Present" ? "green" : "red",
                        fontWeight: "bold"
                      }}
                    >
                      {status}
                    </span>
                  ) : (
                    "Not Marked"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    width: "700px",
    margin: "40px auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    fontFamily: "Arial"
  },
  date: {
    padding: "8px",
    marginBottom: "15px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  },
  present: {
    background: "#28a745",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginRight: "5px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  absent: {
    background: "#dc3545",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default AttendanceTracker;


