import React, { useState } from "react";

function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [tickets, setTickets] = useState(1);

  const registerEvent = () => {
    if (!name || !email || !eventType) {
      alert("Please fill all the details");
      return;
    }

    alert(
      "Registration Successful!\n\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Event: " + eventType + "\n" +
      "Tickets: " + tickets
    );

    // Reset form
    setName("");
    setEmail("");
    setEventType("");
    setTickets(1);
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h2>Event Registration</h2>

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

      <select
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
      >
        <option value="">Select Event</option>
        <option value="Tech Conference">Tech Conference</option>
        <option value="Workshop">Workshop</option>
        <option value="Cultural Fest">Cultural Fest</option>
      </select>
      <br /><br />

      <input
        type="number"
        min="1"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />
      <br /><br />

      <button onClick={registerEvent}>Register</button>
    </div>
  );
}

export default EventRegistration;
