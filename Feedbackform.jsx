// src/components/FeedbackForm.js
import React, { useState } from 'react';

function FeedbackForm() {
  // State to store the feedback form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to store the submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Store the submitted data in the state
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Feedback</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
