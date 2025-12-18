// src/components/CourseEnrollmentForm.js
import React, { useState } from 'react';

function CourseEnrollmentForm() {
  // State to store the user's name and selected course
  const [formData, setFormData] = useState({
    name: '',
    course: ''
  });

  // State to store the list of enrolled students and courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle course enrollment submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.course) {
      alert('Please fill in both fields.');
      return;
    }

    // Add the new enrollment to the enrolled courses list
    setEnrolledCourses([
      ...enrolledCourses,
      { name: formData.name, course: formData.course }
    ]);

    // Reset form fields
    setFormData({ name: '', course: '' });
  };

  return (
    <div className="course-enrollment-form">
      <h2>Course Enrollment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            required
          >
            <option value="">--Select a Course--</option>
            <option value="React Development">React Development</option>
            <option value="Node.js Basics">Node.js Basics</option>
            <option value="Python for Data Science">Python for Data Science</option>
            <option value="Web Design Principles">Web Design Principles</option>
          </select>
        </div>

        <button type="submit">Enroll</button>
      </form>

      <h3>Enrolled Courses</h3>
      <ul>
        {enrolledCourses.map((enrollment, index) => (
          <li key={index}>
            {enrollment.name} - {enrollment.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseEnrollmentForm;
